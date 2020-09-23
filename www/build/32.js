webpackJsonp([32],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingTeamViewPageModule", function() { return SettingTeamViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_team_view__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingTeamViewPageModule = /** @class */ (function () {
    function SettingTeamViewPageModule() {
    }
    SettingTeamViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_team_view__["a" /* SettingTeamViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_team_view__["a" /* SettingTeamViewPage */]),
            ],
        })
    ], SettingTeamViewPageModule);
    return SettingTeamViewPageModule;
}());

//# sourceMappingURL=setting-team-view.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingTeamViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_games_games__ = __webpack_require__(353);
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




var SettingTeamViewPage = /** @class */ (function () {
    function SettingTeamViewPage(navCtrl, loadingCtrl, alertCtrl, authProvider, gamesProvider, actionSheetCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.gamesProvider = gamesProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.currentPage = 1;
        this.totalPage = 0;
        this.perPage = 0;
        this.totalData = 0;
        this.league = this.navParams.get("league");
        console.log(this.league);
    }
    SettingTeamViewPage.prototype.ionViewWillEnter = function () {
        this.getLeagueTeams();
    };
    SettingTeamViewPage.prototype.getLeagueTeams = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.gamesProvider.GetTeamsByLeagueId(this.league.id, 0, 10)
            .subscribe(function (resp) {
            loading.dismiss().catch(function () { });
            if (resp.statusCode === 200) {
                _this.teams = resp.data.content;
                _this.originalteams = _this.teams;
                _this.currentPage = resp.data.number;
                _this.totalPage = resp.data.totalPages;
                _this.totalData = resp.data.totalElements;
                _this.perPage = resp.data.size;
                _this.noteams = 'teams';
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.error);
        });
    };
    SettingTeamViewPage.prototype.onSearch = function () {
        var _this = this;
        var searchvalue = this.searchTerm;
        if (searchvalue.trim() === '') {
            this.teams = this.originalteams;
        }
        else {
            if (searchvalue.length >= 3) {
                this.gamesProvider.SearchTeamsByLeagueIdAndName(searchvalue, this.league.id, 0, 10)
                    .subscribe(function (resp) {
                    if (resp.statusCode === 200) {
                        _this.teams = resp.data.content;
                        _this.currentPage = resp.data.number;
                        _this.totalPage = resp.data.totalPages;
                        _this.totalData = resp.data.totalElements;
                        _this.perPage = resp.data.size;
                    }
                    else {
                        _this.authProvider.showToast(resp.description);
                    }
                    _this.error = '';
                }, function (error) {
                    _this.error = 'none';
                    _this.teams = [];
                    _this.authProvider.showToast(error.error.error);
                });
            }
        }
    };
    SettingTeamViewPage.prototype.onClear = function (ev) {
        this.searchTerm = "";
        this.teams = this.originalteams;
    };
    SettingTeamViewPage.prototype.onCancel = function (ev) {
        this.searchTerm = "";
        this.teams = this.originalteams;
    };
    SettingTeamViewPage.prototype.scrollInfinite = function (event) {
        var _this = this;
        this.currentPage += 1;
        setTimeout(function () {
            _this.gamesProvider.GetTeamsByLeagueId(_this.league.id, _this.currentPage, _this.perPage)
                .subscribe(function (resp) {
                if (resp.statusCode === 200) {
                    _this.currentPage = resp.data.number;
                    _this.totalPage = resp.data.totalPages;
                    _this.totalData = resp.data.totalElements;
                    _this.perPage = resp.data.size;
                    _this.noteams = 'teams';
                    for (var i = 0; i < resp.data.content.length; i++) {
                        _this.teams.push(resp.data.content[i]);
                    }
                }
                else {
                    _this.authProvider.showToast(resp.description);
                }
                event.complete();
            }, function (error) {
                _this.noteams = 'none';
                event.complete();
            });
        }, 1000);
    };
    SettingTeamViewPage.prototype.onGotoTop = function () {
        this.content.scrollToTop();
    };
    SettingTeamViewPage.prototype.onTeamOption = function (team) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Team Options',
            buttons: [
                {
                    text: 'View / Edit',
                    handler: function () { _this.navCtrl.push('SettingTeamEditPage', { team: team }); }
                }, {
                    text: 'Promote / Relegate',
                    handler: function () { _this.onPromoteDemote(team); }
                }, {
                    text: 'Delete From League',
                    handler: function () { _this.onDeleteTeam(team); }
                }, {
                    text: 'Add To League',
                    handler: function () { _this.onAssignTeam(team); }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    SettingTeamViewPage.prototype.onDeleteTeam = function (team) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        var confirm = this.alertCtrl.create({
            title: 'Delete Team',
            message: "Do you want to delete <b>" + team.name + "</b> <br/>from <br/><b>" + team.league.name + "</b> league?<br/><br/>This is action is irreversible.",
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
                        _this.gamesProvider.deleteTeam(team.id).subscribe(function (res) {
                            loading.dismiss().catch(function () { });
                            if (res.statusCode === 200) {
                                _this.navCtrl.pop();
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
    SettingTeamViewPage.prototype.onAssignTeam = function (team) {
        var _this = this;
        this.alertCtrl.create({
            title: "Assign To Another League",
            message: "Would assign/add <b>" + team.name + "</b> to another league in the selected country.<br/><br/>You would select a country and the league within the selected country to assign <b>" + team.name + " to</b>.",
            enableBackdropDismiss: !1,
            buttons: [{
                    text: "Cancel",
                    handler: function () {
                    }
                }, {
                    text: "Continue",
                    handler: function () { _this.navCtrl.push('SettingTeamAssignPage', { team: team, 'option': 'Promote' }); }
                }]
        }).present();
    };
    SettingTeamViewPage.prototype.onPromoteDemote = function (team) {
        var _this = this;
        this.alertCtrl.create({
            title: "Promote/Relegate Team",
            message: "Would remove <b>" + team.name + "</b> from the current league - <b>" + team.league.name + "</b>.<br/><br/>Then you would select another league within the same country - <b>" + team.country.name + "</b> to assign <b>" + team.name + " to</b>.",
            enableBackdropDismiss: !1,
            buttons: [{
                    text: "Cancel",
                    handler: function () {
                    }
                }, {
                    text: "Continue",
                    handler: function () { _this.navCtrl.push('SettingTeamManagePage', { team: team }); }
                }]
        }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Content"])
    ], SettingTeamViewPage.prototype, "content", void 0);
    SettingTeamViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-setting-team-view',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-team-view/setting-team-view.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{league.name}} Teams</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only navPush="SettingTeamAddPage">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="onCancel($event)" [showCancelButton]="true"\n    (ionClear)="onClear($event)" (ionInput)="onSearch()">\n  </ion-searchbar>\n  <div class="leagueStats">\n    <ion-list *ngFor="let team of teams">\n      <ion-item class="thumbnailItem" (click)="onTeamOption(team)">\n        <ion-thumbnail item-left>\n          <img src="{{team.imageurl}}" *ngIf="team.imageurl" />\n          <img src="/assets/imgs/appicon.png" *ngIf="!team.imageurl" />\n        </ion-thumbnail>\n        <!-- team Name -->\n        <h5 ion-text padding-left margin-left color="dark">{{team.name}}</h5>\n        <!-- note -->\n        <p ion-text padding-left margin-left color="dark">{{team.league.name}}</p>\n        <!-- goals or rating Number -->\n        <span ion-text color="color1" class="" item-right>{{team.country.name}}</span>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class="" *ngIf="error">\n    <p ion-text text-center color="color2">No result found!</p>\n  </div>\n  <div text-center margin-top margin-bottonm *ngIf="noteams === \'none\'" (click)="onGotoTop()">\n    <button ion-button small color="color2">Back to Top</button>\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="scrollInfinite($event)" *ngIf="currentPage < totalPage">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading page {{currentPage}} of {{totalPage}}">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-team-view/setting-team-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], SettingTeamViewPage);
    return SettingTeamViewPage;
}());

//# sourceMappingURL=setting-team-view.js.map

/***/ })

});
//# sourceMappingURL=32.js.map