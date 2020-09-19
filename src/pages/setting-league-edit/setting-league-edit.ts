import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Leagues } from './../../interfaces/Leagues';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-setting-league-edit',
  templateUrl: 'setting-league-edit.html',
})
export class SettingLeagueEditPage {
  leagues: any;
  flag = true;
  img: any;
  img1: any;
  selectedCamera;
  league: Leagues = new Leagues("", "", "", { id: "", name: "", imageurl: "" })
  constructor(public navCtrl: NavController,
    private gameProvider: GamesProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController, public camera: Camera,
    private authProvider: AuthenicationProvider,
    public navParams: NavParams) {
    this.leagues = this.navParams.get("league");
    if (this.leagues) {
      this.league.name = this.leagues.name;
      this.league.id = this.leagues.id;
      this.league.country.name = this.leagues.country.name;
      this.league.country.id = this.leagues.country.id;
      this.league.country.imageurl = this.leagues.country.imageurl;

      if (this.leagues.imageurl) {
        this.league.imageurl = this.leagues.imageurl;
      } else {
        this.league.imageurl = "assets/imgs/appicon.png";
      }
    }

  }

  ionViewDidLoad() {
    this.flag = (this.flag != false) ? false : true;
  }

  onDelete() {
    let loading = this.loadingCtrl.create({
      content:"Please wait..."
    });
    let confirm = this.alertCtrl.create({
      title: 'Delete League',
      message: 'Do you want to delete ' + this.leagues.name + '?',
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
            this.gameProvider.deleteLeague(this.leagues.id).subscribe(res => {
              loading.dismiss().catch(() => { });
              if (res.statusCode === 200) {
                this.navCtrl.pop();
              } else {
                this.authProvider.showToast(res.description);
              }
            }, error => {
              loading.dismiss().catch(() => { });
              this.authProvider.showToast(error.error.description);
            });
           
          }
        }
      ]
    });
    confirm.present();
  }

  onSubmit(league) {
    if (league.name) {
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loading.present();
      league.imageurl = (league.imageurl != undefined) ? this.leagues.imageurl : this.img;
        this.gameProvider.updateLeague(league).subscribe(res => {
          loading.dismiss().catch(() => { });
          if (res.statusCode === 200) {
            this.navCtrl.pop();
          } else {
            this.authProvider.showToast(res.description);
          }
        }, error => {
          loading.dismiss().catch(() => { });
          this.authProvider.showToast(error.error.description);
        });
    } else {
      this.authProvider.showToast("Name of league input field is empty");
    }
  }


  selectImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Change League Logo',
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
      this.league.imageurl = this.img;
    }, (err) => { });
    if (this.img != undefined) {
      this.league.imageurl = this.img;
    }
  }


}
