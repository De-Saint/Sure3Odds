import { NewUser, AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  newuser: NewUser = new NewUser("", "", "", "", "", "", "", {id:""}, "");

  constructor(public navCtrl: NavController,
    private platform: Platform, private auth: AuthenicationProvider
  ) {

  }


  createAccount(page) {
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
      // if (this.platform.is('android')) {
      //   console.log(this.user);
      //   this.navCtrl.push(AndroidsubscriptionPage, { newUser: this.user });
      // } else if (this.platform.is("ios")) {

      // } else {

      // }
      console.log(this.newuser);
      this.navCtrl.push(page, { newuser: this.newuser });
    }

  }
}
