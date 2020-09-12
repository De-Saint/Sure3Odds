import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-setting-country',
  templateUrl: 'setting-country.html',
})
export class SettingCountryPage implements OnInit {
  countries: any;
  originalcountries: any;
  searchTerm: string;
  error: string;
  currentPage = 1;
  totalPage = 0;
  perPage = 0;
  totalData = 0;

  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider,
    public navParams: NavParams) {
  }

  ngOnInit(): void {
    this.GetCountries();
  }
  GetCountries() {//myDate
    this.gamesProvider.GetCountries(0, 10)
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
        } else {
          console.log(resp.description);
        }
      }, error => {
        console.log(JSON.stringify(error));
        this.authProvider.showToast(error.error.description);
      });
  }

  onSearch() {
    let term = this.searchTerm;
    if (term.trim() === '' || term.trim().length < 0) {
      if (this.countries.length === 0) {
        this.error = "No result found."
      } else {
        this.countries = this.originalcountries;
      }
    } else {
      //to search an already popolated arraylist
      this.countries = [];
      if (this.originalcountries) {
        this.countries = this.originalcountries.filter((country) => {
          if (country.name.toLocaleLowerCase().indexOf(term.toLowerCase()) > -1) {
            return true;
          } else {
            if (this.countries.length === 0) {
              this.countries = [];
              this.error = "No result found."
            }
            return false;
          }
        });
      }
    }
  }
  onClear(ev) {
    this.searchTerm = "";
    this.countries = this.originalcountries;
    this.error = '';
  }
  onCancel(ev) {
    this.searchTerm = "";
    this.countries = this.originalcountries;
    this.error = '';
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
            for (let i = 0; i < resp.data.content.length; i++) {
              this.countries.push(resp.data.content[i]);
            }
          } else {
            console.log(resp.description);
          }
          // To complete scrolling event
          event.complete();
        }, error => {
          console.log("Error in loading data.")
          event.complete();
        })
    }, 1000);
  }
}
