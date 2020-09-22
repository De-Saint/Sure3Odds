import { NewUsers } from './../../interfaces/NewUser';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-subscription-ios',
  templateUrl: 'subscription-ios.html',
})
export class SubscriptionIosPage {
  sub_option: string;
  newuser: NewUsers = new NewUsers("", "", "", "", "", "", "", { id: "" }, "", { id: "", name: "" }, { id: "", name: "" });

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.newuser = this.navParams.get("newuser");
    this.sub_option = this.navParams.get("sub_option");
    console.log(this.newuser, this.sub_option);

  }

 

}
