import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-report-general',
  templateUrl: 'report-general.html',
})
export class ReportGeneralPage {
  report: any;
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.GetAppReport();
  }

  GetAppReport() {
    this.authProvider.GetAppReport()
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.report = resp.data;
          console.log(this.report);
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        this.authProvider.showToast(error.error.error);
      });
  }

}
