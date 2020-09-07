import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage implements OnInit {
  submitted = false;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  HAS_LOGGED_IN = 'hasLoggedIn';
  login: { email?: string, password?: string } = {};
  constructor(private navCtrl: NavController,
    private storage: Storage, private events: Events,
    private auth: AuthenicationProvider) {
  }
  ngOnInit(): void {

  }

  onLogin(form, page) {
    this.submitted = true;
    if (form.valid) {
      this.auth.login(this.login.email, this.login.password)
        .subscribe(resp => {
          if (resp.statusCode === 200) {
           this.gotoHomePage(resp.data, page);
          } else {
            this.auth.showToast(resp.description);
          }
        }, error => {
          console.log(error);
          // this.auth.showToast(error.error.message);
        });

    }
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

private gotoHomePage(data, page){
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

