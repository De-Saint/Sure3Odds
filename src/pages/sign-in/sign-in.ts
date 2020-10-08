import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, Events, LoadingController } from 'ionic-angular';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  submitted = false;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  HAS_LOGGED_IN = 'hasLoggedIn';
  login: { email?: string, password?: string } = {};
  constructor(private navCtrl: NavController,
    private events: Events,
    private loadingCtrl: LoadingController,
    private auth: AuthenicationProvider) {
  }


  onLogin(form, page) {
    this.submitted = true;
    if (form.valid) {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.auth.login(this.login.email, this.login.password)
        .subscribe(resp => {
          loading.dismiss().catch(() => { });
          if (resp.statusCode === 200) {
            this.gotoHomePage(resp.data, page);
          }
        }, error => {
          loading.dismiss().catch(() => { });
          // this.auth.showToast(error.error.message);
        });

    }
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  private gotoHomePage(data, page) {
    this.navCtrl.setRoot(page).then(() => {
      Storage.set({ key: "hasSeenLogin", value: "true" })
      const name = this.auth.currentUserDataValue.name;
      const type = this.auth.currentUserDataValue.user_type;
      this.auth.showToast("Welcome " + name);
      this.events.publish('user:login', type, name);
    });

  }

}

