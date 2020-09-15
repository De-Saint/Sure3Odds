import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { GamesProvider } from './../../providers/games/games';
import { Leagues } from './../../interfaces/Leagues';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-setting-league-edit',
  templateUrl: 'setting-league-edit.html',
})
export class SettingLeagueEditPage {
  leagues: any;
  img1="assets/imgs/profileCover.png";
  img2="assets/imgs/profile2.png";
  league: Leagues = new Leagues("", "", "", { id: "", name: "", imageurl: "" })
  constructor(public navCtrl: NavController,
    private gameProvider: GamesProvider, private authProvider: AuthenicationProvider,
    public navParams: NavParams) {
      this.leagues = this.navParams.data;
      console.log(this.leagues);
      if(this.leagues){
        this.league.name = this.leagues.name;
        this.league.id = this.leagues.id;
        this.league.imageurl = this.leagues.imageurl;
        console.log(this.league.imageurl);
        this.league.country.name = this.leagues.country.name;
        this.league.country.id = this.leagues.country.id;
        this.league.country.imageurl = this.leagues.country.image_url;
      }

  }

  ionViewDidLoad() {
   
  }

  onDelete(){
    this.gameProvider.deleteLeague(this.leagues.id).subscribe(res => {
      if (res.statusCode === 200) {
        this.navCtrl.pop();
      } else {
        this.authProvider.showToast(res.description);
      }
    }, error => {
      this.authProvider.showToast(error.error.description);
    });
  }

  onSubmit(league){
    console.log(league);
    // if(this.league.name){
    //   this.gameProvider.updateLeague(league).subscribe(res => {
    //     if (res.statusCode === 200) {
    //       this.navCtrl.pop();
    //     } else {
    //       this.authProvider.showToast(res.description);
    //     }
    //   }, error => {
    //     this.authProvider.showToast(error.error.description);
    //   });
    // }else{
    //   this.authProvider.showToast("Name of league input field is empty");
    // }
  }
}
