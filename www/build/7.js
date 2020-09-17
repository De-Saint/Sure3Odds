webpackJsonp([7],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingLeagueAddPageModule", function() { return SettingLeagueAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_league_add__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingLeagueAddPageModule = /** @class */ (function () {
    function SettingLeagueAddPageModule() {
    }
    SettingLeagueAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_league_add__["a" /* SettingLeagueAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_league_add__["a" /* SettingLeagueAddPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"],
            ],
        })
    ], SettingLeagueAddPageModule);
    return SettingLeagueAddPageModule;
}());

//# sourceMappingURL=setting-league-add.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Leagues; });
var Leagues = /** @class */ (function () {
    function Leagues(name, id, imageurl, country) {
        this.name = name;
        this.id = id;
        this.imageurl = imageurl;
        this.country = country;
    }
    return Leagues;
}());

//# sourceMappingURL=Leagues.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingLeagueAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_games_games__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_Leagues__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Port = /** @class */ (function () {
    function Port() {
    }
    return Port;
}());
var SettingLeagueAddPage = /** @class */ (function () {
    function SettingLeagueAddPage(gameProvider, actionSheetCtrl, camera, authProvider, toastCtrl, navCtrl, navParams) {
        this.gameProvider = gameProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.league = new __WEBPACK_IMPORTED_MODULE_3__interfaces_Leagues__["a" /* Leagues */]("", "", "", { id: "", name: "", imageurl: "" });
        this.img1 = "assets/imgs/appicon.png";
        this.flag = true;
        this.user = null;
        this.userIds = [];
        this.users = [
            {
                id: 1,
                name: 'Saint',
                country: 'Nigeria'
            },
            {
                id: 2,
                name: 'Saint',
                country: 'Ghana'
            },
            {
                id: 3,
                name: 'Mike',
                country: 'USA'
            },
            {
                id: 4,
                name: 'Pinky',
                country: 'Turkey'
            },
            {
                id: 5,
                name: 'James',
                country: 'Nigeria'
            }
        ];
    }
    SettingLeagueAddPage.prototype.ionViewDidLoad = function () {
        this.flag = (this.flag != false) ? false : true;
    };
    SettingLeagueAddPage.prototype.userChanged = function (event) {
        console.log('user:', event.value);
    };
    SettingLeagueAddPage.prototype.onClose = function () {
        var toast = this.toastCtrl.create({
            message: 'YOu did a good job',
            duration: 2000
        });
        toast.present();
    };
    SettingLeagueAddPage.prototype.openFromCode = function () {
        this.selectComponent.open();
    };
    SettingLeagueAddPage.prototype.onSubmit = function (league) {
        if (this.league.name) {
            console.log(league);
            //   this.country.imageurl = (this.country.imageurl != undefined) ? this.img1 : this.img;
            //   console.log(country);
            //   this.gameProvider.createCountry(country).subscribe(res => {
            //     if (res.statusCode === 200) {
            //       this.navCtrl.pop();
            //     } else {
            //       this.authProvider.showToast(res.description);
            //     }
            //   }, error => {
            //     this.authProvider.showToast(error.error.description);
            //   });
        }
        else {
            this.authProvider.showToast("Name input field is empty");
        }
    };
    SettingLeagueAddPage.prototype.selectImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your Picture',
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
    SettingLeagueAddPage.prototype.get_camera = function (source) {
        var _this = this;
        var options = {
            quality: 100, destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG, mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true, targetWidth: 512, targetHeight: 512, correctOrientation: true
        };
        if (source == 'Gallery') {
            options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
        }
        else {
            options.sourceType = this.camera.PictureSourceType.CAMERA;
        }
        this.camera.getPicture(options).then(function (imageData) {
            _this.img = 'data:image/jpeg;base64,' + imageData;
        }, function (err) { });
        if (this.img != undefined) {
            this.img1 = this.img;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('myselect'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable__["SelectSearchableComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable__["SelectSearchableComponent"]) === "function" && _a || Object)
    ], SettingLeagueAddPage.prototype, "selectComponent", void 0);
    SettingLeagueAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-setting-league-add',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-league-add/setting-league-add.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add League</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="otherForm">\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          Select user\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="user" (onChange)="userChanged($event)" [items]="users"\n          itemValueField="id"\n          [canClear]="true"\n          (onClose)="onClose($event)"\n          clearButtonText="Clear Selected"\n          noItemsFoundtext="No countres found"\n          confirmButtonText="Proceed"\n          itemTextField="name" \n          [canSearch]="true">\n\n        </select-searchable>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Name</ion-label>\n        <ion-input type="text" [(ngModel)]="league.name"></ion-input>\n      </ion-item>\n      <!-- ==================================== -->\n    </ion-list>\n    <button ion-button block color="color2" (click)="onSubmit(league)">Submit</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-league-add/setting-league-add.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_games_games__["a" /* GamesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_games_games__["a" /* GamesProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ActionSheetController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ActionSheetController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ToastController"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"]) === "function" && _h || Object])
    ], SettingLeagueAddPage);
    return SettingLeagueAddPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=setting-league-add.js.map

/***/ })

});
//# sourceMappingURL=7.js.map