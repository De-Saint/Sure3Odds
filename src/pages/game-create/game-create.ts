import { SelectSearchableComponent } from 'ionic-select-searchable';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-game-create',
  templateUrl: 'game-create.html',
})
export class GameCreatePage {
  @ViewChild('myselect') selectComponent: SelectSearchableComponent;

  sets: any;
  statuses: any;
  selectedprediction: any;
  prediction: any;
  constructor(private gamesProvider: GamesProvider,
    private authProvider: AuthenicationProvider,
    private loadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {
    this.selectedprediction = this.navParams.get("prediction");
    if (this.selectedprediction) {
      this.prediction = this.selectedprediction;
      console.log(this.prediction);
    }
  }


  ionViewWillEnter() {
    this.GetSets();
    this.GetStatus();
  }
  onSelectSets(event: { component: SelectSearchableComponent, value: any }) {
    console.log(event.value);
  }
  onSelectStatus(event: { component: SelectSearchableComponent, value: any }) {
    console.log(event.value);
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
    this.gamesProvider.GetStatus("Prediction")
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

  onSubmit(prediction) {
    if (prediction.sets) {
      if (prediction.status) {
        let loading = this.loadingCtrl.create({
          content: "Please wait..."
        });
        loading.present();
        this.gamesProvider.createGame(prediction.id, prediction.sets.id, prediction.status.id).subscribe(res => {
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
        this.authProvider.showToast("Please, select a Set");
      }
    } else {
      this.authProvider.showToast("Please, select a Set");
    }
  }
}
