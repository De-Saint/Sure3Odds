import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabs } from "ionic2-super-tabs";


@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {
  pages = [
    { pageName: 'PaymentDetailsPage', title: "Payments",  id: "Payments" },
    { pageName: 'PaymentPlansPage', title: "Plans",  id: "Plans" },
    { pageName: 'PaymentPlantypesPage', title: "Plan Types",  id: "Plan Types" },
    { pageName: 'PaymentSetsPage', title: "Sets",  id: "Sets" },

  ];
  currentpage: string = "Payments";
  selectedTab = 0;
  @ViewChild(SuperTabs) superTabs: SuperTabs;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  onTabSelect(ev: any) {
    this.selectedTab = ev.index;
    this.currentpage = ev.id;
  }


}
