webpackJsonp([3],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchDetailsPageModule", function() { return MatchDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_details__ = __webpack_require__(767);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__match_details__["a" /* MatchDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__match_details__["a" /* MatchDetailsPage */]),
            ],
        })
    ], MatchDetailsPageModule);
    return MatchDetailsPageModule;
}());

//# sourceMappingURL=match-details.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comments; });
var Comments = /** @class */ (function () {
    function Comments(comments, date, time, game, id, user) {
        this.comments = comments;
        this.date = date;
        this.time = time;
        this.game = game;
        this.id = id;
        this.user = user;
    }
    return Comments;
}());

//# sourceMappingURL=Comments.js.map

/***/ }),

/***/ 752:
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

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_Comments__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_Votes__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_games_games__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authenication_authenication__ = __webpack_require__(88);
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
    function MatchDetailsPage(navCtrl, authProvider, gameProvider, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.gameProvider = gameProvider;
        this.navParams = navParams;
        this.tab = 'stats';
        this.vote = new __WEBPACK_IMPORTED_MODULE_1__interfaces_Votes__["a" /* Votes */]("", "", { id: "" }, "", "", "");
        this.comment = new __WEBPACK_IMPORTED_MODULE_0__interfaces_Comments__["a" /* Comments */]("", "", "", { id: "" }, "", { id: "" });
        this.img2 = "assets/imgs/appicon.png";
        this.match = this.navParams.data;
        console.log(this.match);
    }
    MatchDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.mutationObserver = new MutationObserver(function (mutations) {
            _this.contentArea.scrollToBottom();
        });
        this.mutationObserver.observe(this.chatList.nativeElement, {
            childList: true
        });
    };
    MatchDetailsPage.prototype.onClick = function () {
        this.contentArea.scrollToBottom(500);
    };
    MatchDetailsPage.prototype.ngOnInit = function () {
        this.GetGameVotes();
        this.GetGameComments();
        this.jti = this.authProvider.currentUserDataValue.jti;
    };
    MatchDetailsPage.prototype.GetGameVotes = function () {
        var _this = this;
        this.gameProvider.GetGameVotes(this.match.id).subscribe(function (result) {
            _this.votes = result.data;
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    MatchDetailsPage.prototype.GetGameComments = function () {
        var _this = this;
        this.gameProvider.GetGameComments(this.match.id).subscribe(function (result) {
            _this.comments = result.data;
            console.log(_this.comments);
        }, function (error) {
            _this.comments = [];
            _this.error = error.error.error;
            console.log(JSON.stringify(_this.error));
        });
    };
    MatchDetailsPage.prototype.onCreateVote = function (uservote, homevote, drawvote, awayvote, match) {
        var _this = this;
        this.vote.userVote = uservote;
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
            _this.authProvider.showToast(error.error.error);
        });
    };
    MatchDetailsPage.prototype.onCreateComment = function (comment, match) {
        var _this = this;
        console.log(comment);
        if (this.comment.comments) {
            this.comment.game.id = match.id;
            this.gameProvider.createComment(this.comment).subscribe(function (res) {
                if (res.statusCode === 200) {
                    _this.GetGameComments();
                    // this.content.scrollToBottom();
                }
                else {
                    _this.authProvider.showToast(res.description);
                }
            }, function (error) {
                _this.authProvider.showToast(error.error.error);
            });
        }
        else {
            this.authProvider.showToast("Comment input field is empty");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Content"])
    ], MatchDetailsPage.prototype, "contentArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["List"], { read: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
    ], MatchDetailsPage.prototype, "chatList", void 0);
    MatchDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-match-details',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/match-details/match-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Match Details</ion-title>\n  </ion-navbar>\n  <ion-toolbar class="matchResultBar">\n    <!-- match item  -->\n    <ion-item class="matchResult">\n      <ion-grid>\n        <ion-row>\n          <!-- first team -->\n          <ion-col col>\n            <ion-item>\n              <img src="{{match.hometeam.imageurl}}" style="border-radius: 50px;" *ngIf="match.hometeam.imageurl" />\n              <img src="assets/imgs/appicon.png" style="border-radius: 50px;" *ngIf="!match.hometeam.imageurl" />\n              <p>{{match.hometeam.name}}</p>\n            </ion-item>\n          </ion-col>\n          <!-- match time -->\n          <ion-col col-auto>\n            <div class="result">\n              <span ion-text color="color1">{{match?.hometeamscore}}</span>\n              <span ion-text style="padding: 0.3em;" color="color1">-</span>\n              <span ion-text color="color1">{{match?.awayteamscore}}</span>\n            </div>\n            <p ion-text color="light" text-center>{{match?.status.name}}</p>\n          </ion-col>\n          <!-- second team -->\n          <ion-col col>\n            <ion-item>\n              <img src="{{match.awayteam.imageurl}}" style="border-radius: 50px;" *ngIf="match.awayteam.imageurl" />\n              <img src="assets/imgs/appicon.png" style="border-radius: 50px;" *ngIf="!match.awayteam.imageurl" />\n              <p>{{match.awayteam.name}}</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-center>\n            <p ion-text color="secondary" style="text-align: center;">{{match.country.name}} - {{match.league.name}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- match stats -->\n  <div class="matchStats" margin-top>\n \n    <ion-list>\n      <!-- state with percentage -->\n      <ion-item margin-top style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin>Odds</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <p ion-text color="dark" no-margin>{{match.odds}}</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin>Prediction</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-4 text-center>\n              <p ion-text color="dark" no-margin>{{match.selections.name}}</p>\n            </ion-col>\n            <ion-col col-4>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <ion-item style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin>Match Time</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-2 text-center>\n              <p ion-text color="dark" no-margin>{{match.matchtime}}</p>\n            </ion-col>\n            <ion-col col-5>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item style="margin-bottom: 0.5em;">\n        <ion-grid>\n          <ion-row>\n            <ion-col col text-center>\n              <p ion-text color="dark" no-margin>Match Date </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4>\n              <div class="progressBar" progress-right>\n                <span class="container"></span>\n              </div>\n            </ion-col>\n            <ion-col col-4 text-center>\n              <p ion-text color="dark" no-margin>{{match.matchdate}}</p>\n            </ion-col>\n            <ion-col col-4>\n              <div class="progressBar">\n                <span class="container"></span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/match-details/match-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_games_games__["a" /* GamesProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"]])
    ], MatchDetailsPage);
    return MatchDetailsPage;
}());

//# sourceMappingURL=match-details.js.map

/***/ })

});
//# sourceMappingURL=3.js.map