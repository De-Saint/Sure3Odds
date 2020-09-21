import { Games } from './../../interfaces/Games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-game-edit',
  templateUrl: 'game-edit.html',
})
export class GameEditPage {
  @ViewChild('myselect') selectComponent: SelectSearchableComponent;
  countries: any;
  leagues: any;
  awayteams: any;
  hometeams: any;
  selections: any;
  sets: any;
  statuses:any;
  selectedgame: any;
  game: Games = new Games({ id: "" }, { id: "" }, { id: "" }, { id: "" }, "", { id: "" }, "", { id: "" }, "", "", { id: "" }, 0, 0);
  constructor(private gamesProvider: GamesProvider,
    private authProvider: AuthenicationProvider,
    private loadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {
    this.selectedgame = this.navParams.get("game");
    if (this.selectedgame) {
      this.game = this.selectedgame;
      console.log(this.game);
    }

  }

  ionViewWillEnter() {
    this.Getcountries();
    this.GetSelections();
    this.GetSets();
    this.GetStatus();
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

  onSelectSelection(event: { component: SelectSearchableComponent, value: any }) {
    console.log(event.value);
  }
  onSelectSets(event: { component: SelectSearchableComponent, value: any }) {
    console.log(event.value);
  }
  onSelectHTeam(event: { component: SelectSearchableComponent, value: any }) {
    console.log(event.value);
  }
  onSelectATeam(event: { component: SelectSearchableComponent, value: any }) {
    console.log(event.value);
  }
  onSelectStatus(event: { component: SelectSearchableComponent, value: any }) {
    console.log(event.value);
  }
  onSelectCountry(event: { component: SelectSearchableComponent, value: any }) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.game.league = null;
    if (event.value.id) {
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
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.game.awayteam = null;
    this.game.hometeam = null;
    if (event.value.id) {
      loading.present();
      this.gamesProvider.getTeamsByLeagueId(event.value.id)
        .subscribe(resp => {
          loading.dismiss().catch(() => { });
          if (resp.statusCode === 200) {
            this.hometeams = resp.data;
            this.awayteams = resp.data;
          } else {
            this.authProvider.showToast(resp.description);
          }
        }, error => {
          loading.dismiss().catch(() => { });
          this.authProvider.showToast(error.error.error);
        });
    }

  }

  onSubmit(game) {
    if (game.sets) {
      if (game.country) {
        if (game.league) {
          if (game.selections) {
            if (game.hometeam && game.awayteam) {
              if (game.odds) {
                if (game.matchdate && game.matchtime) {
                  if (game.hometeam !== game.awayteam) {
                    if (game.hometeamscore && game.awayteamscore) {
                      let loading = this.loadingCtrl.create({
                        content: "Please wait..."
                      });
                      loading.present();
                      this.gamesProvider.updateGame(game).subscribe(res => {
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
                      this.authProvider.showToast("Either Home or Away Team score input field is empty or incorrect");
                    }
                  } else {
                    this.authProvider.showToast("Home and Away Team cannot be same.");
                  }

                } else {
                  this.authProvider.showToast("Please, select either the Match Date or Time");
                }
              } else {
                this.authProvider.showToast("Odds input field is empty");
              }
            } else {
              this.authProvider.showToast("Please, select either Away or Home Team");
            }
          } else {
            this.authProvider.showToast("Please, select a Prediction");
          }
        } else {
          this.authProvider.showToast("Please, select a League");
        }
      } else {
        this.authProvider.showToast("Please, select a Country");
      }
    } else {
      this.authProvider.showToast("Please, select a Set ");
    }

  }

  GetSelections() {
    this.gamesProvider.getSelections()
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.selections = resp.data;
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        this.authProvider.showToast(error.error.error);
      });
  }
  GetSets() {
    this.gamesProvider.GetSets()
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.sets = resp.data;
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        this.authProvider.showToast(error.error.error);
      });
  }
  GetStatus() {
    this.gamesProvider.GetStatus("Game")
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.statuses = resp.data;
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        this.authProvider.showToast(error.error.error);
      });
  }

}
