import { SuperTabs } from 'ionic2-super-tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {
  pages = [
    { pageName: 'ReportGeneralPage', title: "General Reports",  id: "General Reports" },
    { pageName: 'ReportMonthlyPage', title: "Monthly Reports",  id: "Monthly Reports" }

  ];
  currentpage: string = "General Reports";
  selectedTab = 0;
  @ViewChild(SuperTabs) superTabs: SuperTabs;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  onTabSelect(ev: any) {
    this.selectedTab = ev.index;
    this.currentpage = ev.id;
  }


}
