import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-setting-team-view',
  templateUrl: 'setting-team-view.html',
})
export class SettingTeamViewPage {
  @ViewChild(Content) content: Content;
  league: any;
  searchTerm: string;
  error: any;
  teams: any;
  originalteams: any;
  currentPage = 1;
  totalPage = 0;
  perPage = 0;
  totalData = 0;
  noteams: string;
  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider,
    private actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {
    this.league = this.navParams.get("league")
    console.log(this.league);
  }

  ionViewWillEnter() {
    this.getLeagueTeams();
  }

  getLeagueTeams() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.gamesProvider.GetTeamsByLeagueId(this.league.id, 0, 10)
      .subscribe(resp => {
        loading.dismiss().catch(() => { });
        if (resp.statusCode === 200) {
          this.teams = resp.data.content;
          this.originalteams = this.teams;
          this.currentPage = resp.data.number;
          this.totalPage = resp.data.totalPages;
          this.totalData = resp.data.totalElements;
          this.perPage = resp.data.size;
          this.noteams = 'teams';
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.description);
      });
  }
  onSearch() {
    let searchvalue = this.searchTerm;
    if (searchvalue.trim() === '') {
      this.teams = this.originalteams
    } else {
      if (searchvalue.length >= 3) {
        this.gamesProvider.SearchTeamsByLeagueIdAndName(searchvalue, this.league.id, 0, 10)
          .subscribe(resp => {
            if (resp.statusCode === 200) {
              this.teams = resp.data.content;
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
            this.teams = [];
            this.authProvider.showToast(error.error.description);
          });
      }
    }
  }
  onClear(ev) {
    this.searchTerm = "";
    this.teams = this.originalteams;
  }
  onCancel(ev) {
    this.searchTerm = "";
    this.teams = this.originalteams;
  }

  scrollInfinite(event) {
    this.currentPage += 1;
    setTimeout(() => {
      this.gamesProvider.GetTeamsByLeagueId(this.league.id, this.currentPage, this.perPage)
        .subscribe(resp => {
          if (resp.statusCode === 200) {
            this.currentPage = resp.data.number;
            this.totalPage = resp.data.totalPages;
            this.totalData = resp.data.totalElements;
            this.perPage = resp.data.size;
            this.noteams = 'teams';
            for (let i = 0; i < resp.data.content.length; i++) {
              this.teams.push(resp.data.content[i]);
            }
          } else {
            this.authProvider.showToast(resp.description);
          }
          event.complete();
        }, error => {
          this.noteams = 'none';
          event.complete();
        })
    }, 1000);
  }
  onGotoTop() {
    this.content.scrollToTop();
  }
  onTeamOption(team) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Team Options',
      buttons: [
        {
          text: 'View / Edit',
          handler: () => { this.navCtrl.push('SettingTeamEditPage', { team }) }
        }, {
          text: 'Promote',
          handler: () => { this.navCtrl.push('SettingTeamManagePage', {team, 'option': 'Promote'}) }
        }, {
          text: 'Relegate',
          handler: () => { this.navCtrl.push('SettingTeamManagePage', {team, 'option': 'Relegate'}) }
        }, {
          text: 'Assign To Another League',
          handler: () => { this.navCtrl.push('SettingTeamAssignPage', { team }) }
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
