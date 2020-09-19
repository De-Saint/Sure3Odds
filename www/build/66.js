webpackJsonp([66],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingSelectionEditPageModule", function() { return SettingSelectionEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_selection_edit__ = __webpack_require__(802);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingSelectionEditPageModule = /** @class */ (function () {
    function SettingSelectionEditPageModule() {
    }
    SettingSelectionEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting_selection_edit__["a" /* SettingSelectionEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting_selection_edit__["a" /* SettingSelectionEditPage */]),
            ],
        })
    ], SettingSelectionEditPageModule);
    return SettingSelectionEditPageModule;
}());

//# sourceMappingURL=setting-selection-edit.module.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Selections; });
var Selections = /** @class */ (function () {
    function Selections(name, id) {
        this.name = name;
        this.id = id;
    }
    return Selections;
}());

//# sourceMappingURL=Selections.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingSelectionEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_games_games__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_Selections__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingSelectionEditPage = /** @class */ (function () {
    function SettingSelectionEditPage(navCtrl, alertCtrl, gameProvider, loadingCtrl, authProvider, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.gameProvider = gameProvider;
        this.loadingCtrl = loadingCtrl;
        this.authProvider = authProvider;
        this.navParams = navParams;
        this.selection = new __WEBPACK_IMPORTED_MODULE_2__interfaces_Selections__["a" /* Selections */]("", "");
        this.selections = this.navParams.data;
        console.log(this.selections);
        if (this.selections) {
            this.selection.id = this.selections.id;
            this.selection.name = this.selections.name;
        }
    }
    SettingSelectionEditPage.prototype.ionViewDidLoad = function () {
    };
    SettingSelectionEditPage.prototype.onSubmit = function (selection) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        if (this.selection.name) {
            loading.present();
            this.gameProvider.updateSelection(selection).subscribe(function (res) {
                loading.dismiss().catch(function () { });
                if (res.statusCode === 200) {
                    _this.navCtrl.pop();
                }
                else {
                    _this.authProvider.showToast(res.description);
                }
            }, function (error) {
                loading.dismiss().catch(function () { });
                _this.authProvider.showToast(error.error.description);
            });
        }
        else {
            this.authProvider.showToast("Name input field is empty");
        }
    };
    SettingSelectionEditPage.prototype.onDelete = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        var confirm = this.alertCtrl.create({
            title: 'Delete Selection',
            message: 'Do you want to delete ' + this.selection.name + '?',
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
                        _this.gameProvider.deleteSelection(_this.selections.id).subscribe(function (res) {
                            loading.dismiss().catch(function () { });
                            if (res.statusCode === 200) {
                                _this.navCtrl.pop();
                            }
                            else {
                                _this.authProvider.showToast(res.description);
                            }
                        }, function (error) {
                            loading.dismiss().catch(function () { });
                            _this.authProvider.showToast(error.error.description);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    SettingSelectionEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-setting-selection-edit',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-selection-edit/setting-selection-edit.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Selection</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onDelete()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="otherForm">\n    <ion-list>\n      <!-- appear when click update -->\n      <ion-item >\n        <ion-label stacked>Name</ion-label>\n        <ion-input  type="text" [(ngModel)]="selection.name"  ></ion-input>\n        <ion-input hidden type="text" [(ngModel)]="selection.id"  ></ion-input>\n      </ion-item>\n      <!-- ==================================== -->\n    </ion-list>\n    <button ion-button block color="color2" (click)="onSubmit(selection)">Submit</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting-selection-edit/setting-selection-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_authenication_authenication__["a" /* AuthenicationProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"]])
    ], SettingSelectionEditPage);
    return SettingSelectionEditPage;
}());

//# sourceMappingURL=setting-selection-edit.js.map

/***/ })

});
//# sourceMappingURL=66.js.map