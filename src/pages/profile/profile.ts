import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'; 
import { Global } from '../../providers/global';
import $ from "jquery";
import 'intl-tel-input';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  firstName='John';
  lastName='Smith';
  email='john_smith@gmail.com';
  passowrd='qwse2548';
  phoneNumber=9123456789;
  address="Paradeplein,2018 Antwerp ,Belgium";
  flag=true;
  img;
  img1="assets/imgs/profileCover.png";
  img2="assets/imgs/profile2.png";
  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController, public camera: Camera,private global:Global) {
  }
   
update(){
  this.flag=(this.flag!=false)? false:true;
}

//  select country code  
  ngOnInit(): any {
    let telInput = $("#elemtId");
    let output = $("#output");  

    telInput.intlTelInput();  
    // listen to "keyup", but also "change" to update when the user selects a country
    telInput.on("keyup change", function() {
      var intlNumber = telInput.intlTelInput("getNumber");
      if (intlNumber) {
        output.text("International: " + intlNumber);
      } else {
        output.text("Please enter a number below");
      }
    });
  }
  // gallery 
  // ActionSheet for change user picture
  selectedCamera;
  selectImage(num) {
    this.selectedCamera=num;
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your Picture',
      buttons: [
        {
          text: 'Gallery',
          handler: () => {this.get_camera('Gallery',this.selectedCamera);}
        },{
          text: 'Camera',
          handler: () => {this.get_camera('Camera',this.selectedCamera);}
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });
    actionSheet.present();
  }
  get_camera(source,selectCam) {
    const options: CameraOptions = { quality: 100,destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG, mediaType: this.camera.MediaType.PICTURE
    ,allowEdit:true,targetWidth:512,targetHeight:512,correctOrientation:true}

    if(source=='Gallery'){
      options.sourceType= this.camera.PictureSourceType.PHOTOLIBRARY
    }
    else {
      options.sourceType= this.camera.PictureSourceType.CAMERA
    }

    this.camera.getPicture(options).then((imageData) => {
      this.img='data:image/jpeg;base64,' + imageData;
    }, (err) => {});
    if(this.img!=undefined){
      if(selectCam==1){
        this.img1=this.img;
      }else{
        this.img2=this.img;
      }
    }
  }

  
}
 