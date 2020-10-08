import { PaymentsProvider } from './../../providers/payments/payments';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-payment-plans',
  templateUrl: 'payment-plans.html',
})
export class PaymentPlansPage {
  @ViewChild(Content) content: Content;
  plans: any;
  originalplans: any;
  error: string;
  currentPage = 1;
  totalPage = 0;
  perPage = 0;
  totalData = 0;
  noplans: string;

  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private paymentsProvider: PaymentsProvider, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.GetPlans()
  }


  GetPlans() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.paymentsProvider.GetPlans(0, 10)
      .subscribe(resp => {
        loading.dismiss().catch(() => { });
        if (resp.statusCode === 200) {
          this.plans = resp.data.content;
          this.currentPage = resp.data.number;
          this.totalPage = resp.data.totalPages;
          this.totalData = resp.data.totalElements;
          this.perPage = resp.data.size;
          this.originalplans = this.plans;
          this.noplans = '';
        } else {
          this.authProvider.showToast(resp.description);
        }
        this.error = '';
      }, error => {
        this.error = 'none';
        this.plans = null;
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.descriptions);
      });
  }


  scrollInfinite(event) {
    this.currentPage += 1;
    setTimeout(() => {
      this.paymentsProvider.GetPlans(this.currentPage, this.perPage)
        .subscribe(resp => {
          if (resp.statusCode === 200) {
            this.currentPage = resp.data.number;
            this.totalPage = resp.data.totalPages;
            this.totalData = resp.data.totalElements;
            this.perPage = resp.data.size;
            this.noplans = '';
            for (let i = 0; i < resp.data.content.length; i++) {
              this.plans.push(resp.data.content[i]);
            }
          } else {
            this.authProvider.showToast(resp.description);
          }
          event.complete();
        }, error => {
          this.noplans = 'none';
          event.complete();
        })
    }, 1000);
  }

  onGotoTop() {
    this.content.scrollToTop();
  }

  onDeleteOptions(plan) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Plan Options',
      buttons: [
        {
          text: 'Delete',
          handler: () => { this.onDeletePlan(plan) }

        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }

  onDeletePlan(plan){
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    let confirm = this.alertCtrl.create({
      title: 'Delete Plan',
      message: 'Do you want to delete this payment record?</b><br/><br/>This is action is irreversible.',
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
            this.paymentsProvider.deletePayment(plan.id).subscribe(res => {
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
