import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-report-monthly',
  templateUrl: 'report-monthly.html',
})
export class ReportMonthlyPage {
  report: any;
  totalvvipincome = 0;
  totalincome = 0;
  totalvipincome = 0;
  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authProvider: AuthenicationProvider,
    public navParams: NavParams) {
  }

  GetReportByDate(value) {
    var month = value.month;
    if (month < 10) {
      month = "0" + month;
    }
    let year = value.year;
    var date = year + "-" + month + "-01";
    this.GetMonthlyStats(date);
  }
  GetMonthlyStats(date) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.authProvider.GetMonthlyReport(date)
      .subscribe(resp => {
        loading.dismiss().catch(() => { });
        if (resp.statusCode === 200) {
          this.report = resp.data;
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.description);
      });
  }

}
