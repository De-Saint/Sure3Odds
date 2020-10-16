import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { NewUsers } from './../../interfaces/NewUser';
import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2';

const VVIP_KEY = 'surevvip'; //cons
const VIP_KEY = 'surevip'; //cons

//gems == consum


@IonicPage()
@Component({
  selector: 'page-subscription-ios',
  templateUrl: 'subscription-ios.html',
})
export class SubscriptionIosPage {
  sub_option: string;
  newuser: NewUsers = new NewUsers("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });

  products: IAPProduct [];
  constructor(public navCtrl: NavController,
    private platform: Platform,
   public navParams: NavParams,
    private store: InAppPurchase2,
    private auth: AuthenicationProvider,
    private ref: ChangeDetectorRef) {
    this.newuser = this.navParams.get("newuser");
    this.sub_option = this.navParams.get("sub_option");
    this.platform.ready().then(() => {
      this.store.verbosity = this.store.DEBUG;
    });
    this.registerProducts();
    this.setupListeners();

    this.store.ready(() => {
      this.products = this.store.products;
      this.ref.detectChanges();
    });


  }

  registerProducts() {
    this.store.register({
      id: VVIP_KEY,
      alias: "full version",
      type: this.store.CONSUMABLE
    });
    this.store.register({
      id: VIP_KEY,
      alias: "full version",
      type: this.store.CONSUMABLE
    });

    this.store.refresh();
  }

  setupListeners() {
    this.store.when('product')
      .approved((p: IAPProduct) => {
        if (p.id === VVIP_KEY) {
          //process for VVIP Plan
        } else if (p.id === VIP_KEY) {
          //process the VIP Plan
        }
        this.ref.detectChanges();
        return p.verify();
      });

    this.store.when('product')
      .verified((p: IAPProduct) => {
        p.finish();
      });
  }

  purchase(product: IAPProduct) {
    this.store.order(product).error(error => {
      this.auth.showToast(`error failed to purchase: ${error} `);
    })
      .then(p => {
        //process the payment.
      })

  }

  restore() {
    this.store.refresh();
  }
  // async presentAlert(header, message) {
  //   const alert = await this.alertCtrl.create({
  //     header:
  //       message,
  //     buttons: ['Ok']
  //   });
  //   await alert.present();
  // }

}
