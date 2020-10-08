import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Teams } from './../../interfaces/Teams';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';

import { Plugins, CameraResultType, CameraSource, CameraOptions } from '@capacitor/core';

const { Camera } = Plugins;

@IonicPage()
@Component({
  selector: 'page-setting-team-edit',
  templateUrl: 'setting-team-edit.html',
})
export class SettingTeamEditPage {
  teams: any;
  flag = true;
  img: any;
  img1: any;
  selectedCamera;
  team: Teams = new Teams("", "", "", { id: "", name: "", imageurl: "" }, { id: "", name: "", imageurl: "" })
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController, public navParams: NavParams) {
    this.teams = this.navParams.get("team");
    if (this.teams) {
      this.team = this.teams;
      if (this.teams.imageurl) {
        this.team.imageurl = this.teams.imageurl;
      } else {
        this.team.imageurl = "/assets/imgs/appicon.png";
      }
    }
  }

  ionViewDidLoad() {
    this.flag = (this.flag != false) ? false : true;
  }


  onDelete() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    let confirm = this.alertCtrl.create({
      title: 'Delete Team',
      message: "Do you want to delete <b>" + this.team.name + "</b> <br/>from <br/><b>" + this.team.league.name + "</b> league?<br/><br/>This is action is irreversible.",
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        },
        {
          text: 'Yes',
          handler: () => {
            loading.present();
            this.gamesProvider.deleteTeam(this.team.id).subscribe(res => {
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


  onSubmit(team) {
    if (team.name) {
      team.imageurl = (team.imageurl != undefined) ? this.team.imageurl : this.img;
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loading.present();
      this.gamesProvider.updateTeam(team).subscribe(res => {
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
      this.authProvider.showToast("Name of team input field is empty");
    }
  }

  selectImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Change Team Logo',
      buttons: [
        {
          text: 'Gallery',
          handler: () => { this.get_camera('Gallery') }
        }, {
          text: 'Camera',
          handler: () => { this.get_camera('Camera') }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }
  get_camera(source) {
    const options: CameraOptions = {
      quality: 90,
      height: 320,
      correctOrientation: true,
      width: 320,
      resultType: CameraResultType.Base64
    }

    if (source == 'Gallery') {
      options.source = CameraSource.Photos;
    } else {
      options.source = CameraSource.Camera;
    }

    Camera.getPhoto(options).then(imageData => {
      this.img = 'data:image/jpeg;base64,' + imageData.base64String;
      this.team.imageurl = this.img;
    }).catch(error => {
      if (this.img != undefined) {
        this.team.imageurl = this.img;
      }
      return false;
    })
  }
}
