import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Teams } from './../../interfaces/Teams';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-setting-team-assign',
  templateUrl: 'setting-team-assign.html',
})
export class SettingTeamAssignPage {
  @ViewChild('myselect') selectComponent: SelectSearchableComponent;
  selectedteam: any;
  team: Teams = new Teams("", "", "", { id: "", name: "", imageurl: "" }, { id: "", name: "", imageurl: "" })
  country: any
  countries: any;
  league: any;
  leagues: any;
  constructor(public navCtrl: NavController,
    private gamesProvider: GamesProvider,
    private loadingCtrl: LoadingController,
    private authProvider: AuthenicationProvider, public navParams: NavParams) {
    this.selectedteam = this.navParams.get("team");
    console.log("this.selectedteam", this.selectedteam);
    if (this.selectedteam) {
      this.team = this.selectedteam;
    }
  }

  ionViewWillEnter() {
    this.Getcountries();
  }

  Getcountries() {
    this.gamesProvider.Getcountries()
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.countries = resp.data;
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        this.authProvider.showToast(error.error.error);
      });
  }

  onSelectCountry(event: { component: SelectSearchableComponent, value: any }) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.team.league = null;
    if (event.value) {
      loading.present();
      this.gamesProvider.GetLeaguesByCountryID(event.value.id)
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
    // console.log('league:', event.value);
  }

  onSubmit(team) {
    if (team.name) {
      team.id = 0;
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      console.log(team)
      loading.present();
      this.gamesProvider.createTeam(team).subscribe(res => {
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
