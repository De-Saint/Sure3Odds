webpackJsonp([7],{

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingTeamEditPageModule", function() { return SettingTeamEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_team_edit__ = __webpack_require__(825);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingTeamEditPageModule = /** @class */ (function () {
    function SettingTeamEditPageModule() {
    }
    SettingTeamEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_team_edit__["a" /* SettingTeamEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_team_edit__["a" /* SettingTeamEditPage */]),
            ],
        })
    ], SettingTeamEditPageModule);
    return SettingTeamEditPageModule;
}());

//# sourceMappingURL=setting-team-edit.module.js.map

/***/ }),

/***/ 779:
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

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingTeamEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_games_games__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_Teams__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__capacitor_core__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Camera = __WEBPACK_IMPORTED_MODULE_5__capacitor_core__["c" /* Plugins */].Camera;
var SettingTeamEditPage = /** @class */ (function () {
    function SettingTeamEditPage(navCtrl, authProvider, gamesProvider, alertCtrl, loadingCtrl, actionSheetCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.gamesProvider = gamesProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.flag = true;
        this.team = new __WEBPACK_IMPORTED_MODULE_2__interfaces_Teams__["a" /* Teams */]("", "", "", { id: "", name: "", imageurl: "" }, { id: "", name: "", imageurl: "" });
        this.teams = this.navParams.get("team");
        if (this.teams) {
            this.team = this.teams;
            if (this.teams.imageurl) {
                this.team.imageurl = this.teams.imageurl;
            }
            else {
                this.team.imageurl = "/assets/imgs/appicon.png";
            }
        }
    }
    SettingTeamEditPage.prototype.ionViewDidLoad = function () {
        this.flag = (this.flag != false) ? false : true;
    };
    SettingTeamEditPage.prototype.onDelete = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        var confirm = this.alertCtrl.create({
            title: 'Delete Team',
            message: "Do you want to delete <b>" + this.team.name + "</b> <br/>from <br/><b>" + this.team.league.name + "</b> league?<br/><br/>This is action is irreversible.",
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        loading.present();
                        _this.gamesProvider.deleteTeam(_this.team.id).subscribe(function (res) {
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
    SettingTeamEditPage.prototype.onSubmit = function (team) {
        var _this = this;
        if (team.name) {
            team.imageurl = (team.imageurl != undefined) ? this.team.imageurl : this.img;
            var loading_1 = this.loadingCtrl.create({
                content: "Please wait..."
            });
            loading_1.present();
            this.gamesProvider.updateTeam(team).subscribe(function (res) {
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
            this.authProvider.showToast("Name of team input field is empty");
        }
    };
    SettingTeamEditPage.prototype.selectImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Change Team Logo',
            buttons: [
                {
                    text: 'Gallery',
                    handler: function () { _this.get_camera('Gallery'); }
                }, {
                    text: 'Camera',
                    handler: function () { _this.get_camera('Camera'); }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    SettingTeamEditPage.prototype.get_camera = function (source) {
        var _this = this;
        var options = {
            quality: 90,
            height: 320,
            correctOrientation: true,
            width: 320,
            resultType: __WEBPACK_IMPORTED_MODULE_5__capacitor_core__["a" /* CameraResultType */].Base64
        };
        if (source == 'Gallery') {
            options.source = __WEBPACK_IMPORTED_MODULE_5__capacitor_core__["b" /* CameraSource */].Photos;
        }
        else {
            options.source = __WEBPACK_IMPORTED_MODULE_5__capacitor_core__["b" /* CameraSource */].Camera;
        }
        Camera.getPhoto(options).then(function (imageData) {
            _this.img = 'data:image/jpeg;base64,' + imageData.base64String;
            _this.team.imageurl = _this.img;
        }).catch(function (error) {
            if (_this.img != undefined) {
                _this.team.imageurl = _this.img;
            }
            return false;
        });
    };
    SettingTeamEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-setting-team-edit',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-team-edit/setting-team-edit.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Team</ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="onDelete()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="imgs" style="margin-top: 1em;">\n    <div  class="imgProfile2 margin-top" ion-text padding-top [ngStyle]="{\'background-image\':\'url(\' + team.imageurl + \')\'}">\n      <button ion-button icon-only class="profileCamera"  [ngClass]="{\'show\':flag==false}"  (click)="selectImage()">\n        <ion-icon name="md-camera"></ion-icon>\n      </button>\n    </div>\n  </div>\n  <div class="">\n    <div class="otherForm">\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>Country Name</ion-label>\n          <ion-input disabled type="text" [(ngModel)]="team.country.name"></ion-input>\n          <ion-input hidden type="text" [(ngModel)]="team.country.id"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>League Name</ion-label>\n          <ion-input disabled type="text" [(ngModel)]="team.league.name"></ion-input>\n          <ion-input hidden type="text" [(ngModel)]="team.league.id"></ion-input>\n        </ion-item>\n        <!-- appear when click update -->\n        <ion-item>\n          <ion-label stacked>Team Name</ion-label>\n          <ion-input type="text" [(ngModel)]="team.name"></ion-input>\n          <ion-input hidden type="text" [(ngModel)]="team.id"></ion-input>\n        </ion-item>\n        <!-- ==================================== -->\n      </ion-list>\n      <button ion-button block color="color2" (click)="onSubmit(team)">Submit</button>\n    </div>\n  </div>\n \n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-team-edit/setting-team-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"]])
    ], SettingTeamEditPage);
    return SettingTeamEditPage;
}());

//# sourceMappingURL=setting-team-edit.js.map

/***/ })

});
//# sourceMappingURL=7.js.map