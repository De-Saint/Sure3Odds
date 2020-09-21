import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Teams } from './../../interfaces/Teams';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
    public actionSheetCtrl: ActionSheetController, public camera: Camera, public navParams: NavParams) {
    this.teams = this.navParams.get("team");
    console.log(this.teams);
    if (this.teams) {
      this.team.name = this.teams.name;
      this.team.id = this.teams.id;
      if (this.teams.imageurl) {
        this.team.imageurl = this.teams.imageurl;
      } else {
        this.team.imageurl = "/assets/imgs/appicon.png";
      }


      this.team.country.name = this.teams.country.name;
      this.team.country.id = this.teams.country.id;
      this.team.country.imageurl = this.teams.country.imageurl;

      this.team.league.name = this.teams.league.name;
      this.team.league.id = this.teams.league.id;
      if (this.teams.league.imageurl) {
        this.team.league.imageurl = this.teams.league.imageurl;
      } else {
        this.team.league.imageurl = "/assets/imgs/appicon.png";
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
      quality: 100, destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG, mediaType: this.camera.MediaType.PICTURE
      , allowEdit: true, targetWidth: 512, targetHeight: 512, correctOrientation: true
    }

    if (source == 'Gallery') {
      options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY
    }
    else {
      options.sourceType = this.camera.PictureSourceType.CAMERA
    }

    this.camera.getPicture(options).then((imageData) => {
      this.img = 'data:image/jpeg;base64,' + imageData;
      this.team.imageurl = this.img;
    }, (err) => { });
    if (this.img != undefined) {
      this.team.imageurl = this.img;
    }
  }
}
