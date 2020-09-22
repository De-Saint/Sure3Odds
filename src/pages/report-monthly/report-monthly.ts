import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-report-monthly',
  templateUrl: 'report-monthly.html',
})
export class ReportMonthlyPage {
  report: any;
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    public navParams: NavParams) {
  }

  GetReportByDate(value) {
    console.log(value)
    var month = value.month;
    if (month < 10) {
      month = "0" + month;
    }
    let year = value.year;
    var date = year + "-" + month + "-01";
    console.log(date);
    this.GetMonthlyStats(date);
  }
  GetMonthlyStats(date) {
    console.log(date)
    this.authProvider.GetMonthlyReport(date)
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.report = resp.data;
          console.log(this.report);
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        this.authProvider.showToast(error.error.description);
      });
  }

}
