import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {
  gamelist: any;
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    const currentdate = this.gamesProvider.getDate();
    this.GetGames(currentdate);
  }

  GetGames(currentdate) {
    this.gamesProvider.GetGames(currentdate)
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          console.log(resp);
          this.gamelist = resp.data;
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        this.authProvider.showToast(error.error.error);
      });
  }

  onGameOption(game) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Game Options',
      buttons: [
        {
          text: 'View / Edit',
          handler: () => { this.navCtrl.push('GameEditPage', { game }) }
        }, {
          text: 'Delete',
          handler: () => { this.onDeleteGame(game) }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }


  onDeleteGame(game) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    let confirm = this.alertCtrl.create({
      title: 'Delete Game',
      message: 'Do you want to delete this game?</b><br/><br/>All the votes and comments on this game would also be deleted.</b><br/><br/>This is action is irreversible.',
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
            this.gamesProvider.deleteGame(game.id).subscribe(res => {
              loading.dismiss().catch(() => { });
              if (res.statusCode === 200) {
                const currentdate = this.gamesProvider.getDate();
                this.GetGames(currentdate);
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
