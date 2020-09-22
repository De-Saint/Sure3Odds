import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';


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
    private actionSheetCtrl: ActionSheetController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.GetPlantypes();
  }

  
  GetPlantypes() {
    this.auth.getAllPlantypes().subscribe(result => {
      this.plantypes = result.data;
      console.log(this.plantypes);
    }, error => {
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
