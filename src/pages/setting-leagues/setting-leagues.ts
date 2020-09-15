import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-setting-leagues',
  templateUrl: 'setting-leagues.html',
})
export class SettingLeaguesPage {
  @ViewChild(Content) content: Content;
  leagues: any;
  originalleagues: any;
  searchTerm: string;
  error: string;
  noleagues: string;
  currentPage = 1;
  totalPage = 0;
  perPage = 0;
  totalData = 0;
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider,
    public navParams: NavParams) {
  }
  ionViewWillEnter() {
    this.GetLeagues();
  }
  GetLeagues() {
    this.gamesProvider.GetLeagues(0, 50)
      .subscribe(resp => {
        console.log(resp);
        if (resp.statusCode === 200) {
          this.leagues = resp.data.content;
          this.originalleagues = this.leagues;
          this.currentPage = resp.data.number;
          this.totalPage = resp.data.totalPages;
          this.totalData = resp.data.totalElements;
          this.perPage = resp.data.size;
          console.log(this.currentPage, this.totalPage, this.totalData,
            this.perPage);
          this.noleagues = 'leagues';
          console.log(this.leagues);
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
      this.leagues = this.originalleagues;
    } else {
      if (searchvalue.length >= 3) {
        this.gamesProvider.SearchLeagues(searchvalue, 0, 50)
        .subscribe(resp => {
          console.log(resp);
          if (resp.statusCode === 200) {
            this.leagues = resp.data.content;
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
    this.leagues = this.originalleagues;
  }
  onCancel(ev) {
    this.searchTerm = "";
    this.leagues = this.originalleagues;
  }

  scrollInfinite(event) {
    this.currentPage += 1;
    setTimeout(() => {
      this.gamesProvider.GetLeagues(this.currentPage, this.perPage)
        .subscribe(resp => {
          if (resp.statusCode === 200) {
            this.currentPage = resp.data.number;
            this.totalPage = resp.data.totalPages;
            this.totalData = resp.data.totalElements;
            this.perPage = resp.data.size;
            console.log(this.currentPage, this.totalPage, this.totalData,
              this.perPage);
            this.noleagues = 'league';
            for (let i = 0; i < resp.data.content.length; i++) {
              this.leagues.push(resp.data.content[i]);
            }
          } else {
            console.log(resp.description);
          }
          event.complete();
        }, error => {
          console.log("End of the countries.");
          this.noleagues = 'none';
          event.complete();
        })
    }, 1000);
  }
  onGotoTop() {
    this.content.scrollToTop();
  }
}
