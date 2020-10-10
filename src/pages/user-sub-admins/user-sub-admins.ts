
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-user-sub-admins',
  templateUrl: 'user-sub-admins.html',
})
export class UserSubAdminsPage {
  users: any;
  @ViewChild(Content) content: Content;
  searchTerm: string;
  originalusers: any;
  currentPage = 1;
  totalPage = 0;
  perPage = 0;
  totalData = 0;
  nousers: string;
  error: string;
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.GetUsers();
  }

  GetUsers() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.authProvider.GetUsersByType(3, 0, 10)
      .subscribe(resp => {
        loading.dismiss().catch(() => { });
        if (resp.statusCode === 200) {
          this.users = resp.data.content;
          this.originalusers = this.users;
          this.currentPage = resp.data.number;
          this.totalPage = resp.data.totalPages;
          this.totalData = resp.data.totalElements;
          this.perPage = resp.data.size;
          this.nousers = '';

        } else {
          this.authProvider.showToast(resp.description);
        }
        this.error = '';
      }, error => {
        this.error = 'none';
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.error);
      });
  }
  onClear(ev) {
    this.searchTerm = "";
    this.users = this.originalusers;
    this.error = '';

  }
  onCancel(ev) {
    this.searchTerm = "";
    this.error = '';
    this.users = this.originalusers;
  }
  onSearch() {
    let searchvalue = this.searchTerm;
    if (searchvalue.trim() === '' || searchvalue.length < 3) {
      this.users = this.originalusers;
    } else {
      if (searchvalue.length >= 3) {
        let loading = this.loadingCtrl.create({
          content: "Please wait..."
        });
        loading.present();
        this.authProvider.SearchUsersByType(searchvalue, 3, 0, 10)
          .subscribe(resp => {
            loading.dismiss().catch(() => { });
            if (resp.statusCode === 200) {
              this.users = resp.data.content;
              this.currentPage = resp.data.number;
              this.totalPage = resp.data.totalPages;
              this.totalData = resp.data.totalElements;
              this.perPage = resp.data.size;
            } else {
              this.authProvider.showToast(resp.description);
            }
            this.error = '';
            this.nousers = '';
          }, error => {
            loading.dismiss().catch(() => { });
            this.error = 'none';
            this.users = [];
          });
      }
    }
  }
  scrollInfinite(event) {
    this.currentPage += 1;
    setTimeout(() => {
      this.authProvider.GetUsersByType(3, this.currentPage, this.perPage)
        .subscribe(resp => {
          if (resp.statusCode === 200) {
            this.currentPage = resp.data.number;
            this.totalPage = resp.data.totalPages;
            this.totalData = resp.data.totalElements;
            this.perPage = resp.data.size;
            this.nousers = '';
            for (let i = 0; i < resp.data.content.length; i++) {
              this.users.push(resp.data.content[i]);
            }
          } else {
            this.authProvider.showToast(resp.description);
          }
          this.error = '';
          event.complete();
        }, error => {
          this.nousers = 'none';
          this.users = [];
          event.complete();
        })
    }, 1000);
  }
  onGotoTop() {
    this.content.scrollToTop();
  }
  onSubAdminOption(user) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'SubAdmin Options',
      buttons: [
        {
          text: 'View / Edit',
          handler: () => { this.navCtrl.push('UserSubAdminEditPage', { user }) }
        }, {
          text: 'Delete',
          handler: () => { this.onDeleteSubAdmin(user) }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }


  onDeleteSubAdmin(user) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    let confirm = this.alertCtrl.create({
      title: 'Delete SubAdmin',
      message: "Do you want to delete <b>" + user.lastname + "</b>? <br/><br/>All the predictions, comments and votes would also be deleted.<br/><br/>You can consider suspending " + user.lastname+" instead by changing the status. <br/><br/>This action is irreversible.",
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
            this.authProvider.deleteSubAdmin(user.id).subscribe(res => {
              loading.dismiss().catch(() => { });
              if (res.statusCode === 200) {
                this.GetUsers();
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
