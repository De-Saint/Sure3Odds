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
  public public_key = 'pk_test_b3685f824518679567d6356e2636fc184878e833'; //Put your paystack Test or Live Key here
  public channels = ['card']; //Paystack Payment Methods
  public random_id = Math.floor(Date.now() / 1000); //Line to generate reference number

  pay_amount: any;
  constructor(private loadingCtrl: LoadingController,
    private events: Events,
    private storage: Storage,
    private navCtrl: NavController, private auth: AuthenicationProvider, public navParams: NavParams) {
    this.newuser = navParams.get("newuser");
    console.log(this.newuser);
  }

  ionViewWillEnter() {
    this.getPlantypes();
  }

  onPlantTypeSelect($event, plan) {
    this.pay_amount = plan.amount;

  }
  getPlantypes() {
    this.auth.getAllPlantypes().subscribe(result => {
      this.plantypelist = result.data;
      console.log(this.plantypelist);
    })
  }

  onPay(pay_amount) {
    this.auth.showToast("Please Wait ...");
    this.pay_amount = this.CalculatePercentage(pay_amount);
  }
  paymentInit() {

  }

  CalculatePercentage(userAmt) {
    let addedPerc = (parseInt(userAmt) * 0.02);
    let newAmt = parseInt(userAmt) + addedPerc;
    if (parseInt(userAmt) >= 2500) {
      newAmt = parseInt(userAmt) + 100;
    }
    return newAmt;
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
      this.newuser.usertypes = { id: 2, name: "" };
      console.log(this.newuser);
      this.auth.createNewUser(this.newuser).subscribe(resp => {
        if (resp.statusCode === 200) {
          this.auth.login(this.newuser.email, this.newuser.password).subscribe(res => {
            loading.dismiss().catch(() => { });
            this.gotoHomePage(resp.data, 'AllMatchesPage');
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
    } else {
      this.auth.showToast("Please, the payment was not successful.");
    }

  }
  //Event triggered if User cancel the payment
  paymentCancel() {
    this.auth.showToast("You cancelled the payment!");
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
