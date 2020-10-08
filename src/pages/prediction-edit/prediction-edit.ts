import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Predictions } from './../../interfaces/Predictions';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-prediction-edit',
  templateUrl: 'prediction-edit.html',
})
export class PredictionEditPage {
  @ViewChild('myselect') selectComponent: SelectSearchableComponent;
  countries: any;
  leagues: any;
  awayteams: any;
  hometeams: any;
  selections: any;
  selectedprediction: any;
  prediction: Predictions = new Predictions({ id: "" }, { id: "" }, { id: "" }, { id: "" }, "", { id: "" }, "", "", "", { id: "", name:"" }, {id:"", firstname: "", lastname:""})
  constructor(private gamesProvider: GamesProvider,
    private authProvider: AuthenicationProvider,
    private loadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {
    this.selectedprediction = this.navParams.get("prediction");
    if (this.selectedprediction) {
      this.prediction = this.selectedprediction;
    }

  }

  ionViewWillEnter() {
    this.Getcountries();
    this.GetSelections();
  }

  Getcountries() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.gamesProvider.Getcountries()
      .subscribe(resp => {
        loading.dismiss().catch(() => { });
        if (resp.statusCode === 200) {
          this.countries = resp.data;
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.error);
      });
  }

  onSelectSelection(event: { component: SelectSearchableComponent, value: any }) {

  }
  onSelectSets(event: { component: SelectSearchableComponent, value: any }) {

  }
  onSelectHTeam(event: { component: SelectSearchableComponent, value: any }) {

  }
  onSelectATeam(event: { component: SelectSearchableComponent, value: any }) {

  }
  onSelectStatus(event: { component: SelectSearchableComponent, value: any }) {

  }
  onSelectCountry(event: { component: SelectSearchableComponent, value: any }) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.prediction.league = null;
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
    this.prediction.awayteam = null;
    this.prediction.hometeam = null;
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
    if (game.country) {
      if (game.league) {
        if (game.selections) {
          if (game.hometeam && game.awayteam) {
            if (game.odds) {
              if (game.matchdate && game.matchtime) {
                if (game.hometeam !== game.awayteam) {
                  let loading = this.loadingCtrl.create({
                    content: "Please wait..."
                  });
                  loading.present();
                  this.gamesProvider.updatePrediction(game).subscribe(res => {
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

}
