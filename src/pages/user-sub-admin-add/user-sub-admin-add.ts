import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { NewUsers } from './../../interfaces/NewUser';
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-user-sub-admin-add',
  templateUrl: 'user-sub-admin-add.html',
})
export class UserSubAdminAddPage {
  newuser: NewUsers = new NewUsers("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });

  constructor(private loadingCtrl: LoadingController, public navCtrl: NavController, private auth: AuthenicationProvider) {
  }

  ionViewDidLoad() {

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
      this.newuser.usertypes = { id: 3, name: "" };

      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.auth.createSubAdmin(this.newuser).subscribe(resp => {
        if (resp.statusCode === 200) {
          loading.dismiss().catch(() => { });
          this.navCtrl.pop();
        } else {
          loading.dismiss().catch(() => { });
          this.auth.showToast(resp.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.auth.showToast(error.error.message);
      })
    }

  }



}
