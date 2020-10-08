import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { Teams } from './../../interfaces/Teams';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-setting-team-manage',
  templateUrl: 'setting-team-manage.html',
})
export class SettingTeamManagePage {
  @ViewChild('myselect') selectComponent: SelectSearchableComponent;
  selectedteam: any;
  league: any;
  leagues: any;
  team: Teams = new Teams("", "", "", { id: "", name: "", imageurl: "" }, { id: "", name: "", imageurl: "" })
  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController, private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider, public navParams: NavParams) {
    this.selectedteam = this.navParams.get("team");
    if (this.selectedteam) {
      this.team = this.selectedteam;
    }
  }
  ionViewWillEnter() {
    this.GetLeaguesByCountryID();
  }
  GetLeaguesByCountryID() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    if (this.team) {
      loading.present();
      this.gamesProvider.GetLeaguesByCountryID(this.team.country.id)
        .subscribe(resp => {
          loading.dismiss().catch(() => { });
          if (resp.statusCode === 200) {
            this.leagues = resp.data;
          } else {
            this.authProvider.showToast(resp.description);
          }
        }, error => {
          loading.dismiss().catch(() => { });
          this.authProvider.showToast(error.error.error);
        });
    }

  }

  onSelectLeague(event: { component: SelectSearchableComponent, value: any }) {

  }

  onSubmit(team) {
    if (team.name) {
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loading.present();
      this.gamesProvider.updateTeam(team).subscribe(res => {
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
      this.authProvider.showToast("Name input field is empty");
    }
  }

}
