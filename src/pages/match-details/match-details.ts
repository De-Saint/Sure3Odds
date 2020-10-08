import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-match-details',
  templateUrl: 'match-details.html',
})

export class MatchDetailsPage {

  match: any;
  comments: any;
  error: string;



  img2 = "assets/imgs/appicon.png";
  constructor(public navCtrl: NavController,
      private navParams: NavParams) {
    this.match = this.navParams.get("match");

  }





}
