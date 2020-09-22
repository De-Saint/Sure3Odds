import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  tab1Root = 'SettingCountryPage';
  tab2Root = 'SettingLeaguesPage';
  tab3Root = 'SettingTeamsPage';
  tab4Root = 'SettingSelectionsPage';
  constructor(public navCtrl: NavController) {
    
  } 



}
