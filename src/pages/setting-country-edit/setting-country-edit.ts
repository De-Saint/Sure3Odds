import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Countries } from './../../interfaces/Countries';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';
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
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController, private camera: Camera,
    private authProvider: AuthenicationProvider,
    public navParams: NavParams) {
    this.countries = this.navParams.get("country");
    if (this.countries) {
      this.country.name = this.countries.name;
      this.country.id = this.countries.id;
      this.country.imageurl = this.countries.imageurl;
      console.log(this.country);
      if (this.countries.imageurl) {
        this.img1 = this.country.imageurl;
      } else {
        this.img1 = "/assets/imgs/appicon.png";
      }
    }
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
      this.gameProvider.updateCountry(country).subscribe(res => {
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

  onDelete() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    let confirm = this.alertCtrl.create({
      title: 'Delete Country',
      message: 'Do you want to delete <b>' + this.countries.name + '?</b><br/><br/>All the leagues and teams under <b>' + this.countries.name + '</b> would be deleted.</b><br/><br/>This is action is irreversible.',
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
            this.gameProvider.deleteCountry(this.countries.id).subscribe(res => {
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


  selectImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Change Country Logo',
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
