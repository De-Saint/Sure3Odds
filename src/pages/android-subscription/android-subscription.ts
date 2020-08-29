import { NewUser, AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-android-subscription',
  templateUrl: 'android-subscription.html',
})
export class AndroidSubscriptionPage implements OnInit {
  newuser: NewUser = new NewUser("", "", "", "", "", "", "", {id:""}, "");
  plantypes: any;
  plantypelist: any;
  public public_key = 'pk_test_b3685f824518679567d6356e2636fc184878e833'; //Put your paystack Test or Live Key here
  public channels = ['card']; //Paystack Payment Methods
  public random_id = Math.floor(Date.now() / 1000); //Line to generate reference number

  pay_amount: any;
  constructor(public loadingCtrl: LoadingController,
    public navCtrl: NavController, public auth: AuthenicationProvider, public navParams: NavParams) {
    this.newuser = navParams.get("newuser");
    console.log(this.newuser);
  }

  ionViewDidLoad() {

  }
  ngOnInit(): void {
    this.getPlantypes();
  }


  onPlantTypeSelect($event, plan) {
    this.pay_amount = plan.amount;

  }
  getPlantypes() {
    this.auth.getAllPlantypes().subscribe(result => {
      this.plantypes = result;
      this.plantypelist = this.plantypes.data;
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
      console.log(this.newuser); 
      this.auth.createNewUser(this.newuser).subscribe(result => {
        // this.plantypes = result;
        loading.dismiss().catch(() => { });
        // this.plantypelist = this.plantypes.data;
        console.log(result);
      }, err => {
          loading.dismiss().catch(() => { });
          console.log(JSON.stringify(err))
          // this.auth.showToast(JSON.stringify(err))
        })
    } else {
      this.auth.showToast("Please, the payment was not successful.");
    }

  }

  //Event triggered if User cancel the payment
  paymentCancel() {
    this.auth.showToast("You cancelled the payment!");
  }


}
