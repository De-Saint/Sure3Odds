import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-setting-league-view',
  templateUrl: 'setting-league-view.html',
})
export class SettingLeagueViewPage {
  country: any;
  leagues: any;
  searchTerm: string;
  error:any;
  originalleagues: any;
  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider, public navParams: NavParams) {
    this.country = this.navParams.get("country");
    console.log(this.country);
  }


  ionViewWillEnter() {
    this.getCountryLeagues();
  }

  getCountryLeagues() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.gamesProvider.GetLeaguesByCountryID(this.country.id)
      .subscribe(resp => {
        loading.dismiss().catch(() => { });
        if (resp.statusCode === 200) {
          this.leagues = resp.data;
          this.originalleagues = this.leagues;
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.error);
      });
  }
  onSearch() {
    let searchvalue = this.searchTerm;
    if (searchvalue.trim() === '') {
      this.leagues = this.originalleagues
    } else {
      if (searchvalue.length >= 3) {
        let loading = this.loadingCtrl.create({
          content: "Please wait..."
        });
        loading.present();
        this.gamesProvider.SearchLeaguesByCountryIDAndName(searchvalue, this.country.id)
          .subscribe(resp => {
            loading.dismiss().catch(() => { });
            console.log(resp);
            if (resp.statusCode === 200) {
              this.leagues = resp.data
            } else {
              console.log(resp.description);
            }
            this.error = '';
          }, error => {
            this.error = 'none';
            this.leagues = [];
            loading.dismiss().catch(() => { });
            this.authProvider.showToast(error.error.description);
          });
      }
    }
  }
  onClear(ev) {
    this.searchTerm = "";
    this.leagues = this.originalleagues;
  }
  onCancel(ev) {
    this.searchTerm = "";
    this.leagues = this.originalleagues;
  }
  onLeagueOption(league) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'League Options',
      buttons: [
        {
          text: 'View / Edit',
          handler: () => { this.navCtrl.push('SettingLeagueEditPage', {league}) }
        }, {
          text: 'View Teams',
          handler: () => { this.navCtrl.push('SettingTeamViewPage', {league}) }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }
}
