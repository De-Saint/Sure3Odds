import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, LoadingController, ActionSheetController, Platform, AlertController } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;
@IonicPage()
@Component({
  selector: 'page-all-matches',
  templateUrl: 'all-matches.html',
})
export class AllMatchesPage implements OnInit {
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
  currentDate: any;
  shownGroup: any;
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private loadingCtrl: LoadingController,
    private appVersion: AppVersion,
    private platform: Platform,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController,
    private gamesProvider: GamesProvider) {
    this.getDaysInMonth(this.month_num, this.year);
    this.currentDate = this.myDate;
    this.getVersionNumber();
  }

  ngOnInit(): void {
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


  onClick(day): void {
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
          this.gamelist = resp.data;
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.description);
      });
  }


  onMatchOption(match) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Match Options',
      buttons: [
        {
          text: 'View Details',
          handler: () => { this.navCtrl.push('MatchDetailsPage', { match }) }
        }, {
          text: 'Post Your Comment',
          handler: () => { this.navCtrl.push('MatchCommentsPage', { match }) }
        }, {
          text: 'Predict Match',
          handler: () => { this.navCtrl.push('MatchVotesPage', { match }) }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }

  async getVersionNumber() {
    this.platform.ready().then(() => {
      if (this.platform.is("android") || this.platform.is("ios")) {
        this.appVersion.getVersionNumber()
          .then((version) => {
            this.CheckAppVersion(version);
          }).catch(() => {
          });
      }
    })
  }
  CheckAppVersion(appversion) {
    this.platform.ready().then(() => {
      this.gamesProvider.GetAppVersion().subscribe(result => {
        if (result.statusCode === 200) {
          let serverAppVersion = result.data;
          if (this.platform.is('android')) {
            if (String(appversion) !== String(serverAppVersion.android)) {
              this.UpdateVersion();
            }
          } else if (this.platform.is('ios')) {
            if (String(appversion) === String(serverAppVersion.ios)) {
              this.UpdateVersion();
            }
          }
        }
      }, error => {
      });
    });
  }
  UpdateVersion() {
    const confirm = this.alertCtrl.create({
      title: 'Update Available!',
      message: 'A new version of Sure3Odds is available. Please update to the new version now!!!',
      buttons: [
        {
          text: 'Update Later',
          handler: () => {

          }
        },
        {
          text: 'Update Now',
          handler: () => {
            this.onUpdateNow();
          }
        }
      ]
    });
    confirm.present();

  }
  onUpdateNow() {
    this.platform.ready().then(() => {
      if (this.platform.is("ios")) {
        this.openInAppStore('itms-apps://itunes.apple.com/app/1504720335');
      } else if (this.platform.is("android")) {
        this.openInAppStore("https://play.google.com/store/apps/details?id=com.whatsapp").then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
        });
      }
    });
  }

  async openInAppStore(link) {
    await Browser.open(
      {
        url: link,
        toolbarColor: "#0f5656"
      }
      );
  }
}
