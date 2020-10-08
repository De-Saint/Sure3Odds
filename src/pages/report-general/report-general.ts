import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-report-general',
  templateUrl: 'report-general.html',
})
export class ReportGeneralPage {
  report: any;
  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authProvider: AuthenicationProvider,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.GetAppReport();
  }

  GetAppReport() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.authProvider.GetAppReport()
      .subscribe(resp => {
        loading.dismiss().catch(() => { });
        if (resp.statusCode === 200) {
          this.report = resp.data;
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.error);
      });
  }

}
