webpackJsonp([17],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosPageModule", function() { return PhotosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photos__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PhotosPageModule = /** @class */ (function () {
    function PhotosPageModule() {
    }
    PhotosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__photos__["a" /* PhotosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__photos__["a" /* PhotosPage */]),
            ],
        })
    ], PhotosPageModule);
    return PhotosPageModule;
}());

//# sourceMappingURL=photos.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotosPage = /** @class */ (function () {
    function PhotosPage(navCtrl, global) {
        this.navCtrl = navCtrl;
        this.global = global;
        this.photos = [
            { img: 'assets/imgs/p001.png', title: '2018 World Cup' },
            { img: 'assets/imgs/p002.png', title: '2018 World Cup' },
            { img: 'assets/imgs/p003.png', title: '2018 World Cup' },
            { img: 'assets/imgs/p001.png', title: '2018 World Cup' },
            { img: 'assets/imgs/p002.png', title: '2018 World Cup' },
            { img: 'assets/imgs/p003.png', title: '2018 World Cup' },
        ];
    }
    PhotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-photos',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/photos/photos.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Photos</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only  (click)="global.callSearch($event)">\n        <ion-icon name="md-search"></ion-icon>\n      </button>\n      <button ion-button icon-only navPush="NotificationPage">\n        <ion-icon name="md-notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header> \n<ion-content padding>\n  <ion-list class="lastPhotos">\n    <ion-item class="photoItem" *ngFor="let item of photos" navPush="PhotosDetailsPage">\n      <!-- if you want this image reponsive in large screen please remove class="imgResponsive" from img Tag  -->\n      <img src="{{item.img}}" class="imgResponsive"/>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-auto>\n            <h4 ion-text color="dark">{{item.title}}</h4>\n          </ion-col>\n          <ion-col col>\n            <p ion-text color="color2">200 photos</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/photos/photos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* Global */]])
    ], PhotosPage);
    return PhotosPage;
}());

//# sourceMappingURL=photos.js.map

/***/ })

});
//# sourceMappingURL=17.js.map