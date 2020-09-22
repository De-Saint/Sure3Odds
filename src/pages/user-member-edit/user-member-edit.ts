import { PaymentsProvider } from './../../providers/payments/payments';
import { GamesProvider } from './../../providers/games/games';
import { NewUsers } from './../../interfaces/NewUser';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthenicationProvider } from '../../providers/authenication/authenication';
import { Plans } from '../../interfaces/Plans';


@IonicPage()
@Component({
  selector: 'page-user-member-edit',
  templateUrl: 'user-member-edit.html',
})
export class UserMemberEditPage {
  @ViewChild('myselect') selectComponent: SelectSearchableComponent;
  selecteduser: any;
  statuses: any;
  plantypes: any;
  newuser: NewUsers = new NewUsers("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });
  userplan: Plans = new Plans("", { id: "", name: "", amount: "" }, "", "");
  user: any;
  constructor(public navCtrl: NavController,
    private gamesProvider: GamesProvider,
    private loadingCtrl: LoadingController,
    private paymentsProvider: PaymentsProvider,
    private alertCtrl: AlertController,
    private authProvider: AuthenicationProvider,
    public navParams: NavParams) {
    this.selecteduser = this.navParams.get("user");
  }
  ionViewWillEnter() {
    if (this.selecteduser) {
      this.GetUserDetails(this.selecteduser.id);
    }

    this.getPlantypes();
    this.GetStatus();
  }

  GetUserDetails(id) {
    this.authProvider.findUserDetails(id).subscribe(result => {
      if (result.statusCode == 200) {
        this.userplan = result.data.planData;
        this.newuser = result.data.userData;
        this.user = result.data.planData;
      }else{
        this.authProvider.showToast(result.description);
      }
    }, error => {
      this.authProvider.showToast(error.error.description);
    })
  }

  
  getPlantypes() {
    this.authProvider.getAllPlantypes().subscribe(result => {
      this.plantypes = result.data;
      console.log(this.plantypes);
    })
  }
  onSelectPlantypes(event: { component: SelectSearchableComponent, value: any }) {
    console.log(event.value);
  }
  onSelectStatus(event: { component: SelectSearchableComponent, value: any }) {
    console.log(event.value);
  }
  GetStatus() {
    this.gamesProvider.GetStatus("User")
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.statuses = resp.data;
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        this.authProvider.showToast(error.error.error);
      });
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
          this.navCtrl.pop();
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
    this.newuser.platform = "Manual";
    this.newuser.referencecode = "Sure3Manual";
    // this.newuser.id

    console.log(this.newuser.id, plan.plantype);
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    let confirm = this.alertCtrl.create({
      title: 'Update Plan',
      message: "You are about to update <b>" + this.newuser.lastname + "'s subscription plan</b> <br/> to " + plan.plantype.name + ". <br/><br/>If <b>" + plan.plantype.name + "</b> is not the plan you want to update to, you can cancel and then select a new plan instead. <br/><br/>This action is irreversible.",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {

          }
        },
        {
          text: 'Proceed',
          handler: () => {
            loading.present();
            this.paymentsProvider.updatePlan(this.newuser.id, this.userplan.plantype.id, this.newuser.platform, this.newuser.referencecode).subscribe(res => {
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
          }
        }
      ]
    });
    confirm.present();
  }

}
