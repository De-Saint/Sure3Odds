webpackJsonp([17],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingTeamsPageModule", function() { return SettingTeamsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_teams__ = __webpack_require__(787);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingTeamsPageModule = /** @class */ (function () {
    function SettingTeamsPageModule() {
    }
    SettingTeamsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_teams__["a" /* SettingTeamsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_teams__["a" /* SettingTeamsPage */]),
            ],
        })
    ], SettingTeamsPageModule);
    return SettingTeamsPageModule;
}());

//# sourceMappingURL=setting-teams.module.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingTeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_games_games__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingTeamsPage = /** @class */ (function () {
    function SettingTeamsPage(authProvider, gamesProvider, navCtrl, navParams) {
        this.authProvider = authProvider;
        this.gamesProvider = gamesProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingTeamsPage.prototype.ngOnInit = function () {
        this.GetTeams();
    };
    SettingTeamsPage.prototype.GetTeams = function () {
        var _this = this;
        this.gamesProvider.GetTeams()
            .subscribe(function (resp) {
            if (resp.statusCode === 200) {
                _this.teams = resp.data;
                _this.originalteams = _this.teams;
                console.log(_this.teams);
            }
            else {
                console.log(resp.description);
            }
        }, function (error) {
            console.log(JSON.stringify(error));
            _this.authProvider.showToast(error.error.description);
        });
    };
    SettingTeamsPage.prototype.onSearch = function () {
        var _this = this;
        var term = this.searchTerm;
        if (term.trim() === '' || term.trim().length < 0) {
            if (this.teams.length === 0) {
                this.error = "No result found.";
            }
            else {
                this.teams = this.originalteams;
            }
        }
        else {
            //to search an already popolated arraylist
            this.teams = [];
            if (this.originalteams) {
                this.teams = this.originalteams.filter(function (team) {
                    if (team.name.toLocaleLowerCase().indexOf(term.toLowerCase()) > -1) {
                        return true;
                    }
                    else {
                        if (_this.teams.length === 0) {
                            _this.teams = [];
                            _this.error = "No result found.";
                        }
                        return false;
                    }
                });
            }
        }
    };
    SettingTeamsPage.prototype.onClear = function (ev) {
        this.searchTerm = "";
        this.teams = this.originalteams;
        this.error = '';
    };
    SettingTeamsPage.prototype.onCancel = function (ev) {
        this.searchTerm = "";
        this.teams = this.originalteams;
        this.error = '';
    };
    SettingTeamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-setting-teams',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-teams/setting-teams.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title>Manage Teams</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only navPush="NotificationPage">\n        <ion-icon name="md-notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="onCancel($event)" [showCancelButton]="true"\n  (ionClear)="onClear($event)" (ionInput)="onSearch()">\n</ion-searchbar>\n<div class="leagueStats">\n  <ion-list *ngFor="let team of teams">\n    <ion-item class="thumbnailItem">\n      <ion-thumbnail item-left>\n        <img src="{{team.imageurl}}" *ngIf="team.imageurl" />\n        <img src="assets/imgs/appicon.png" *ngIf="!team.imageurl" />\n      </ion-thumbnail>\n      <!-- team Name -->\n      <h5 ion-text padding-left margin-left color="dark">{{team.name}}</h5>\n      <!-- note -->\n      <p ion-text color="dark">{{team.league.name}}</p>\n      <!-- goals or rating Number -->\n      <span ion-text color="color1" class="" item-right>{{team.country.name}}</span>\n    </ion-item>\n  </ion-list>\n</div>\n\n<div class="" *ngIf="error">\n  <p ion-text text-center color="color2">No result found!</p> \n </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-teams/setting-teams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavParams */]])
    ], SettingTeamsPage);
    return SettingTeamsPage;
}());

//# sourceMappingURL=setting-teams.js.map

/***/ })

});
//# sourceMappingURL=17.js.map