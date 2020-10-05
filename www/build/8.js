webpackJsonp([8],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingTeamAssignPageModule", function() { return SettingTeamAssignPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_team_assign__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingTeamAssignPageModule = /** @class */ (function () {
    function SettingTeamAssignPageModule() {
    }
    SettingTeamAssignPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_team_assign__["a" /* SettingTeamAssignPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_team_assign__["a" /* SettingTeamAssignPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], SettingTeamAssignPageModule);
    return SettingTeamAssignPageModule;
}());

//# sourceMappingURL=setting-team-assign.module.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Teams; });
var Teams = /** @class */ (function () {
    function Teams(name, id, imageurl, country, league) {
        this.name = name;
        this.id = id;
        this.imageurl = imageurl;
        this.country = country;
        this.league = league;
    }
    return Teams;
}());

//# sourceMappingURL=Teams.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingTeamAssignPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_games_games__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_Teams__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingTeamAssignPage = /** @class */ (function () {
    function SettingTeamAssignPage(navCtrl, gamesProvider, loadingCtrl, authProvider, navParams) {
        this.navCtrl = navCtrl;
        this.gamesProvider = gamesProvider;
        this.loadingCtrl = loadingCtrl;
        this.authProvider = authProvider;
        this.navParams = navParams;
        this.team = new __WEBPACK_IMPORTED_MODULE_2__interfaces_Teams__["a" /* Teams */]("", "", "", { id: "", name: "", imageurl: "" }, { id: "", name: "", imageurl: "" });
        this.selectedteam = this.navParams.get("team");
        console.log("this.selectedteam", this.selectedteam);
        if (this.selectedteam) {
            this.team = this.selectedteam;
        }
    }
    SettingTeamAssignPage.prototype.ionViewWillEnter = function () {
        this.Getcountries();
    };
    SettingTeamAssignPage.prototype.Getcountries = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.gamesProvider.Getcountries()
            .subscribe(function (resp) {
            loading.dismiss().catch(function () { });
            if (resp.statusCode === 200) {
                _this.countries = resp.data;
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.description);
        });
    };
    SettingTeamAssignPage.prototype.onSelectCountry = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.team.league = null;
        if (event.value) {
            loading.present();
            this.gamesProvider.GetLeaguesByCountryID(event.value.id)
                .subscribe(function (resp) {
                loading.dismiss().catch(function () { });
                if (resp.statusCode === 200) {
                    _this.leagues = resp.data;
                }
                else {
                    _this.authProvider.showToast(resp.description);
                }
            }, function (error) {
                loading.dismiss().catch(function () { });
                _this.authProvider.showToast(error.error.error);
            });
        }
    };
    SettingTeamAssignPage.prototype.onSelectLeague = function (event) {
        // console.log('league:', event.value);
    };
    SettingTeamAssignPage.prototype.onSubmit = function (team) {
        var _this = this;
        if (team.name) {
            team.id = 0;
            var loading_1 = this.loadingCtrl.create({
                content: "Please wait..."
            });
            console.log(team);
            loading_1.present();
            this.gamesProvider.createTeam(team).subscribe(function (res) {
                loading_1.dismiss().catch(function () { });
                if (res.statusCode === 200) {
                    _this.navCtrl.pop();
                }
                else {
                    _this.authProvider.showToast(res.description);
                }
            }, function (error) {
                loading_1.dismiss().catch(function () { });
                _this.authProvider.showToast(error.error.error);
            });
        }
        else {
            this.authProvider.showToast("Name input field is empty");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('myselect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableComponent"])
    ], SettingTeamAssignPage.prototype, "selectComponent", void 0);
    SettingTeamAssignPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-setting-team-assign',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-team-assign/setting-team-assign.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Assign {{selectedteam.name}} To: </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="otherForm">\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          Select Country\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="team.country" (onChange)="onSelectCountry($event)" [items]="countries"\n          itemValueField="id" \n          [canClear]="true"\n          clearButtonText="Clear Selected"\n          confirmButtonText="Proceed"\n          itemTextField="name" \n          [canSearch]="true">\n\n        </select-searchable>\n      </ion-item>\n \n       <ion-item>\n        <ion-label>\n          Select League\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="team.league" (onChange)="onSelectLeague($event)" [items]="leagues"\n          itemValueField="id"\n          [canClear]="true"\n          clearButtonText="Clear Selected"\n          confirmButtonText="Proceed"\n          itemTextField="name" \n          [canSearch]="true">\n\n        </select-searchable>\n      </ion-item> \n      <ion-item>\n        <ion-label stacked>Name</ion-label>\n        <ion-input type="text" readonly [(ngModel)]="team.name"></ion-input>\n      </ion-item>\n      <!-- ==================================== -->\n    </ion-list>\n    <button ion-button block color="color2" (click)="onSubmit(team)">Submit</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-team-assign/setting-team-assign.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"]])
    ], SettingTeamAssignPage);
    return SettingTeamAssignPage;
}());

//# sourceMappingURL=setting-team-assign.js.map

/***/ })

});
//# sourceMappingURL=8.js.map