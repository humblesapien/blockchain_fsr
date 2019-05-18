(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");






var routes = [
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: '', pathMatch: 'full', redirectTo: 'signup' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <app-upload></app-upload>\n&nbsp;\n<app-download></app-download>\n -->\n\n <link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js\"></script>\n    <script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js\"></script>\n<router-outlet></router-outlet>\n <!-- <app-dashboard></app-dashboard> -->\n<!--  <app-signup></app-signup> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

//geth --testnet --syncmode=light --ws --wsorigins=mychat --shh --wsapi=web3,shh,net 


var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");


var AppComponent = /** @class */ (function () {
    function AppComponent(router, _appService, zone, http, route) {
        var _this = this;
        this.router = router;
        this._appService = _appService;
        this.zone = zone;
        this.http = http;
        this.route = route;
        this.m_pub_key = "";
        this.title = 'project2';
        this.url = "http://localhost:8080/";
        this.checkAndInstantiateWeb3 = function () {
            if (typeof window.web3 !== 'undefined') {
                console.warn('Using injected web3');
                _this.web3 = new Web3(window.web3.currentProvider);
            }
            else {
                // when running in browser, use incognito mode or log out of metamask
                console.warn('No web 3 detected, falling back to Ganache');
                _this.provider = new Web3.providers.HttpProvider('http://localhost:7545');
                _this.web3 = new Web3(_this.provider);
            }
            window.ethereum.enable();
        };
        this.onReady = function () {
            // get initial account balance so it can be displayed
            _this.web3.eth.getAccounts(function (err, accs) {
                if (err != null) {
                    console.log(err);
                    alert('There was an error fetching your accounts.');
                    return;
                }
                if (accs.length === 0) {
                    alert('You are not connected to an Ethereum client.');
                    return;
                }
                _this.m_pub_key = accs[0];
                console.log(_this.m_pub_key);
                //this.checkAccount();
            });
        };
        console.log("inside app component constructor");
        this.checkAndInstantiateWeb3();
        this.onReady();
    }
    AppComponent.prototype.checkAccount = function () {
        var _this = this;
        var data_send = JSON.stringify({
            'm_pub_key': this.m_pub_key
        });
        this.zone.runOutsideAngular(function () {
            _this._appService.post_method(_this.url + "check_account", data_send).subscribe(function (data) {
                _this.is_signed_up = data["is_signed_up"];
                console.log(_this.is_signed_up + "***************8");
                if (_this.is_signed_up == 1) {
                    console.log("navigating to dash");
                    _this.router.navigate(['/dashboard']);
                    //this.http.get("/dashboard");
                }
                else {
                    console.log("navigating to signuo");
                    _this.router.navigate(['/signup']);
                    //this.http.get("/signup");
                }
            }, function (error) {
                // console.log('post error');
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Native,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _upload_encr_decr_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./upload/encr-decr-service.service */ "./src/app/upload/encr-decr-service.service.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








//import { UploadModule } from './upload/upload.module';
//import { DownloadModule } from './download/download.module';











var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
// const routes: Routes = [
//     { path: 'signup', component: SignupComponent },
//     { path: '', component: SignupComponent },
//     { path: 'dashboard', component: DashboardComponent },
// ];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]],
            imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], /*RouterModule.forRoot(routes), */ _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_filesaver__WEBPACK_IMPORTED_MODULE_9__["FileSaverModule"], angular_alert_module__WEBPACK_IMPORTED_MODULE_10__["AlertsModule"].forRoot(), _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PerfectScrollbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_15__["DashboardModule"]],
            providers: [_upload_encr_decr_service_service__WEBPACK_IMPORTED_MODULE_14__["EncrDecrService"], _app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





// const headers1=new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set('Accept','application/json')
// .set('');
var AppService = /** @class */ (function () {
    function AppService(http, _router) {
        this.http = http;
        this._router = _router;
    }
    AppService.prototype.post_method = function (url, data) {
        console.log('post called ' + url + data);
        return this.http.post(url, JSON.parse(data)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    AppService.prototype.put_method = function (url, data) {
        console.log('post called ' + url + data);
        return this.http.put(url, JSON.parse(data)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    AppService.prototype.post_file_method = function (url, data) {
        console.log('post called ' + url + data);
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    AppService.prototype.patch_file_method = function (url, data) {
        console.log('patch called ' + url + data);
        return this.http.patch(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    AppService.prototype.patch_method = function (url, data) {
        console.log('patch called ' + url + data);
        return this.http.patch(url, JSON.parse(data)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    AppService.prototype.get_method = function (url) {
        var auth = 'Bearer ' + localStorage.getItem('token');
        //let headers = new HttpHeaders();
        console.log('get called ' + url);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    AppService.prototype.delete_method = function (url) {
        var auth = 'Bearer ' + localStorage.getItem('token');
        //let headers = new HttpHeaders();
        console.log('delete called ' + url);
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    AppService.prototype.delete_method_sender_id = function (url, data) {
        var auth = 'Bearer ' + localStorage.getItem('token');
        //     //let headers = new HttpHeaders();
        //     const header = new Headers();
        //   header.append('Content-Type', 'application/json');
        //     header.append('Authorization', `Bearer ${localStorage.getItem('token')}` );
        //    const options = new RequestOptions({headers: header,body:data});
        // let header = new HttpHeaders();
        //    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        //    headers.append('Accept', 'application/json');
        //    headers.append( 'Authorization', `Bearer ${localStorage.getItem('token')}`);
        //    var options =  {
        //        headers: {},
        //        body:JSON.stringify(data)
        //    };
        console.log('delete sender id called ' + url + data);
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
        // return this.http.delete(url, options).map((res: any) => JSON.parse(JSON.stringify(res)))
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(signupService, router) {
        this.signupService = signupService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log('AuthGuard#canActivate called');
        return this.signupService.onReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (val) { return console.log(val); }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");



var AuthService = /** @class */ (function () {
    function AuthService(_appService, zone, router) {
        this._appService = _appService;
        this.zone = zone;
        this.router = router;
        this.m_pub_key = "";
        this.title = 'project2';
        this.url = "http://localhost:8080/";
        this.val = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
    }
    AuthService.prototype.onReady = function () {
        var _this = this;
        // get initial account balance so it can be displayed
        if (typeof window.web3 !== 'undefined') {
            console.warn('Using injected web3');
            this.web3 = new Web3(window.web3.currentProvider);
        }
        else {
            // when running in browser, use incognito mode or log out of metamask
            console.warn('No web 3 detected, falling back to Ganache');
            this.provider = new Web3.providers.HttpProvider('http://localhost:7545');
            this.web3 = new Web3(this.provider);
        }
        window.ethereum.enable();
        this.web3.eth.getAccounts(function (err, accs) {
            if (err != null) {
                console.log(err);
                alert('There was an error fetching your accounts.');
                return;
            }
            if (accs.length === 0) {
                alert('You are not connected to an Ethereum client.');
                return;
            }
            _this.m_pub_key = accs[0];
            console.log(_this.m_pub_key);
            // this.isSigned();
        });
        setTimeout(function () {
            var data_send = JSON.stringify({
                'm_pub_key': _this.m_pub_key
            });
            console.log(data_send);
            console.log("here mofo");
            _this._appService.post_method(_this.url + "check_account", data_send).subscribe(function (data) {
                _this.is_signed_up = data["is_signed_up"];
                console.log(_this.is_signed_up + "***************8");
                if (_this.is_signed_up == 1) {
                    console.log("navigating to dash");
                    _this.router.navigate(['/dashboard']);
                    //this.http.get("/dashboard");
                    //this.val = of(false);
                    _this.val.next(false);
                }
                else {
                    console.log("navigating to signup");
                    _this.router.navigate(['/signup']);
                    //this.http.get("/signup");
                    //this.val = of(true);
                    _this.val.next(true);
                }
            }, 
            // console.log(this.val);
            function (error) {
                console.log('error');
            });
        }, 300);
        return this.val.asObservable();
        // onReady():Observable<boolean> {
        // // get initial account balance so it can be displayed
        //         if (typeof window.web3 !== 'undefined') {
        //             console.warn('Using injected web3');
        //             this.web3 = new Web3(window.web3.currentProvider);
        //         } else {
        //             // when running in browser, use incognito mode or log out of metamask
        //             console.warn('No web 3 detected, falling back to Ganache');
        //             this.provider = new Web3.providers.HttpProvider('http://localhost:7545');
        //             this.web3 = new Web3(this.provider);
        //         }
        //         window.ethereum.enable();
        //   const getAccountsAsObservable = Observable.bindNodeCallback(
        //     callback => this.web3.eth.getAccounts(callback));
        //   return getAccountsAsObservable()
        //     .pipe(
        //       switchMap(accs => {
        //         if (accs.length === 0) {
        //           alert('You are not connected to an Ethereum client.');
        //           // throw an error to skip to "cathError" pipe
        //           return throwError(new Error('You are not connected to an Ethereum client.'));
        //         }
        //         const m_pub_key=accs[0];
        //         console.log(this.m_pub_key);
        //         const data_send = JSON.stringify({
        //           'm_pub_key': m_pub_key
        //         });
        //         return of(data_send);
        //       }),
        //       switchMap(data_send => { 
        //         this._appService.post_method(this.url+"check_account", data_send)
        //       }),
        //       map(data => {
        //         this.is_signed_up=data["is_signed_up"];
        //         console.log(this.is_signed_up+"***************8");
        //         if(this.is_signed_up==1){
        //           console.log("navigating to dash");
        //           //this.router.navigate(['/dashboard']);
        //           //this.http.get("/dashboard");
        //           return false;
        //           // this.router.navigate(['/dashboard']);
        //         } else {
        //           console.log("navigating to signup");
        //           //this.router.navigate(['/signup']);
        //           //this.http.get("/signup");
        //           return true;
        //           // this.router.navigate(['/signup']);
        //         }
        //       }),
        //       catchError(err => {
        //         //handle error of getAccounts or post_method here
        //         console.log(err);
        //         alert('There was an error fetching your accounts.');
        //         return of(false);
        //       })
        //     )
        // }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashboard/dash-dialog/dash-dialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/dash-dialog/dash-dialog.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  height: 100%;\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n}\r\n\r\n.container {\r\n  height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2gtZGlhbG9nL2Rhc2gtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLE9BQU87RUFDUCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaC1kaWFsb2cvZGFzaC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dash-dialog/dash-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/dash-dialog/dash-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-alerts></app-alerts> -->\n<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly stretch\">\n  <label>Enter Password: </label>\n  <input mat-dialog-title type=\"password\" name=\"password\" [(ngModel)]=\"password\" />\n  <button  mat-raised-button color=\"primary\" class=\"down-files-btn\" (click)=\"submit()\">\n      Submit\n    </button>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dash-dialog/dash-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/dash-dialog/dash-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: DashDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashDialogComponent", function() { return DashDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





//import { AlertsService } from 'angular-alert-module';
var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
var DashDialogComponent = /** @class */ (function () {
    function DashDialogComponent(router, _appService, dialogRef) {
        var _this = this;
        this.router = router;
        this._appService = _appService;
        this.dialogRef = dialogRef;
        this.url = "http://localhost:8080/";
        this.password = '';
        this.checkAndInstantiateWeb3 = function () {
            if (typeof window.web3 !== 'undefined') {
                console.warn('Using injected web3');
                _this.web3 = new Web3(window.web3.currentProvider);
            }
            else {
                // when running in browser, use incognito mode or log out of metamask
                console.warn('No web 3 detected, falling back to Ganache');
                _this.provider = new Web3.providers.HttpProvider('http://localhost:7545');
                _this.web3 = new Web3(_this.provider);
            }
            window.ethereum.enable();
        };
        this.onReady = function () {
            // get initial account balance so it can be displayed
            _this.web3.eth.getAccounts(function (err, accs) {
                if (err != null) {
                    alert('There was an error fetching your accounts.');
                    return;
                }
                if (accs.length === 0) {
                    alert('You are not connected to an Ethereum client.');
                    return;
                }
                _this.m_pub_key = accs[0];
                console.log(_this.m_pub_key);
                //this.checkAccount();
            });
        };
        this.checkAndInstantiateWeb3();
        this.onReady();
    }
    DashDialogComponent.prototype.ngOnInit = function () {
        this.fn = function () { alert("Password Incorrect error"); };
    };
    DashDialogComponent.prototype.submit = function () {
        var _this = this;
        var data_send = JSON.stringify({
            'pass': this.password,
            'm_pub_key': this.m_pub_key
        });
        this._appService.post_method(this.url + "check_password", data_send).subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                console.log("the password is incorrect");
                _this.fn();
                _this.router.navigate(['/dashboard']);
            }
            else if (data.status == 1) {
                _this.dialogRef.close();
            }
        }, function (error) {
            console.log('post error');
        });
    };
    DashDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dash-dialog',
            template: __webpack_require__(/*! ./dash-dialog.component.html */ "./src/app/dashboard/dash-dialog/dash-dialog.component.html"),
            styles: [__webpack_require__(/*! ./dash-dialog.component.css */ "./src/app/dashboard/dash-dialog/dash-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], DashDialogComponent);
    return DashDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".split_left{\n height: 100%;\n width: 35%;\n position: fixed;\n top: 0;\n left:0;\n overflow-x: hidden;\n background-color: #0c1024;\n\n}\n.split_right{\n\n height: 100%;\n width: 65%;\n position: fixed;\n top:0;\n right: 0;\n overflow-x: hidden;\n background-color: #ebedf7;\n\n}\n.mat_accordian_send_message{\n\n background:#6573c3;\n}\n.mat_accordian_upload_file{\n background:#75c0c2;\n}\n.mat_accordian_my_files{\n background:#b2b9e1;\n}\n.mat_accordian_download_file{\n background:#3AAFA9;\n}\n.form_main {\n   width: 100%;\n}\n.form {\n   margin-right:10px;\n   margin-left:10px;\n   border-radius: 7px;\n}\n.txt[type=\"text\"] {\n   border: 1px solid #6B6E70;\n   margin: 5px 0;\n\n   padding: 10px 0 10px 5px;\n   width: 100%;\n}\n.txt[type=\"password\"] {\n   border: 1px solid #6B6E70;\n   margin: 10px 0;\n   padding: 10px 0 10px 5px;\n   width: 100%;\n}\n.txt_3[type=\"text\"] {\n   border: 1px solid #6B6E70;\n   margin: 10px 0 0;\n   padding: 10px 0 10px 5px;\n   width: 100%;\n}\n.txt2[type=\"submit\"] {\n   background: #222629 none repeat scroll 0 0;\n   border: 1px solid #FEFFFF;\n   border-radius: 25px;\n   color: #fff;\n   font-size: 16px;\n   font-style: normal;\n   line-height: 35px;\n   margin: 10px 0;\n   padding-left: 20px;\n   padding-right: 20px;\n   text-transform: uppercase;\n}\n.txt:focus {\n   outline: none !important;\n   border:1px solid #222629;\n}\n.txt_3:focus {\n outline: none !important;\n border:1px solid #222629;\n}\n.txt2:hover {\n   background: #6573c3 none repeat scroll 0 0;\n   transition: all 0.5s ease 0s;\n}\n.left_button{\n   background: #192048 none repeat scroll 0 0;\n   border: 1px solid #FEFFFF;\n   border-radius: 20px;\n   color: #fff;\n   font-size: 16px;\n   font-style: normal;\n   line-height: 35px;\n   padding: 0;\n   text-transform: uppercase;\n   width: 90%;  \n   margin:10px;\n}\n.left_button:hover {\n   background: #2c387e none repeat scroll 0 0;\n   transition: all 0.5s ease 0s;\n}\n.example-card {\n margin:5px;\n color:#474B45;\n background-color:white;\n}\n#card_header {\n   font-weight: bold;\n}\n.file_name{\n color:white;\n}\n.example-margin {\n margin: 0 10px;\n}\n.icon-button{\n font-size: 15px;\n background: transparent;\n color: white;\n}\n.mat-icon-button{\n height: 15px;\n line-height: 0px;\n}\n.mat-expansion-panel-header-title{\n color: white;\n font-weight: bold;\n}\n.mat-list-item {\n font-size:15px;\n}\n.mat-card {\n margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLFVBQVU7Q0FDVixlQUFlO0NBQ2YsTUFBTTtDQUNOLE1BQU07Q0FDTixrQkFBa0I7Q0FDbEIseUJBQXlCOztBQUUxQjtBQUNBOztDQUVDLFlBQVk7Q0FDWixVQUFVO0NBQ1YsZUFBZTtDQUNmLEtBQUs7Q0FDTCxRQUFRO0NBQ1Isa0JBQWtCO0NBQ2xCLHlCQUF5Qjs7QUFFMUI7QUFFQTs7Q0FFQyxrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7QUFJQTtHQUNHLFdBQVc7QUFDZDtBQUVBO0dBQ0csaUJBQWlCO0dBQ2pCLGdCQUFnQjtHQUNoQixrQkFBa0I7QUFDckI7QUFDQTtHQUNHLHlCQUF5QjtHQUN6QixhQUFhOztHQUViLHdCQUF3QjtHQUN4QixXQUFXO0FBQ2Q7QUFDQTtHQUNHLHlCQUF5QjtHQUN6QixjQUFjO0dBQ2Qsd0JBQXdCO0dBQ3hCLFdBQVc7QUFDZDtBQUNBO0dBQ0cseUJBQXlCO0dBQ3pCLGdCQUFnQjtHQUNoQix3QkFBd0I7R0FDeEIsV0FBVztBQUNkO0FBQ0E7R0FDRywwQ0FBMEM7R0FDMUMseUJBQXlCO0dBQ3pCLG1CQUFtQjtHQUNuQixXQUFXO0dBQ1gsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsY0FBYztHQUNkLGtCQUFrQjtHQUNsQixtQkFBbUI7R0FDbkIseUJBQXlCO0FBQzVCO0FBSUE7R0FDRyx3QkFBd0I7R0FDeEIsd0JBQXdCO0FBQzNCO0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsd0JBQXdCO0FBQ3pCO0FBRUE7R0FDRywwQ0FBMEM7R0FDMUMsNEJBQTRCO0FBQy9CO0FBRUE7R0FDRywwQ0FBMEM7R0FDMUMseUJBQXlCO0dBQ3pCLG1CQUFtQjtHQUNuQixXQUFXO0dBQ1gsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsVUFBVTtHQUNWLHlCQUF5QjtHQUN6QixVQUFVO0dBQ1YsV0FBVztBQUNkO0FBRUE7R0FDRywwQ0FBMEM7R0FDMUMsNEJBQTRCO0FBQy9CO0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLHNCQUFzQjtBQUN2QjtBQUVBO0dBQ0csaUJBQWlCO0FBQ3BCO0FBRUE7Q0FDQyxXQUFXO0FBQ1o7QUFHQTtDQUNDLGNBQWM7QUFDZjtBQUVBO0NBQ0MsZUFBZTtDQUNmLHVCQUF1QjtDQUN2QixZQUFZO0FBQ2I7QUFDQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGNBQWM7QUFDZjtBQUVBO0NBQ0MsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwbGl0X2xlZnR7XG4gaGVpZ2h0OiAxMDAlO1xuIHdpZHRoOiAzNSU7XG4gcG9zaXRpb246IGZpeGVkO1xuIHRvcDogMDtcbiBsZWZ0OjA7XG4gb3ZlcmZsb3cteDogaGlkZGVuO1xuIGJhY2tncm91bmQtY29sb3I6ICMwYzEwMjQ7XG5cbn1cbi5zcGxpdF9yaWdodHtcblxuIGhlaWdodDogMTAwJTtcbiB3aWR0aDogNjUlO1xuIHBvc2l0aW9uOiBmaXhlZDtcbiB0b3A6MDtcbiByaWdodDogMDtcbiBvdmVyZmxvdy14OiBoaWRkZW47XG4gYmFja2dyb3VuZC1jb2xvcjogI2ViZWRmNztcblxufVxuXG4ubWF0X2FjY29yZGlhbl9zZW5kX21lc3NhZ2V7XG5cbiBiYWNrZ3JvdW5kOiM2NTczYzM7XG59XG5cbi5tYXRfYWNjb3JkaWFuX3VwbG9hZF9maWxle1xuIGJhY2tncm91bmQ6Izc1YzBjMjtcbn1cblxuLm1hdF9hY2NvcmRpYW5fbXlfZmlsZXN7XG4gYmFja2dyb3VuZDojYjJiOWUxO1xufVxuXG4ubWF0X2FjY29yZGlhbl9kb3dubG9hZF9maWxle1xuIGJhY2tncm91bmQ6IzNBQUZBOTtcbn1cblxuXG5cbi5mb3JtX21haW4ge1xuICAgd2lkdGg6IDEwMCU7XG59XG4gIFxuLmZvcm0ge1xuICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLnR4dFt0eXBlPVwidGV4dFwiXSB7XG4gICBib3JkZXI6IDFweCBzb2xpZCAjNkI2RTcwO1xuICAgbWFyZ2luOiA1cHggMDtcblxuICAgcGFkZGluZzogMTBweCAwIDEwcHggNXB4O1xuICAgd2lkdGg6IDEwMCU7XG59XG4udHh0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gICBib3JkZXI6IDFweCBzb2xpZCAjNkI2RTcwO1xuICAgbWFyZ2luOiAxMHB4IDA7XG4gICBwYWRkaW5nOiAxMHB4IDAgMTBweCA1cHg7XG4gICB3aWR0aDogMTAwJTtcbn1cbi50eHRfM1t0eXBlPVwidGV4dFwiXSB7XG4gICBib3JkZXI6IDFweCBzb2xpZCAjNkI2RTcwO1xuICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDVweDtcbiAgIHdpZHRoOiAxMDAlO1xufVxuLnR4dDJbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICBiYWNrZ3JvdW5kOiAjMjIyNjI5IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICBib3JkZXI6IDFweCBzb2xpZCAjRkVGRkZGO1xuICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgIGNvbG9yOiAjZmZmO1xuICAgZm9udC1zaXplOiAxNnB4O1xuICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICBtYXJnaW46IDEwcHggMDtcbiAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cblxuLnR4dDpmb2N1cyB7XG4gICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICBib3JkZXI6MXB4IHNvbGlkICMyMjI2Mjk7XG59XG5cbi50eHRfMzpmb2N1cyB7XG4gb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuIGJvcmRlcjoxcHggc29saWQgIzIyMjYyOTtcbn1cblxuLnR4dDI6aG92ZXIge1xuICAgYmFja2dyb3VuZDogIzY1NzNjMyBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcbn1cblxuLmxlZnRfYnV0dG9ue1xuICAgYmFja2dyb3VuZDogIzE5MjA0OCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgYm9yZGVyOiAxcHggc29saWQgI0ZFRkZGRjtcbiAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICBjb2xvcjogI2ZmZjtcbiAgIGZvbnQtc2l6ZTogMTZweDtcbiAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgcGFkZGluZzogMDtcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICB3aWR0aDogOTAlOyAgXG4gICBtYXJnaW46MTBweDtcbn1cblxuLmxlZnRfYnV0dG9uOmhvdmVyIHtcbiAgIGJhY2tncm91bmQ6ICMyYzM4N2Ugbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuIG1hcmdpbjo1cHg7XG4gY29sb3I6IzQ3NEI0NTtcbiBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuXG4jY2FyZF9oZWFkZXIge1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5maWxlX25hbWV7XG4gY29sb3I6d2hpdGU7XG59XG5cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiBtYXJnaW46IDAgMTBweDtcbn1cblxuLmljb24tYnV0dG9ue1xuIGZvbnQtc2l6ZTogMTVweDtcbiBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWljb24tYnV0dG9ue1xuIGhlaWdodDogMTVweDtcbiBsaW5lLWhlaWdodDogMHB4O1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxle1xuIGNvbG9yOiB3aGl0ZTtcbiBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC1saXN0LWl0ZW0ge1xuIGZvbnQtc2l6ZToxNXB4O1xufVxuXG4ubWF0LWNhcmQge1xuIG1hcmdpbjogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"split_right\">\n  <mat-accordion >\n    <mat-expansion-panel class=\"mat_accordian_send_message\" [expanded]=\"step === 1\" (opened)=\"setStep(1)\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Compose Message\n        </mat-panel-title>\n        \n      </mat-expansion-panel-header>\n\n      <div class=\"form_main\">\n        <div class=\"form\">\n          <form id=\"contactFrm\" name=\"contactFrm\">\n            <input type=\"text\" id = \"email\" class = \"txt\" name=\"email\" placeholder=\"Enter Receipient Email\" [(ngModel)]=\"email\">\n            <input type=\"text\" id = \"hash\" class = \"txt\" name=\"hash\" placeholder=\"Enter File Hash\" [(ngModel)]=\"hash\">\n            <input type=\"password\" id = \"password\" class = \"txt\" name=\"password\" placeholder=\"Enter File Password\" [(ngModel)]=\"password\">\n            <textarea placeholder=\"Your Message\" name=\"message\" type=\"text\" class=\"txt_3\" [(ngModel)]=\"message\"></textarea>\n          </form>\n        \n          <input type=\"submit\" value=\"send\" name=\"submit\" class=\"txt2\" (click)=\"send()\">\n        \n        </div>\n      </div>\n\n    </mat-expansion-panel>\n  </mat-accordion>\n  \n<app-upload  (click)=\"setStep(2)\"></app-upload>\n<app-download (click)=\"setStep(3)\"></app-download>\n\n  <mat-accordion >\n    <mat-expansion-panel class=\"mat_accordian_my_files\" [expanded]=\"step === 4\" (opened)=\"setStep(4)\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          My Files\n        </mat-panel-title>\n        \n      </mat-expansion-panel-header>\n\n          <div>\n            <mat-list>\n              <div *ngFor=\"let file of files_data\" mat-line style=\"height: 30px; border-bottom: 1px solid gray;margin-bottom: 15px;\">\n                <p class=\"file_name\"  style=\"display:inline\">{{ file.fileName }}</p>\n                <button mat-icon-button class=\"icon-button\" style=\"float:right\" (click)=\"messageComposer(file.fileHash)\" >\n                  <mat-icon [inline]=\"true\" class=\"icon-button\">arrow_forward_icon</mat-icon>\n                </button>\n                <button mat-icon-button class=\"icon-button\" style=\"float: right;\" (click)=\"copyToClipboard(file.fileHash)\">\n                  <mat-icon [inline]=\"true\" class=\"icon-button\">file_copy</mat-icon>\n                </button>\n              </div>\n            </mat-list>\n            <br>\n          </div>\n\n\n\n\n    </mat-expansion-panel>\n  </mat-accordion>\n      \n</div>\n\n<div class=\"split_left\">\n  <button (click)=\"receive()\" id=\"refresh\" class =\"left_button\" type=\"submit\"> Refresh</button>\n\n  <div style=\"height:90%;\">\n    <perfect-scrollbar>\n      <div  *ngFor=\"let msg of local_storage_data\">\n    \n       <mat-card style=\"background: white\">\n          \n          <mat-card-header>\n              <mat-card-title>{{ msg.name }}</mat-card-title>\n          </mat-card-header>\n          \n          <mat-card-content>\n            <p style=\"word-break: break-all;\">Hash: {{ msg.hash }} </p>\n            <p>Text: {{ msg.text }}</p>\n            <p>Password: {{ msg.password }}</p>\n          </mat-card-content>\n        \n        </mat-card> \n      \n      </div>\n    </perfect-scrollbar>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dash_dialog_dash_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dash-dialog/dash-dialog.component */ "./src/app/dashboard/dash-dialog/dash-dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dialog, router, _appService, http) {
        var _this = this;
        this.dialog = dialog;
        this.router = router;
        this._appService = _appService;
        this.http = http;
        this.received_messages = [];
        this.files_data = [];
        this.email = "";
        this.receiver_w_pub_key = "";
        this.message = "";
        this.hash = "";
        this.password = "";
        this.url = "http://localhost:8080/";
        this.local_storage_data = [];
        this.step = 0;
        this.checkAndInstantiateWeb3 = function () {
            if (typeof window.web3 !== 'undefined') {
                console.warn('Using injected web3');
                _this.web3 = new Web3(window.web3.currentProvider);
            }
            else {
                // when running in browser, use incognito mode or log out of metamask
                console.warn('No web 3 detected, falling back to Ganache');
                _this.provider = new Web3.providers.HttpProvider('http://localhost:7545');
                _this.web3 = new Web3(_this.provider);
            }
            window.ethereum.enable();
        };
        this.onReady = function () {
            // get initial account balance so it can be displayed
            _this.web3.eth.getAccounts(function (err, accs) {
                if (err != null) {
                    alert('There was an error fetching your accounts.');
                    return;
                }
                if (accs.length === 0) {
                    alert('You are not connected to an Ethereum client.');
                    return;
                }
                _this.m_pub_key = accs[0];
                console.log(_this.m_pub_key);
                //this.checkAccount();
                var get_url = "http://api-ropsten.etherscan.io/api?module=account&action=txlist&address=" + _this.m_pub_key + "&startblock=0&endblock=99999999&sort=asc&apikey=0xeD8cBe4a6ABe9BDbe2e6457aae4464ab844b1753";
                console.log("url" + get_url);
                _this._appService.get_method(get_url).subscribe(function (data) {
                    var values = [];
                    for (var i = 0; i < data.result.length; i++) {
                        if (data.result[i].to == "0x73239859996e1b0d661514df665368695c9b9683") {
                            values.push(data.result[i]);
                        } //use i instead of 0
                    }
                    for (var i = 0; i < values.length; i++) {
                        //console.log(this.web3.toAscii(values[i].input));
                        _this.files_data.push(JSON.parse(_this.web3.toAscii(values[i].input)));
                    }
                    console.log(_this.files_data);
                    //console.log(files_data)  
                }, function (error) {
                    console.log(error);
                });
            });
            // var get_url = "http://api-ropsten.etherscan.io/api?module=account&action=txlist&address="+this.m_pub_key+"&startblock=0&endblock=99999999&sort=asc&apikey=0xeD8cBe4a6ABe9BDbe2e6457aae4464ab844b1753"
            // console.log("url"+get_url);
            // this.http.get(get_url).pipe(map((response: Response) => {
            //   //console.log(response.result);
            //   var resp = JSON.parse(JSON.stringify(response));
            //   let values = [];
            //   for(let i=0; i<resp.result.length; i++){
            //     if(resp.result[i].to == "0x73239859996e1b0d661514df665368695c9b9683"){
            //       values.push(resp.result[i]);
            //     } //use i instead of 0
            //   }
            //   for(let i=0;i<values.length;i++){
            //     //console.log(this.web3.toAscii(values[i].input));
            //     this.files_data.push(JSON.parse(this.web3.toAscii(values[i].input)));
            //   }
            //   console.log(this.files_data);
            //   //console.log(files_data)
            // })).subscribe();
        };
        this.checkAndInstantiateWeb3();
        this.onReady();
        this.refresh();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.checkPassword();
    };
    DashboardComponent.prototype.checkPassword = function () {
        var _this = this;
        this._appService.get_method(this.url + "check_session").subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                //open popup
                var dialogRef = _this.dialog.open(_dash_dialog_dash_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DashDialogComponent"], { width: '50%', height: '50%', disableClose: true });
            }
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.messageComposer = function (fileHash) {
        this.hash = fileHash;
        this.step = 1;
        console.log("Hash" + fileHash);
    };
    DashboardComponent.prototype.copyToClipboard = function (item) {
        document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', (item));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    };
    DashboardComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    DashboardComponent.prototype.nextStep = function () {
        this.step++;
    };
    DashboardComponent.prototype.prevStep = function () {
        this.step--;
    };
    DashboardComponent.prototype.send = function () {
        var data_send = JSON.stringify({
            'email': this.email,
            'm_pub_key': this.m_pub_key,
            'message': this.message,
            'hash': this.hash,
            'password': this.password
        });
        this._appService.post_method(this.url + "send", data_send).subscribe(function (data) {
            console.log(data);
            if (data.status == 0) {
                //open popup
                //this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
            }
        }, function (error) {
            console.log('post error');
        });
        this.email = null;
        this.message = null;
        this.hash = null;
        this.password = null;
        this.step = 0;
    };
    DashboardComponent.prototype.receive = function () {
        var _this = this;
        var data_send = JSON.stringify({
            'm_pub_key': this.m_pub_key
        });
        this._appService.post_method(this.url + "check_messages", data_send).subscribe(function (data) {
            console.log(data);
            _this.received_messages = data.messages;
            for (var i = 0; i < _this.received_messages.length; i++) {
                localStorage.setItem((localStorage.length + i) + "", JSON.stringify(_this.received_messages[i]));
            }
            _this.refresh();
            console.log("******** " + _this.received_messages + " *******");
        }, function (error) {
            console.log('post error');
        });
    };
    DashboardComponent.prototype.refresh = function () {
        this.local_storage_data = [];
        for (var i = 0; i < localStorage.length; i++) {
            this.local_storage_data.push(JSON.parse(localStorage.getItem(i + "")));
            console.log(this.local_storage_data);
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dash_dialog_dash_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dash-dialog/dash-dialog.component */ "./src/app/dashboard/dash-dialog/dash-dialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _upload_upload_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../upload/upload.module */ "./src/app/upload/upload.module.ts");
/* harmony import */ var _download_download_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../download/download.module */ "./src/app/download/download.module.ts");








//import { AlertsModule } from 'angular-alert-module';







var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_upload_upload_module__WEBPACK_IMPORTED_MODULE_12__["UploadModule"], _download_download_module__WEBPACK_IMPORTED_MODULE_13__["DownloadModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _dash_dialog_dash_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DashDialogComponent"]],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            entryComponents: [_dash_dialog_dash_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DashDialogComponent"]] // Add the DialogComponent as entry component
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/download/down-dialog/down-dialog.component.css":
/*!****************************************************************!*\
  !*** ./src/app/download/down-dialog/down-dialog.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".down-files-btn {\n  float: right;\n}\n\n:host {\n  height: 100%;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n.actions {\n  justify-content: flex-end;\n}\n\n.container {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG93bmxvYWQvZG93bi1kaWFsb2cvZG93bi1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsT0FBTztFQUNQLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2Rvd25sb2FkL2Rvd24tZGlhbG9nL2Rvd24tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG93bi1maWxlcy1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/download/down-dialog/down-dialog.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/download/down-dialog/down-dialog.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-alerts></app-alerts>\n<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly stretch\">\n  <h1 mat-dialog-title>Download Files</h1>\n  <label>Enter The File Hash: </label>\n  <input type=\"text\" name=\"fileHash\" [(ngModel)]=\"fileHash\" />\n  <label>Password:</label>\n  <input type=\"password\" name=\"passwd\" id=\"passwd\" [(ngModel)]=\"passwd\" (ngModelChange)=\"checkPassword($event)\"/>\n  <sub>(Enter the 8 letter password)</sub>\n  <div>\n  \t<mat-list>\n      <h4 mat-line *ngIf=\"reqOngoing\">Completing the request please be patient....</h4>\n    \t<h4 mat-line>{{fname}}</h4>\n        <mat-progress-bar *ngIf=\"display\" mode=\"determinate\" [value]=\"progress | async\"></mat-progress-bar>\n    </mat-list>\n    <br>\n    <button  [disabled] = \"pswdFlag\" mat-raised-button color=\"primary\" class=\"down-files-btn\" (click)=\"downloadFiles()\">\n      Download and Save the File\n    </button>\n    <button [disabled]=\"downloading\" mat-raised-button color=\"primary\" mat-dialog-close (click)=\"close()\">Close</button>\n  </div>\n\n  <!-- This is the content of the dialog, containing a list of the files to upload -->\n<!--   <mat-dialog-content fxFlex>\n    <mat-list>\n      <mat-list-item *ngFor=\"let file of files\">\n        <h4 mat-line>{{file.name}}</h4>\n        <mat-progress-bar *ngIf=\"progress\" mode=\"determinate\" [value]=\"progress[file.name].progress | async\"></mat-progress-bar>\n      </mat-list-item>\n    </mat-list>\n  </mat-dialog-content> -->\n\n  <!-- This are the actions of the dialog, containing the primary and the cancel button-->\n<!--   <mat-dialog-actions class=\"actions\">\n    <button *ngIf=\"showCancelButton\" mat-button mat-dialog-close>Cancel</button>\n    <button mat-raised-button color=\"primary\" [disabled]=\"!canBeClosed\" (click)=\"closeDialog()\">{{primaryButtonText}}</button>\n  </mat-dialog-actions> -->\n</div>\n"

/***/ }),

/***/ "./src/app/download/down-dialog/down-dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/download/down-dialog/down-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: DownDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownDialogComponent", function() { return DownDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _upload_encr_decr_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../upload/encr-decr-service.service */ "./src/app/upload/encr-decr-service.service.ts");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");



//import { DownloadService } from '../download.service'

;




var DownDialogComponent = /** @class */ (function () {
    function DownDialogComponent(alerts, FileSaverService, http, dialogRef, EncrDecr) {
        this.alerts = alerts;
        this.FileSaverService = FileSaverService;
        this.http = http;
        this.dialogRef = dialogRef;
        this.EncrDecr = EncrDecr;
        this.display = 0;
        this.fileHash = "";
        this.passwd = "";
        this.pswdFlag = true;
        this.progress = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.downloading = false;
        this.reqOngoing = false;
    }
    DownDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fn = function () { _this.alerts.setMessage("Password Incorrect", "error"); };
        this.display = 0;
    };
    DownDialogComponent.prototype.checkPassword = function (event) {
        if (this.passwd.length === 8) {
            this.pswdFlag = false;
        }
        else
            this.pswdFlag = true;
    };
    DownDialogComponent.prototype.downloadFiles = function () {
        var _this = this;
        var url = "https://swarm-gateways.net/bzz-raw:/" + this.fileHash;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('GET', url, {
            reportProgress: true,
            responseType: 'text'
        });
        this.http.request(req).subscribe(function (res) {
            //console.log(res);
            _this.downloading = true;
            if (res.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response) {
                var downloadedObj = JSON.parse(res.body.toString());
                _this.fname = downloadedObj.fileName;
                if (_this.fname.search("jpg") != -1 || _this.fname.search("png") != -1 || _this.fname.search("jpeg") != -1 || _this.fname.search("pdf") != -1) {
                    //console.log("an image file");
                    console.log(downloadedObj.encryptedText);
                    try {
                        var base64Text = _this.EncrDecr.get(_this.passwd, downloadedObj.encryptedText);
                        var extension = base64Text.split(";")[0].substring(5);
                        var imageBlob = _this.dataURItoBlob(base64Text.split(",")[1], extension);
                        _this.FileSaverService.save(imageBlob, downloadedObj.fileName);
                    }
                    catch (e) {
                        console.log("the password is incorrect");
                        _this.fn();
                    }
                }
                else {
                    //console.log("NOT an image file");
                    console.log(downloadedObj.encryptedText);
                    try {
                        var decryptedText = _this.EncrDecr.get(_this.passwd, downloadedObj.encryptedText);
                        console.log(decryptedText);
                        var data = new Blob([decryptedText]);
                        _this.FileSaverService.save(data, downloadedObj.fileName);
                    }
                    catch (e) {
                        console.log("the password is incorrect");
                        _this.fn();
                    }
                }
            }
            if (res.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].DownloadProgress) {
                _this.display = 1;
                var percentDone = Math.round(100 * res.loaded / res.total);
                _this.reqOngoing = true;
                console.log(percentDone);
                _this.progress.next(percentDone);
            }
            else if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                _this.progress.complete();
                _this.downloading = false;
                _this.reqOngoing = false;
            }
        });
    };
    DownDialogComponent.prototype.dataURItoBlob = function (dataURI, extension) {
        var byteString = atob(dataURI);
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var int8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([arrayBuffer], { type: extension });
        return blob;
    };
    DownDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DownDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-down-dialog',
            template: __webpack_require__(/*! ./down-dialog.component.html */ "./src/app/download/down-dialog/down-dialog.component.html"),
            styles: [__webpack_require__(/*! ./down-dialog.component.css */ "./src/app/download/down-dialog/down-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_alert_module__WEBPACK_IMPORTED_MODULE_7__["AlertsService"], ngx_filesaver__WEBPACK_IMPORTED_MODULE_6__["FileSaverService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _upload_encr_decr_service_service__WEBPACK_IMPORTED_MODULE_5__["EncrDecrService"]])
    ], DownDialogComponent);
    return DownDialogComponent;
}());



/***/ }),

/***/ "./src/app/download/download.component.css":
/*!*************************************************!*\
  !*** ./src/app/download/download.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat_accordian_download_file{\n background:#6573c3;\n}\n\n.title{\ncolor:white !important;\nfont-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG93bmxvYWQvZG93bmxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QixpQkFBaUI7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9kb3dubG9hZC9kb3dubG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdF9hY2NvcmRpYW5fZG93bmxvYWRfZmlsZXtcbiBiYWNrZ3JvdW5kOiM2NTczYzM7XG59XG5cbi50aXRsZXtcbmNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XG5mb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/download/download.component.html":
/*!**************************************************!*\
  !*** ./src/app/download/download.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button (click)=\"openDownloadDialog()\">Download</button> -->\n  <mat-accordion>\n    <mat-expansion-panel class=\"mat_accordian_download_file\" [disabled]=\"true\" >\n      <mat-expansion-panel-header (click)=\"openDownloadDialog()\" >\n      <mat-panel-title class=\"title\">\n        Download File\n      </mat-panel-title>\n      </mat-expansion-panel-header>\n    </mat-expansion-panel>\n  </mat-accordion>\n"

/***/ }),

/***/ "./src/app/download/download.component.ts":
/*!************************************************!*\
  !*** ./src/app/download/download.component.ts ***!
  \************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _down_dialog_down_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./down-dialog/down-dialog.component */ "./src/app/download/down-dialog/down-dialog.component.ts");
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./download.service */ "./src/app/download/download.service.ts");





var DownloadComponent = /** @class */ (function () {
    function DownloadComponent(dialog, downloadService) {
        this.dialog = dialog;
        this.downloadService = downloadService;
    }
    DownloadComponent.prototype.openDownloadDialog = function () {
        var dialogRef = this.dialog.open(_down_dialog_down_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DownDialogComponent"], { width: '50%', height: '66%' });
    };
    DownloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-download',
            template: __webpack_require__(/*! ./download.component.html */ "./src/app/download/download.component.html"),
            styles: [__webpack_require__(/*! ./download.component.css */ "./src/app/download/download.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _download_service__WEBPACK_IMPORTED_MODULE_4__["DownloadService"]])
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "./src/app/download/download.module.ts":
/*!*********************************************!*\
  !*** ./src/app/download/download.module.ts ***!
  \*********************************************/
/*! exports provided: DownloadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadModule", function() { return DownloadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _download_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download.component */ "./src/app/download/download.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _down_dialog_down_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./down-dialog/down-dialog.component */ "./src/app/download/down-dialog/down-dialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./download.service */ "./src/app/download/download.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm5/ngx-filesaver.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");















var DownloadModule = /** @class */ (function () {
    function DownloadModule() {
    }
    DownloadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], angular_alert_module__WEBPACK_IMPORTED_MODULE_12__["AlertsModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ngx_filesaver__WEBPACK_IMPORTED_MODULE_11__["FileSaverModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]],
            declarations: [_download_component__WEBPACK_IMPORTED_MODULE_3__["DownloadComponent"], _down_dialog_down_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DownDialogComponent"]],
            exports: [_download_component__WEBPACK_IMPORTED_MODULE_3__["DownloadComponent"]],
            entryComponents: [_down_dialog_down_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DownDialogComponent"]],
            providers: [_download_service__WEBPACK_IMPORTED_MODULE_8__["DownloadService"]]
        })
    ], DownloadModule);
    return DownloadModule;
}());



/***/ }),

/***/ "./src/app/download/download.service.ts":
/*!**********************************************!*\
  !*** ./src/app/download/download.service.ts ***!
  \**********************************************/
/*! exports provided: DownloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadService", function() { return DownloadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");




var url = 'http://localhost:8000/upload';
var DownloadService = /** @class */ (function () {
    function DownloadService(http) {
        this.http = http;
    }
    DownloadService.prototype.download = function (fHash) {
        var _this = this;
        console.log(fHash);
        var url = "https://swarm-gateways.net/bzz-raw:/" + fHash;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', url, {
            reportProgress: true,
            responseType: 'text'
        });
        this.http.request(req).subscribe(function (res) {
            //console.log(res);
            if (res.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                console.log(res.body + " " + typeof res.body);
                _this.resObj = res.body;
                //return res.body;
            }
        });
        console.log(this.resObj instanceof rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"]);
        return this.resObj;
    };
    DownloadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DownloadService);
    return DownloadService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\t\r\n\t}\r\n\tform{\r\n\t\tmargin-top: 100px;\r\n\t\tz-index:100;\r\n  border: 8px solid;\r\n  border-top-color: #ebedf7;\r\n  border-left-color: #ebedf7;\r\n  border-bottom-color: #ebedf7;\r\n  border-right-color: #ebedf7;\r\n\tbackground-color: #0c1024;\r\n\t}\r\n\t#username{\r\n\t\tmargin-left: 0px;\r\n\t\tmax-width:42vh;\r\n\r\n\t}\r\n\t#password{\r\n\t\tmargin-left: 0px;\r\n\t\tmax-width:42vh;\r\n\t}\r\n\t#confirmpassword{\r\n\t\tmargin-left: 0px;\r\n\t\tmax-width:42vh;\r\n\r\n\t}\r\n\t#email{\r\n\t\tmargin-left: 0px;\r\n\t\tmax-width:42vh;\r\n\r\n\t}\r\n\t#submit{\r\n\t\tmargin-left: 47px;\r\n\r\n\t}\r\n\t#login{\r\n\t\tmargin-left: 47px;\r\n\t\tmargin-bottom: 6px;\r\n\t\tpadding-bottom: 5px;\r\n\r\n\t}\r\n\t#signup{\r\n\t\tfont-size: 18px;\r\n\t\tmargin-left: 47px;\r\n\t\tcolor: #fff;\r\n\t}\r\n\t.form-control{\r\n\t\tmargin-right: 6px;\r\n\t}\r\n\t.row{\r\n\t\theight: auto;\r\n\t}\r\n\t.input-group{\r\n\t\tpadding: 0px;\r\n\t\tmargin-left: 47px;\r\n\t}\r\n\t.glyphicon {\r\n        top: 0;\r\n    }\r\n\t.txt2#submit{\r\n    \tbackground: #222629 none repeat scroll 0 0;\r\n\t    border: 1px solid #FEFFFF;\r\n\t    border-radius: 25px;\r\n\t    color: #fff;\r\n\t    font-size: 16px;\r\n\t    font-style: normal;\r\n\t    line-height: 35px;\r\n\t    padding-left: 20px;\r\n\t    padding-right: 20px;\r\n\t    text-transform: uppercase;\r\n  \t\tmargin-left: 47px;\r\n  \t\tmargin-bottom: 20px;\r\n    }\r\n\t.txt2#submit\t:hover {\r\n    background: #6573c3 none repeat scroll 0 0;\r\n    transition: all 0.5s ease 0s;\r\n}\r\n\t#login{\r\n    \tposition: absolute;\r\n    \tz-index: 100;\r\n    \tleft: 45%;\r\n    \ttop:65%;\r\n    \ttext-decoration: none;\r\n    }\r\n\t#wrapper {\r\n  text-align: center;\r\n}\r\n\t#mydiv{\r\n\tdisplay: inline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7O0NBRVo7Q0FDQTtFQUNDLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDJCQUEyQjtDQUM1Qix5QkFBeUI7Q0FDekI7Q0FFQTtFQUNDLGdCQUFnQjtFQUNoQixjQUFjOztDQUVmO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEIsY0FBYztDQUNmO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEIsY0FBYzs7Q0FFZjtDQUNBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGNBQWM7O0NBRWY7Q0FDQTtFQUNDLGlCQUFpQjs7Q0FFbEI7Q0FDQTtFQUNDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1COztDQUVwQjtDQUNBO0VBQ0MsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0NBQ1o7Q0FFQTtFQUNDLGlCQUFpQjtDQUNsQjtDQUNBO0VBQ0MsWUFBWTtDQUNiO0NBQ0E7RUFDQyxZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCO0NBQ0k7UUFDRyxNQUFNO0lBQ1Y7Q0FDQTtLQUNDLDBDQUEwQztLQUMxQyx5QkFBeUI7S0FDekIsbUJBQW1CO0tBQ25CLFdBQVc7S0FDWCxlQUFlO0tBQ2Ysa0JBQWtCO0tBQ2xCLGlCQUFpQjtLQUNqQixrQkFBa0I7S0FDbEIsbUJBQW1CO0tBQ25CLHlCQUF5QjtJQUMxQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CO0NBQ0E7SUFDQSwwQ0FBMEM7SUFDMUMsNEJBQTRCO0FBQ2hDO0NBQ0E7S0FDSyxrQkFBa0I7S0FDbEIsWUFBWTtLQUNaLFNBQVM7S0FDVCxPQUFPO0tBQ1AscUJBQXFCO0lBQ3RCO0NBQ0E7RUFDRixrQkFBa0I7QUFDcEI7Q0FDQTtDQUNDLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcclxuXHR9XHJcblx0Zm9ybXtcclxuXHRcdG1hcmdpbi10b3A6IDEwMHB4O1xyXG5cdFx0ei1pbmRleDoxMDA7XHJcbiAgYm9yZGVyOiA4cHggc29saWQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ViZWRmNztcclxuICBib3JkZXItbGVmdC1jb2xvcjogI2ViZWRmNztcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWJlZGY3O1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2ViZWRmNztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGMxMDI0O1xyXG5cdH1cclxuXHRcclxuXHQjdXNlcm5hbWV7XHJcblx0XHRtYXJnaW4tbGVmdDogMHB4O1xyXG5cdFx0bWF4LXdpZHRoOjQydmg7XHJcblxyXG5cdH1cclxuXHQjcGFzc3dvcmR7XHJcblx0XHRtYXJnaW4tbGVmdDogMHB4O1xyXG5cdFx0bWF4LXdpZHRoOjQydmg7XHJcblx0fVxyXG5cdCNjb25maXJtcGFzc3dvcmR7XHJcblx0XHRtYXJnaW4tbGVmdDogMHB4O1xyXG5cdFx0bWF4LXdpZHRoOjQydmg7XHJcblxyXG5cdH1cclxuXHQjZW1haWx7XHJcblx0XHRtYXJnaW4tbGVmdDogMHB4O1xyXG5cdFx0bWF4LXdpZHRoOjQydmg7XHJcblxyXG5cdH1cclxuXHQjc3VibWl0e1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDQ3cHg7XHJcblxyXG5cdH1cclxuXHQjbG9naW57XHJcblx0XHRtYXJnaW4tbGVmdDogNDdweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDZweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblxyXG5cdH1cclxuXHQjc2lnbnVwe1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDQ3cHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHRcclxuXHRcclxuXHQuZm9ybS1jb250cm9se1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA2cHg7XHJcblx0fVxyXG5cdC5yb3d7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0fVxyXG5cdC5pbnB1dC1ncm91cHtcclxuXHRcdHBhZGRpbmc6IDBweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiA0N3B4O1xyXG5cdH1cclxuXHQgICAgLmdseXBoaWNvbiB7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLnR4dDIjc3VibWl0e1xyXG4gICAgXHRiYWNrZ3JvdW5kOiAjMjIyNjI5IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcblx0ICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRUZGRkY7XHJcblx0ICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcblx0ICAgIGNvbG9yOiAjZmZmO1xyXG5cdCAgICBmb250LXNpemU6IDE2cHg7XHJcblx0ICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHQgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcblx0ICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHQgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuXHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBcdFx0bWFyZ2luLWxlZnQ6IDQ3cHg7XHJcbiAgXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAudHh0MiNzdWJtaXRcdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjU3M2MzIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xyXG59XHJcbiNsb2dpbntcclxuICAgIFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgXHR6LWluZGV4OiAxMDA7XHJcbiAgICBcdGxlZnQ6IDQ1JTtcclxuICAgIFx0dG9wOjY1JTtcclxuICAgIFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgI3dyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jbXlkaXZ7XHJcblx0ZGlzcGxheTogaW5saW5lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  class=\"col col-lg-offset-4 col-lg-4 col-lg-offset-4 col-sm-12 glyphicon-font form-group\" id=\"form\" method=\"post\"  class=\"form-group\">\n\n\t\t<br/>\n\t\t<div id=\"signup\" class=\"control-label\">\n\t\t<b>SIGN UP:</b>\n\t\t<br />\n\t\t</div>\n\t\t<br/>\n\t\t<div class=\"input-group\">\n\t\t  <span class=\"input-group-addon glyphicon glyphicon-user \" ></span>\n\t\t<input type=\"text\" class=\"form-control\" pattern=\".{4,}\"   required title=\"minimum 4 characters\" placeholder=\"username\" name=\"username\" id=\"username\" [(ngModel)]=\"username\" /></div>\n\t\t<br/>\n\t\t<input type=\"text\" class=\"form-control\"  placeholder=\"username\" name=\"pubkey\" id=\"pubkey\" [(ngModel)]=\"m_pub_key\" style=\"display: none\" />\n\t\t<div class=\"input-group\">\n\t\t  <span class=\"input-group-addon glyphicon glyphicon-envelope \" ></span>\n\t\t<input type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required title=\"please fill out this field\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"email\"  id=\"email\"/></div>\n\t\t<br/>\n\t\t<div class=\"input-group\">\n\t\t  <span class=\"input-group-addon glyphicon glyphicon-lock \" ></span>\n\t\t<input type=\"password\" class=\"form-control\" required title=\"please fill out this field\" placeholder=\"pass\" name=\"pass\" [(ngModel)]=\"password\"  id=\"password\"/></div>\n\t\t<br/>\n\t\t<!--div class=\"input-group\">\n\t\t  <span class=\"input-group-addon glyphicon glyphicon-lock \" ></span>\n\t\t<input type=\"password\" class=\"form-control \" required pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters\"  placeholder=\"password\" name=\"password\" id=\"password\"></div>\n\n\n\t\t<br/>\n\t\t<div class=\"input-group\">\n\t\t  <span class=\"input-group-addon glyphicon glyphicon-lock\" ></span>\n\t\t<input type=\"password\" class=\"form-control glyphicon-lock\" required pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters\" onfocus=\"validatePass(document.getElementById('password'), this);\" oninput=\"validatePass(document.getElementById('password'), this);\" placeholder=\"confirm password\" name=\"confirmpassword\" id=\"confirmpassword\"/>\n\t\t</div-->\n\t\t<br/>\n\t\t<input type=\"submit\" class= \"txt2\" (click)=\"signup()\" value=\"SIGNUP!\" name=\"submit\" id=\"submit\"/>\n\n\t</form>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, _appService, http, zone) {
        var _this = this;
        this.router = router;
        this._appService = _appService;
        this.http = http;
        this.zone = zone;
        this.m_pub_key = "";
        this.title = 'project2';
        this.url = "http://localhost:8080/";
        this.username = "";
        this.email = "";
        this.password = "";
        this.checkAndInstantiateWeb3 = function () {
            if (typeof window.web3 !== 'undefined') {
                console.warn('Using injected web3');
                _this.web3 = new Web3(window.web3.currentProvider);
            }
            else {
                // when running in browser, use incognito mode or log out of metamask
                console.warn('No web 3 detected, falling back to Ganache');
                _this.provider = new Web3.providers.HttpProvider('http://localhost:7545');
                _this.web3 = new Web3(_this.provider);
            }
            window.ethereum.enable();
        };
        this.onReady = function () {
            // get initial account balance so it can be displayed
            _this.web3.eth.getAccounts(function (err, accs) {
                if (err != null) {
                    alert('There was an error fetching your accounts.');
                    return;
                }
                if (accs.length === 0) {
                    alert('You are not connected to an Ethereum client.');
                    return;
                }
                _this.m_pub_key = accs[0];
                console.log(_this.m_pub_key);
                //this.checkAccount();
            });
        };
        console.log("inside signup constructor");
        this.checkAndInstantiateWeb3();
        this.onReady();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        var data_send = JSON.stringify({
            'm_pub_key': this.m_pub_key,
            'email': this.email,
            'username': this.username,
            'pass': this.password
        });
        this._appService.post_method(this.url + "signup", data_send).subscribe(function (data) {
            console.log(data);
            if (data["status"] == 1) {
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.router.navigate(['/signup']);
            }
        }, function (error) {
            console.log(error);
            console.log('post error');
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/upload/dialog/dialog.component.css":
/*!****************************************************!*\
  !*** ./src/app/upload/dialog/dialog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialogHt{\n\tmax-height:130px !important; \n}\n.add-files-btn {\n  float: right;\n}\n:host {\n  height: 100%;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n.actions {\n  justify-content: flex-end;\n}\n.container {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLE9BQU87RUFDUCxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdXBsb2FkL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2dIdHtcblx0bWF4LWhlaWdodDoxMzBweCAhaW1wb3J0YW50OyBcbn1cbi5hZGQtZmlsZXMtYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG46aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmFjdGlvbnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/upload/dialog/dialog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/upload/dialog/dialog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>Password:</label>\n<input type=\"password\" name=\"pswd\" id=\"pswd\" [(ngModel)]=\"pswd\" (ngModelChange)=\"checkPassword($event)\"/>\n<div>\n<sub>(Please enter a 8 letter password)</sub>\n<input type=\"file\" #file style=\"display: none\" (change)=\"onFilesAdded($event)\" />\n</div>\n<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly stretch\">\n  <h1 mat-dialog-title>Upload Files</h1>\n  <div>\n    <button [disabled]=\"uploading || uploadSuccessful || pswdFlag\" mat-raised-button color=\"primary\" class=\"add-files-btn\" (click)=\"addFiles()\">\n      Add Files\n    </button>\n  </div>\n\n  <!-- This is the content of the dialog, containing a list of the files to upload -->\n  <mat-dialog-content fxFlex class=\"dialogHt\">\n    <mat-list>\n      <mat-list-item *ngFor=\"let file of files\">\n        <h4 mat-line>{{file.name}}</h4>\n        <mat-progress-bar *ngIf=\"progress\" mode=\"determinate\" [value]=\"progress[file.name].progress | async\"></mat-progress-bar>\n      </mat-list-item>\n    </mat-list>\n  </mat-dialog-content>\n\n  <!-- This are the actions of the dialog, containing the primary and the cancel button-->\n  <mat-dialog-actions class=\"actions\">\n    <button *ngIf=\"showCancelButton\" mat-raised-button color=\"primary\" mat-dialog-close>Cancel</button>\n    <button mat-raised-button color=\"primary\" [disabled]=\"!canBeClosed || pswdFlag\" (click)=\"closeDialog()\">{{primaryButtonText}}</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/upload/dialog/dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/upload/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../upload.service */ "./src/app/upload/upload.service.ts");
/* harmony import */ var _encr_decr_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../encr-decr-service.service */ "./src/app/upload/encr-decr-service.service.ts");





var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, uploadService, EncrDecr) {
        this.dialogRef = dialogRef;
        this.uploadService = uploadService;
        this.EncrDecr = EncrDecr;
        this.files = new Set();
        this.pswd = "";
        this.canBeClosed = false;
        this.primaryButtonText = 'Upload';
        this.showCancelButton = true;
        this.uploading = false;
        this.pswdFlag = true;
        this.uploadSuccessful = false;
        this.encryptedFiles = new Set();
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.checkPassword = function (event) {
        if (this.pswd.length === 8) {
            this.pswdFlag = false;
        }
        else
            this.pswdFlag = true;
    };
    DialogComponent.prototype.onFilesAdded = function (event) {
        var _this = this;
        console.log(this.pswd);
        var reader = new FileReader();
        var files = this.file.nativeElement.files;
        for (var key in files) {
            if (!isNaN(parseInt(key))) {
                //console.log(JSON.stringify(files)+" "+JSON.stringify(files[key]));
                this.files.add(files[key]);
            }
        }
        if (event.target.files && event.target.files.length) {
            this.files.forEach(function (file) {
                console.log(file.name.split(".")[1]);
                if (file.name.split(".")[1] === "jpeg" || file.name.split(".")[1] === "png" || file.name.split(".")[1] === "jpg" || file.name.split(".")[1] === "pdf") {
                    var file_1 = event.target.files[0];
                    reader.readAsDataURL(file_1);
                    reader.onload = function () {
                        var text = reader.result;
                        console.log(text);
                        _this.encryptedFiles.add(_this.EncrDecr.set(_this.pswd, text));
                        //console.log(this.EncrDecr.get("password",encrypted_text));
                    };
                }
                else {
                    var file_2 = event.target.files[0];
                    reader.readAsText(file_2);
                    reader.onload = function () {
                        var text = reader.result;
                        console.log(text);
                        _this.encryptedFiles.add(_this.EncrDecr.set(_this.pswd, text));
                        //console.log(this.EncrDecr.get("password",encrypted_text));
                    };
                }
            });
        }
    };
    DialogComponent.prototype.addFiles = function () {
        if (this.pswd != null)
            this.canBeClosed = true;
        else
            this.canBeClosed = false;
        this.file.nativeElement.click();
    };
    DialogComponent.prototype.closeDialog = function () {
        // if everything was uploaded already, just close the dialog
        if (this.uploadSuccessful) {
            return this.dialogRef.close();
        }
        // set the component state to "uploading"
        this.uploading = true;
        // start the upload and save the progress map
        this.progress = this.uploadService.upload(this.files, this.encryptedFiles);
        console.log(this.progress);
        //console.log(this.files);
        for (var key in this.progress) {
            this.progress[key].progress.subscribe(function (val) { return console.log(val); });
        }
        // convert the progress map into an array
        var allProgressObservables = [];
        for (var key in this.progress) {
            allProgressObservables.push(this.progress[key].progress);
        }
        //console.log(JSON.stringify(allProgressObservables));
        // Adjust the state variables
        // The OK-button should have the text "Finish" now
        this.primaryButtonText = 'Finish';
        // The dialog should not be closed while uploading
        this.canBeClosed = false;
        this.dialogRef.disableClose = true;
        // Hide the cancel-button
        this.showCancelButton = false;
        this.canBeClosed = true;
        this.dialogRef.disableClose = false;
        // ... the upload was successful...
        this.uploadSuccessful = true;
        // ... and the component is no longer uploading
        this.uploading = false;
        // When all progress-observables are completed...
        /*forkJoin(allProgressObservables).subscribe(end => {
          // ... the dialog can be closed again...
          this.canBeClosed = true;
          this.dialogRef.disableClose = false;
    
          // ... the upload was successful...
          this.uploadSuccessful = true;
          // ... and the component is no longer uploading
          this.uploading = false;
        });*/
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogComponent.prototype, "file", void 0);
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/upload/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/upload/dialog/dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"], _encr_decr_service_service__WEBPACK_IMPORTED_MODULE_4__["EncrDecrService"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/upload/encr-decr-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/upload/encr-decr-service.service.ts ***!
  \*****************************************************/
/*! exports provided: EncrDecrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncrDecrService", function() { return EncrDecrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);



var EncrDecrService = /** @class */ (function () {
    function EncrDecrService() {
    }
    //The set method is use for encrypt the value.
    EncrDecrService.prototype.set = function (keys, value) {
        var key = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(keys);
        var iv = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(keys);
        var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(value.toString()), key, {
            keySize: 128 / 8,
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_2__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_2__["pad"].Pkcs7
        });
        return encrypted.toString();
    };
    //The get method is use for decrypt the value.
    EncrDecrService.prototype.get = function (keys, value) {
        var key = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(keys);
        var iv = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(keys);
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(value, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_2__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_2__["pad"].Pkcs7
        });
        return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8);
    };
    EncrDecrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EncrDecrService);
    return EncrDecrService;
}());



/***/ }),

/***/ "./src/app/upload/upload.component.css":
/*!*********************************************!*\
  !*** ./src/app/upload/upload.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat_accordian_upload_file{\n background:#b2b9e1;\n}\n.title{\ncolor:white !important;\nfont-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsaUJBQWlCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdF9hY2NvcmRpYW5fdXBsb2FkX2ZpbGV7XG4gYmFja2dyb3VuZDojYjJiOWUxO1xufVxuLnRpdGxle1xuY29sb3I6d2hpdGUgIWltcG9ydGFudDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/upload/upload.component.html":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button (click)=\"openUploadDialog()\">Upload</button> -->\n  <mat-accordion>\n    <mat-expansion-panel class=\"mat_accordian_upload_file\" [disabled]=\"true\">\n      <mat-expansion-panel-header (click)=\"openUploadDialog()\">\n        <mat-panel-title class=\"title\">\n          Upload File\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n    </mat-expansion-panel>\n  </mat-accordion>\n"

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/upload/dialog/dialog.component.ts");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload.service */ "./src/app/upload/upload.service.ts");





var UploadComponent = /** @class */ (function () {
    function UploadComponent(dialog, uploadService) {
        this.dialog = dialog;
        this.uploadService = uploadService;
    }
    UploadComponent.prototype.openUploadDialog = function () {
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], { width: '50%', height: '60%' });
    };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/upload/upload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/upload/upload.module.ts":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.module.ts ***!
  \*****************************************/
/*! exports provided: UploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModule", function() { return UploadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/upload/dialog/dialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upload.service */ "./src/app/upload/upload.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");













var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    UploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"]],
            declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]],
            exports: [_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"]],
            entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]],
            providers: [_upload_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"]]
        })
    ], UploadModule);
    return UploadModule;
}());



/***/ }),

/***/ "./src/app/upload/upload.service.ts":
/*!******************************************!*\
  !*** ./src/app/upload/upload.service.ts ***!
  \******************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");




var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
var UploadService = /** @class */ (function () {
    function UploadService(http) {
        var _this = this;
        this.http = http;
        this.m_pub_key = "";
        this.checkAndInstantiateWeb3 = function () {
            if (typeof window.web3 !== 'undefined') {
                console.warn('Using injected web3');
                _this.web3 = new Web3(window.web3.currentProvider);
            }
            else {
                // when running in browser, use incognito mode or log out of metamask
                console.warn('No web 3 detected, falling back to Ganache');
                _this.provider = new Web3.providers.HttpProvider('http://localhost:7545');
                _this.web3 = new Web3(_this.provider);
            }
            window.ethereum.enable();
        };
        this.checkAndInstantiateWeb3();
    }
    UploadService.prototype.upload = function (files, encryptedFiles) {
        var _this = this;
        var showFileHash = false;
        var fHash;
        var m_pub_key;
        // this will be the our resulting map
        var status = {};
        files.forEach(function (file) {
            encryptedFiles.forEach(function (efile) {
                var fname = new String(file.name);
                console.log(efile);
                var encryptedObj = {
                    fileName: fname,
                    encryptedText: efile
                };
                //console.log(encryptedObj+" "+typeof encryptedObj);
                var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', "https://swarm-gateways.net/bzz-raw:/", encryptedObj, {
                    reportProgress: true,
                    responseType: 'text'
                });
                // create a new progress-subject for every file
                var progress = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                // send the http-request and subscribe for progress-updates
                _this.http.request(req).subscribe(function (res) {
                    //console.log(res.type);
                    if (res.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                        // calculate the progress percentage
                        var percentDone = Math.round(100 * res.loaded / res.total);
                        // pass the percentage into the progress-stream
                        progress.next(percentDone);
                    }
                    else if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                        // Close the progress-stream if we get an answer form the API
                        // The upload is complete
                        progress.complete();
                    }
                    //console.log(res);
                    if (res.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                        showFileHash = true;
                        fHash = res.body;
                        console.log(fHash);
                        _this.web3.eth.getAccounts(function (err, accs) {
                            if (err != null) {
                                alert('There was an error fetching your accounts.');
                                return;
                            }
                            if (accs.length === 0) {
                                alert('You are not connected to an Ethereum client.');
                                return;
                            }
                            _this.m_pub_key = accs[0];
                            console.log(_this.m_pub_key);
                            var transaction_data = {
                                m_pub_key: _this.m_pub_key,
                                fileName: fname,
                                fileHash: fHash
                            };
                            _this.web3.eth.sendTransaction({
                                from: _this.m_pub_key,
                                to: '0x73239859996e1b0d661514df665368695c9b9683',
                                data: _this.web3.toHex(transaction_data),
                                gas: 300000 // deploying a contract
                            }, function (error, hash) {
                                console.log("transaction" + error);
                                console.log("hash: " + hash);
                            });
                            //this.checkAccount();
                        });
                    }
                });
                // Save every progress-observable in a map of all observables
                status[file.name] = {
                    progress: progress.asObservable()
                };
            });
        });
        return status;
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kavish/Desktop/fy_project_blockchain/angularSwarm/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map