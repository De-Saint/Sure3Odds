import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ActionSheetController } from 'ionic-angular';
import { GamesProvider } from '../../providers/games/games';


@IonicPage()
@Component({
  selector: 'page-setting-teams',
  templateUrl: 'setting-teams.html',
})
export class SettingTeamsPage {
  @ViewChild(Content) content: Content;
  searchTerm: string;
  error: string;
  teams: any;
  originalteams: any;
  noteams: string;
  currentPage = 1;
  totalPage = 0;
  perPage = 0;
  totalData = 0;
  constructor(private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider,
    private actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.GetTeams();
  }

  GetTeams() {
    this.gamesProvider.GetTeams(0, 200)
      .subscribe(resp => {
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
        this.error = 'none';
        this.authProvider.showToast(error.error.description);
      });
  }

  onSearch() {
    let searchvalue = this.searchTerm;
    if (searchvalue.trim() === '') {
      this.teams = this.originalteams;
    } else {
      if (searchvalue.length >= 3) {
        this.gamesProvider.SearchTeams(searchvalue, 0, 200)
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
          }, error => {
            this.error = 'none';
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
      this.gamesProvider.GetTeams(this.currentPage, this.perPage)
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
