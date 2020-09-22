
import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Comments } from './../../interfaces/Comments';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, List } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-match-comments',
  templateUrl: 'match-comments.html',
})
export class MatchCommentsPage {
  @ViewChild(Content) contentArea: Content;
  @ViewChild(List, { read: ElementRef }) chatList: ElementRef;

  match: any;
  comments: any;
  error: string;
  private mutationObserver: MutationObserver;
  comment: Comments = new Comments("", "", "", { id: "" }, "", { id: "" });
  jti: number;


  img2 = "assets/imgs/appicon.png";
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private gameProvider: GamesProvider,
    public navParams: NavParams) {
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


  ngOnInit(): void {
    this.GetGameComments();
    this.jti = this.authProvider.currentUserDataValue.jti;
  }



  GetGameComments() {
    this.gameProvider.GetGameComments(this.match.id).subscribe(result => {
      this.comments = result.data;
      console.log(this.comments);
      this.error = '';
    }, error => {
      this.comments = [];
      this.error = 'none';
    });
  }


  onCreateComment(comment, match) {
    console.log(comment);
    if (this.comment.comments) {
      this.comment.game.id = match.id;
      this.gameProvider.createComment(this.comment).subscribe(res => {
        if (res.statusCode === 200) {
          this.GetGameComments();
          this.comment.comments = '';
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
