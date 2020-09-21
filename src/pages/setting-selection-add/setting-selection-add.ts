import { Selections } from './../../interfaces/Selections';
import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setting-selection-add',
  templateUrl: 'setting-selection-add.html',
})
export class SettingSelectionAddPage {
  selection: Selections = new Selections("", "");

  constructor(private gameProvider: GamesProvider,
    private loadingCtrl: LoadingController,
    private authProvider: AuthenicationProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmit(selection) {
    if (selection.name) {
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loading.present();
      this.gameProvider.createSelection(selection).subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.statusCode === 200) {
          this.navCtrl.pop();
        } else {
          this.authProvider.showToast(res.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.error);
      });
    } else {
      this.authProvider.showToast("Name input field is empty");
    }


  }
}
