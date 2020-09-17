
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Leagues } from './../../interfaces/Leagues';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';

import { SelectSearchableComponent } from 'ionic-select-searchable';

class Port {
  public id: number;
  public name: string;
}

@IonicPage()
@Component({
  selector: 'page-setting-league-add',
  templateUrl: 'setting-league-add.html',
})
export class SettingLeagueAddPage {
@ViewChild('myselect') selectComponent : SelectSearchableComponent;
  league: Leagues = new Leagues("", "", "",{id:"", name:"", imageurl:""});
  img1 = "assets/imgs/appicon.png";
  img: any;
  flag = true;
  user = null;
  userIds = [];
  selectedCamera;
users =[
  {
    id:1,
    name: 'Saint',
    country: 'Nigeria'
  },
  {
    id:2,
    name: 'Saint',
    country: 'Ghana'
  },
  {
    id:3,
    name: 'Mike',
    country: 'USA'
  },
  {
    id:4,
    name: 'Pinky',
    country: 'Turkey'
  },
  {
    id:5,
    name: 'James',
    country: 'Nigeria'
  }
]

  constructor(
    private gameProvider: GamesProvider,
    public actionSheetCtrl: ActionSheetController, public camera: Camera,
    private authProvider: AuthenicationProvider, private toastCtrl: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.flag = (this.flag != false) ? false : true;
  }
  userChanged(event: {component: SelectSearchableComponent, value: any}){
    console.log('user:', event.value);
}

onClose(){
let toast = this.toastCtrl.create({
  message:'YOu did a good job',
  duration: 2000
});
toast.present();
}

openFromCode(){
  this.selectComponent.open();
}

  onSubmit(league) {
    if (this.league.name) {
      console.log(league);
    //   this.country.imageurl = (this.country.imageurl != undefined) ? this.img1 : this.img;
    //   console.log(country);
    //   this.gameProvider.createCountry(country).subscribe(res => {
    //     if (res.statusCode === 200) {
    //       this.navCtrl.pop();
    //     } else {
    //       this.authProvider.showToast(res.description);
    //     }
    //   }, error => {
    //     this.authProvider.showToast(error.error.description);
    //   });
    } else {
      this.authProvider.showToast("Name input field is empty");
    }
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
