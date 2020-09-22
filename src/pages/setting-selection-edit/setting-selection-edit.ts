import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Selections } from './../../interfaces/Selections';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-setting-selection-edit',
  templateUrl: 'setting-selection-edit.html',
})
export class SettingSelectionEditPage {
selections:any;
selection: Selections = new Selections("", "");
  constructor(public navCtrl: NavController, 
    private alertCtrl: AlertController,
    private gameProvider: GamesProvider, 
    private loadingCtrl: LoadingController,
    private authProvider: AuthenicationProvider, public navParams: NavParams) {
    this.selections = this.navParams.get("selection");
    console.log(this.selections);
    if(this.selections){
      this.selection.id = this.selections.id;
      this.selection.name = this.selections.name;
    }
  }


  onSubmit(selection) {
    let loading = this.loadingCtrl.create({
      content:"Please wait..."
    });
    if (this.selection.name) {
      loading.present();
      this.gameProvider.updateSelection(selection).subscribe(res => {
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


  onDelete(){
    let loading = this.loadingCtrl.create({
      content:"Please wait..."
    });
    let confirm = this.alertCtrl.create({
      title: 'Delete Selection',
      message: 'Do you want to delete <b>' + this.selection.name + '?<b><br/><br/>This is action is irreversible.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {

          }
        },
        {
          text: 'Proceed',
          handler: () => {
            loading.present();
            this.gameProvider.deleteSelection(this.selections.id).subscribe(res => {
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
          }
        }
      ]
    });
    confirm.present();
  }
}
