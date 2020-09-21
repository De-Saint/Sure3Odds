import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, ActionSheetController, AlertController } from 'ionic-angular';


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
    private alertCtrl: AlertController,
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
        this.authProvider.showToast(error.error.error);
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
            this.authProvider.showToast(error.error.error);
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
          text: 'Promote / Relegate',
          handler: () => { this.onPromoteDemote(team) }
        }, {
          text: 'Delete From League',
          handler: () => { this.onDeleteTeam(team) }
        }, {
          text: 'Add To League',
          handler: () => { this.onAssignTeam(team) }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }


  onDeleteTeam(team) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    let confirm = this.alertCtrl.create({
      title: 'Delete Team',
      message: "Do you want to delete <b>" + team.name + "</b> <br/>from <br/><b>" + team.league.name + "</b> league?<br/><br/>This is action is irreversible.",
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
            this.gamesProvider.deleteTeam(team.id).subscribe(res => {
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


  onAssignTeam(team) {
    this.alertCtrl.create({
      title: "Assign To Another League",
      message: "Would assign/add <b>" + team.name + "</b> to another league in the selected country.<br/><br/>You would select a country and the league within the selected country to assign <b>" + team.name + " to</b>.",
      enableBackdropDismiss: !1,
      buttons: [{
        text: "Cancel",
        handler: () => {

        }
      }, {
        text: "Continue",
        handler: () => { this.navCtrl.push('SettingTeamAssignPage', { team, 'option': 'Promote' }) }
      }]
    }).present()
  }

  
  onPromoteDemote(team) {
    this.alertCtrl.create({
      title: "Promote/Relegate Team",
      message: "Would remove <b>" + team.name + "</b> from the current league - <b>" + team.league.name + "</b>.<br/><br/>Then you would select another league within the same country - <b>" + team.country.name + "</b> to assign <b>" + team.name + " to</b>.",
      enableBackdropDismiss: !1,
      buttons: [{
        text: "Cancel",
        handler: () => {
        }
      }, {
        text: "Continue",
        handler: () => { this.navCtrl.push('SettingTeamManagePage', { team }) }
      }]
    }).present()
  }

}
