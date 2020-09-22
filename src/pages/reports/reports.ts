import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {
  tab1Root = 'ReportGeneralPage';
  tab2Root = 'ReportMonthlyPage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

}
