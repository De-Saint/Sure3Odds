import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-setting-leagues',
  templateUrl: 'setting-leagues.html',
})
export class SettingLeaguesPage {
  @ViewChild(Content) content: Content;
  leagues: any;
  originalleagues: any;
  searchTerm: string;
  error: string;
  noleagues: string;
  currentPage = 1;
  totalPage = 0;
  perPage = 0;
  totalData = 0;
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider,
    private actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {
  }
  ionViewWillEnter() {
    this.GetLeagues();
  }
  GetLeagues() {
    this.gamesProvider.GetLeagues(0, 50)
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.leagues = resp.data.content;
          this.originalleagues = this.leagues;
          this.currentPage = resp.data.number;
          this.totalPage = resp.data.totalPages;
          this.totalData = resp.data.totalElements;
          this.perPage = resp.data.size;
          this.noleagues = 'leagues';
        } else {
          this.authProvider.showToast(resp.description);
        }
        this.error = '';
      }, error => {
        this.error = 'none';
        this.leagues = [];
        this.authProvider.showToast(error.error.description);
      });
  }

  onSearch() {
    let searchvalue = this.searchTerm;
    if (searchvalue.trim() === '') {
      this.leagues = this.originalleagues;
    } else {
      if (searchvalue.length >= 3) {
        this.gamesProvider.SearchLeagues(searchvalue, 0, 50)
        .subscribe(resp => {
          if (resp.statusCode === 200) {
            this.leagues = resp.data.content;
            this.currentPage = resp.data.number;
            this.totalPage = resp.data.totalPages;
            this.totalData = resp.data.totalElements;
            this.perPage = resp.data.size;
          } else {
            this.authProvider.showToast(resp.description);
          }
          this.error = '';
        }, error => {
          this.error = 'none';
          this.leagues = [];
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

  scrollInfinite(event) {
    this.currentPage += 1;
    setTimeout(() => {
      this.gamesProvider.GetLeagues(this.currentPage, this.perPage)
        .subscribe(resp => {
          if (resp.statusCode === 200) {
            this.currentPage = resp.data.number;
            this.totalPage = resp.data.totalPages;
            this.totalData = resp.data.totalElements;
            this.perPage = resp.data.size;
            this.noleagues = 'league';
            for (let i = 0; i < resp.data.content.length; i++) {
              this.leagues.push(resp.data.content[i]);
            }
          } else {
            this.authProvider.showToast(resp.description);
          }
          event.complete();
        }, error => {
          this.noleagues = 'none';
          event.complete();
        })
    }, 1000);
  }
  onGotoTop() {
    this.content.scrollToTop();
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
