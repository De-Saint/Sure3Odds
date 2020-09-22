import { PaymentsProvider } from './../../providers/payments/payments';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Plantypes } from './../../interfaces/Plantypes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-payment-plantype-edit',
  templateUrl: 'payment-plantype-edit.html',
})
export class PaymentPlantypeEditPage {
  plantypes: any;
  plantype: Plantypes = new Plantypes("", "", "");
  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authProvider: AuthenicationProvider,
    private paymentsProvider: PaymentsProvider,
    public navParams: NavParams) {
    this.plantypes = this.navParams.get("plantype");
    if (this.plantype) {
      this.plantype = this.plantypes;
    }
  }


  onSubmit(plantype) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    console.log(plantype);
    if (plantype.name) {
      if (plantype.amount) {
        loading.present();
        this.paymentsProvider.updatePlantype(plantype).subscribe(res => {
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
        this.authProvider.showToast("Amount input field is empty");
      }
    } else {
      this.authProvider.showToast("Name input field is empty");
    }
  }

}
