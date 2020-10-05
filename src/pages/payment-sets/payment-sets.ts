import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-payment-sets',
  templateUrl: 'payment-sets.html',
})
export class PaymentSetsPage {
  sets: any;
  error: any;
  constructor(public navCtrl: NavController,
    private gamesProvider: GamesProvider,
    private loadingCtrl: LoadingController,
    private auth: AuthenicationProvider,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.GetSets();
  }

  GetSets() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.gamesProvider.GetSets()
    .subscribe(resp => {
      loading.dismiss().catch(() => { });
      if (resp.statusCode === 200) {
        this.sets = resp.data;

        console.log(this.sets);
      } else {
        this.auth.showToast(resp.description);
      }
    }, error => {
      loading.dismiss().catch(() => { });
      this.auth.showToast(error.error.description);
    })
  }
  onSetOptions(set) {

  }
}
