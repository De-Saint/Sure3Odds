import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setting-selections',
  templateUrl: 'setting-selections.html',
})
export class SettingSelectionsPage {
  @ViewChild(Content) content: Content;
  selections: any;
  originalselections: any;
  searchTerm: string;
  error: string;
  currentPage = 1;
  totalPage = 0;
  perPage = 0;
  totalData = 0;
  noselections : string;
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider,
    public navParams: NavParams) {
  }


  ionViewWillEnter(){
    this.GetSelections();
  }
  GetSelections() {//myDate
    this.gamesProvider.GetSelections(0, 20)
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.selections = resp.data.content;
          this.currentPage = resp.data.number;
          this.totalPage = resp.data.totalPages;
          this.totalData = resp.data.totalElements;
          this.perPage = resp.data.size;
          this.originalselections = this.selections;
          console.log(this.currentPage, this.totalPage, this.totalData,
            this.perPage);
            this.noselections = 'selections';
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
      this.selections = this.originalselections;
    } else {
      if (searchvalue.length >= 3) {
        this.gamesProvider.SearchSelections(searchvalue, 0, 20)
        .subscribe(resp => {
          console.log(resp);
          if (resp.statusCode === 200) {
            this.selections = resp.data.content;
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
    this.selections = this.originalselections;
  }
  onCancel(ev) {
    this.searchTerm = "";
    this.selections = this.originalselections;

  }

  scrollInfinite(event) {
    this.currentPage += 1;
    setTimeout(() => {
      this.gamesProvider.GetSelections(this.currentPage, this.perPage)
        .subscribe(resp => {
          if (resp.statusCode === 200) {
            this.currentPage = resp.data.number;
            this.totalPage = resp.data.totalPages;
            this.totalData = resp.data.totalElements;
            this.perPage = resp.data.size;
            console.log(this.currentPage, this.totalPage, this.totalData,
              this.perPage);
              this.noselections = 'countries';
            for (let i = 0; i < resp.data.content.length; i++) {
              this.selections.push(resp.data.content[i]);
            }
          } else {
            console.log(resp.description);
          }
          event.complete();
        }, error => {
          console.log("End of the countries.");
          this.noselections = 'none';
          event.complete();
        })
    }, 1000);
  }

  onGotoTop() {
    this.content.scrollToTop();
  }

}
