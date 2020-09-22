import { Plans } from './../../interfaces/Plans';
import { NewUsers } from './../../interfaces/NewUser';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController, LoadingController, AlertController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 flag = true;
  img1 = "assets/imgs/profileCover.png";
  img2 = "/assets/imgs/appicon.png";
  newuser: NewUsers = new NewUsers("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });
  userplan: Plans = new Plans("", { id: "", name: "", amount: "" }, "", "");
  public public_key: any; //Put your paystack Test or Live Key here
  public channels = ['card']; //Paystack Payment Methods
  public random_id = Math.floor(Date.now() / 1000); //Line to generate reference number
  pay_amount: any;
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private authProvider: AuthenicationProvider,
    private loadingCtrl: LoadingController,
    private pltform: Platform,
    public actionSheetCtrl: ActionSheetController) {
  }

  ionViewWillEnter() {
    this.GetUserDeta();
  }

  GetUserDeta() {
    this.authProvider.GetUserDeta().subscribe(result => {
      if (result.statusCode == 200) {
        console.log(result);
        this.userplan = result.data.planData;
        this.newuser = result.data.userData;
      } else {
        this.authProvider.showToast(result.description);
      }
    }, error => {
      this.authProvider.showToast(error.error.description);
    })
  }

  updateAccount(user) {
    console.log(user);
    if (user) {
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loading.present();
      this.authProvider.updateUser(user).subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.statusCode === 200) {
          this.GetUserDeta();
        } else {
          this.authProvider.showToast(res.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.error);
      });
    } else {
      this.authProvider.showToast("Please, check something is wrong.");
    }
  }

  renewAccount(plan) {

    let confirm = this.alertCtrl.create({
      title: 'Update Plan',
      message: "You are about to update <b> your subscription plan</b> <br/> to " + plan.plantype.name + ". <br/><br/>If <b>" + plan.plantype.name + "</b> is not the plan you want to update to, you can change it on the subscription screen. <br/><br/>This action is irreversible.",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'Proceed',
          handler: () => {
            this.newuser.plantype = this.userplan.plantype;
            if (this.pltform.is("ios")) {
              this.onIOSSubscription();
            } else if (this.pltform.is("android")) {
              this.onAndroidSubscription();
            }
          }
        }
      ]
    });
    confirm.present();
  }

  onIOSSubscription() {
    this.navCtrl.push("SubscriptionIosPage", { newuser: this.newuser, sub_option: "renewal" });
  }

  onAndroidSubscription() {
    this.navCtrl.push("SubscriptionAndroidPage", { newuser: this.newuser, sub_option: "renewal" });
  }

  
}
