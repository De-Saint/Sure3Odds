import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { NewUsers } from '../../interfaces/NewUser';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  newuser: NewUsers = new NewUsers("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });

  constructor(public navCtrl: NavController,
    private pltform: Platform,
    private auth: AuthenicationProvider
  ) {

  }

  createAccount() {
    if (this.newuser.firstname == "" || this.newuser.firstname == undefined || this.newuser.firstname == null) {
      this.auth.showToast("Firstname is empty");
      return false;
    } else if (this.newuser.lastname == "" || this.newuser.lastname == undefined || this.newuser.lastname == null) {
      this.auth.showToast("Lastname is empty");
      return false;
    } else if (this.newuser.email == "" || this.newuser.email == undefined || this.newuser.email == null) {
      this.auth.showToast("Email is empty");
      return false;
    } else if (this.newuser.phone == "" || this.newuser.phone == undefined || this.newuser.phone == null) {
      this.auth.showToast("Phone number is empty");
      return false;
    } else if (this.newuser.password == "" || this.newuser.password == undefined || this.newuser.password == null) {
      this.auth.showToast("Password is empty");
      return false;
    } else {
      if (this.pltform.is("android")) {
        this.navCtrl.push('SubscriptionAndroidPage', { newuser: this.newuser, sub_option: "registration" });
      } else if (this.pltform.is("ios")) {
        this.navCtrl.push('SubscriptionIosPage', { newuser: this.newuser, sub_option: "registration" });
      }

    }

  }
}
