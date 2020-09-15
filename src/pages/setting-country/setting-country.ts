import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';



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
  nocountries : string;

  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider,
    public navParams: NavParams) {
  }


  ionViewWillEnter(){
    this.GetCountries();
  }
  GetCountries() {//myDate
    this.gamesProvider.GetCountries(0, 20)
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.countries = resp.data.content;
          this.currentPage = resp.data.number;
          this.totalPage = resp.data.totalPages;
          this.totalData = resp.data.totalElements;
          this.perPage = resp.data.size;
          this.originalcountries = this.countries;
          console.log(this.currentPage, this.totalPage, this.totalData,
            this.perPage);
            this.nocountries = 'countries';
        } else {
          console.log(resp.description);
        }
      }, error => {
        console.log(JSON.stringify(error));
        this.error = 'none';
        this.authProvider.showToast(error.error.description);
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
          console.log(resp);
          if (resp.statusCode === 200) {
            this.countries = resp.data.content;
            this.currentPage = resp.data.number;
            this.totalPage = resp.data.totalPages;
            this.totalData = resp.data.totalElements;
            this.perPage = resp.data.size;
            console.log(this.currentPage, this.totalPage, this.totalData,
              this.perPage);
          } else {
            console.log(resp.description);
          }
        }, error => {
          console.log(JSON.stringify(error));
          this.error = 'none';
          this.authProvider.showToast(error.error.description);
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
            console.log(this.currentPage, this.totalPage, this.totalData,
              this.perPage);
              this.nocountries = 'countries';
            for (let i = 0; i < resp.data.content.length; i++) {
              this.countries.push(resp.data.content[i]);
            }
          } else {
            console.log(resp.description);
          }
          event.complete();
        }, error => {
          console.log("End of the countries.");
          this.nocountries = 'none';
          event.complete();
        })
    }, 1000);
  }

  onGotoTop() {
    this.content.scrollToTop();
  }
}
