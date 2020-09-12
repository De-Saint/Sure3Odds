import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-setting-leagues',
  templateUrl: 'setting-leagues.html',
})
export class SettingLeaguesPage {
  leagues: any;
  originalleagues: any;
  searchTerm: string;
  error: string;
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    public loadingCtrl: LoadingController,
    private gamesProvider: GamesProvider,
    public navParams: NavParams) {
  }

  ngOnInit(): void {
    this.GetLeagues();
  }
  GetLeagues() {//myDate
    let loading = this.loadingCtrl.create({
    });
    // loading.present();
    this.gamesProvider.GetLeagues()
      .subscribe(resp => {
        if (resp.statusCode === 200) {
          this.leagues = resp.data;
          this.originalleagues = this.leagues;
          console.log(this.originalleagues);
          this.error = 'full';
        } else {
          console.log(resp.description);
          loading.dismiss().catch(() => { });
        }
      }, error => {
        console.log(JSON.stringify(error));
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.description);
      });
  }

  onSearch() {
    let term = this.searchTerm;
    if (term.trim() === '' || term.trim().length < 0) {
      if (this.leagues.length === 0) {
        this.error = "empty";
        console.log("this.leagues");
      } else {
        this.error = 'full';
        this.leagues = this.originalleagues;
      }
    } else {
      //to search an already popolated arraylist
      this.leagues = [];
      if (this.originalleagues) {
        this.leagues = this.originalleagues.filter((league) => {
          if (league.name.toLocaleLowerCase().indexOf(term.toLowerCase()) > -1 || league.country.name.toLocaleLowerCase().indexOf(term.toLowerCase()) > -1) {
            this.error = 'full';
            return true;
          } else {
            if (this.leagues.length === 0) {
              this.leagues = [];
              this.error = "empty";
              console.log("no league");
            }
            return false;
          }
        });
      }
    }
  }
  onClear(ev) {
    this.searchTerm = "";
    this.leagues = this.originalleagues;
    this.error = '';
  }
  onCancel(ev) {
    this.searchTerm = "";
    this.leagues = this.originalleagues;
    this.error = '';
  }

}
