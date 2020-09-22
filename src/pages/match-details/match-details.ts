import { Comments } from './../../interfaces/Comments';
import { Votes } from './../../interfaces/Votes';
import { GamesProvider } from './../../providers/games/games';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, List } from 'ionic-angular';
import { AuthenicationProvider } from '../../providers/authenication/authenication';
@IonicPage()
@Component({
  selector: 'page-match-details',
  templateUrl: 'match-details.html',
})

export class MatchDetailsPage implements OnInit {
  @ViewChild(Content) contentArea: Content;
  @ViewChild(List, { read: ElementRef }) chatList: ElementRef;
  tab = 'stats';
  match: any;
  votes: any;
  img;
  comments: any;
  error: string;
  private mutationObserver: MutationObserver;
  vote: Votes = new Votes("", "", { id: "" }, "", "", "");
  comment: Comments = new Comments("", "", "", { id: "" }, "", { id: "" });
  jti: number;


  img2 = "assets/imgs/appicon.png";
  constructor(public navCtrl: NavController, private authProvider: AuthenicationProvider,
     private gameProvider: GamesProvider, private navParams: NavParams) {
    this.match = this.navParams.data;
    console.log(this.match);

  }
  ionViewDidLoad() {

    this.mutationObserver = new MutationObserver((mutations) => {
      this.contentArea.scrollToBottom();
    });

    this.mutationObserver.observe(this.chatList.nativeElement, {
      childList: true
    });
  }

  onClick() {
    this.contentArea.scrollToBottom(500);
  }

  ngOnInit(): void {
    this.GetGameVotes();
    this.GetGameComments();
    this.jti = this.authProvider.currentUserDataValue.jti;
  }

  GetGameVotes() {
    this.gameProvider.GetGameVotes(this.match.id).subscribe(result => {
      this.votes = result.data;
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  GetGameComments() {
    this.gameProvider.GetGameComments(this.match.id).subscribe(result => {
      this.comments = result.data;
      console.log(this.comments);
    }, error => {
      this.comments = [];
      this.error = error.error.error;
      console.log(JSON.stringify(this.error));
    });
  }

  onCreateVote(uservote, homevote, drawvote, awayvote, match) {
    this.vote.userVote = uservote;
    this.vote.homeVote = homevote;
    this.vote.drawVote = drawvote;
    this.vote.awayVote = awayvote;
    this.vote.game.id = match.id;
    console.log(this.vote);
    this.gameProvider.createVote(this.vote).subscribe(res => {
      if (res.statusCode === 200) {
        this.GetGameVotes();
      } else {
        this.authProvider.showToast(res.description);
      }
    }, error => {
      this.authProvider.showToast(error.error.error);
    });
  }


  onCreateComment(comment, match) {
    console.log(comment);
    if (this.comment.comments) {
      this.comment.game.id = match.id;
      this.gameProvider.createComment(this.comment).subscribe(res => {
        if (res.statusCode === 200) {
          this.GetGameComments();

          // this.content.scrollToBottom();
        } else {
          this.authProvider.showToast(res.description);
        }
      }, error => {
        this.authProvider.showToast(error.error.error);
      });
    } else {
      this.authProvider.showToast("Comment input field is empty");
    }

  }



}
