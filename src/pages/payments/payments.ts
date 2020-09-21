import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {
  tab1Root = 'PaymentDetailsPage';
  tab2Root = 'PaymentPlansPage';
  tab3Root = 'PaymentPlantypesPage';
  tab4Root = 'PaymentSetsPage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsPage');
  }

}
