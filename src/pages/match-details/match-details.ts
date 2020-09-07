import { GamesProvider, Votes } from './../../providers/games/games';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Global } from '../../providers/global';
import { AuthenicationProvider } from '../../providers/authenication/authenication';
@IonicPage()
@Component({
  selector: 'page-match-details',
  templateUrl: 'match-details.html',
})




export class MatchDetailsPage implements OnInit {
  tab = 'stats';
  match: any;
  votes: any;
  img;
  vote: Votes = new Votes("", "", { id: "" }, "", "", "");


 
  img2 = "assets/imgs/appicon.png";
  constructor(public navCtrl: NavController, private authProvider: AuthenicationProvider, private gameProvider: GamesProvider, private global: Global, private navParams: NavParams) {
    this.match = this.navParams.data;
    console.log(this.match);

  }


  ngOnInit(): void {
    this.GetGameVotes();
  }

  GetGameVotes() {
    this.gameProvider.GetGameVotes(this.match.id).subscribe(result => {
      this.votes = result.data;
    })
  }

  highlights = [
    { time: '84', img: 'ball', content: 'is simply dummy text of the printing ', team: 'team1', content2: '' },
    { time: '84', img: 'flag', content: 'is simply dummy text of the printing ', team: 'team2', content2: '' },
    { time: '84', img: 'red-card', content: 'Player Name', team: 'team1', content2: '' },
    { time: '84', img: 'ball', content: 'is simply dummy text of the printing ', team: 'team2', content2: '' },
    { time: '84', img: 'yellow-card', content: 'Player Name', team: 'team1', content2: '' },
    { time: '82', img: 'exchange', content: 'Player Name', team: 'team1', content2: 'Player Name' },
    { time: '84', img: 'ball', content: 'is simply dummy text of the printing ', team: 'team2', content2: '' },
    { time: '78', img: 'exchange', content: 'Player Name', team: 'team2', content2: 'Player Name' },
    { time: '74', img: 'yellow-card', content: 'Player Name', team: 'team1', content2: '' },
    { time: '84', img: 'yellow-card', content: 'Player Name', team: 'team1', content2: '' },
  ];

  onVote(uservote, homevote, drawvote, awayvote, match) {
    this.vote.userVote = uservote;//1
    this.vote.homeVote = homevote;
    this.vote.drawVote = drawvote;
    this.vote.awayVote = awayvote;
    this.vote.game.id = match.id;
    console.log(this.vote);
    this.gameProvider.createVote(this.vote).subscribe(res => {
      if(res.statusCode === 200){
        this.GetGameVotes();
      }else{
        this.authProvider.showToast(res.description);
      } 
    }, error => {
      this.authProvider.showToast(error.error.description);
    });
  }

}
