import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Selections } from './../../interfaces/Selections';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-setting-selection-edit',
  templateUrl: 'setting-selection-edit.html',
})
export class SettingSelectionEditPage {
selections:any;
selection: Selections = new Selections("", "");
  constructor(public navCtrl: NavController,  private gameProvider: GamesProvider, private authProvider: AuthenicationProvider, public navParams: NavParams) {
    this.selections = this.navParams.data;
    console.log(this.selections);
    if(this.selections){
      this.selection.id = this.selections.id;
      this.selection.name = this.selections.name;
    }
  }

  ionViewDidLoad() {
    
  }
  onSubmit(selection) {
    if (this.selection.name) {
      this.gameProvider.updateSelection(selection).subscribe(res => {
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


  onDelete(){
    this.gameProvider.deleteSelection(this.selections.id).subscribe(res => {
      if (res.statusCode === 200) {
        this.navCtrl.pop();
      } else {
        this.authProvider.showToast(res.description);
      }
    }, error => {
      this.authProvider.showToast(error.error.description);
    });
  
  }
}
