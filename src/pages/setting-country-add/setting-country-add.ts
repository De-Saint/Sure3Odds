import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Countries } from './../../interfaces/Countries';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-setting-country-add',
  templateUrl: 'setting-country-add.html',
})
export class SettingCountryAddPage {
  country: Countries = new Countries("", "", "");
  img1 = "assets/imgs/appicon.png";
  img: any;
  flag = true;
  selectedCamera;
  constructor(public navCtrl: NavController,
    private gameProvider: GamesProvider,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController, private camera: Camera,
    private authProvider: AuthenicationProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.flag = (this.flag != false) ? false : true;
  }
  onSubmit(country) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    if (this.country.name) {
      this.country.imageurl = (this.country.imageurl != undefined) ? this.img1 : this.img;
      loading.present();
      this.gameProvider.createCountry(country).subscribe(res => {
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



  selectImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Add Country Logo',
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
