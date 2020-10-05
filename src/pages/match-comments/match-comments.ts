import { Observable } from 'rxjs/Observable';
import { GamesProvider } from './../../providers/games/games';
import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Comments } from './../../interfaces/Comments';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, List, LoadingController } from 'ionic-angular';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-match-comments',
  templateUrl: 'match-comments.html',
})
export class MatchCommentsPage {
  @ViewChild(Content) contentArea: Content;
  @ViewChild(List, { read: ElementRef }) chatList: ElementRef;
  sub: any;
  match: any;
  comments: any;
  error: string;
  private mutationObserver: MutationObserver;
  comment: Comments = new Comments("", "", "", { id: "" }, "", { id: "" });
  jti: number;
  private placesSub: Subscription;

  img2 = "assets/imgs/appicon.png";
  constructor(public navCtrl: NavController,
    private authProvider: AuthenicationProvider,
    private gameProvider: GamesProvider,
    private loadingCtrl: LoadingController,
    public navParams: NavParams) {
    this.match = this.navParams.get("match");
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

  ionViewDidLeave() {
    this.placesSub.unsubscribe();
    Observable.interval.bind(this.placesSub.unsubscribe())
  }
  ionViewWillLeave() {
    this.placesSub.unsubscribe();
    Observable.interval.bind(this.placesSub.unsubscribe())
  }

  ionViewWillEnter() {
    this.placesSub = Observable.interval(10000)
      .subscribe((val) => {
        console.log(val);
        this.GetGameComments("");
      });
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.GetGameComments(loading);
    this.jti = this.authProvider.currentUserDataValue.jti;
  }

  GetGameComments(loading: any) {
    this.gameProvider.GetGameComments(this.match.id).subscribe(result => {
      this.comments = result.data;
      console.log(this.comments);
      this.error = '';
      if (loading) {
        loading.dismiss().catch(() => { });
      }
    }, error => {
      this.comments = [];
      this.error = 'none';
      console.log(error.error.description);
      if (loading) {
        loading.dismiss().catch(() => { });
      }
    });
  }


  onCreateComment(comment, match) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    console.log(comment);
    if (this.comment.comments) {
      this.comment.game.id = match.id;
      loading.present();
      this.gameProvider.createComment(this.comment).subscribe(res => {
        if (res.statusCode === 200) {
          this.GetGameComments(loading);
          this.comment.comments = '';
        } else {
          this.authProvider.showToast(res.description);
        }
      }, error => {
        loading.dismiss().catch(() => { });
        this.authProvider.showToast(error.error.error);
      });
    } else {

      this.authProvider.showToast("Comment input field is empty");
    }

  }

}
