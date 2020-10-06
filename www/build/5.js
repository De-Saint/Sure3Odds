webpackJsonp([5],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchVotesPageModule", function() { return MatchVotesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_votes__ = __webpack_require__(790);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MatchVotesPageModule = /** @class */ (function () {
    function MatchVotesPageModule() {
    }
    MatchVotesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__match_votes__["a" /* MatchVotesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__match_votes__["a" /* MatchVotesPage */]),
            ],
        })
    ], MatchVotesPageModule);
    return MatchVotesPageModule;
}());

//# sourceMappingURL=match-votes.module.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchVotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_games_games__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_Votes__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatchVotesPage = /** @class */ (function () {
    function MatchVotesPage(navCtrl, loadingCtrl, authProvider, gameProvider, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authProvider = authProvider;
        this.gameProvider = gameProvider;
        this.navParams = navParams;
        this.vote = new __WEBPACK_IMPORTED_MODULE_2__interfaces_Votes__["a" /* Votes */]("", "", { id: "" }, "", "", "");
        this.img2 = "assets/imgs/appicon.png";
        this.match = this.navParams.get("match");
        console.log(this.match);
    }
    MatchVotesPage.prototype.ngOnInit = function () {
        this.GetGameVotes();
    };
    MatchVotesPage.prototype.GetGameVotes = function () {
        var _this = this;
        this.gameProvider.GetGameVotes(this.match.id).subscribe(function (result) {
            console.log(result.data);
            _this.votes = result.data;
            console.log(_this.votes.AwayVotes);
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    MatchVotesPage.prototype.onCreateVote = function (uservote, homevote, drawvote, awayvote, match) {
        var _this = this;
        this.vote.userVote = uservote;
        this.vote.homeVote = homevote;
        this.vote.drawVote = drawvote;
        this.vote.awayVote = awayvote;
        this.vote.game.id = match.id;
        console.log(this.vote);
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.gameProvider.createVote(this.vote).subscribe(function (res) {
            loading.dismiss().catch(function () { });
            if (res.statusCode === 200) {
                _this.GetGameVotes();
            }
            else {
                _this.authProvider.showToast(res.description);
            }
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.error);
        });
    };
    MatchVotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-match-votes',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/match-votes/match-votes.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Predictions</ion-title>\n  </ion-navbar>\n  <ion-toolbar class="matchResultBar">\n    <!-- match item  -->\n    <ion-item class="matchResult">\n      <ion-grid>\n        <ion-row>\n          <!-- first team -->\n          <ion-col col>\n            <ion-item>\n              <img src="{{match.hometeam?.imageurl}}" style="border-radius: 50px;" *ngIf="match.hometeam?.imageurl" />\n              <img src="assets/imgs/appicon.png" style="border-radius: 50px;" *ngIf="!match.hometeam?.imageurl" />\n              <p>{{match.hometeam?.name}}</p>\n            </ion-item>\n          </ion-col>\n          <!-- match time -->\n          <ion-col col-auto>\n            <div class="result">\n              <span ion-text color="color1">{{match?.hometeamscore}}</span>\n              <span ion-text style="padding: 0.3em;" color="color1">-</span>\n              <span ion-text color="color1">{{match?.awayteamscore}}</span>\n            </div>\n            <p ion-text color="light" text-center>{{match.status?.name}}</p>\n          </ion-col>\n          <!-- second team -->\n          <ion-col col>\n            <ion-item>\n              <img src="{{match.awayteam?.imageurl}}" style="border-radius: 50px;" *ngIf="match.awayteam?.imageurl" />\n              <img src="assets/imgs/appicon.png" style="border-radius: 50px;" *ngIf="!match.awayteam?.imageurl" />\n              <p>{{match.awayteam?.name}}</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-center>\n            <p ion-text color="secondary" style="text-align: center;">{{match.country?.name}} - {{match.league?.name}}\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- goals -->\n  <div class="goals" padding>\n    <ion-list>\n      <h5 ion-text text-center margin-top color="color2">Current Votes</h5>\n      <ion-grid style="margin-bottom: 0.5em;">\n        <ion-row>\n          <ion-col col-auto text-left style="width: 10em;">\n            <p ion-text color="color1" no-margin><b>{{match.hometeam?.name}} Votes</b></p>\n          </ion-col>\n          <ion-col col text-center>\n            <p ion-text color="dark" no-margin><b>Draw Votes</b></p>\n          </ion-col>\n          <ion-col col-auto text-right style="width: 10em;">\n            <p ion-text color="color1" no-margin><b>{{match.awayteam?.name}} Votes</b></p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-auto text-left>\n            <p ion-text color="dark" no-margin>{{votes?.HomeVotes}}</p>\n          </ion-col>\n          <ion-col col text-center>\n            <p ion-text color="dark" no-margin>{{votes?.DrawVotes}}</p>\n          </ion-col>\n          <ion-col col-auto text-right>\n            <p ion-text color="dark" no-margin>{{votes?.AwayVotes}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <hr>\n\n      <div class="imgs" *ngIf="votes?.UserVote">\n        <div class="imgProfile" [ngStyle]="{\'background-image\':\'url(\' + img2 + \')\'}">\n\n        </div>\n      </div>\n      <div class="nameAndMail" *ngIf="votes?.UserVote">\n        <h5 ion-text color="dark">{{votes.UserVote.user?.lastname}} {{votes.UserVote.user?.firstname}}</h5>\n        <p ion-text color="dark" *ngIf="votes.UserVote?.userVote === 1">{{votes.UserVote.game.hometeam?.name}}:\n          <i>Wins</i></p>\n        <p ion-text color="dark" *ngIf="votes.UserVote?.userVote === 2">{{votes.UserVote.game.awayteam?.name}}:\n          <i>Wins</i></p>\n        <p ion-text color="dark" *ngIf="votes.UserVote?.userVote === 3">Draw Match</p>\n      </div>\n      <hr>\n      <h5 ion-text text-center color="color2" *ngIf="!votes?.UserVote">Who do you think is going to win?</h5>\n      <h5 ion-text text-center color="color2" *ngIf="votes?.UserVote">You have voted.</h5>\n      <div style="margin-bottom: 0.5em;" text-center margin-top ion-text color="danger" *ngIf="!votes?.UserVote">\n        You have not voted.\n      </div>\n      <ion-item margin-top style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text ion-button *ngIf="votes?.UserVote" disabled="true" small outline color="color1"\n                (click)="onCreateVote(1, 1, 0, 0, match)" no-margin> <b>{{match.hometeam?.name}} Wins</b>\n              </p>\n              <p ion-text ion-button *ngIf="!votes?.UserVote" small outline color="color1"\n                (click)="onCreateVote(1, 1, 0, 0, match)" no-margin> <b>{{match.hometeam?.name}} Wins</b>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <p ion-text color="dark" no-margin>Home Win</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <ion-item style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text ion-button *ngIf="votes?.UserVote" disabled="true" small outline color="color1"\n                (click)="onCreateVote(3,0,1,0,  match)" no-margin><b>X</b>\n                <p ion-text ion-button *ngIf="!votes?.UserVote" small outline color="color1"\n                  (click)="onCreateVote(3,0,1,0,  match)" no-margin><b>X</b>\n                </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <p ion-text color="dark" no-margin>Draw</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text ion-button *ngIf="votes?.UserVote" disabled="true" small outline color="color1"\n                (click)="onCreateVote(2,0,0,1, match)" no-margin> <b>{{match.awayteam?.name}} Wins</b>\n              </p>\n              <p ion-text ion-button *ngIf="!votes?.UserVote" small outline color="color1"\n                (click)="onCreateVote(2,0,0,1, match)" no-margin> <b>{{match.awayteam?.name}} Wins</b>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <p ion-text color="dark" no-margin>Away Win</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/match-votes/match-votes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["a" /* GamesProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"]])
    ], MatchVotesPage);
    return MatchVotesPage;
}());

//# sourceMappingURL=match-votes.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Votes; });
var Votes = /** @class */ (function () {
    function Votes(awayVote, drawVote, game, homeVote, id, userVote) {
        this.awayVote = awayVote;
        this.drawVote = drawVote;
        this.game = game;
        this.homeVote = homeVote;
        this.id = id;
        this.userVote = userVote;
    }
    return Votes;
}());

//# sourceMappingURL=Votes.js.map

/***/ })

});
//# sourceMappingURL=5.js.map