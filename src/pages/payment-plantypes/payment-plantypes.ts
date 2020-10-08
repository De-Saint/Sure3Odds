import { NativeHttpProvider } from './../../providers/native-http/native-http';
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
  rootNavCtrl: NavController;
  constructor(public navCtrl: NavController,
    private auth: AuthenicationProvider,
    private nativeHttp: NativeHttpProvider,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController, public navParams: NavParams) {
      this.rootNavCtrl = this.navParams.get('rootNavCtrl');
    }

  ionViewWillEnter() {
    this.GetPlantypes();
  }


  GetPlantypes() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.nativeHttp.getAllPlantypes()
    .subscribe(result => {
      loading.dismiss().catch(() => { });
      this.plantypes = result.data;
    }, error => {
      loading.dismiss().catch(() => { });
      this.auth.showToast(error.error.message);
    })
  }


  onPlantypeOptions(plantype) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Plan Type Options',
      buttons: [
        {
          text: 'View / Edit',
          handler: () => {
            this.rootNavCtrl.push('PaymentPlantypeEditPage', { plantype });}

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
