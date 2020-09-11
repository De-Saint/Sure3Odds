webpackJsonp([50],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchCommentsPageModule", function() { return MatchCommentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_comments__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MatchCommentsPageModule = /** @class */ (function () {
    function MatchCommentsPageModule() {
    }
    MatchCommentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__match_comments__["a" /* MatchCommentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__match_comments__["a" /* MatchCommentsPage */]),
            ],
        })
    ], MatchCommentsPageModule);
    return MatchCommentsPageModule;
}());

//# sourceMappingURL=match-comments.module.js.map

/***/ }),

/***/ 737:
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

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchCommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_global__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_games_games__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_Comments__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MatchCommentsPage = /** @class */ (function () {
    function MatchCommentsPage(navCtrl, authProvider, gameProvider, global, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.gameProvider = gameProvider;
        this.global = global;
        this.navParams = navParams;
        this.comment = new __WEBPACK_IMPORTED_MODULE_3__interfaces_Comments__["a" /* Comments */]("", "", "", { id: "" }, "", { id: "" });
        this.img2 = "assets/imgs/appicon.png";
        this.match = this.navParams.data;
        console.log(this.match);
    }
    MatchCommentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.mutationObserver = new MutationObserver(function (mutations) {
            _this.contentArea.scrollToBottom();
        });
        this.mutationObserver.observe(this.chatList.nativeElement, {
            childList: true
        });
    };
    MatchCommentsPage.prototype.ngOnInit = function () {
        this.GetGameComments();
        this.jti = this.authProvider.currentUserDataValue.jti;
    };
    MatchCommentsPage.prototype.GetGameComments = function () {
        var _this = this;
        this.gameProvider.GetGameComments(this.match.id).subscribe(function (result) {
            _this.comments = result.data;
            console.log(_this.comments);
            _this.error = '';
        }, function (error) {
            _this.comments = [];
            _this.error = error.error.description;
            console.log(JSON.stringify(_this.error));
        });
    };
    MatchCommentsPage.prototype.onCreateComment = function (comment, match) {
        var _this = this;
        console.log(comment);
        if (this.comment.comments) {
            this.comment.game.id = match.id;
            this.gameProvider.createComment(this.comment).subscribe(function (res) {
                if (res.statusCode === 200) {
                    _this.GetGameComments();
                    _this.comment.comments = '';
                }
                else {
                    _this.authProvider.showToast(res.description);
                }
            }, function (error) {
                _this.authProvider.showToast(error.error.description);
            });
        }
        else {
            this.authProvider.showToast("Comment input field is empty");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* Content */])
    ], MatchCommentsPage.prototype, "contentArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["p" /* List */], { read: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ElementRef */])
    ], MatchCommentsPage.prototype, "chatList", void 0);
    MatchCommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'page-match-comments',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/match-comments/match-comments.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu" ></ion-icon>\n    </button>\n    <ion-title>Match Details</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only navPush="NotificationPage">\n        <ion-icon name="md-notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar class="matchResultBar">\n    <!-- match item  -->\n    <ion-item class="matchResult">\n      <ion-grid>\n        <ion-row>\n          <!-- first team -->\n          <ion-col col>\n            <ion-item>\n              <img src="{{match.hometeam.imageurl}}" style="border-radius: 50px;" *ngIf="match.hometeam.imageurl" />\n              <img src="assets/imgs/appicon.png" style="border-radius: 50px;" *ngIf="!match.hometeam.imageurl" />\n              <p>{{match.hometeam.name}}</p>\n            </ion-item>\n          </ion-col>\n          <!-- match time -->\n          <ion-col col-auto>\n            <div class="result">\n              <span ion-text color="color1">{{match?.homeTeamScore}}</span>\n              <span ion-text style="padding: 0.3em;" color="color1">-</span>\n              <span ion-text color="color1">{{match?.awayTeamScore}}</span>\n            </div>\n            <p ion-text color="light">{{match?.status}}</p>\n          </ion-col>\n          <!-- second team -->\n          <ion-col col>\n            <ion-item>\n              <img src="{{match.awayteam.imageurl}}" style="border-radius: 50px;" *ngIf="match.awayteam.imageurl" />\n              <img src="assets/imgs/appicon.png" style="border-radius: 50px;" *ngIf="!match.awayteam.imageurl" />\n              <p>{{match.awayteam.name}}</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-center>\n            <p ion-text color="secondary" style="text-align: center;">{{match.country.name}} - {{match.league.name}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="timeLine_list">\n    <ion-item [ngClass]="{\'team2\':comment.user.id == jti}" *ngFor="let comment of comments"   #chatList>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-auto>\n            <p ion-text color="color1">{{comment.time}}\'</p>\n          </ion-col>\n          <ion-col col-auto>\n            <img src="assets/imgs/appicon.png" />\n          </ion-col>\n          <ion-col col>\n            <p ion-text color="dark">{{comment.comments}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <div color="color2" text-center *ngIf="error">\n    What do you think about <br /> <br /> <strong>{{match.hometeam.name}}</strong> Vs  <strong>{{match.awayteam.name}}</strong>?\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid class="white bordertop lightborder">\n      <ion-row wrap>\n        <ion-col col-10 class="center">\n          <ion-input type="text" class="" [(ngModel)]="comment.comments" placeholder="Type a message"></ion-input>\n        </ion-col>\n        <ion-col col-2 class="center ">\n          <button ion-button icon-left round class="round paddingleft half-paddingright" color="primary" (click)="onCreateComment(comment, match)">\n            <ion-icon name="send"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/match-comments/match-comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_games_games__["a" /* GamesProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_global__["a" /* Global */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["u" /* NavParams */]])
    ], MatchCommentsPage);
    return MatchCommentsPage;
}());

//# sourceMappingURL=match-comments.js.map

/***/ })

});
//# sourceMappingURL=50.js.map