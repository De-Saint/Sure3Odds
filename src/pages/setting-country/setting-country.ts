import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ActionSheetController, LoadingController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-setting-country',
  templateUrl: 'setting-country.html',
})
export class SettingCountryPage {
  @ViewChild(Content) content: Content;
  countries: any;
  originalcountries: any;
  searchTerm: string;
  error: string;
  currentPage = 1;
  totalPage = 0;
  perPage = 0;
  totalData = 0;
  nocountries: string;

  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {
  }


  ionViewWillEnter() {
    this.GetCountries();
  }
  GetCountries() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.gamesProvider.GetCountries(0, 20)
      .subscribe(resp => {
        loading.dismiss().catch(() => { });
        if (resp.statusCode === 200) {
          this.countries = resp.data.content;
          this.currentPage = resp.data.number;
          this.totalPage = resp.data.totalPages;
          this.totalData = resp.data.totalElements;
          this.perPage = resp.data.size;
          this.originalcountries = this.countries;
          this.nocountries = 'countries';
        } else {
          this.authProvider.showToast(resp.description);
        }
        this.error = '';
      }, error => {
        this.error = 'none';
        this.countries = [];
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.error);
      });
  }

  onSearch() {
    let searchvalue = this.searchTerm;
    if (searchvalue.trim() === '') {
      this.countries = this.originalcountries
    } else {
      if (searchvalue.length >= 3) {
        this.gamesProvider.SearchCountries(searchvalue, 0, 20)
          .subscribe(resp => {
            if (resp.statusCode === 200) {
              this.countries = resp.data.content;
              this.currentPage = resp.data.number;
              this.totalPage = resp.data.totalPages;
              this.totalData = resp.data.totalElements;
              this.perPage = resp.data.size;
            } else {
              this.authProvider.showToast(resp.description);
            }
            this.error = '';
          }, error => {
            this.error = 'none';
            this.countries = [];
            this.authProvider.showToast(error.error.error);
          });
      }
    }
  }
  onClear(ev) {
    this.searchTerm = "";
    this.countries = this.originalcountries;
  }
  onCancel(ev) {
    this.searchTerm = "";
    this.countries = this.originalcountries;

  }

  scrollInfinite(event) {
    this.currentPage += 1;
    setTimeout(() => {
      this.gamesProvider.GetCountries(this.currentPage, this.perPage)
        .subscribe(resp => {
          if (resp.statusCode === 200) {
            this.currentPage = resp.data.number;
            this.totalPage = resp.data.totalPages;
            this.totalData = resp.data.totalElements;
            this.perPage = resp.data.size;
            this.nocountries = 'countries';
            for (let i = 0; i < resp.data.content.length; i++) {
              this.countries.push(resp.data.content[i]);
            }
          } else {
            this.authProvider.showToast(resp.description);
          }
          event.complete();
        }, error => {
          this.nocountries = 'none';
          event.complete();
        })
    }, 1000);
  }

  onGotoTop() {
    this.content.scrollToTop();
  }

  onCountryOption(country) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Country Options',
      buttons: [
        {
          text: 'View / Edit',
          handler: () => { this.navCtrl.push('SettingCountryEditPage', {country}) }
        }, {
          text: 'View Leagues',
          handler: () => { this.navCtrl.push('SettingLeagueViewPage', {country}) }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }
}
