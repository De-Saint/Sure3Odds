import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GamesProvider } from '../../providers/games/games';


@IonicPage()
@Component({
  selector: 'page-setting-teams',
  templateUrl: 'setting-teams.html',
})
export class SettingTeamsPage implements OnInit {
  searchTerm :string;
  error:string;
  teams:any;
  originalteams:any;
  constructor(private authProvider: AuthenicationProvider,
    private gamesProvider: GamesProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

 ngOnInit() : void{
  this.GetTeams();
 }

 GetTeams(){
  this.gamesProvider.GetTeams()
  .subscribe(resp => {
    if (resp.statusCode === 200) {
      this.teams = resp.data;
      this.originalteams = this.teams;
      console.log(this.teams);
    } else {
      console.log(resp.description);
    }
  }, error => {
    console.log(JSON.stringify(error));
    this.authProvider.showToast(error.error.description);
  });
 }

 onSearch() {
  let term = this.searchTerm;
  if (term.trim() === '' || term.trim().length < 0) {
    if (this.teams.length === 0) {
      this.error = "No result found."
    } else {
      this.teams = this.originalteams;
    }
  } else {
    //to search an already popolated arraylist
    this.teams = [];
    if (this.originalteams) {
      this.teams = this.originalteams.filter((team) => {
        if (team.name.toLocaleLowerCase().indexOf(term.toLowerCase()) > -1) {
          return true;
        } else {
          if (this.teams.length === 0) {
            this.teams = [];
           this.error = "No result found."
          }
          return false;
        }
      });
    }
  }
}
onClear(ev) {
  this.searchTerm = "";
  this.teams = this.originalteams;
  this.error = '';
}
onCancel(ev) {
  this.searchTerm = "";
  this.teams = this.originalteams;
  this.error = '';
}
}
