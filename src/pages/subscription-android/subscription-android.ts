import { NativeHttpProvider } from './../../providers/native-http/native-http';
import { PaymentsProvider } from './../../providers/payments/payments';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { NewUsers } from './../../interfaces/NewUser';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-subscription-android',
  templateUrl: 'subscription-android.html',
})
export class SubscriptionAndroidPage {
  newuser: NewUsers = new NewUsers("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });
  plantypelist: any;
  public public_key: any;
  public channels = ['card']; //Paystack Payment Methods
  public random_id = Math.floor(Date.now() / 1000); //Line to generate reference number
  sub_option: string;
  pay_amount: any;
  constructor(private loadingCtrl: LoadingController,
    private events: Events,
    private storage: Storage,
    private nativeHttp: NativeHttpProvider,
    private paymentsProvider: PaymentsProvider,
    private navCtrl: NavController, private auth: AuthenicationProvider, public navParams: NavParams) {
    this.newuser = this.navParams.get("newuser");
    this.sub_option = this.navParams.get("sub_option");
    console.log(this.newuser, this.sub_option);
  }

  ionViewWillEnter() {
    this.getPlantypes();
    this.getParameter();
  }

  onPlantTypeSelect($event, plan) {
    this.pay_amount = plan.amount;
  }
  getPlantypes() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.nativeHttp.getAllPlantypes()
    .subscribe(result => {
      loading.dismiss().catch(() => { });
      this.plantypelist = result.data;
      console.log(this.plantypelist);
    },error=>{
      loading.dismiss().catch(() => { });
    })
  }
  getParameter() {
    this.nativeHttp.getParameter(1).subscribe(result => {
      this.public_key = result.data.value;
      console.log(this.public_key);
    })
  }

  onPay(pay_amount) {
    this.auth.showToast("Please Wait ...");
    this.pay_amount = this.auth.CalculatePercentage(pay_amount);
  }
  paymentInit() {

  }

  //Callback function on successful payment
  paymentDone(ref: any) {
    if (ref.status === "success") {
      console.log(ref) //ref contains the response from paystack after successful payment
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.newuser.platform = "Android";
      this.newuser.referencecode = String(ref.reference);
      if (this.sub_option === "registration") {
        this.onRegistration(loading)
      } else if (this.sub_option === "renewal") {
        this.onRenewal(loading);
      }
    } else {
      this.auth.showToast("Please, the payment was not successful.");
    }

  }
  //Event triggered if User cancel the payment
  paymentCancel() {
    this.auth.showToast("You cancelled the payment!");
  }

  onRegistration(loading) {
    this.newuser.usertypes = { id: 2, name: "" };
    console.log(this.newuser);
    this.nativeHttp.createNewUser(this.newuser).subscribe(resp => {
      if (resp.statusCode === 200) {
        this.auth.login(String(this.newuser.email), String(this.newuser.password)).subscribe(res => {
          loading.dismiss().catch(() => { });
          this.gotoHomePage(res, 'AllMatchesPage');
        }, error => {
          loading.dismiss().catch(() => { });
          this.auth.showToast(error.error.message);
        })
      } else {
        loading.dismiss().catch(() => { });
        this.auth.showToast(resp.description);
      }
    }, error => {
      loading.dismiss().catch(() => { });
      this.auth.showToast(error.error.message);
    })
  }

  onRenewal(loading) {
    this.paymentsProvider.updatePlan(this.newuser.id, this.newuser.plantype.id, this.newuser.platform, this.newuser.referencecode).subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.statusCode === 200) {
        this.navCtrl.pop();
      } else {
        this.auth.showToast(res.description);
      }
    }, error => {
      loading.dismiss().catch(() => { });
      this.auth.showToast(error.error.error);
    });
  }


  private gotoHomePage(data, page) {
    this.navCtrl.setRoot(page).then(() => {
      this.storage.ready().then(() => {
        this.storage.set("hasSeenLogin", true);
        const name = this.auth.currentUserDataValue.name;
        const type = this.auth.currentUserDataValue.user_type;
        this.auth.showToast("Welcome " + name);
        this.events.publish('user:login', type, name);
      });
    });
  }

}
