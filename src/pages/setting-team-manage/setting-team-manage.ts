import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-setting-team-manage',
  templateUrl: 'setting-team-manage.html',
})
export class SettingTeamManagePage {
  existingteam: any;
  option: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.existingteam = this.navParams.get("team")
    console.log(this.existingteam);
    this.option = this.navParams.get("option");
    console.log(this.option);
  }

  ionViewDidLoad() {

  }

}
