webpackJsonp([25],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchDetailsPageModule", function() { return MatchDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_details__ = __webpack_require__(744);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MatchDetailsPageModule = /** @class */ (function () {
    function MatchDetailsPageModule() {
    }
    MatchDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__match_details__["a" /* MatchDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__match_details__["a" /* MatchDetailsPage */]),
            ],
        })
    ], MatchDetailsPageModule);
    return MatchDetailsPageModule;
}());

//# sourceMappingURL=match-details.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_games_games__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authenication_authenication__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatchDetailsPage = /** @class */ (function () {
    function MatchDetailsPage(navCtrl, authProvider, gameProvider, global, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.gameProvider = gameProvider;
        this.global = global;
        this.navParams = navParams;
        this.tab = 'stats';
        this.vote = new __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["b" /* Votes */]("", "", { id: "" }, "", "", "");
        this.img2 = "assets/imgs/appicon.png";
        this.highlights = [
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
        this.match = this.navParams.data;
        console.log(this.match);
    }
    MatchDetailsPage.prototype.ngOnInit = function () {
        this.GetGameVotes();
    };
    MatchDetailsPage.prototype.GetGameVotes = function () {
        var _this = this;
        this.gameProvider.GetGameVotes(this.match.id).subscribe(function (result) {
            _this.votes = result.data;
        });
    };
    MatchDetailsPage.prototype.onVote = function (uservote, homevote, drawvote, awayvote, match) {
        var _this = this;
        this.vote.userVote = uservote; //1
        this.vote.homeVote = homevote;
        this.vote.drawVote = drawvote;
        this.vote.awayVote = awayvote;
        this.vote.game.id = match.id;
        console.log(this.vote);
        this.gameProvider.createVote(this.vote).subscribe(function (res) {
            if (res.statusCode === 200) {
                _this.GetGameVotes();
            }
            else {
                _this.authProvider.showToast(res.description);
            }
        }, function (error) {
            _this.authProvider.showToast(error.error.description);
        });
    };
    MatchDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-match-details',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/match-details/match-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Match Details</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only navPush="NotificationPage">\n        <ion-icon name="md-notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar class="matchResultBar">\n    <!-- match item  -->\n    <ion-item class="matchResult">\n      <ion-grid>\n        <ion-row>\n          <!-- first team -->\n          <ion-col col>\n            <ion-item>\n              <img src="{{match.hometeam.imageurl}}" style="border-radius: 50px;" *ngIf="match.hometeam.imageurl" />\n              <img src="assets/imgs/appicon.png" style="border-radius: 50px;" *ngIf="!match.hometeam.imageurl" />\n              <p>{{match.hometeam.name}}</p>\n            </ion-item>\n          </ion-col>\n          <!-- match time -->\n          <ion-col col-auto>\n            <div class="result">\n              <span ion-text color="color1">{{match?.homeTeamScore}}</span>\n              <span ion-text style="padding: 0.3em;" color="color1">-</span>\n              <span ion-text color="color1">{{match?.awayTeamScore}}</span>\n            </div>\n            <p ion-text color="light">{{match?.status}}</p>\n          </ion-col>\n          <!-- second team -->\n          <ion-col col>\n            <ion-item>\n              <img src="{{match.awayteam.imageurl}}" style="border-radius: 50px;" *ngIf="match.awayteam.imageurl" />\n              <img src="assets/imgs/appicon.png" style="border-radius: 50px;" *ngIf="!match.awayteam.imageurl" />\n              <p>{{match.awayteam.name}}</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-center>\n            <p ion-text color="secondary" style="text-align: center;">{{match.country.name}} - {{match.league.name}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngSwitch]=\'tab\'>\n  <!-- tabs -->\n  <ion-segment [(ngModel)]="tab">\n    <ion-segment-button value="stats">DETAILS</ion-segment-button>\n    <ion-segment-button value="goals">VOTES</ion-segment-button>\n    <ion-segment-button value="timeline">COMMENTS</ion-segment-button>\n  </ion-segment>\n\n  <!-- match stats -->\n  <div class="matchStats" margin-top *ngSwitchCase="\'stats\'">\n    <h5 ion-text text-center color="color2">Match Details</h5>\n    <ion-list>\n      <!-- state with percentage -->\n      <ion-item margin-top style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin>Odds</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <p ion-text color="dark" no-margin>{{match.odds}}</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin>Prediction</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <p ion-text color="dark" no-margin>{{match.selection.name}}</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin>Confidence Level</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <p ion-text color="dark" no-margin>{{match.confidenceLevel}}</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <ion-item style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin>Match Time</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <p ion-text color="dark" no-margin>{{match.matchTime}}</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin>Match Date </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-4 text-center>\n              <p ion-text color="dark" no-margin>{{match.matchDate}}</p>\n            </ion-col>\n            <ion-col col-4>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <!-- goals -->\n  <div class="goals" *ngSwitchCase="\'goals\'" padding>\n    <h5 ion-text text-center color="color2">Match Votes</h5>\n    <ion-list>\n      <h5 ion-text text-center color="color2">Current Votes</h5>\n      <ion-grid style="margin-bottom: 0.5em;">\n        <ion-row>\n          <ion-col col-auto text-left style="width: 10em;">\n            <p ion-text color="color1" no-margin><b>{{match.hometeam.name}} Votes</b></p>\n          </ion-col>\n          <ion-col col text-center>\n            <p ion-text color="dark" no-margin><b>Draw Votes</b></p>\n          </ion-col>\n          <ion-col col-auto text-right style="width: 10em;">\n            <p ion-text color="color1" no-margin><b>{{match.awayteam.name}} Votes</b></p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-auto text-left>\n            <p ion-text color="dark" no-margin>{{votes.HomeVotes}}</p>\n          </ion-col>\n          <ion-col col text-center>\n            <p ion-text color="dark" no-margin>{{votes.DrawVotes}}</p>\n          </ion-col>\n          <ion-col col-auto text-right>\n            <p ion-text color="dark" no-margin>{{votes.AwayVotes}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <hr>\n\n      <div class="imgs" *ngIf="votes.UserVote">\n        <div class="imgProfile" [ngStyle]="{\'background-image\':\'url(\' + img2 + \')\'}">\n\n        </div>\n      </div>\n      <div class="nameAndMail" *ngIf="votes.UserVote">\n        <h5 ion-text color="dark">{{votes.UserVote.user.lastname}} {{votes.UserVote.user.firstname}}</h5>\n        <p ion-text color="dark" *ngIf="votes.UserVote.userVote === 1">{{votes.UserVote.game.hometeam.name}}:\n          <i>Wins</i></p>\n        <p ion-text color="dark" *ngIf="votes.UserVote.userVote === 2">{{votes.UserVote.game.awayteam.name}}:\n          <i>Wins</i></p>\n        <p ion-text color="dark" *ngIf="votes.UserVote.userVote === 3">Draw Match</p>\n      </div>\n      <hr>\n      <h5 ion-text text-center color="color2"  *ngIf="!votes.UserVote">Who do you think is going to win?</h5>\n      <h5 ion-text text-center color="color2"  *ngIf="votes.UserVote">You have voted.</h5>\n      <div style="margin-bottom: 0.5em;" text-center margin-top ion-text color="danger" *ngIf="!votes.UserVote">\n        You have not voted.\n      </div>\n      <ion-item margin-top style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text ion-button *ngIf="votes.UserVote" disabled="true" small outline color="color1" (click)="onVote(1, 1, 0, 0, match)" no-margin> <b>Vote - {{match.hometeam.name}}</b></p>\n              <p ion-text ion-button *ngIf="!votes.UserVote" small outline color="color1" (click)="onVote(1, 1, 0, 0, match)" no-margin> <b>Vote - {{match.hometeam.name}}</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <p ion-text color="dark" no-margin>Home Win</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <ion-item style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n               <p ion-text ion-button *ngIf="votes.UserVote" disabled="true" small outline color="color1" (click)="onVote(3,0,1,0,  match)" no-margin><b>Vote - X</b>\n               <p ion-text ion-button *ngIf="!votes.UserVote" small outline color="color1" (click)="onVote(3,0,1,0,  match)" no-margin><b>Vote - X</b>\n            </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <p ion-text color="dark" no-margin>Draw</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text ion-button *ngIf="votes.UserVote" disabled="true" small outline color="color1"  (click)="onVote(2,0,0,1, match)" no-margin> <b>Vote - {{match.awayteam.name}}</b></p>\n              <p ion-text ion-button *ngIf="!votes.UserVote" small outline color="color1"  (click)="onVote(2,0,0,1, match)" no-margin> <b>Vote - {{match.awayteam.name}}</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <p ion-text color="dark" no-margin>Away Win</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n     \n    </ion-list>\n  </div>\n\n  <div *ngSwitchCase="\'timeline\'">\n    <h4 margin ion-text color="color2">Man of the match</h4>\n    <ion-item class="avatarItem">\n      <ion-avatar item-left>\n        <img src="assets/imgs/player2.png" />\n      </ion-avatar>\n      <h5 ion-text color="dark">Player Name</h5>\n      <p ion-text color="dark">Arsenal</p>\n      <span ion-text color="color1" class="rateNum" item-right>6</span>\n    </ion-item>\n    <!-- highlights -->\n    <ion-list class="timeLine_list">\n      <ion-item [ngClass]="{\'team2\':item.team ==\'team2\'}" *ngFor="let item of highlights">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-auto>\n              <p ion-text color="color1">{{item.time}}\'</p>\n            </ion-col>\n            <ion-col col-auto>\n              <img src="assets/imgs/referee/{{item.img}}.png">\n            </ion-col>\n            <ion-col col>\n              <!-- for exchange player -->\n              <p ion-text color="color1" *ngIf="item.content2!=\'\'">{{item.content}}</p>\n              <p ion-text color="color2" *ngIf="item.content2!=\'\'">{{item.content2}}</p>\n\n              <!-- for other -->\n              <p ion-text color="dark" *ngIf="item.content2==\'\'">{{item.content}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/match-details/match-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_authenication_authenication__["a" /* AuthenicationProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["a" /* GamesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* Global */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */]])
    ], MatchDetailsPage);
    return MatchDetailsPage;
}());

//# sourceMappingURL=match-details.js.map

/***/ })

});
//# sourceMappingURL=25.js.map