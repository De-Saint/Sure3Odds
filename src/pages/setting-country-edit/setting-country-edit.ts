import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Countries } from './../../interfaces/Countries';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-setting-country-edit',
  templateUrl: 'setting-country-edit.html',
})
export class SettingCountryEditPage {
  countries: any;
  country: Countries = new Countries("", "", "");
  img1: any;
  img: any;
  flag = true;
  selectedCamera;
  constructor(public navCtrl: NavController,
    private gameProvider: GamesProvider,
    public actionSheetCtrl: ActionSheetController, public camera: Camera,
    private authProvider: AuthenicationProvider,
    public navParams: NavParams) {
    this.countries = this.navParams.data;
    if (this.countries) {
      this.country.name = this.countries.name;
      this.country.id = this.countries.id;
      this.country.imageurl = this.countries.imageurl;
      console.log(this.country);
      if (this.countries.imageurl) {
        this.img1 = this.country.imageurl;
      } else {
        this.img1 = "assets/imgs/appicon.png";
      }
    }
  }
  ionViewDidLoad() {
    this.flag = (this.flag != false) ? false : true;
  }
  onSubmit(country) {
    if (this.country.name) {
      this.country.imageurl = (this.country.imageurl != undefined) ? this.img1 : this.img;
      console.log(this.country);
      this.gameProvider.updateCountry(country).subscribe(res => {
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

  onDelete() {
    this.gameProvider.deleteCountry(this.countries.id).subscribe(res => {
      if (res.statusCode === 200) {
        this.navCtrl.pop();
      } else {
        this.authProvider.showToast(res.description);
      }
    }, error => {
      this.authProvider.showToast(error.error.description);
    });
  }


  selectImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your Picture',
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
