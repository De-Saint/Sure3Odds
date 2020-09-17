import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-setting-team-edit',
  templateUrl: 'setting-team-edit.html',
})
export class SettingTeamEditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingTeamEditPage');
  }
  onDelete(){

  }
}
