webpackJsonp([47],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMatchesPageModule", function() { return AllMatchesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_matches__ = __webpack_require__(789);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllMatchesPageModule = /** @class */ (function () {
    function AllMatchesPageModule() {
    }
    AllMatchesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_matches__["a" /* AllMatchesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__all_matches__["a" /* AllMatchesPage */]),
            ],
        })
    ], AllMatchesPageModule);
    return AllMatchesPageModule;
}());

//# sourceMappingURL=all-matches.module.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllMatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_games_games__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__capacitor_core__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var Browser = __WEBPACK_IMPORTED_MODULE_5__capacitor_core__["c" /* Plugins */].Browser;
var AllMatchesPage = /** @class */ (function () {
    function AllMatchesPage(navCtrl, authProvider, loadingCtrl, appVersion, platform, alertCtrl, actionSheetCtrl, gamesProvider) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.appVersion = appVersion;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.gamesProvider = gamesProvider;
        // calender Function
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        this.days_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.days = [];
        this.myDate = new Date();
        this.year = this.myDate.getFullYear();
        this.month_num = this.myDate.getMonth();
        this.month_name = this.monthNames[this.month_num];
        this.getDaysInMonth(this.month_num, this.year);
        this.currentDate = this.myDate;
        this.getVersionNumber();
    }
    AllMatchesPage.prototype.ngOnInit = function () {
        var currentdate = this.gamesProvider.getDate();
        this.GetGames(currentdate);
        var date = this.myDate.getDate();
        var today = date - 1;
        this.isGroupShown(today);
        this.shownGroup = today;
    };
    AllMatchesPage.prototype.getDaysInMonth = function (month, year) {
        // Since no month has fewer than 28 days
        var date = new Date(year, month);
        while (date.getMonth() === month) {
            var a = new Date(date);
            var day_num = a.getDate();
            this.days.push({ name: this.days_name[a.getDay()], day_num: day_num, month: month + 1, year: year });
            date.setDate(date.getDate() + 1);
        }
    };
    // increase and decrease month function
    AllMatchesPage.prototype.change_month = function (type) {
        this.shownGroup = null;
        if (type == 'increase') {
            this.month_num = this.month_num + 1;
            if (this.month_num >= 12) {
                this.month_num = 0;
                this.year = this.year + 1;
            }
        }
        else if (type == 'decrease') {
            this.month_num = this.month_num - 1;
            if (this.month_num < 0) {
                this.month_num = 11;
                this.year = this.year - 1;
            }
        }
        this.month_name = this.monthNames[this.month_num];
        this.days = [];
        this.getDaysInMonth(this.month_num, this.year);
    };
    AllMatchesPage.prototype.toggleGroup = function (group) {
        this.shownGroup = group;
    };
    AllMatchesPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    AllMatchesPage.prototype.onClick = function (day) {
        this.shownGroup = null;
        var date = this.gamesProvider.computeOldMatchDate(day);
        this.GetGames(date);
        this.month_name = this.monthNames[this.month_num];
        this.days = [];
        this.getDaysInMonth(this.month_num, this.year);
    };
    AllMatchesPage.prototype.GetGames = function (currentdate) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.gamesProvider.GetGames(currentdate)
            .subscribe(function (resp) {
            loading.dismiss().catch(function () { });
            if (resp.statusCode === 200) {
                _this.gamelist = resp.data;
            }
            console.log(_this.gamelist);
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.description);
        });
    };
    AllMatchesPage.prototype.onMatchOption = function (match) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Match Options',
            buttons: [
                {
                    text: 'View Details',
                    handler: function () { _this.navCtrl.push('MatchDetailsPage', { match: match }); }
                }, {
                    text: 'Post Your Comment',
                    handler: function () { _this.navCtrl.push('MatchCommentsPage', { match: match }); }
                }, {
                    text: 'Predict Match',
                    handler: function () { _this.navCtrl.push('MatchVotesPage', { match: match }); }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    AllMatchesPage.prototype.getVersionNumber = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.platform.ready().then(function () {
                    if (_this.platform.is("android") || _this.platform.is("ios")) {
                        _this.appVersion.getVersionNumber()
                            .then(function (version) {
                            _this.CheckAppVersion(version);
                        }).catch(function () {
                        });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    AllMatchesPage.prototype.CheckAppVersion = function (appversion) {
        var _this = this;
        this.platform.ready().then(function () {
            _this.gamesProvider.GetAppVersion().subscribe(function (result) {
                if (result.statusCode === 200) {
                    var serverAppVersion = result.data;
                    if (_this.platform.is('android')) {
                        if (String(appversion) !== String(serverAppVersion.android)) {
                            _this.UpdateVersion();
                        }
                    }
                    else if (_this.platform.is('ios')) {
                        if (String(appversion) === String(serverAppVersion.ios)) {
                            _this.UpdateVersion();
                        }
                    }
                }
            }, function (error) {
            });
        });
    };
    AllMatchesPage.prototype.UpdateVersion = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Update Available!',
            message: 'A new version of Sure3Odds is available. Please update to the new version now!!!',
            buttons: [
                {
                    text: 'Update Later',
                    handler: function () {
                    }
                },
                {
                    text: 'Update Now',
                    handler: function () {
                        _this.onUpdateNow();
                    }
                }
            ]
        });
        confirm.present();
    };
    AllMatchesPage.prototype.onUpdateNow = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (_this.platform.is("ios")) {
                _this.openInAppStore('itms-apps://itunes.apple.com/app/1504720335');
            }
            else if (_this.platform.is("android")) {
                _this.openInAppStore("https://play.google.com/store/apps/details?id=com.sure3odds.sureapp").then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
            }
        });
    };
    AllMatchesPage.prototype.openInAppStore = function (link) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({
                            url: link,
                            toolbarColor: "#0f5656"
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AllMatchesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-all-matches',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/all-matches/all-matches.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu" ></ion-icon>\n    </button>\n    <ion-title>All Matches</ion-title>\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar class="calendarToolbar">\n    <ion-grid class="calendar">\n      <ion-row>\n        <ion-col col-auto>\n          <ion-icon name="ios-arrow-back" color="light" (click)="change_month(\'decrease\')"></ion-icon>\n        </ion-col>\n        <ion-col col>\n          <p>\n            <span>{{month_name}}</span>,\n            <span>{{year}}</span>\n          </p>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-icon name="ios-arrow-forward" color="light" (click)="change_month(\'increase\')"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="daysScroll">\n      <ion-scroll scrollX="true" scrollY="false" >\n        <div class="day" *ngFor="let day of days ; let i=index" (click)="toggleGroup(i)" [ngClass]="{\'active\': isGroupShown(i)}" >\n          <p>{{day.name}}</p>\n          <button ion-button clear (click)="onClick(day)">{{day.day_num}} </button>\n        </div>\n      </ion-scroll>\n    </div>\n\n    <p ion-text text-center no-margin color="light"><b>{{currentDate |  date:\'mediumDate\'}}</b></p>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n   <!-- matches list -->\n   <ion-list margin-top *ngFor="let game of gamelist">\n    <ion-list-header>\n      {{game.title}}\n      <ion-icon name="football" color="color1" item-left></ion-icon>\n    </ion-list-header>\n    <!-- match item  -->\n    <div class="" *ngIf="game.items">\n      <ion-item class="matchItem" *ngFor="let match of game.items">\n      <ion-grid>\n        <ion-row (click)="onMatchOption(match)">\n          <ion-col col>\n            <ion-item >\n              <img src="{{match.hometeam.imageurl}}" item-right  *ngIf="match.hometeam.imageurl"/>\n              <img src="assets/imgs/appicon.png"  item-right  *ngIf="!match.hometeam.imageurl"/>\n              <p text-right>{{match.hometeam.name}}</p>\n            </ion-item>\n          </ion-col>\n          <ion-col col-auto>\n            <span ion-text color="color2" *ngIf="match.status.name !== \'Lost\'"  style="margin-top: 0.3em !important; font-size: smaller !important;"><b> {{match.status.name}}</b></span>\n            <span ion-text color="danger" *ngIf="match.status.name === \'Lost\'"  style="margin-top: 0.3em !important; font-size: smaller !important;"><b> {{match.status.name}}</b></span>\n            <span ion-text color="color1">{{match.matchtime}}</span>\n            <p ion-text><b>{{match.odds}}</b></p>\n            <p ion-text color="color1" style="margin-bottom: 0.3em !important;" ><b>{{match.selections.name}}</b></p>\n          </ion-col>\n          <ion-col col>\n            <ion-item >\n              <img src="{{match.awayteam.imageurl}}" item-left *ngIf="match.awayteam.imageurl"/>\n              <img src="assets/imgs/appicon.png" item-left *ngIf="!match.awayteam.imageurl"/>\n              <p text-left>{{match.awayteam.name}}</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n       </ion-grid>\n     </ion-item>\n    </div>\n    <div class="" *ngIf="game.msg">\n     <p ion-text text-center color="color2">{{game.msg}}</p>\n    </div>\n\n  </ion-list>\n   <!-- matches list -->\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid class="white bordertop lightborder">\n      <ion-row wrap>\n        <ion-col col-12 class="center">\n          <div class="" margin-top ion-text text-center>\n            Sure3Odds provides the best predictions between 2 - 3 odds with highest level of confidence and precision for you to select wisely and bet responsively.\n           </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/all-matches/all-matches.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_games_games__["a" /* GamesProvider */]])
    ], AllMatchesPage);
    return AllMatchesPage;
}());

//# sourceMappingURL=all-matches.js.map

/***/ })

});
//# sourceMappingURL=47.js.map