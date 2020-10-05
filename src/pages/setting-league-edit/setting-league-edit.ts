import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Leagues } from './../../interfaces/Leagues';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-setting-league-edit',
  templateUrl: 'setting-league-edit.html',
})
export class SettingLeagueEditPage {
  leagues: any;
  league: Leagues = new Leagues("", "", "", { id: "", name: "", imageurl: "" })
  constructor(public navCtrl: NavController,
    private gameProvider: GamesProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController, 
    private authProvider: AuthenicationProvider,
    public navParams: NavParams) {
    this.leagues = this.navParams.get("league");
    if (this.leagues) {
      this.league = this.leagues;
      if (this.leagues.imageurl) {
        this.league.imageurl = this.leagues.imageurl;
      } else {
        this.league.imageurl = "assets/imgs/appicon.png";
      }
    }

  }

  onDelete() {
    let loading = this.loadingCtrl.create({
      content:"Please wait..."
    });
    let confirm = this.alertCtrl.create({
      title: 'Delete League',
      message: 'Do you want to delete <b>' + this.leagues.name + '?</b><br/><br/>All the teams under <b>' + this.leagues.name + '</b> would be deleted.</b><br/><br/>This is action is irreversible.',
     
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
            this.gameProvider.deleteLeague(this.leagues.id).subscribe(res => {
              loading.dismiss().catch(() => { });
              if (res.statusCode === 200) {
                this.navCtrl.pop();
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

  onSubmit(league) {
    if (league.name) {
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loading.present();
        this.gameProvider.updateLeague(league).subscribe(res => {
          loading.dismiss().catch(() => { });
          if (res.statusCode === 200) {
            this.navCtrl.pop();
          } else {
            this.authProvider.showToast(res.description);
          }
        }, error => {
          loading.dismiss().catch(() => { });
          this.authProvider.showToast(error.error.error);
        });
    } else {
      this.authProvider.showToast("Name of league input field is empty");
    }
  }




}
