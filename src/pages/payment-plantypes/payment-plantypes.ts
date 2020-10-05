import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-payment-plantypes',
  templateUrl: 'payment-plantypes.html',
})
export class PaymentPlantypesPage {
  plantypes: any;
  error: any;

  constructor(public navCtrl: NavController,
    private auth: AuthenicationProvider,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.GetPlantypes();
  }


  GetPlantypes() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.auth.getAllPlantypes()
    .subscribe(result => {
      loading.dismiss().catch(() => { });
      this.plantypes = result.data;
      console.log(this.plantypes);
    }, error => {
      loading.dismiss().catch(() => { });
      this.auth.showToast(error.error.description);
    })
  }


  onPlantypeOptions(plantype) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Plan Type Options',
      buttons: [
        {
          text: 'View / Edit',
          handler: () => { this.navCtrl.push('PaymentPlantypeEditPage', { plantype }) }

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
