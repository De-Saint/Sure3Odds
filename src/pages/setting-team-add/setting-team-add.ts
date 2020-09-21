import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Teams } from './../../interfaces/Teams';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';
import { SelectSearchableComponent } from 'ionic-select-searchable';


@IonicPage()
@Component({
  selector: 'page-setting-team-add',
  templateUrl: 'setting-team-add.html',
})
export class SettingTeamAddPage {
  @ViewChild('myselect') selectComponent: SelectSearchableComponent;
  team: Teams = new Teams("", "", "", { id: "", name: "", imageurl: "" }, { id: "", name: "", imageurl: "" })
  country: any
  countries: any;
  league: any;
  leagues: any;
  img1 = "assets/imgs/appicon.png";
  img: any;
  flag = true;
  selectedCamera;
  constructor(private gamesProvider: GamesProvider,
    private authProvider: AuthenicationProvider,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController, public camera: Camera,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.Getcountries();
  }

  ionViewDidLoad() {
    this.flag = (this.flag != false) ? false : true;
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
        this.authProvider.showToast(error.error.error);
      });
  }



  onSelectCountry(event: { component: SelectSearchableComponent, value: any }) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    console.log('country:', event.value);
    this.team.league = null;
    console.log(event.value.id);
    loading.present();
    this.gamesProvider.GetLeaguesByCountryID(event.value.id)
      .subscribe(resp => {
        loading.dismiss().catch(() => { });
        if (resp.statusCode === 200) {
          this.leagues = resp.data;
          console.log(this.leagues);
        } else {
          this.authProvider.showToast(resp.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.error);
      });
  }

  onSelectLeague(event: { component: SelectSearchableComponent, value: any }) {
    console.log('league:', event.value);
  }

  onSubmit(team) {
    console.log(team)
    if (team.name) {
      team.imageurl = (team.imageurl != undefined) ? this.img1 : this.img;
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loading.present();
      this.gamesProvider.createTeam(team).subscribe(res => {
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
      title: 'Add Team Logo',
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
