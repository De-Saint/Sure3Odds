webpackJsonp([25],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingLeaguesPageModule", function() { return SettingLeaguesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_leagues__ = __webpack_require__(794);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingLeaguesPageModule = /** @class */ (function () {
    function SettingLeaguesPageModule() {
    }
    SettingLeaguesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_leagues__["a" /* SettingLeaguesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_leagues__["a" /* SettingLeaguesPage */]),
            ],
        })
    ], SettingLeaguesPageModule);
    return SettingLeaguesPageModule;
}());

//# sourceMappingURL=setting-leagues.module.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingLeaguesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_games_games__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingLeaguesPage = /** @class */ (function () {
    function SettingLeaguesPage(navCtrl, authProvider, gamesProvider, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.gamesProvider = gamesProvider;
        this.navParams = navParams;
        this.currentPage = 1;
        this.totalPage = 0;
        this.perPage = 0;
        this.totalData = 0;
    }
    SettingLeaguesPage.prototype.ionViewWillEnter = function () {
        this.GetLeagues();
    };
    SettingLeaguesPage.prototype.GetLeagues = function () {
        var _this = this;
        this.gamesProvider.GetLeagues(0, 50)
            .subscribe(function (resp) {
            console.log(resp);
            if (resp.statusCode === 200) {
                _this.leagues = resp.data.content;
                _this.originalleagues = _this.leagues;
                _this.currentPage = resp.data.number;
                _this.totalPage = resp.data.totalPages;
                _this.totalData = resp.data.totalElements;
                _this.perPage = resp.data.size;
                console.log(_this.currentPage, _this.totalPage, _this.totalData, _this.perPage);
                _this.noleagues = 'leagues';
                console.log(_this.leagues);
            }
            else {
                console.log(resp.description);
            }
        }, function (error) {
            console.log(JSON.stringify(error));
            _this.error = 'none';
            _this.authProvider.showToast(error.error.description);
        });
    };
    SettingLeaguesPage.prototype.onSearch = function () {
        var _this = this;
        var searchvalue = this.searchTerm;
        if (searchvalue.trim() === '') {
            this.leagues = this.originalleagues;
        }
        else {
            if (searchvalue.length >= 3) {
                this.gamesProvider.SearchLeagues(searchvalue, 0, 50)
                    .subscribe(function (resp) {
                    console.log(resp);
                    if (resp.statusCode === 200) {
                        _this.leagues = resp.data.content;
                        _this.currentPage = resp.data.number;
                        _this.totalPage = resp.data.totalPages;
                        _this.totalData = resp.data.totalElements;
                        _this.perPage = resp.data.size;
                        console.log(_this.currentPage, _this.totalPage, _this.totalData, _this.perPage);
                    }
                    else {
                        console.log(resp.description);
                    }
                }, function (error) {
                    console.log(JSON.stringify(error));
                    _this.error = 'none';
                    _this.authProvider.showToast(error.error.description);
                });
            }
        }
    };
    SettingLeaguesPage.prototype.onClear = function (ev) {
        this.searchTerm = "";
        this.leagues = this.originalleagues;
    };
    SettingLeaguesPage.prototype.onCancel = function (ev) {
        this.searchTerm = "";
        this.leagues = this.originalleagues;
    };
    SettingLeaguesPage.prototype.scrollInfinite = function (event) {
        var _this = this;
        this.currentPage += 1;
        setTimeout(function () {
            _this.gamesProvider.GetLeagues(_this.currentPage, _this.perPage)
                .subscribe(function (resp) {
                if (resp.statusCode === 200) {
                    _this.currentPage = resp.data.number;
                    _this.totalPage = resp.data.totalPages;
                    _this.totalData = resp.data.totalElements;
                    _this.perPage = resp.data.size;
                    console.log(_this.currentPage, _this.totalPage, _this.totalData, _this.perPage);
                    _this.noleagues = 'league';
                    for (var i = 0; i < resp.data.content.length; i++) {
                        _this.leagues.push(resp.data.content[i]);
                    }
                }
                else {
                    console.log(resp.description);
                }
                event.complete();
            }, function (error) {
                console.log("End of the countries.");
                _this.noleagues = 'none';
                event.complete();
            });
        }, 1000);
    };
    SettingLeaguesPage.prototype.onGotoTop = function () {
        this.content.scrollToTop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Content"])
    ], SettingLeaguesPage.prototype, "content", void 0);
    SettingLeaguesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-setting-leagues',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-leagues/setting-leagues.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Leagues</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only navPush="SettingLeagueAddPage">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="onCancel($event)" [showCancelButton]="true"\n    (ionClear)="onClear($event)" (ionInput)="onSearch()">\n  </ion-searchbar>\n  <div class="leagueStats">\n    <ion-list *ngFor="let league of leagues">\n      <ion-item class="thumbnailItem" navPush="SettingLeagueEditPage" [navParams]="league">\n        <ion-thumbnail item-left>\n\n          <img src="{{league.imageurl}}" *ngIf="league.imageurl" />\n          <img src="assets/imgs/appicon.png" *ngIf="!league.imageurl" />\n        </ion-thumbnail>\n        <!-- team Name -->\n        <h5 ion-text padding-left margin-left color="dark">{{league.name}}</h5>\n        <!-- note -->\n        <!-- <p ion-text color="dark">{{item.note}}</p> -->\n        <!-- goals or rating Number -->\n        <span ion-text color="color1" class="" small item-right>{{league.country.name}}</span>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class="" *ngIf="error">\n    <p ion-text text-center color="color2">No result found!</p>\n  </div>\n  <div text-center margin-top margin-bottonm *ngIf="noleagues === \'none\'" (click)="onGotoTop()">\n    <button ion-button small color="color2">Back to Top</button>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="scrollInfinite($event)" *ngIf="currentPage < totalPage">\n    <ion-infinite-scroll-content  loadingSpinner="bubbles"\n    loadingText="Loading page {{currentPage}} of {{totalPage}}"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-leagues/setting-leagues.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], SettingLeaguesPage);
    return SettingLeaguesPage;
}());

//# sourceMappingURL=setting-leagues.js.map

/***/ })

});
//# sourceMappingURL=25.js.map