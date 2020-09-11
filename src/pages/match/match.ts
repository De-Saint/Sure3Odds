import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {
  tab1Root = 'MatchDetailsPage';
  tab2Root = 'MatchVotesPage';
  tab3Root = 'MatchCommentsPage';
  match: any;
  constructor( public navCtrl: NavController, public navParams: NavParams) {
    this.match = this.navParams.data;
  }

  

}
