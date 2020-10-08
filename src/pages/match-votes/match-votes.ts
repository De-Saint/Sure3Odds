import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Votes } from './../../interfaces/Votes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-match-votes',
  templateUrl: 'match-votes.html',
})
export class MatchVotesPage {
  match: any;
  votes: any;
  img;
  comments: any;
  error: string;

  vote: Votes = new Votes("", "", { id: "" }, "", "", "");
  img2 = "assets/imgs/appicon.png";
  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authProvider: AuthenicationProvider,
    private gameProvider: GamesProvider, private navParams: NavParams) {
    this.match = this.navParams.get("match");

  }

  ngOnInit(): void {
    this.GetGameVotes();
  }

  GetGameVotes() {
    this.gameProvider.GetGameVotes(this.match.id).subscribe(result => {

      this.votes = result.data;
    }, error => {

    });
  }


  onCreateVote(uservote, homevote, drawvote, awayvote, match) {
    this.vote.userVote = uservote;
    this.vote.homeVote = homevote;
    this.vote.drawVote = drawvote;
    this.vote.awayVote = awayvote;
    this.vote.game.id = match.id;
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.gameProvider.createVote(this.vote).subscribe(res => {
      loading.dismiss().catch(() => { });
      if (res.statusCode === 200) {
        this.GetGameVotes();
      } else {
        this.authProvider.showToast(res.description);
      }
    }, error => {
      loading.dismiss().catch(() => { });
      this.authProvider.showToast(error.error.error);
    });
  }



}
