import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { PaymentsProvider } from './../../providers/payments/payments';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-payment-details',
  templateUrl: 'payment-details.html',
})
export class PaymentDetailsPage {
  @ViewChild(Content) content: Content;
  payments: any;
  originalpayments: any;
  searchTerm: string;
  error: string;
  currentPage = 1;
  totalPage = 0;
  perPage = 0;
  totalData = 0;
  nopayments: string;

  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private paymentsProvider: PaymentsProvider, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.GetPayments()
  }


  GetPayments() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.paymentsProvider.GetPayments(0, 10)
      .subscribe(resp => {
        loading.dismiss().catch(() => { });
        if (resp.statusCode === 200) {
          this.payments = resp.data.content;
          this.currentPage = resp.data.number;
          this.totalPage = resp.data.totalPages;
          this.totalData = resp.data.totalElements;
          this.perPage = resp.data.size;
          this.originalpayments = this.payments;
          this.nopayments = '';
        } else {
          this.authProvider.showToast(resp.description);
        }
        this.error = '';

      }, error => {
        this.error = 'none';
        this.payments = null;
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.error);
      });
  }
  onSearch() {
    let searchvalue = this.searchTerm;
    if (searchvalue.trim() === '') {
      this.payments = this.originalpayments
    } else {
      if (searchvalue.length >= 3) {
        let loading = this.loadingCtrl.create({
          content: "Please wait..."
        });
        loading.present();
        this.paymentsProvider.SearchPayments(searchvalue, 0, 20)
          .subscribe(resp => {
            loading.dismiss().catch(() => { });
            if (resp.statusCode === 200) {
              this.payments = resp.data.content;
              this.currentPage = resp.data.number;
              this.totalPage = resp.data.totalPages;
              this.totalData = resp.data.totalElements;
              this.perPage = resp.data.size;
            } else {
              this.authProvider.showToast(resp.description);
            }
            this.error = '';
          }, error => {
            loading.dismiss().catch(() => { });
            this.error = 'none';
            this.payments = null;
          });
      }
    }
  }
  onClear(ev) {
    this.searchTerm = "";
    this.payments = this.originalpayments;
    this.error = '';
  }
  onCancel(ev) {
    this.searchTerm = "";
    this.payments = this.originalpayments;
    this.error = '';

  }

  scrollInfinite(event) {
    this.currentPage += 1;
    setTimeout(() => {
      this.paymentsProvider.GetPayments(this.currentPage, this.perPage)
        .subscribe(resp => {
          if (resp.statusCode === 200) {
            this.currentPage = resp.data.number;
            this.totalPage = resp.data.totalPages;
            this.totalData = resp.data.totalElements;
            this.perPage = resp.data.size;
            this.nopayments = '';
            for (let i = 0; i < resp.data.content.length; i++) {
              this.payments.push(resp.data.content[i]);
            }
          } else {
            this.authProvider.showToast(resp.description);
          }
          event.complete();
        }, error => {
          this.nopayments = 'none';
          event.complete();
        })
    }, 1000);
  }

  onGotoTop() {
    this.content.scrollToTop();
  }

  onPaymentOptions(payment) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Payment Options',
      buttons: [
        {
          text: 'Delete',
          handler: () => { this.onDeletePayment(payment) }

        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }

  onDeletePayment(payment){
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    let confirm = this.alertCtrl.create({
      title: 'Delete Payment',
      message: 'Do you want to delete this payment record?</b><br/><br/>It would delete the payment history of<b> '+ payment.user.lastname + ' ' + payment.user.firstname  +'.</b><br/><br/>This is action is irreversible.',
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
            this.paymentsProvider.deletePayment(payment.id).subscribe(res => {
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
