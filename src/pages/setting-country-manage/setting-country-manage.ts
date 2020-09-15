import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Countries } from './../../interfaces/Countries';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-setting-country-manage',
  templateUrl: 'setting-country-manage.html',
})
export class SettingCountryManagePage {
  countries: any;
  country: Countries = new Countries("", "", "");

  constructor(public navCtrl: NavController,
    private gameProvider: GamesProvider, private authProvider: AuthenicationProvider,
    public navParams: NavParams) {
    this.countries = this.navParams.data;
    if (this.countries) {
      this.country.name = this.countries.name;
      this.country.id = this.countries.id;
      console.log(this.country);
    }
  }

  ionViewDidLoad() {

  }
  onSubmit(country) {
    if (this.country.name) {
      if (this.countries.name) {
        //edit
        console.log("edit")
        this.onEditCountry(country);
      } else {
        //create
        console.log("create")
        this.onCreateCountry(country);
      }
    } else {
      this.authProvider.showToast("Name input field is empty");
    }


  }

  onCreateCountry(country) {
    alert("heey");
    this.gameProvider.createCountry(country).subscribe(res => {
      if (res.statusCode === 200) {
        this.navCtrl.pop();
      } else {
        this.authProvider.showToast(res.description);
      }
    }, error => {
      this.authProvider.showToast(error.error.description);
    });
  }

  onEditCountry(country) {
    this.gameProvider.updateCountry(country).subscribe(res => {
      if (res.statusCode === 200) {
        this.navCtrl.pop();
      } else {
        this.authProvider.showToast(res.description);
      }
    }, error => {
      this.authProvider.showToast(error.error.description);
    });
  }

  onDelete(){
    this.gameProvider.deleteCountry(this.countries.id).subscribe(res => {
      if (res.statusCode === 200) {
        this.navCtrl.pop();
      } else {
        this.authProvider.showToast(res.description);
      }
    }, error => {
      this.authProvider.showToast(error.error.description);
    });
  }
}
