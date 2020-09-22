webpackJsonp([49],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesPageModule", function() { return GamesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__games__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GamesPageModule = /** @class */ (function () {
    function GamesPageModule() {
    }
    GamesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__games__["a" /* GamesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__games__["a" /* GamesPage */]),
            ],
        })
    ], GamesPageModule);
    return GamesPageModule;
}());

//# sourceMappingURL=games.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_games_games__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamesPage = /** @class */ (function () {
    function GamesPage(navCtrl, authProvider, gamesProvider, alertCtrl, loadingCtrl, actionSheetCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.gamesProvider = gamesProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
    }
    GamesPage.prototype.ionViewWillEnter = function () {
        var currentdate = this.gamesProvider.getDate();
        this.GetGames(currentdate);
    };
    GamesPage.prototype.GetGames = function (currentdate) {
        var _this = this;
        this.gamesProvider.GetGames(currentdate)
            .subscribe(function (resp) {
            if (resp.statusCode === 200) {
                console.log(resp);
                _this.gamelist = resp.data;
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
        }, function (error) {
            _this.authProvider.showToast(error.error.error);
        });
    };
    GamesPage.prototype.onGameOption = function (game) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Game Options',
            buttons: [
                {
                    text: 'View / Edit',
                    handler: function () { _this.navCtrl.push('GameEditPage', { game: game }); }
                }, {
                    text: 'Delete',
                    handler: function () { _this.onDeleteGame(game); }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    GamesPage.prototype.onDeleteGame = function (game) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        var confirm = this.alertCtrl.create({
            title: 'Delete Game',
            message: 'Do you want to delete this game?</b><br/><br/>All the votes and comments on this game would also be deleted.</b><br/><br/>This is action is irreversible.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Proceed',
                    handler: function () {
                        loading.present();
                        _this.gamesProvider.deleteGame(game.id).subscribe(function (res) {
                            loading.dismiss().catch(function () { });
                            if (res.statusCode === 200) {
                                var currentdate = _this.gamesProvider.getDate();
                                _this.GetGames(currentdate);
                            }
                            else {
                                _this.authProvider.showToast(res.description);
                            }
                        }, function (error) {
                            loading.dismiss().catch(function () { });
                            _this.authProvider.showToast(error.error.error);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    GamesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-games',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/games/games.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Games</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only navPush="GameNewPage">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <!-- matches list -->\n  <div class="gamelist">\n    <ion-list class="" *ngFor="let game of gamelist">\n      <ion-list-header>\n        {{game.title}}\n        <ion-icon name="football" color="color1" item-left></ion-icon>\n        <button ion-button clear item-end>Total odds : {{game.odds ? game.odds : \'0.0\'}}</button>\n      </ion-list-header>\n      <!-- match item  -->\n      <div class="" *ngIf="game.items">\n        <ion-item class="matchItem" *ngFor="let match of game.items">\n          <ion-grid>\n            <ion-row (click)="onGameOption(match)">\n              <ion-col col>\n                <ion-item>\n                  <img src="{{match.hometeam.imageurl}}" item-right *ngIf="match.hometeam.imageurl" />\n                  <img src="assets/imgs/appicon.png" item-right *ngIf="!match.hometeam.imageurl" />\n                  <p text-right>{{match.hometeam.name}}</p>\n                </ion-item>\n              </ion-col>\n              <ion-col col-auto>\n                <span ion-text color="color1">{{match.matchtime}}</span>\n                <p ion-text color="color2"><b>{{match.odds}}</b></p>\n                <p ion-text color="color2">({{match.hometeamscore}}) <b>{{match.selections.name}}</b> ({{match.awayteamscore}})</p>\n              </ion-col>\n              <ion-col col>\n                <ion-item>\n                  <img src="{{match.awayteam.imageurl}}" item-left *ngIf="match.awayteam.imageurl" />\n                  <img src="assets/imgs/appicon.png" item-left *ngIf="!match.awayteam.imageurl" />\n                  <p text-left>{{match.awayteam.name}}</p>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </div>\n      <div class="" *ngIf="game.msg">\n        <p ion-text text-center color="color2">{{game.msg}}</p>\n      </div>\n\n    </ion-list>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/games/games.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], GamesPage);
    return GamesPage;
}());

//# sourceMappingURL=games.js.map

/***/ })

});
//# sourceMappingURL=49.js.map