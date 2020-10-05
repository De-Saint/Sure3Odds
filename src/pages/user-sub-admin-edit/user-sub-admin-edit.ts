import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { NewUsers } from './../../interfaces/NewUser';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-user-sub-admin-edit',
  templateUrl: 'user-sub-admin-edit.html',
})
export class UserSubAdminEditPage {
  @ViewChild('myselect') selectComponent: SelectSearchableComponent;
  selecteduser: any;
  statuses: any;
  newuser: NewUsers = new NewUsers("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });

  constructor(public navCtrl: NavController,
    private gamesProvider: GamesProvider,
    private loadingCtrl: LoadingController,
    private authProvider: AuthenicationProvider,
    public navParams: NavParams) {
    this.selecteduser = this.navParams.get("user");

    if (this.selecteduser) {
      this.newuser = this.selecteduser;
      console.log(this.newuser);
    }
  }

  ionViewWillEnter() {
    this.GetStatus();
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
  onSelectStatus(event: { component: SelectSearchableComponent, value: any }) {
    console.log(event.value);
  }
  GetStatus() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.gamesProvider.GetStatus("User")
      .subscribe(resp => {
        loading.dismiss().catch(() => { });
        if (resp.statusCode === 200) {
          this.statuses = resp.data;
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.error);
      });
  }
}
