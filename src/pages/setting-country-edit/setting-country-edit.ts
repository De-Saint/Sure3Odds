import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Countries } from './../../interfaces/Countries';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-setting-country-edit',
  templateUrl: 'setting-country-edit.html',
})
export class SettingCountryEditPage {
  countries: any;
  country: Countries = new Countries("", "", "");
  constructor(public navCtrl: NavController,
    private gameProvider: GamesProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authProvider: AuthenicationProvider,
    public navParams: NavParams) {
    this.countries = this.navParams.get("country");
    if (this.countries) {
      this.country = this.countries;
      if (this.countries.imageurl) {
        this.country.imageurl = this.country.imageurl;
      } else {
        this.country.imageurl = "/assets/imgs/appicon.png";
      }
    }
  }
  ionViewDidLoad() {

  }
  onSubmit(country) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    if (this.country.name) {
      loading.present();
      this.gameProvider.updateCountry(country).subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.statusCode === 200) {
          this.navCtrl.pop();
        } else {
          this.authProvider.showToast(res.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.description);
      });
    } else {
      this.authProvider.showToast("Name input field is empty");
    }


  }

  onDelete() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    let confirm = this.alertCtrl.create({
      title: 'Delete Country',
      message: 'Do you want to delete <b>' + this.countries.name + '?</b><br/><br/>All the leagues and teams under <b>' + this.countries.name + '</b> would be deleted.</b><br/><br/>This is action is irreversible.',
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
            this.gameProvider.deleteCountry(this.countries.id).subscribe(res => {
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
