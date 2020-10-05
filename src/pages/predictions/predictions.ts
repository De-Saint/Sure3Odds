import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-predictions',
  templateUrl: 'predictions.html',
})
export class PredictionsPage {
  predictionlist: any;
  error:any;
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {
  }
  ionViewWillEnter() {
    const currentdate = this.gamesProvider.getDate();
    this.GetPredictions(currentdate);
  }

  GetPredictions(currentdate) {
    this.gamesProvider.GetPredictions(currentdate)
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.predictionlist = resp.data;
          console.log(this.predictionlist);
        } else {
          this.authProvider.showToast(resp.description);
        }
        this.error = '';
      }, error => {
        this.error = error.error.description;
      });
  }

  onGameOption(prediction) {
    const usertype = this.authProvider.currentUserDataValue.user_type;
    if (usertype === "Admin") {
      this.AdminActionSheet(prediction);
    } else if (usertype === "SubAdmin") {
      this.SubAdminActionSheet(prediction);
    }

  }
  SubAdminActionSheet(prediction) {
    let subAdminActionSheet = this.actionSheetCtrl.create({
      title: 'Prediction Options',
      buttons: [
        {
          text: 'View / Edit',
          handler: () => { this.navCtrl.push('PredictionEditPage', { prediction }) }
        }, {
          text: 'Delete',
          handler: () => { this.onDeletePrediction(prediction) }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    subAdminActionSheet.present();
  }
  AdminActionSheet(prediction) {
    let adminActionSheet = this.actionSheetCtrl.create({
      title: 'Prediction Options',
      buttons: [
        {
          text: 'View / Edit',
          handler: () => { this.navCtrl.push('PredictionEditPage', { prediction }) }
        }, {
          text: 'Approve',
          handler: () => { this.navCtrl.push('GameCreatePage', { prediction }) }
        }, {
          text: 'Delete',
          handler: () => { this.onDeletePrediction(prediction) }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    adminActionSheet.present();
  }
  onDeletePrediction(game) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    let confirm = this.alertCtrl.create({
      title: 'Delete Prediction',
      message: 'Do you want to delete this prediction?<br/><br/>This is action is irreversible.',
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
            this.gamesProvider.deletePrediction(game.id).subscribe(res => {
              loading.dismiss().catch(() => { });
              if (res.statusCode === 200) {
                const currentdate = this.gamesProvider.getDate();
                this.GetPredictions(currentdate);
              } else {
                this.authProvider.showToast(res.description);
              }
            }, error => {
              loading.dismiss().catch(() => { });

              this.authProvider.showToast(error.error.description);
            });
          }
        }
      ]
    });
    confirm.present();
  }
}
