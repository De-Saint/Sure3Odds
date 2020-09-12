import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Global } from './../../providers/global';
import { GamesProvider } from './../../providers/games/games';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-all-matches',
  templateUrl: 'all-matches.html',
})
export class AllMatchesPage implements OnInit {
  gamelist: any;
  match: Object;
  // calender Function
  monthNames = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  days_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  days = [];
  myDate = new Date();
  year = this.myDate.getFullYear();
  month_num = this.myDate.getMonth();
  month_name = this.monthNames[this.month_num];
  // click day
  currentDate:any;
  shownGroup : any;
  constructor(public navCtrl: NavController, private globalProvider: Global,
    private authProvider: AuthenicationProvider,
     private gamesProvider: GamesProvider) {
    this.getDaysInMonth(this.month_num, this.year);
    this.currentDate = this.myDate;
  }

  ngOnInit(): void {
    const currentdate = this.globalProvider.getDate();
    this.GetGames(currentdate);
    var date = this.myDate.getDate();
    var today = date - 1;
    this.isGroupShown(today);
    this.shownGroup = today;
  }

  getDaysInMonth(month, year) {
    // Since no month has fewer than 28 days
    var date = new Date(year, month);
    while (date.getMonth() === month) {
      var a = new Date(date);
      var day_num = a.getDate();
      this.days.push({ name: this.days_name[a.getDay()], day_num: day_num, month: month + 1, year: year });
      date.setDate(date.getDate() + 1);
    }
  }

  // increase and decrease month function
  change_month(type) {
    this.shownGroup = null;
    if (type == 'increase') {
      this.month_num = this.month_num + 1;
      if (this.month_num >= 12) {
        this.month_num = 0;
        this.year = this.year + 1;
      }
    }
    else if (type == 'decrease') {
      this.month_num = this.month_num - 1;
      if (this.month_num < 0) {
        this.month_num = 11;
        this.year = this.year - 1;
      }
    }

    this.month_name = this.monthNames[this.month_num];
    this.days = [];
    this.getDaysInMonth(this.month_num, this.year);
  }
  toggleGroup(group) {
    this.shownGroup = group;
  }
  private isGroupShown(group) {
    return this.shownGroup === group;
  }


  onClick(day):void {
    this.shownGroup = null;
    var date = this.gamesProvider.computeOldMatchDate(day);
    this.GetGames(date);
    this.month_name = this.monthNames[this.month_num];
    this.days = [];
    this.getDaysInMonth(this.month_num, this.year);
  }

  GetGames(currentdate) {
    this.gamesProvider.GetGames(currentdate)
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.gamelist = resp.data;
        } else {
          console.log(resp.description);
        }
      }, error => {
        console.log(JSON.stringify(error));
        this.authProvider.showToast(error.error.description);
      });
  }

  GotoMatchDetails(page) {
    this.navCtrl.push(page)
  }


}
