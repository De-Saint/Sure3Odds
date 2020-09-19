
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Leagues } from './../../interfaces/Leagues';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';

import { SelectSearchableComponent } from 'ionic-select-searchable';
 
@IonicPage()
@Component({
  selector: 'page-setting-league-add',
  templateUrl: 'setting-league-add.html',
})
export class SettingLeagueAddPage {
  @ViewChild('myselect') selectComponent: SelectSearchableComponent;
  league: Leagues = new Leagues("", "", "", { id: "", name: "", imageurl: "" });
  img1 = "assets/imgs/appicon.png";
  img: any;
  country: any
  countries: any;
  flag = true;
  selectedCamera;

 
  constructor(
    private gamesProvider: GamesProvider,
    private actionSheetCtrl: ActionSheetController, public camera: Camera,
    private authProvider: AuthenicationProvider,
    private loadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewWillEnter() {
    this.Getcountries();
  }
  Getcountries() {
    this.gamesProvider.Getcountries()
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.countries = resp.data;
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        this.authProvider.showToast(error.error.description);
      });
  }
  ionViewDidLoad() {
    this.flag = (this.flag != false) ? false : true;
  }
  userChanged(event: { component: SelectSearchableComponent, value: any }) {
    console.log('user:', event.value);
  }

  openFromCode() {
    this.selectComponent.open();
  }

  onSubmit(league) {
    if (this.league.name) {
      this.league.imageurl = (this.league.imageurl != undefined) ? this.img1 : this.img;
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loading.present();
      this.gamesProvider.createLeague(league).subscribe(res => {
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
      this.authProvider.showToast("Name input field is empty");
    }
  }

  selectImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Add League Logo',
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
    }, (err) => { });
    if (this.img != undefined) {
      this.img1 = this.img;
    }
  }
}
