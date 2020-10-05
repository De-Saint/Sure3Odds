import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {
  gamelist: any;
  match: Object;
  // calender Function
  monthNames = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  days_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  days = [];
  myDate = new Date();
  year = this.myDate.getFullYear();
  month_num = this.myDate.getMonth();
  month_name = this.monthNames[this.month_num];
  // click day
  currentDate:any;
  shownGroup : any;
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {
      this.getDaysInMonth(this.month_num, this.year);
      this.currentDate = this.myDate;
  }

  ionViewWillEnter() {
    const currentdate = this.gamesProvider.getDate();
    this.GetGames(currentdate);
    var date = this.myDate.getDate();
    var today = date - 1;
    this.isGroupShown(today);
    this.shownGroup = today;
  }
  getDaysInMonth(month, year) {
    // Since no month has fewer than 28 days
    var date = new Date(year, month);
    while (date.getMonth() === month) {
      var a = new Date(date);
      var day_num = a.getDate();
      this.days.push({ name: this.days_name[a.getDay()], day_num: day_num, month: month + 1, year: year });
      date.setDate(date.getDate() + 1);
    }
  }

  // increase and decrease month function
  change_month(type) {
    this.shownGroup = null;
    if (type == 'increase') {
      this.month_num = this.month_num + 1;
      if (this.month_num >= 12) {
        this.month_num = 0;
        this.year = this.year + 1;
      }
    }
    else if (type == 'decrease') {
      this.month_num = this.month_num - 1;
      if (this.month_num < 0) {
        this.month_num = 11;
        this.year = this.year - 1;
      }
    }

    this.month_name = this.monthNames[this.month_num];
    this.days = [];
    this.getDaysInMonth(this.month_num, this.year);
  }
  toggleGroup(group) {
    this.shownGroup = group;
  }
  private isGroupShown(group) {
    return this.shownGroup === group;
  }


  onClick(day):void {
    this.shownGroup = null;
    var date = this.gamesProvider.computeOldMatchDate(day);
    this.GetGames(date);
    this.month_name = this.monthNames[this.month_num];
    this.days = [];
    this.getDaysInMonth(this.month_num, this.year);
  }
  GetGames(currentdate) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.gamesProvider.GetGames(currentdate)
      .subscribe(resp => {
        loading.dismiss().catch(() => { });
        if (resp.statusCode === 200) {
          console.log(resp);
          this.gamelist = resp.data;
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.error);
      });
  }

  onGameOption(game) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Game Options',
      buttons: [
        {
          text: 'View / Edit',
          handler: () => { this.navCtrl.push('GameEditPage', { game }) }
        }, {
          text: 'Delete',
          handler: () => { this.onDeleteGame(game) }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }


  onDeleteGame(game) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    let confirm = this.alertCtrl.create({
      title: 'Delete Game',
      message: 'Do you want to delete this game?</b><br/><br/>All the votes and comments on this game would also be deleted.</b><br/><br/>This is action is irreversible.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {

          }
        },
        {
          text: 'Proceed',
          handler: () => {
            loading.present();
            this.gamesProvider.deleteGame(game.id).subscribe(res => {
              loading.dismiss().catch(() => { });
              if (res.statusCode === 200) {
                const currentdate = this.gamesProvider.getDate();
                this.GetGames(currentdate);
              } else {
                this.authProvider.showToast(res.description);
              }
            }, error => {
              loading.dismiss().catch(() => { });

              this.authProvider.showToast(error.error.error);
            });
          }
        }
      ]
    });
    confirm.present();
  }
}
