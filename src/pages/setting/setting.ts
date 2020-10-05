import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  CountryPage = "SettingCountryPage";
  LeaguePage = "SettingLeaguesPage";
  TeamPage = "SettingTeamsPage";
  SelectionPage = "SettingSelectionsPage";
  constructor(public navCtrl: NavController) {

  }



}
