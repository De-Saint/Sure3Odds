webpackJsonp([48],{

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/all-matches/all-matches.module": [
		730,
		47
	],
	"../pages/free-tips/free-tips.module": [
		731,
		46
	],
	"../pages/game-create/game-create.module": [
		732,
		45
	],
	"../pages/game-edit/game-edit.module": [
		733,
		22
	],
	"../pages/game-new/game-new.module": [
		734,
		21
	],
	"../pages/games/games.module": [
		735,
		44
	],
	"../pages/help/help.module": [
		737,
		43
	],
	"../pages/match-comments/match-comments.module": [
		736,
		24
	],
	"../pages/match-details/match-details.module": [
		738,
		42
	],
	"../pages/match-votes/match-votes.module": [
		739,
		5
	],
	"../pages/payment-details/payment-details.module": [
		740,
		41
	],
	"../pages/payment-plans/payment-plans.module": [
		741,
		40
	],
	"../pages/payment-plantype-edit/payment-plantype-edit.module": [
		743,
		13
	],
	"../pages/payment-plantypes/payment-plantypes.module": [
		742,
		39
	],
	"../pages/payment-sets/payment-sets.module": [
		744,
		38
	],
	"../pages/payments/payments.module": [
		319
	],
	"../pages/prediction-add/prediction-add.module": [
		745,
		12
	],
	"../pages/prediction-edit/prediction-edit.module": [
		746,
		11
	],
	"../pages/predictions/predictions.module": [
		747,
		37
	],
	"../pages/profile/profile.module": [
		748,
		0
	],
	"../pages/report-general/report-general.module": [
		749,
		36
	],
	"../pages/report-monthly/report-monthly.module": [
		750,
		35
	],
	"../pages/reports/reports.module": [
		325
	],
	"../pages/setting-country-add/setting-country-add.module": [
		752,
		4
	],
	"../pages/setting-country-edit/setting-country-edit.module": [
		751,
		23
	],
	"../pages/setting-country/setting-country.module": [
		755,
		34
	],
	"../pages/setting-league-add/setting-league-add.module": [
		753,
		20
	],
	"../pages/setting-league-edit/setting-league-edit.module": [
		756,
		19
	],
	"../pages/setting-league-view/setting-league-view.module": [
		754,
		33
	],
	"../pages/setting-leagues/setting-leagues.module": [
		757,
		32
	],
	"../pages/setting-selection-add/setting-selection-add.module": [
		759,
		10
	],
	"../pages/setting-selection-edit/setting-selection-edit.module": [
		758,
		9
	],
	"../pages/setting-selections/setting-selections.module": [
		760,
		31
	],
	"../pages/setting-team-add/setting-team-add.module": [
		761,
		3
	],
	"../pages/setting-team-assign/setting-team-assign.module": [
		762,
		8
	],
	"../pages/setting-team-edit/setting-team-edit.module": [
		763,
		7
	],
	"../pages/setting-team-manage/setting-team-manage.module": [
		764,
		6
	],
	"../pages/setting-team-view/setting-team-view.module": [
		765,
		30
	],
	"../pages/setting-teams/setting-teams.module": [
		766,
		29
	],
	"../pages/setting/setting.module": [
		326
	],
	"../pages/sign-in/sign-in.module": [
		767,
		28
	],
	"../pages/sign-up/sign-up.module": [
		769,
		18
	],
	"../pages/subscription-android/subscription-android.module": [
		768,
		1
	],
	"../pages/subscription-ios/subscription-ios.module": [
		770,
		17
	],
	"../pages/terms/terms.module": [
		771,
		27
	],
	"../pages/user-member-add/user-member-add.module": [
		772,
		16
	],
	"../pages/user-member-edit/user-member-edit.module": [
		773,
		2
	],
	"../pages/user-members/user-members.module": [
		774,
		26
	],
	"../pages/user-sub-admin-add/user-sub-admin-add.module": [
		775,
		15
	],
	"../pages/user-sub-admin-edit/user-sub-admin-edit.module": [
		776,
		14
	],
	"../pages/user-sub-admins/user-sub-admins.module": [
		777,
		25
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 219;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function() { return PaymentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payments__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PaymentsPageModule = /** @class */ (function () {
    function PaymentsPageModule() {
    }
    PaymentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payments__["a" /* PaymentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__payments__["a" /* PaymentsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__["b" /* SuperTabsModule */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], PaymentsPageModule);
    return PaymentsPageModule;
}());

//# sourceMappingURL=payments.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function() { return ReportsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReportsPageModule = /** @class */ (function () {
    function ReportsPageModule() {
    }
    ReportsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reports__["a" /* ReportsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reports__["a" /* ReportsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__["b" /* SuperTabsModule */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], ReportsPageModule);
    return ReportsPageModule;
}());

//# sourceMappingURL=reports.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(704);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
            ],
        })
    ], SettingPageModule);
    return SettingPageModule;
}());

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamesProvider = /** @class */ (function () {
    function GamesProvider(http) {
        this.http = http;
    }
    GamesProvider.prototype.getDate = function () {
        this.today = new Date();
        this.day = this.today.getDate();
        this.month = this.today.getMonth() + 1;
        this.year = this.today.getFullYear();
        if (this.day < 10) {
            this.day = '0' + this.day;
        }
        if (this.month < 10) {
            this.month = '0' + this.month;
        }
        this.today = this.year + '-' + this.month + '-' + this.day;
        return this.today;
    };
    //-------------------------Game -----Start----------------------------
    GamesProvider.prototype.GetGames = function (matchDate) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("matchDate", String(matchDate));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/game/user/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.GetAppVersion = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/users/app/getversion", {})
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.computeOldMatchDate = function (group) {
        if (group.day_num < 10) {
            group.day_num = '0' + group.day_num;
        }
        if (group.month < 10) {
            group.month = '0' + group.month;
        }
        var date = group.year + '-' + group.month + '-' + group.day_num;
        return date;
    };
    GamesProvider.prototype.addGame = function (game) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/game/add", game).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.updateGame = function (game) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/game/update", game).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.deleteGame = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/game/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.createGame = function (predictionId, setId, statusId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('predictionId', predictionId)
            .set('setId', setId)
            .set('statusId', statusId);
        console.log(params);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/game/create", params).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Game -----End----------------------------
    //-------------------------Votes -----Start----------------------------
    GamesProvider.prototype.GetGameVotes = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/vote/get_game_votes/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.createVote = function (vote) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/vote/create", vote).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Votes -----End---------------------------------
    //-------------------------Comments -----Start----------------------------
    GamesProvider.prototype.GetGameComments = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/comment/get_game_comments/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.createComment = function (comments) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/comment/create", comments).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Comments -----End----------------------------
    //-------------------------Countries -----Start----------------------------
    GamesProvider.prototype.GetCountries = function (pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/getall", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.Getcountries = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/get_all")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.SearchCountries = function (searchValue, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.createCountry = function (country) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/create", country).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.updateCountry = function (country) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/update", country).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.deleteCountry = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.GetLeaguesByCountryID = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/leagues/get/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.SearchLeaguesByCountryIDAndName = function (searchValue, countryId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('countryId', countryId);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/country/leagues/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Countries -----End----------------------------
    //-------------------------Leagues-----Start----------------------------
    GamesProvider.prototype.GetLeagues = function (pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/getall", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.SearchLeagues = function (searchValue, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.deleteLeague = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.updateLeague = function (league) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/update", league).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.createLeague = function (league) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/create", league).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.GetTeamsByLeagueId = function (leagueId, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('leagueId', leagueId)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/teams/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.SearchTeamsByLeagueIdAndName = function (searchValue, leagueId, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('leagueId', leagueId)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/teams/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.getTeamsByLeagueId = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/league/teams/getall/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Leagues------End----------------------------
    //-------------------------Teams------Start----------------------------
    GamesProvider.prototype.GetTeams = function (pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/team/getall", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.SearchTeams = function (searchValue, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/team/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.updateTeam = function (team) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/team/update", team).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.deleteTeam = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/team/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.createTeam = function (team) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/team/create", team).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Selections -----Start-------------------------
    GamesProvider.prototype.GetSelections = function (pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/selection/getall", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.SearchSelections = function (searchValue, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/selection/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.createSelection = function (selection) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/selection/create", selection).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.updateSelection = function (selection) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/selection/update", selection).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.deleteSelection = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/selection/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.getSelections = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/selection/get_all")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Selections -----End-----------------------
    //-------------------------Sets------Start----------------------------
    GamesProvider.prototype.GetSets = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/set/getall")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Sets -----End-----------------------
    //-------------------------Status------Start----------------------------
    GamesProvider.prototype.GetStatus = function (statusType) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('statusType', statusType);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/status/type/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-------------------------Status -----End-----------------------
    //-------------------------Predictions------Start----------------------------
    GamesProvider.prototype.CreatePrediction = function (prediction) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/prediction/create", prediction).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.GetPredictions = function (matchDate) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set("matchDate", String(matchDate));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/prediction/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.deletePrediction = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/prediction/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider.prototype.updatePrediction = function (prediction) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/games/prediction/update", prediction).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    GamesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], GamesProvider);
    return GamesProvider;
}());

//# sourceMappingURL=games.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeHttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_from__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_from__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NativeHttpProvider = /** @class */ (function () {
    function NativeHttpProvider(http, nativeHttp, platform) {
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.platform = platform;
    }
    NativeHttpProvider.prototype.GetFreeGames = function (matchDate) {
        if (this.platform.is("android") || this.platform.is("ios")) {
            var params = {
                matchDate: matchDate,
                id: "1",
            };
            var nativeCall = this.nativeHttp.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + "/games/game/free/get", params, {
                "Content-Type": "application/json"
            });
            return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_from__["from"])(nativeCall).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (result) {
                return JSON.parse(result.data);
            }));
        }
        else {
            var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]().set("matchDate", String(matchDate)).set("id", "1");
            return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + "/games/game/free/get", { params: params })
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
                return resp;
            }));
        }
    };
    NativeHttpProvider.prototype.getAllPlantypes = function () {
        if (this.platform.is("android") || this.platform.is("ios")) {
            var nativeCall = this.nativeHttp.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + "/payments/plantype/getall", {}, {
                "Content-Type": "application/json"
            });
            return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_from__["from"])(nativeCall).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (result) {
                return JSON.parse(result.data);
            }));
        }
        else {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + "/payments/plantype/getall")
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
                return resp;
            }));
        }
    };
    NativeHttpProvider.prototype.getParameter = function (id) {
        if (this.platform.is("android") || this.platform.is("ios")) {
            var nativeCall = this.nativeHttp.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + "/payments/parameter/get/" + id, {}, {
                "Content-Type": "application/json"
            });
            return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_from__["from"])(nativeCall).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (result) {
                return JSON.parse(result.data);
            }));
        }
        else {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + "/payments/parameter/get/" + id)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
                return resp;
            }));
        }
    };
    NativeHttpProvider.prototype.createNewUser = function (newuser) {
        if (this.platform.is("android") || this.platform.is("ios")) {
            var user = {
                id: newuser.id,
                email: newuser.email,
                firstname: newuser.firstname,
                lastname: newuser.lastname,
                referencecode: newuser.referencecode,
                password: newuser.password,
                phone: newuser.phone,
                plantype: newuser.plantype,
                platform: newuser.platform,
                usertypes: newuser.usertypes,
                status: newuser.status
            };
            this.nativeHttp.setDataSerializer('json');
            var nativeCall = this.nativeHttp.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + "/users/member/create", user, {
                "Content-Type": "application/json"
            });
            return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_from__["from"])(nativeCall).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (result) {
                return JSON.parse(result.data);
            }));
        }
        else {
            var user = newuser;
            return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + "/users/member/create", user)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
                return resp;
            }));
        }
    };
    NativeHttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Platform"]])
    ], NativeHttpProvider);
    return NativeHttpProvider;
}());

//# sourceMappingURL=native-http.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentsProvider = /** @class */ (function () {
    function PaymentsProvider(http) {
        this.http = http;
    }
    PaymentsProvider.prototype.updatePlan = function (userId, plantypeId, platform, transactionObject) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
            .set('userId', userId)
            .set('plantypeId', plantypeId)
            .set('platform', platform)
            .set('transactionObject', transactionObject);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + "/payments/plan/update", params).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    PaymentsProvider.prototype.GetPayments = function (pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + "/payments/payment/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    PaymentsProvider.prototype.SearchPayments = function (searchValue, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + "/payments/payment/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    PaymentsProvider.prototype.deletePayment = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + "/payments/payment/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-----------------Plan----------Start-------------------
    PaymentsProvider.prototype.GetPlans = function (pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + "/payments/plan/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-----------------Plantype----------Start-------------------
    PaymentsProvider.prototype.updatePlantype = function (plantype) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl + "/payments/plantype/update", plantype).pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    PaymentsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], PaymentsProvider);
    return PaymentsProvider;
}());

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(379);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_error_interceptor_error_interceptor__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_request_interceptor_request_interceptor__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_authenication_authenication__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_games_games__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_select_searchable__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_payments_payments__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_setting_setting_module__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_reports_reports_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_payments_payments_module__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_native_http_native_http__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic2_super_tabs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_app_version__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var config = {
    backButtonText: '',
    backButtonIcon: 'md-arrow-back',
    iconMode: 'md',
    mode: 'md',
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
    tabsPlacement: 'top',
    pageTransition: 'md',
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* Sure3Odds */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* Sure3Odds */], config, {
                    links: [
                        { loadChildren: '../pages/all-matches/all-matches.module#AllMatchesPageModule', name: 'AllMatchesPage', segment: 'all-matches', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/free-tips/free-tips.module#FreeTipsPageModule', name: 'FreeTipsPage', segment: 'free-tips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game-create/game-create.module#GameCreatePageModule', name: 'GameCreatePage', segment: 'game-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game-edit/game-edit.module#GameEditPageModule', name: 'GameEditPage', segment: 'game-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game-new/game-new.module#GameNewPageModule', name: 'GameNewPage', segment: 'game-new', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/games/games.module#GamesPageModule', name: 'GamesPage', segment: 'games', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match-comments/match-comments.module#MatchCommentsPageModule', name: 'MatchCommentsPage', segment: 'match-comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match-details/match-details.module#MatchDetailsPageModule', name: 'MatchDetailsPage', segment: 'match-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match-votes/match-votes.module#MatchVotesPageModule', name: 'MatchVotesPage', segment: 'match-votes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-details/payment-details.module#PaymentDetailsPageModule', name: 'PaymentDetailsPage', segment: 'payment-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-plans/payment-plans.module#PaymentPlansPageModule', name: 'PaymentPlansPage', segment: 'payment-plans', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-plantypes/payment-plantypes.module#PaymentPlantypesPageModule', name: 'PaymentPlantypesPage', segment: 'payment-plantypes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-plantype-edit/payment-plantype-edit.module#PaymentPlantypeEditPageModule', name: 'PaymentPlantypeEditPage', segment: 'payment-plantype-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-sets/payment-sets.module#PaymentSetsPageModule', name: 'PaymentSetsPage', segment: 'payment-sets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payments/payments.module#PaymentsPageModule', name: 'PaymentsPage', segment: 'payments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prediction-add/prediction-add.module#PredictionAddPageModule', name: 'PredictionAddPage', segment: 'prediction-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prediction-edit/prediction-edit.module#PredictionEditPageModule', name: 'PredictionEditPage', segment: 'prediction-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/predictions/predictions.module#PredictionsPageModule', name: 'PredictionsPage', segment: 'predictions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-general/report-general.module#ReportGeneralPageModule', name: 'ReportGeneralPage', segment: 'report-general', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-monthly/report-monthly.module#ReportMonthlyPageModule', name: 'ReportMonthlyPage', segment: 'report-monthly', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reports/reports.module#ReportsPageModule', name: 'ReportsPage', segment: 'reports', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-country-edit/setting-country-edit.module#SettingCountryEditPageModule', name: 'SettingCountryEditPage', segment: 'setting-country-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-country-add/setting-country-add.module#SettingCountryAddPageModule', name: 'SettingCountryAddPage', segment: 'setting-country-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-league-add/setting-league-add.module#SettingLeagueAddPageModule', name: 'SettingLeagueAddPage', segment: 'setting-league-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-league-view/setting-league-view.module#SettingLeagueViewPageModule', name: 'SettingLeagueViewPage', segment: 'setting-league-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-country/setting-country.module#SettingCountryPageModule', name: 'SettingCountryPage', segment: 'setting-country', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-league-edit/setting-league-edit.module#SettingLeagueEditPageModule', name: 'SettingLeagueEditPage', segment: 'setting-league-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-leagues/setting-leagues.module#SettingLeaguesPageModule', name: 'SettingLeaguesPage', segment: 'setting-leagues', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-selection-edit/setting-selection-edit.module#SettingSelectionEditPageModule', name: 'SettingSelectionEditPage', segment: 'setting-selection-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-selection-add/setting-selection-add.module#SettingSelectionAddPageModule', name: 'SettingSelectionAddPage', segment: 'setting-selection-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-selections/setting-selections.module#SettingSelectionsPageModule', name: 'SettingSelectionsPage', segment: 'setting-selections', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-add/setting-team-add.module#SettingTeamAddPageModule', name: 'SettingTeamAddPage', segment: 'setting-team-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-assign/setting-team-assign.module#SettingTeamAssignPageModule', name: 'SettingTeamAssignPage', segment: 'setting-team-assign', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-edit/setting-team-edit.module#SettingTeamEditPageModule', name: 'SettingTeamEditPage', segment: 'setting-team-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-manage/setting-team-manage.module#SettingTeamManagePageModule', name: 'SettingTeamManagePage', segment: 'setting-team-manage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-team-view/setting-team-view.module#SettingTeamViewPageModule', name: 'SettingTeamViewPage', segment: 'setting-team-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-teams/setting-teams.module#SettingTeamsPageModule', name: 'SettingTeamsPage', segment: 'setting-teams', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subscription-android/subscription-android.module#SubscriptionAndroidPageModule', name: 'SubscriptionAndroidPage', segment: 'subscription-android', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subscription-ios/subscription-ios.module#SubscriptionIosPageModule', name: 'SubscriptionIosPage', segment: 'subscription-ios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-member-add/user-member-add.module#UserMemberAddPageModule', name: 'UserMemberAddPage', segment: 'user-member-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-member-edit/user-member-edit.module#UserMemberEditPageModule', name: 'UserMemberEditPage', segment: 'user-member-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-members/user-members.module#UserMembersPageModule', name: 'UserMembersPage', segment: 'user-members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-sub-admin-add/user-sub-admin-add.module#UserSubAdminAddPageModule', name: 'UserSubAdminAddPage', segment: 'user-sub-admin-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-sub-admin-edit/user-sub-admin-edit.module#UserSubAdminEditPageModule', name: 'UserSubAdminEditPage', segment: 'user-sub-admin-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-sub-admins/user-sub-admins.module#UserSubAdminsPageModule', name: 'UserSubAdminsPage', segment: 'user-sub-admins', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_ionic_select_searchable__["SelectSearchableModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_setting_setting_module__["SettingPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_reports_reports_module__["ReportsPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_payments_payments_module__["PaymentsPageModule"],
                __WEBPACK_IMPORTED_MODULE_17_ionic2_super_tabs__["b" /* SuperTabsModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicApp"]],
            schemas: [__WEBPACK_IMPORTED_MODULE_3__angular_core__["CUSTOM_ELEMENTS_SCHEMA"], __WEBPACK_IMPORTED_MODULE_3__angular_core__["NO_ERRORS_SCHEMA"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* Sure3Odds */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_app_version__["a" /* AppVersion */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_7__providers_authenication_authenication__["a" /* AuthenicationProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_payments_payments__["a" /* PaymentsProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_games_games__["a" /* GamesProvider */], __WEBPACK_IMPORTED_MODULE_16__providers_native_http_native_http__["a" /* NativeHttpProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_1__providers_request_interceptor_request_interceptor__["a" /* RequestInterceptorProvider */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_0__providers_error_interceptor_error_interceptor__["a" /* ErrorInterceptorProvider */], multi: true },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptorProvider = /** @class */ (function () {
    function ErrorInterceptorProvider(events) {
        this.events = events;
    }
    ErrorInterceptorProvider.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError.bind(this)));
    };
    ErrorInterceptorProvider.prototype.handleError = function (error) {
        console.log(error.error.message);
        if (parseInt(error.error.status) === 401 || error.error.status === 500) {
            this.events.publish('user:logout');
        }
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_throw__["_throw"])(error);
    };
    ErrorInterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Events"]])
    ], ErrorInterceptorProvider);
    return ErrorInterceptorProvider;
}());

//# sourceMappingURL=error-interceptor.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_super_tabs__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentsPage = /** @class */ (function () {
    function PaymentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            { pageName: 'PaymentDetailsPage', title: "Payments", id: "Payments" },
            { pageName: 'PaymentPlansPage', title: "Plans", id: "Plans" },
            { pageName: 'PaymentPlantypesPage', title: "Plan Types", id: "Plan Types" },
            { pageName: 'PaymentSetsPage', title: "Sets", id: "Sets" },
        ];
        this.currentpage = "Payments";
        this.selectedTab = 0;
    }
    PaymentsPage.prototype.onTabSelect = function (ev) {
        this.selectedTab = ev.index;
        this.currentpage = ev.id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic2_super_tabs__["a" /* SuperTabs */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic2_super_tabs__["a" /* SuperTabs */])
    ], PaymentsPage.prototype, "superTabs", void 0);
    PaymentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payments',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/payments/payments.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title> {{currentpage}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <super-tabs\n  tabsPlacement="top" \n  [config]="{ sideMenu: \'left\' }" \n  toolbarBackground="light" \n  toolbarColor="color1" \n  indicatorColor="color1"\n  *ngIf="pages.length > 1"\n    (tabSelect)="onTabSelect($event)">\n    <!-- <super-tab class="" *ngFor="let page of pages" [root]="page.pageName" [icon]="page.icon" [id]="page.id"></super-tab> -->\n    <super-tab class="" *ngFor="let page of pages" [title]="page.title" [root]="page.pageName" [id]="page.id"></super-tab>\n  </super-tabs>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/payments/payments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PaymentsPage);
    return PaymentsPage;
}());

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic2_super_tabs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsPage = /** @class */ (function () {
    function ReportsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            { pageName: 'ReportGeneralPage', title: "General Reports", id: "General Reports" },
            { pageName: 'ReportMonthlyPage', title: "Monthly Reports", id: "Monthly Reports" }
        ];
        this.currentpage = "General Reports";
        this.selectedTab = 0;
    }
    ReportsPage.prototype.onTabSelect = function (ev) {
        this.selectedTab = ev.index;
        this.currentpage = ev.id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic2_super_tabs__["a" /* SuperTabs */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic2_super_tabs__["a" /* SuperTabs */])
    ], ReportsPage.prototype, "superTabs", void 0);
    ReportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-reports',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/reports/reports.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon class="goal-menu"></ion-icon>\n    </button>\n    <ion-title> {{currentpage}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <super-tabs\n  tabsPlacement="top" \n  [config]="{ sideMenu: \'left\' }" \n  toolbarBackground="light" \n  toolbarColor="color1" \n  indicatorColor="color1"\n  *ngIf="pages.length > 1"\n    (tabSelect)="onTabSelect($event)">\n    <!-- <super-tab class="" *ngFor="let page of pages" [root]="page.pageName" [icon]="page.icon" [id]="page.id"></super-tab> -->\n    <super-tab class="" *ngFor="let page of pages" [title]="page.title" [root]="page.pageName" [id]="page.id"></super-tab>\n  </super-tabs>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/reports/reports.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]])
    ], ReportsPage);
    return ReportsPage;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.CountryPage = 'SettingCountryPage';
        this.LeaguePage = 'SettingLeaguesPage';
        this.TeamPage = 'SettingTeamsPage';
        this.SelectionPage = 'SettingSelectionsPage';
    }
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting/setting.html"*/'<ion-tabs>\n  <ion-tab [root]="CountryPage"  tabTitle="Countries" ></ion-tab>\n  <ion-tab [root]="LeaguePage"  tabTitle="Leagues" ></ion-tab>\n  <ion-tab [root]="TeamPage"  tabTitle="Teams"></ion-tab>\n  <ion-tab [root]="SelectionPage"  tabTitle="Selections"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authenication_authenication__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestInterceptorProvider = /** @class */ (function () {
    function RequestInterceptorProvider(auth) {
        this.auth = auth;
    }
    RequestInterceptorProvider.prototype.intercept = function (request, next) {
        var cloneRequest = this.addToken(request);
        return next.handle(cloneRequest);
    };
    // Adds the token to your headers if it exists
    RequestInterceptorProvider.prototype.addToken = function (request) {
        var currentUser = this.auth.currentUserValue;
        if (currentUser) {
            var token = currentUser.token;
            var clone = void 0;
            clone = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
            return clone;
        }
        return request;
    };
    RequestInterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authenication_authenication__["a" /* AuthenicationProvider */]])
    ], RequestInterceptorProvider);
    return RequestInterceptorProvider;
}());

//# sourceMappingURL=request-interceptor.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sure3Odds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__capacitor_core__ = __webpack_require__(164);
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




var StatusBar = __WEBPACK_IMPORTED_MODULE_3__capacitor_core__["c" /* Plugins */].StatusBar, SplashScreen = __WEBPACK_IMPORTED_MODULE_3__capacitor_core__["c" /* Plugins */].SplashScreen, Storage = __WEBPACK_IMPORTED_MODULE_3__capacitor_core__["c" /* Plugins */].Storage;
;
var Sure3Odds = /** @class */ (function () {
    function Sure3Odds(platform, events, app, alertCtrl, menu, auth) {
        this.platform = platform;
        this.events = events;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.auth = auth;
        this.version = "1.0.0";
        this.isStatusBarLight = true;
        this.loggedInAdminPages = [
            { icon: 'football', color: 'light', title: 'All Games', component: 'AllMatchesPage' },
            { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' },
            { icon: 'people', color: 'light', title: 'SubAdmins', component: 'UserSubAdminsPage' },
            { icon: 'people', color: 'light', title: 'Members', component: 'UserMembersPage' },
            { icon: 'football', color: 'light', title: 'Games', component: 'GamesPage' },
            { icon: 'football', color: 'light', title: 'Predictions', component: 'PredictionsPage' },
            { icon: 'build', color: 'light', title: 'Settings', component: 'SettingPage' },
            { icon: 'card', color: 'light', title: 'Payments', component: 'PaymentsPage' },
            { icon: 'podium', color: 'light', title: 'Reports', component: 'ReportsPage' },
        ];
        this.loggedInSubAdminPages = [
            { icon: 'football', color: 'light', title: 'All Games', component: 'AllMatchesPage' },
            { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' },
            { icon: 'football', color: 'light', title: 'My Predictions', component: 'PredictionsPage' },
            { icon: 'build', color: 'light', title: 'Settings', component: 'SettingPage' }
        ];
        this.loggedInMemberPages = [
            { icon: 'football', color: 'light', title: 'My Games', component: 'AllMatchesPage' },
            { icon: 'person', color: 'light', title: 'My Profile', component: 'ProfilePage' }
        ];
        this.otherPages = [
            { icon: 'help-circle', color: 'light', title: 'Help', component: 'HelpPage' },
            { icon: 'briefcase', color: 'light', title: 'Terms', component: 'TermsPage' },
            { icon: 'log-out', color: 'danger', title: 'Logout', component: 'SignInPage' }
        ];
        this.animateVarible = false;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.initializeApp();
    }
    Sure3Odds.prototype.initializeApp = function () {
        this.listenToEvents();
        this.platformReady();
    };
    Sure3Odds.prototype.platformReady = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.platform.ready().then(function () {
                            _this.changeStatusBar();
                            _this.hideSplash();
                            _this.androidExitAppOnBackButton();
                            // this.backgroundMode.enable();
                        });
                        this.platform.resume.subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                console.log('Resume event detected');
                                return [2 /*return*/];
                            });
                        }); });
                        return [4 /*yield*/, Storage.get({ key: this.HAS_LOGGED_IN })];
                    case 1:
                        value = (_a.sent()).value;
                        if (value == "true") {
                            if (this.auth.currentUserDataValue) {
                                this.Userfullname = this.auth.currentUserDataValue.name;
                                this.usertype = this.auth.currentUserDataValue.user_type;
                                this.enableMenu(true, this.usertype);
                            }
                        }
                        else {
                            this.rootPage = 'SignInPage';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Sure3Odds.prototype.changeStatusBar = function () {
        StatusBar.show();
        StatusBar.setStyle({
            style: this.isStatusBarLight ? __WEBPACK_IMPORTED_MODULE_3__capacitor_core__["d" /* StatusBarStyle */].Dark : __WEBPACK_IMPORTED_MODULE_3__capacitor_core__["d" /* StatusBarStyle */].Light
        });
        this.isStatusBarLight = !this.isStatusBarLight;
        // Display content under transparent status bar (Android only)
        StatusBar.setOverlaysWebView({
            overlay: false
        });
        StatusBar.setBackgroundColor({
            color: "#0f5656"
        });
    };
    Sure3Odds.prototype.hideSplash = function () {
        SplashScreen.hide();
    };
    Sure3Odds.prototype.listenToEvents = function () {
        var _this = this;
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true, "");
        });
        this.events.subscribe('user:logout', function () {
            _this.nav.setRoot('SignInPage');
            _this.enableMenu(false, "");
            _this.auth.logout();
        });
        this.events.subscribe('user:login', function (usertype, Userfullname) {
            _this.Userfullname = Userfullname;
            _this.usertype = usertype;
            _this.enableMenu(true, usertype);
        });
    };
    Sure3Odds.prototype.enableMenu = function (showmenu, usertype) {
        if (usertype === "Member") {
            this.menu.enable(showmenu, 'loggedInMemberPages');
            this.menu.enable(!showmenu, 'loggedInAdminMenu');
            this.menu.enable(!showmenu, 'loggedInSubAdminMenu');
        }
        else if (usertype === "Admin") {
            this.menu.enable(showmenu, 'loggedInAdminMenu');
            this.menu.enable(!showmenu, 'loggedInMemberPages');
            this.menu.enable(!showmenu, 'loggedInSubAdminMenu');
        }
        else if (usertype === "SubAdmin") {
            this.menu.enable(showmenu, 'loggedInSubAdminMenu');
            this.menu.enable(!showmenu, 'loggedInMemberPages');
            this.menu.enable(!showmenu, 'loggedInAdminMenu');
        }
    };
    Sure3Odds.prototype.openPage = function (page) {
        this.nav.setRoot(page);
        this.activePage = page;
        this.LogOutFunction(page);
    };
    Sure3Odds.prototype.LogOutFunction = function (page) {
        if (page === 'SignInPage') {
            this.events.publish('user:logout');
            this.nav.setRoot(page);
            this.auth.logout();
        }
    };
    Sure3Odds.prototype.androidExitAppOnBackButton = function () {
        var _this = this;
        if (!this.platform.is('android')) {
            return;
        }
        this.platform.registerBackButtonAction(function () {
            var nav = _this.app.getActiveNavs()[0];
            var activeView = nav.getActive();
            if (nav.canGoBack()) {
                nav.pop();
            }
            else {
                if (activeView.component === 'AllMatchesPage') {
                    var actionSheet = _this.alertCtrl.create({
                        title: 'Exit Sur3Odds?',
                        message: 'Do you want to exit Sur3Odds?',
                        buttons: [
                            {
                                text: 'Yes',
                                handler: function () {
                                    _this.platform.exitApp(); //Exit from app
                                }
                            }, {
                                text: 'No',
                                role: 'cancel',
                                handler: function () {
                                }
                            }
                        ]
                    });
                    actionSheet.present();
                }
                else {
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Nav"])
    ], Sure3Odds.prototype, "nav", void 0);
    Sure3Odds = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/app/app.html"*/'<ion-menu id="loggedInMemberPages" [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/appicon.png">\n        </ion-avatar>\n        <h5 ion-text color="light">{{Userfullname}}</h5>\n        <p ion-text color="light">{{usertype}}</p>\n        <p ion-text color="light" style="margin-top: 1em;">{{version}}</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- admin list -->\n    <ion-list class="mainMenuList">\n      <ion-item menuClose *ngFor="let p of loggedInMemberPages" (click)="openPage(p.component)">\n        <ion-icon color="light" name="{{p.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{p.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n    <!-- leagues list -->\n    <ion-list class="leagueList">\n      <ion-item menuClose *ngFor="let item of otherPages" (click)="openPage(item.component)">\n        <ion-icon color="{{item.color}}" name="{{item.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{item.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu id="loggedInSubAdminMenu" [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/appicon.png">\n        </ion-avatar>\n        <h5 ion-text color="light">{{Userfullname}}</h5>\n        <p ion-text color="light">{{usertype}}</p>\n        <p ion-text color="light" style="margin-top: 1em;">{{version}}</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- admin list -->\n    <ion-list class="mainMenuList">\n      <ion-item menuClose *ngFor="let p of loggedInSubAdminPages" (click)="openPage(p.component)">\n        <ion-icon color="{{p.color}}" name="{{p.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{p.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <!-- leagues list -->\n    <ion-list class="leagueList">\n      <ion-item menuClose *ngFor="let item of otherPages" (click)="openPage(item.component)">\n        <ion-icon color="{{item.color}}" name="{{item.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{item.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-menu id="loggedInAdminMenu" [content]="content" swipeEnabled="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="assets/imgs/appicon.png">\n        </ion-avatar>\n        <h5 ion-text color="light">{{Userfullname}}</h5>\n        <p ion-text color="light">{{usertype}}</p>\n        <p ion-text color="light" style="margin-top: 1em;">{{version}}</p>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <!-- admin list -->\n    <ion-list class="mainMenuList">\n      <ion-item menuClose *ngFor="let p of loggedInAdminPages" (click)="openPage(p.component)">\n        <ion-icon color="{{p.color}}" name="{{p.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{p.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <!-- leagues list -->\n    <ion-list class="leagueList">\n      <ion-item menuClose *ngFor="let item of otherPages" (click)="openPage(item.component)">\n        <ion-icon color="{{item.color}}" name="{{item.icon}}" item-left></ion-icon>\n        <ion-label style="color: white !important;"> {{item.title}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content [class.animateApp]="animateVarible==true" swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */]])
    ], Sure3Odds);
    return Sure3Odds;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    apiUrl: "http://178.62.124.12:8080/sure3odds"
    // apiUrl :"http://localhost:8081/sure3odds"
    // apiUrl :"http://86172152000d.ngrok.io/sure3odds"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenicationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_from__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__capacitor_core__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var helper = new __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__["a" /* JwtHelperService */]();


var TOKEN_KEY = 'access_token';

var Storage = __WEBPACK_IMPORTED_MODULE_9__capacitor_core__["c" /* Plugins */].Storage;
var AuthenicationProvider = /** @class */ (function () {
    function AuthenicationProvider(http, nativeHttp, platform, toastCtrl) {
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["BehaviorSubject"](JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentUserDataSubject = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["BehaviorSubject"](JSON.parse(sessionStorage.getItem('userData')));
        this.currentUserData = this.currentUserDataSubject.asObservable();
    }
    Object.defineProperty(AuthenicationProvider.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenicationProvider.prototype, "currentUserDataValue", {
        get: function () {
            return this.currentUserDataSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenicationProvider.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            showCloseButton: true,
            closeButtonText: 'Ok!',
            duration: 4000,
            position: 'bottom',
            cssClass: '#3B7A57',
        });
        toast.present(toast);
    };
    AuthenicationProvider.prototype.CalculatePercentage = function (userAmt) {
        var addedPerc = (parseInt(userAmt) * 0.02);
        var newAmt = parseInt(userAmt) + addedPerc;
        if (parseInt(userAmt) >= 2500) {
            newAmt = parseInt(userAmt) + 100;
        }
        return newAmt;
    };
    AuthenicationProvider.prototype.onNativeApiCall = function (url, data) {
        this.nativeHttp.setDataSerializer('json');
        var nativeCall = this.nativeHttp.get(url, data, {
            "Content-Type": "application/json"
        });
        return Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_from__["from"])(nativeCall).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (result) {
            return JSON.parse(result.data);
        }));
    };
    AuthenicationProvider.prototype.login = function (email, password) {
        var _this = this;
        if (this.platform.is("android") || this.platform.is("ios")) {
            var params = {
                email: email,
                password: password,
            };
            return this.onNativeApiCall(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/member/authenticateuser", params).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) {
                if (res.statusCode === 200) {
                    sessionStorage.setItem('currentUser', JSON.stringify(res.data));
                    _this.currentUserSubject.next(res.data);
                    var decoded = helper.decodeToken(res.data.token);
                    sessionStorage.setItem('userData', JSON.stringify(decoded));
                    _this.currentUserDataSubject.next(decoded);
                }
                return res;
            }));
        }
        else {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
                .set('email', email)
                .set('password', password);
            return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/member/authenticateuser", { params: params })
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) {
                if (res.statusCode === 200) {
                    sessionStorage.setItem('currentUser', JSON.stringify(res.data));
                    _this.currentUserSubject.next(res.data);
                    var decoded = helper.decodeToken(res.data.token);
                    sessionStorage.setItem('userData', JSON.stringify(decoded));
                    _this.currentUserDataSubject.next(decoded);
                }
                return res;
            }));
        }
    };
    AuthenicationProvider.prototype.findUserDetails = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/user/find/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.GetUserDeta = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/user/get")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.deleteMember = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/member/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.logout = function () {
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('userData');
        this.currentUserSubject.next(null);
        this.currentUserDataSubject.next(null);
        Storage.remove({ key: 'hasSeenLogin' });
        Storage.remove({ key: TOKEN_KEY });
    };
    AuthenicationProvider.prototype.GetUsersByType = function (usertypeId, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('usertypeId', usertypeId)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/user/type/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.SearchUsersByType = function (searchValue, usertypeId, pageNo, pageSize) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('searchValue', searchValue)
            .set('usertypeId', usertypeId)
            .set('pageNo', pageNo)
            .set('pageSize', pageSize);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/user/type/search", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.updateUser = function (user) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/user/update", user).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    //-----------------------SubAdmin-------Start-------------------------
    AuthenicationProvider.prototype.createSubAdmin = function (user) {
        console.log(user);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/subadmin/create", user)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.deleteSubAdmin = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/subadmin/delete/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.GetMonthlyReport = function (selectedDate) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('selectedDate', selectedDate);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/report/monthly/get", { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.GetAppReport = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/report/general/get")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider.prototype.createNewUser = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + "/users/member/add", user)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (resp) {
            return resp;
        }));
    };
    AuthenicationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"]])
    ], AuthenicationProvider);
    return AuthenicationProvider;
}());

//# sourceMappingURL=authenication.js.map

/***/ })

},[374]);
//# sourceMappingURL=main.js.map