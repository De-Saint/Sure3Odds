import { Selections } from './../../interfaces/Selections';
import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setting-selection-add',
  templateUrl: 'setting-selection-add.html',
})
export class SettingSelectionAddPage {
  selection: Selections = new Selections("", "");
  
  constructor( private gameProvider: GamesProvider, private authProvider: AuthenicationProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
  }
  onSubmit(selection) {
    if (selection.name) {
      console.log(selection);
      this.gameProvider.createSelection(selection).subscribe(res => {
        if (res.statusCode === 200) {
          this.navCtrl.pop();
        } else {
          this.authProvider.showToast(res.description);
        }
      }, error => {
        this.authProvider.showToast(error.error.description);
      });
    } else {
      this.authProvider.showToast("Name input field is empty");
    }


  }
}
