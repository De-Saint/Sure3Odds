import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { GamesProvider } from '../../providers/games/games';


@IonicPage()
@Component({
  selector: 'page-setting-teams',
  templateUrl: 'setting-teams.html',
})
export class SettingTeamsPage {
  @ViewChild(Content) content: Content;
  searchTerm :string;
  error:string;
  teams:any;
  originalteams:any;
  noteams:string;
  currentPage = 1;
  totalPage = 0;
  perPage = 0;
  totalData = 0;
  constructor(private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

ionViewDidLoad(){
  this.GetTeams();
}

 GetTeams(){
  this.gamesProvider.GetTeams(0, 200)
  .subscribe(resp => {
    console.log(resp);
    if (resp.statusCode === 200) {
      this.teams = resp.data.content;
      this.originalteams = this.teams;
      this.currentPage = resp.data.number;
      this.totalPage = resp.data.totalPages;
      this.totalData = resp.data.totalElements;
      this.perPage = resp.data.size;
      console.log(this.currentPage, this.totalPage, this.totalData,
        this.perPage);
      this.noteams = 'teams';
      console.log(this.teams);
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
    this.teams = this.originalteams;
  } else {
    if (searchvalue.length >= 3) {
      this.gamesProvider.SearchTeams(searchvalue, 0, 200)
      .subscribe(resp => {
        console.log(resp);
        if (resp.statusCode === 200) {
          this.teams = resp.data.content;
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
  this.teams = this.originalteams;

}
onCancel(ev) {
  this.searchTerm = "";
  this.teams = this.originalteams;
}
scrollInfinite(event) {
  this.currentPage += 1;
  setTimeout(() => {
    this.gamesProvider.GetTeams(this.currentPage, this.perPage)
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.currentPage = resp.data.number;
          this.totalPage = resp.data.totalPages;
          this.totalData = resp.data.totalElements;
          this.perPage = resp.data.size;
          console.log(this.currentPage, this.totalPage, this.totalData,
            this.perPage);
          this.noteams = 'teams';
          for (let i = 0; i < resp.data.content.length; i++) {
            this.teams.push(resp.data.content[i]);
          }
        } else {
          console.log(resp.description);
        }
        event.complete();
      }, error => {
        console.log("End of the countries.");
        this.noteams = 'none';
        event.complete();
      })
  }, 1000);
}
onGotoTop() {
  this.content.scrollToTop();
}

}
