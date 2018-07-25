(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<flash-messages></flash-messages>\n  <router-outlet> </router-outlet>\n\n  <app-footer> </app-footer>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _men_men_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./men/men.component */ "./src/app/men/men.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _women_women_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./women/women.component */ "./src/app/women/women.component.ts");
/* harmony import */ var _kids_kids_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./kids/kids.component */ "./src/app/kids/kids.component.ts");
/* harmony import */ var _sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sub-header/sub-header.component */ "./src/app/sub-header/sub-header.component.ts");
/* harmony import */ var _sunglass_sunglass_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sunglass/sunglass.component */ "./src/app/sunglass/sunglass.component.ts");
/* harmony import */ var _eyeglass_eyeglass_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./eyeglass/eyeglass.component */ "./src/app/eyeglass/eyeglass.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./guards/auth.guards */ "./src/app/guards/auth.guards.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"] },
    { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"] },
    { path: 'Men', component: _men_men_component__WEBPACK_IMPORTED_MODULE_16__["MenComponent"] },
    { path: 'Women', component: _women_women_component__WEBPACK_IMPORTED_MODULE_18__["WomenComponent"] },
    { path: 'Kids', component: _kids_kids_component__WEBPACK_IMPORTED_MODULE_19__["KidsComponent"] },
    { path: 'Signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__["SigninComponent"] },
    { path: 'Dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'Profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_31__["ProfileComponent"], canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'Register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"] },
    { path: 'Men/Sunglass', component: _sunglass_sunglass_component__WEBPACK_IMPORTED_MODULE_21__["SunglassComponent"] },
    { path: 'Men/Sunglass/Product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_23__["ProductComponent"] },
    { path: 'Men/Eyeglass', component: _eyeglass_eyeglass_component__WEBPACK_IMPORTED_MODULE_22__["EyeglassComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__["SigninComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _men_men_component__WEBPACK_IMPORTED_MODULE_16__["MenComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _women_women_component__WEBPACK_IMPORTED_MODULE_18__["WomenComponent"],
                _kids_kids_component__WEBPACK_IMPORTED_MODULE_19__["KidsComponent"],
                _sub_header_sub_header_component__WEBPACK_IMPORTED_MODULE_20__["SubHeaderComponent"],
                _sunglass_sunglass_component__WEBPACK_IMPORTED_MODULE_21__["SunglassComponent"],
                _eyeglass_eyeglass_component__WEBPACK_IMPORTED_MODULE_22__["EyeglassComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_23__["ProductComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_31__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_28__["FlashMessagesModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_30__["HttpModule"]
                // AppRoutingModule
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_26__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_27__["AuthService"], _guards_auth_guards__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">DashBoard</h2>\n<p>Welcome to the DashBoard</p>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/eyeglass/eyeglass.component.css":
/*!*************************************************!*\
  !*** ./src/app/eyeglass/eyeglass.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\nmain .container {\r\n    margin-left: 100px; /* Same as the width of the sidenav */\r\n    font-size: 28px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n}\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n@media (max-width: 740px) {\r\n    html,\r\n    body,\r\n    header,\r\n    .carousel {\r\n      height: 100vh;\r\n    }\r\n  }\r\n@media (min-width: 800px) and (max-width: 850px) {\r\n    html,\r\n    body,\r\n    header,\r\n    .carousel {\r\n      height: 100vh;\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/eyeglass/eyeglass.component.html":
/*!**************************************************!*\
  !*** ./src/app/eyeglass/eyeglass.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container\">\n\n    <!--Navbar-->\n    <nav class=\"navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5\">\n\n      <!-- Navbar brand -->\n      <span class=\"navbar-brand\">Categories:</span>\n\n      <!-- Collapse button -->\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#basicExampleNav\" aria-controls=\"basicExampleNav\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <!-- Collapsible content -->\n      <div class=\"collapse navbar-collapse\" id=\"basicExampleNav\">\n\n        \n\n        <form class=\"form-inline\">\n          <div class=\"md-form my-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n          </div>\n        </form>\n      </div>\n      <!-- Collapsible content -->\n\n    </nav>\n    <!--/.Navbar-->\n\n    <!--Section: Products v.3-->\n    <section class=\"text-center mb-4\">\n\n      <!--Grid row-->\n      <div class=\"row wow fadeIn\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-3 col-md-6 mb-4\">\n\n          <!--Card-->\n          <div class=\"card\">\n\n            <!--Card image-->\n            <div class=\"view overlay\">\n              <img src=\"\\assets\\images\\100\\01.jpg\" class=\"card-img-top\" alt=\"\">\n              <a>\n                <div class=\"mask rgba-white-slight\"></div>\n              </a>\n            </div>\n            <!--Card image-->\n\n            <!--Card content-->\n            <div class=\"card-body text-center\">\n              <!--Category & Title-->\n              <a href=\"#\" class=\"grey-text\">\n                <h5>VINCENT CHASSE POLARISED</h5>\n              </a>\n              <h5>\n                <strong>\n                  <a href=\"#\" class=\"dark-grey-text\">Product Id:11101\n                    <span class=\"badge badge-pill danger-color\">NEW</span>\n                  </a>\n                </strong>\n              </h5>\n\n              <h4 class=\"font-weight-bold blue-text\">\n                <strong>120$</strong>\n              </h4>\n\n            </div>\n            <!--Card content-->\n\n          </div>\n          <!--Card-->\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-3 col-md-6 mb-4\">\n\n          <!--Card-->\n          <div class=\"card\">\n\n            <!--Card image-->\n            <div class=\"view overlay\">\n              <img src=\"\\assets\\images\\02\\01.jpg\" class=\"card-img-top\" alt=\"\">\n              <a>\n                <div class=\"mask rgba-white-slight\"></div>\n              </a>\n            </div>\n            <!--Card image-->\n\n            <!--Card content-->\n            <div class=\"card-body text-center\">\n              <!--Category & Title-->\n              <a href=\"\" class=\"grey-text\">\n                <h5>VINCENT CHASE SUNSETTERS</h5>\n              </a>\n              <h5>\n                <strong>\n                  <a href=\"\" class=\"dark-grey-text\">Product Id:11102</a>\n                </strong>\n              </h5>\n\n              <h4 class=\"font-weight-bold blue-text\">\n                <strong>139$</strong>\n              </h4>\n\n            </div>\n            <!--Card content-->\n\n          </div>\n          <!--Card-->\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-3 col-md-6 mb-4\">\n\n          <!--Card-->\n          <div class=\"card\">\n\n            <!--Card image-->\n            <div class=\"view overlay\">\n              <img src=\"\\assets\\images\\03\\01.jpg\" class=\"card-img-top\" alt=\"\">\n              <a>\n                <div class=\"mask rgba-white-slight\"></div>\n              </a>\n            </div>\n            <!--Card image-->\n\n            <!--Card content-->\n            <div class=\"card-body text-center\">\n              <!--Category & Title-->\n              <a href=\"\" class=\"grey-text\">\n                <h5>MASK</h5>\n              </a>\n              <h5>\n                <strong>\n                  <a href=\"#\" class=\"dark-grey-text\">Product Id:11103\n                    <span class=\"badge badge-pill primary-color\">bestseller</span>\n                  </a>\n                </strong>\n              </h5>\n\n              <h4 class=\"font-weight-bold blue-text\">\n                <strong>99$</strong>\n              </h4>\n\n            </div>\n            <!--Card content-->\n\n          </div>\n          <!--Card-->\n\n        </div>\n        <!--Grid column-->\n\n        <!--Fourth column-->\n        <div class=\"col-lg-3 col-md-6 mb-4\">\n\n          <!--Card-->\n          <div class=\"card\">\n\n            <!--Card image-->\n            <div class=\"view overlay\">\n              <img src=\"\\assets\\images\\04\\01.jpg\" class=\"card-img-top\" alt=\"\">\n              <a>\n                <div class=\"mask rgba-white-slight\"></div>\n              </a>\n            </div>\n            <!--Card image-->\n\n            <!--Card content-->\n            <div class=\"card-body text-center\">\n              <!--Category & Title-->\n              <a href=\"#\" class=\"grey-text\">\n                <h5>JOHN JACOBS</h5>\n              </a>\n              <h5>\n                <strong>\n                  <a href=\"#\" class=\"dark-grey-text\">Product Id:11104</a>\n                </strong>\n              </h5>\n\n              <h4 class=\"font-weight-bold blue-text\">\n                <strong>219$</strong>\n              </h4>\n\n            </div>\n            <!--Card content-->\n\n          </div>\n          <!--Card-->\n\n        </div>\n        <!--Fourth column-->\n\n      </div>\n      <!--Grid row-->\n\n      <!--Grid row-->\n      <div class=\"row wow fadeIn\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-3 col-md-6 mb-4\">\n\n          <!--Card-->\n          <div class=\"card\">\n\n            <!--Card image-->\n            <div class=\"view overlay\">\n              <img src=\"\\assets\\images\\05\\01.jpg\" class=\"card-img-top\" alt=\"\">\n              <a>\n                <div class=\"mask rgba-white-slight\"></div>\n              </a>\n            </div>\n            <!--Card image-->\n\n            <!--Card content-->\n            <div class=\"card-body text-center\">\n              <!--Category & Title-->\n              <a href=\"#\" class=\"grey-text\">\n                <h5>VINCENT CHASE POLARIZED</h5>\n              </a>\n              <h5>\n                <strong>\n                  <a href=\"#\" class=\"dark-grey-text\">Product Id:11105\n                    <span class=\"badge badge-pill danger-color\">NEW</span>\n                  </a>\n                </strong>\n              </h5>\n\n              <h4 class=\"font-weight-bold blue-text\">\n                <strong>120$</strong>\n              </h4>\n\n            </div>\n            <!--Card content-->\n\n          </div>\n          <!--Card-->\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-3 col-md-6 mb-4\">\n\n          <!--Card-->\n          <div class=\"card\">\n\n            <!--Card image-->\n            <div class=\"view overlay\">\n              <img src=\"\\assets\\images\\06\\02.jpg\" class=\"card-img-top\" alt=\"\">\n              <a>\n                <div class=\"mask rgba-white-slight\"></div>\n              </a>\n            </div>\n            <!--Card image-->\n\n            <!--Card content-->\n            <div class=\"card-body text-center\">\n              <!--Category & Title-->\n              <a href=\"#\" class=\"grey-text\">\n                <h5>VOGUE</h5>\n              </a>\n              <h5>\n                <strong>\n                  <a href=\"#\" class=\"dark-grey-text\">Product Id:11106</a>\n                </strong>\n              </h5>\n\n              <h4 class=\"font-weight-bold blue-text\">\n                <strong>139$</strong>\n              </h4>\n\n            </div>\n            <!--Card content-->\n\n          </div>\n          <!--Card-->\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-3 col-md-6 mb-4\">\n\n          <!--Card-->\n          <div class=\"card\">\n\n            <!--Card image-->\n            <div class=\"view overlay\">\n              <img src=\"\\assets\\images\\07\\01.jpg\" class=\"card-img-top\" alt=\"\">\n              <a>\n                <div class=\"mask rgba-white-slight\"></div>\n              </a>\n            </div>\n            <!--Card image-->\n\n            <!--Card content-->\n            <div class=\"card-body text-center\">\n              <!--Category & Title-->\n              <a href=\"#\" class=\"grey-text\">\n                <h5>VOGUE VO5222S</h5>\n              </a>\n              <h5>\n                <strong>\n                  <a href=\"#\" class=\"dark-grey-text\">Product Id:11107\n                    <span class=\"badge badge-pill primary-color\">bestseller</span>\n                  </a>\n                </strong>\n              </h5>\n\n              <h4 class=\"font-weight-bold blue-text\">\n                <strong>99$</strong>\n              </h4>\n\n            </div>\n            <!--Card content-->\n\n          </div>\n          <!--Card-->\n\n        </div>\n        <!--Grid column-->\n\n        <!--Fourth column-->\n        <div class=\"col-lg-3 col-md-6 mb-4\">\n\n          <!--Card-->\n          <div class=\"card\">\n\n            <!--Card image-->\n            <div class=\"view overlay\">\n              <img src=\"\\assets\\images\\08\\01.jpg\" class=\"card-img-top\" alt=\"\">\n              <a>\n                <div class=\"mask rgba-white-slight\"></div>\n              </a>\n            </div>\n            <!--Card image-->\n\n            <!--Card content-->\n            <div class=\"card-body text-center\">\n              <!--Category & Title-->\n              <a href=\"#\" class=\"grey-text\">\n                <h5>RAY-BAN</h5>\n              </a>\n              <h5>\n                <strong>\n                  <a href=\"#\" class=\"dark-grey-text\">Product Id:111108</a>\n                </strong>\n              </h5>\n\n              <h4 class=\"font-weight-bold blue-text\">\n                <strong>219$</strong>\n              </h4>\n\n            </div>\n            <!--Card content-->\n\n          </div>\n          <!--Card-->\n\n        </div>\n        <!--Fourth column-->\n\n      </div>\n      <!--Grid row-->\n\n    </section>\n    <!--Section: Products v.3-->\n\n    <!--Pagination-->\n    <nav class=\"d-flex justify-content-center wow fadeIn\">\n      <ul class=\"pagination pg-blue\">\n\n        <!--Arrow left-->\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n\n        <li class=\"page-item active\">\n          <a class=\"page-link\" href=\"#\">1\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\">2</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\">3</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\">4</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\">5</a>\n        </li>\n\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!--Pagination-->\n\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/eyeglass/eyeglass.component.ts":
/*!************************************************!*\
  !*** ./src/app/eyeglass/eyeglass.component.ts ***!
  \************************************************/
/*! exports provided: EyeglassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeglassComponent", function() { return EyeglassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EyeglassComponent = /** @class */ (function () {
    function EyeglassComponent() {
    }
    EyeglassComponent.prototype.ngOnInit = function () {
    };
    EyeglassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eyeglass',
            template: __webpack_require__(/*! ./eyeglass.component.html */ "./src/app/eyeglass/eyeglass.component.html"),
            styles: [__webpack_require__(/*! ./eyeglass.component.css */ "./src/app/eyeglass/eyeglass.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EyeglassComponent);
    return EyeglassComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* $lt-gray: #ddd;\r\n$background-dark: #512DA8;\r\n$background-light: #9575CD;\r\n$background-pale: #D1C4E9;\r\n\r\n@mixin zero-margin($pad-up-down, $pad-left-right) {\r\n    margin: 0px auto;\r\n    padding: $pad-up-down $pad-left-right;\r\n} */\r\n\r\n/* .footer{ */\r\n\r\n/* background-color: $background-pale; */\r\n\r\n/* @include zero-margin(20px, 0px); */\r\n\r\n/* } */\r\n\r\n.footer\r\n{\r\n    background-color:#343a40!important;\r\n    color: white;\r\n}\r\n\r\n.address\r\n{\r\n    font-size:80%;\r\n    margin: 0px;\r\ncolor:rgb(238, 233, 247)!important;\r\n}\r\n\r\n.btn-facebook {color:#fff!important; background-color:rgb(16, 29, 29)!important;}\r\n\r\n.btn-google-plus{color:#fff!important;background-color:#471e19!important;}\r\n\r\n.btn-youtube{color:#fff!important;background-color:#ff4b39!important;}\r\n\r\n.btn-linkedin{color:#fff!important;background-color:#2f3538!important;}\r\n\r\n.btn-twitter{color:#fff!important;background-color:#55acee!important;}\r\n\r\n.btn-mail{color:#fff!important;background-color:rgb(32, 30, 37)!important;}\r\n\r\nul .list-unstyled\r\n{\r\n    -webkit-text-decoration-color: #fff!important;\r\n            text-decoration-color: #fff!important;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n      <div class=\"container\">\n          <div class=\"row\">             \n              <div class=\"col-4 offset-1 col-sm-2\">\n                  <h5>Links</h5>\n                  <ul class=\"list-unstyled\">\n                      <li><a href=\"#\">Home</a></li>\n                      <li><a href=\"#\">About</a></li>\n                      <li><a href=\"#\">Menu</a></li>\n                      <li><a href=\"#\">Contact</a></li>\n                  </ul>\n              </div>\n              <div class=\"col-7 col-sm-5\">\n                  <h5>Our Address</h5>\n                  <address>\n                121, Clear Water Bay Road<br>\n                Clear Water Bay, Kowloon<br>\n                Chandigarh<br>\n                    <i class=\"fa fa-phone fa-lg\"></i>: +91709160818<br>\n                    <i class=\"fa fa-fax fa-lg\"></i>: +918787371787<br>\n                    <i class=\"fa fa-envelope fa-lg\"></i>: \n                    <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n             </address>\n              </div>\n              <div class=\"col-12 col-sm-4 align-self-center\">\n                  <div class=\"text-center\">\n                      <a class=\"btn btn-social-icon btn-google\" href=\"http://google.com/+\"><i class=\"fa fa-google-plus\"></i></a>\n                      <a class=\"btn btn-social-icon btn-facebook\" href=\"http://www.facebook.com/profile.php?id=\"><i class=\"fa fa-facebook\"></i></a>\n                      <a class=\"btn btn-social-icon btn-linkedin\" href=\"http://www.linkedin.com/in/\"><i class=\"fa fa-linkedin\"></i></a>\n                      <a class=\"btn btn-social-icon btn-twitter\" href=\"http://twitter.com/\"><i class=\"fa fa-twitter\"></i></a>\n                      <a class=\"btn btn-social-icon btn-google\" href=\"http://youtube.com/\"><i class=\"fa fa-youtube\"></i></a>\n                      <a class=\"btn btn-social-icon\" href=\"mailto:\"><i class=\"fa fa-envelope-o\"></i></a>\n                  </div>\n              </div>\n         </div>\n         <div class=\"row justify-content-center\">             \n              <div class=\"col-auto\">\n                  <p>© sarbesh@eyekart.in</p>\n              </div>\n         </div>\n      </div>\n  </footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guards.ts":
/*!***************************************!*\
  !*** ./src/app/guards/auth.guards.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/Signin']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4{\r\n\tcolor: grey;\r\n}\r\n.demo{\r\n\ttext-align: center;\r\n}\r\na.effect-underline:after {\r\n\tcontent: '';\r\n  position: absolute;\r\n  left: 0;\r\n  display: inline-block;\r\n  height: 0em;\r\n  width: 96%;\r\n  border-bottom: 1px solid;\r\n  margin-top: 0px;\r\n\ttransition:opacity 0.35s, -webkit-transform 0.35s;\r\n\ttransition:opacity 0.35s, transform 0.35s;\r\n\ttransition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n\t-webkit-transform: scale(0,1);\r\n    transform: scale(0,1);\r\n    \r\n}\r\na.effect-underline:hover:after {\r\n  opacity: 1;\r\n\t-webkit-transform: scale(1);\r\n\ttransform: scale(1);\r\n}\r\n.collapse navbar-collapse .nav-item\r\n{\r\n    padding: 15em;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark \">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" style=\"cursor:pointer\"  [routerLinkActive]=\"['active']\" routerLink=\"./Home\">Eyekart</a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n          <ul class=\"navbar-nav\">\n            <div class=\"col-lg-2\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLinkActive]=\"['active']\"  routerLink=\"./Men\" style=\"cursor:pointer\">Men<span class=\"sr-only\">(current)</span></a>\n                  </li>\n            </div>\n           <div class=\"col-lg-2\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" [routerLinkActive]=\"['active']\"  routerLink=\"./Women\" style=\"cursor:pointer\">Women</a>\n                </li>\n           </div>\n           <div class=\"col-lg-2\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" [routerLinkActive]=\"['active']\"  routerLink=\"./Kids\" style=\"cursor:pointer\">Kids</a>\n                </li>\n           </div>\n            <div class=\"col-lg-6 col-sm-6 \">\n                <form class=\"navbar-form\" role=\"search\">\n                  <div class=\"input-group\" style=\" width: 100%;\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"q\">\n                    <div class=\"input-group-btn\">\n                      <button class=\"btn btn-default\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\" style=\"position: absolute;right: 0;padding:25px;\">\n              <li *ngIf=\"authService.loggedIn()\" ><a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"./Dashboard\" style=\"cursor:pointer\">\n                Dashboard\n                <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i></a>\n              </li>\n               <li *ngIf=\"authService.loggedIn()\" ><a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"./Profile\" style=\"cursor:pointer\">\n                    Profile\n                    <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i></a>\n                  </li>\n              \n                  <li *ngIf=\"!authService.loggedIn()\"><a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"./Register\" style=\"cursor:pointer\">\n                    Signup \n                    <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i></a>\n                  </li>\n              \n              <li *ngIf=\"!authService.loggedIn()\">\n                <a class=\"nav-link\" [routerLinkActive]=\"['active']\"  routerLink=\"./Signin\" style=\"cursor:pointer\"> \n                  Signin \n                  <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n                </a>\n                </li>\n                <li *ngIf=\"authService.loggedIn()\" >\n                  <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\" style=\"cursor:pointer\"> \n                    Logout \n                    <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n                  </a>\n                  </li>\n              \n              <li *ngIf=\"authService.loggedIn()\">\n                <a class=\"nav-link\" style=\"cursor:pointer\">\n                  Cart\n                  <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\">\n                    </i>\n                    <span class=\"badge badge-pill badge-danger\" style=\"background-color:red;color:white\">\n                      <!-- {{this.noOfProductsInCart}} -->\n                    </span>\n                  </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n  </nav>\n\n \n\n \n  "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/Signin']);
        return false;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"\\assets\\images\\re.jpg\" alt=\"First slide\" style=\"height:auto; width: 100%;\">\n      <div class=\"carousel-caption d-none d-xl-block\">\n        <h1>Buy 2 @  &#8377;999</h1>\n       \n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"\\assets\\images\\01.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"\\assets\\images\\02.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"\\assets\\images\\04.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          \n          <a href=\"#\" class=\"btn btn-primary\">Buy Now</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"\\assets\\images\\03.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          \n          <a href=\"#\" class=\"btn btn-primary\">Try Now</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"\\assets\\images\\05.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n        <a href=\"#\" class=\"btn btn-primary\">Buy Now</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"\\assets\\images\\slide2.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"\\assets\\images\\slide1.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"\\assets\\images\\slide3.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/kids/kids.component.css":
/*!*****************************************!*\
  !*** ./src/app/kids/kids.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kids/kids.component.html":
/*!******************************************!*\
  !*** ./src/app/kids/kids.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sub-header>\n  </app-sub-header>"

/***/ }),

/***/ "./src/app/kids/kids.component.ts":
/*!****************************************!*\
  !*** ./src/app/kids/kids.component.ts ***!
  \****************************************/
/*! exports provided: KidsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidsComponent", function() { return KidsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KidsComponent = /** @class */ (function () {
    function KidsComponent() {
    }
    KidsComponent.prototype.ngOnInit = function () {
    };
    KidsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kids',
            template: __webpack_require__(/*! ./kids.component.html */ "./src/app/kids/kids.component.html"),
            styles: [__webpack_require__(/*! ./kids.component.css */ "./src/app/kids/kids.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KidsComponent);
    return KidsComponent;
}());



/***/ }),

/***/ "./src/app/men/men.component.css":
/*!***************************************!*\
  !*** ./src/app/men/men.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/men/men.component.html":
/*!****************************************!*\
  !*** ./src/app/men/men.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sub-header>\n</app-sub-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/men/men.component.ts":
/*!**************************************!*\
  !*** ./src/app/men/men.component.ts ***!
  \**************************************/
/*! exports provided: MenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenComponent", function() { return MenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenComponent = /** @class */ (function () {
    function MenComponent() {
    }
    MenComponent.prototype.ngOnInit = function () {
    };
    MenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-men',
            template: __webpack_require__(/*! ./men.component.html */ "./src/app/men/men.component.html"),
            styles: [__webpack_require__(/*! ./men.component.css */ "./src/app/men/men.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenComponent);
    return MenComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\nmain .container {\r\n    margin-left: 100px; /* Same as the width of the sidenav */\r\n    font-size: 28px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n}\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n@media (max-width: 740px) {\r\n    html,\r\n    body,\r\n    header,\r\n    .carousel {\r\n      height: 100vh;\r\n    }\r\n  }\r\n@media (min-width: 800px) and (max-width: 850px) {\r\n    html,\r\n    body,\r\n    header,\r\n    .carousel {\r\n      height: 100vh;\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mt-5 pt-4\">\n  <div class=\"container dark-grey-text mt-5\">\n\n    <!--Grid row-->\n    <div class=\"row wow fadeIn\">\n\n      <!--Grid column-->\n      <div class=\"col-md-6 mb-4\">\n\n        <img src=\"\\assets\\images\\100\\01.jpg\" class=\"img-fluid\" alt=\"\">\n\n      </div>\n      <!--Grid column-->\n\n      <!--Grid column-->\n      <div class=\"col-md-6 mb-4\">\n\n        <!--Content-->\n        <div class=\"p-4\">\n\n          <div class=\"mb-3\">\n            <a href=\"\">\n              <span class=\"badge purple mr-1\">Category 2</span>\n            </a>\n            <a href=\"\">\n              <span class=\"badge blue mr-1\">New</span>\n            </a>\n            <a href=\"\">\n              <span class=\"badge red mr-1\">Bestseller</span>\n            </a>\n          </div>\n\n          <p class=\"lead\">\n            <span class=\"mr-1\">\n              <del>$200</del>\n            </span>\n            <span>$100</span>\n          </p>\n\n          <p class=\"lead font-weight-bold\">Description</p>\n\n          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa sint voluptatibus!\n            Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia sapiente.</p>\n\n          <form class=\"d-flex justify-content-left\">\n            <!-- Default input -->\n            <input type=\"number\" value=\"1\" aria-label=\"Search\" class=\"form-control\" style=\"width: 100px\">\n            <button class=\"btn btn-primary btn-md my-0 p\" type=\"submit\">Add to cart\n              <i class=\"fa fa-shopping-cart ml-1\"></i>\n            </button>\n\n          </form>\n\n        </div>\n        <!--Content-->\n\n      </div>\n      <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n    <hr>\n\n    <!--Grid row-->\n    <div class=\"row d-flex justify-content-center wow fadeIn\">\n\n      <!--Grid column-->\n      <div class=\"col-md-6 text-center\">\n\n        <h4 class=\"my-4 h4\">Additional information</h4>\n\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit voluptates,\n          quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>\n\n      </div>\n      <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n    <!--Grid row-->\n    <div class=\"row wow fadeIn\">\n\n      <!--Grid column-->\n      <div class=\"col-lg-4 col-md-12 mb-4\">\n\n        <img src=\"\\assets\\images\\100\\01.jpg\" class=\"img-fluid\" alt=\"\">\n\n      </div>\n      <!--Grid column-->\n\n      <!--Grid column-->\n      <div class=\"col-lg-4 col-md-6 mb-4\">\n\n        <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg\" class=\"img-fluid\" alt=\"\">\n\n      </div>\n      <!--Grid column-->\n\n      <!--Grid column-->\n      <div class=\"col-lg-4 col-md-6 mb-4\">\n\n        <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg\" class=\"img-fluid\" alt=\"\">\n\n      </div>\n      <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username : {{user.username}}</li>\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"page header\">Register</h2>\n<form (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label>Name</label>\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\"\n          placeholder=\"Enter Name\" >\n          \n    </div>    \n    \n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\"\n         placeholder=\"Enter Username\" ngModel >\n        \n  </div>   \n    \n    \n   <div class=\"form-group\"> \n      <label for=\"email\">Email address</label>\n      <input\n       type=\"email\" [(ngModel)]=\"email\" name=\"email\"\n       class=\"form-control\"\n      \n       placeholder=\"Enter email\"\n       ngModel\n       >\n  </div>\n  \n  \n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input\n       type=\"password\" [(ngModel)]=\"password\" name=\"password\"\n        class=\"form-control\"\n        \n         placeholder=\"Password\"\n         ngModel>\n    </div>\n  \n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n  "

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log(123);
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //REquired Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/Signin']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card{\r\n    max-width:350px;\r\n    padding:40px 40px;\r\n    background-color:#F7F7F7;\r\n    margin:0 auto 25px;\r\n    margin-top:50px;\r\n    border-radius:2px;\r\n    box-shadow:0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  }\r\n  \r\n  .login-card .profile-img-card{\r\n    width:96px;\r\n    height:96px;\r\n    margin:0 auto 10px;\r\n    display:block;\r\n    border-radius:50%;\r\n  }\r\n  \r\n  .login-card .profile-name-card{\r\n    font-size:16px;\r\n    font-weight:bold;\r\n    text-align:center;\r\n    margin:10px 0 0;\r\n    min-height:1em;\r\n  }\r\n  \r\n  .login-card .reauth-email{\r\n    display:block;\r\n    color:#404040;\r\n    line-height:2;\r\n    margin-bottom:10px;\r\n    font-size:14px;\r\n    text-align:center;\r\n    overflow:hidden;\r\n    text-overflow:ellipsis;\r\n    white-space:nowrap;\r\n    box-sizing:border-box;\r\n  }\r\n  \r\n  .login-card .form-signin input[type=email], .login-card .form-signin input[type=password], .login-card .form-signin input[type=text], .login-card .form-signin button{\r\n    height:44px;\r\n    font-size:16px;\r\n    width:100%;\r\n    display:block;\r\n    margin-bottom:10px;\r\n    z-index:1;\r\n    position:relative;\r\n    box-sizing:border-box;\r\n  }\r\n  \r\n  .login-card label{\r\n    color:#000000;\r\n  }\r\n  \r\n  .login-card .form-signin .form-control:focus{\r\n    border-color:rgb(104, 145, 162);\r\n    outline:0;\r\n    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n  }\r\n  \r\n  .login-card .btn.btn-signin{\r\n    font-weight:700;\r\n    height:36px;\r\n    line-height:36px;\r\n    font-size:14px;\r\n    background:rgb(104, 145, 162);\r\n    border-radius:3px;\r\n    border:none;\r\n    transition:all 0.218s;\r\n    padding:0;\r\n  }\r\n  \r\n  .login-card .btn.btn-signin:hover, .login-card .btn.btn-signin:active, .login-card .btn.btn-signin:focus{\r\n    background:rgb(12, 97, 33);\r\n  }\r\n  \r\n  .login-card .forgot-password{\r\n    color:rgb(104, 145, 162);\r\n  }\r\n  \r\n  .login-card .forgot-password:hover, .login-card .forgot-password:active, .login-card .forgot-password:focus{\r\n    color:rgb(12, 97, 33);\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" >Login</h2>\n<form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"Username\">Username</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n        <label for=\"Password\">Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\n</form>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['Dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['Signin']);
            }
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/sub-header/sub-header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/sub-header/sub-header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4{\r\n\tcolor: grey;\r\n}\r\n.demo{\r\n\ttext-align: center;\r\n}\r\na.effect-underline:after {\r\n\tcontent: '';\r\n  position: absolute;\r\n  left: 0;\r\n  display: inline-block;\r\n  height: 0em;\r\n  width: 96%;\r\n  border-bottom: 1px solid;\r\n  margin-top: 0px;\r\n\ttransition:opacity 0.35s, -webkit-transform 0.35s;\r\n\ttransition:opacity 0.35s, transform 0.35s;\r\n\ttransition: opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n\t-webkit-transform: scale(0,1);\r\n    transform: scale(0,1);\r\n    \r\n}\r\na.effect-underline:hover:after {\r\n  opacity: 1;\r\n\t-webkit-transform: scale(1);\r\n\ttransform: scale(1);\r\n}\r\n.collapse navbar-collapse .nav-item\r\n{\r\n    padding: 15em;\r\n}\r\nmain{\r\n  margin: 10%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/sub-header/sub-header.component.html":
/*!******************************************************!*\
  !*** ./src/app/sub-header/sub-header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" style=\"padding-bottom: 20px; padding-top: 20px\">\n    \n      <div class=\"col-sm-6 demo\">\n        <a  routerLink=\"/Men/Sunglass\" (click)=\"setCategory('sunglasses')\" style=\"text-decoration: none; cursor:pointer\" class=\"effect-underline\" href=\"javascript:void(0);\">\n          <h4 class=\"none\">Sunglasses</h4>\n        </a>\n      </div>\n      <div class=\"col-sm-6 demo\">\n        <a routerLink=\"/Men/Eyeglass\"  (click)=\"setCategory('eyeglasses')\" style=\"text-decoration: none; cursor:pointer\" class=\"effect-underline\">\n          <h4 class=\"none\">Eyeglasses</h4>\n        </a>\n      </div>\n</div>\n</div>\n\n<div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100\" src=\"../../assets/images/subheader/01.png\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"../../assets/images/subheader/02.png\" alt=\"Second slide\">\n      </div>\n   \n    </div>\n  </div>\n\n\n\n  <main>\n      <div class=\"container\">\n    \n        <!--Section: Products v.3-->\n        <section class=\"text-center mb-4\">\n    \n          <!--Grid row-->\n          <div class=\"row wow fadeIn\">\n    \n            <!--Grid column-->\n            <div class=\"col-lg-4 col-lg-4 col-lg-4\" *ngFor=\"let item of glassList; let i = index;\">\n    \n              <!--Card-->\n              <div class=\"card\">\n    \n                <!--Card image-->\n                <div class=\"view overlay\">\n                  <img [src]=\"getImage(item.image)\" class=\"card-img-top\" alt=\"\">\n                  <a>\n                    <div class=\"mask rgba-white-slight\">\n\n                    </div>\n                  </a>\n                </div>\n                <!--Card image-->\n    \n                <!--Card content-->\n                <div class=\"card-body text-center\">\n                  <!--Category & Title-->\n                  <a routerLink=\"Product\" class=\"grey-text\">\n                    <h5>{{item.name}}</h5>\n                  </a>\n              </div>\n                <!--Card content-->\n    \n              </div>\n              <!--Card-->\n    \n            </div>\n          \n    \n          </div>\n   \n    \n        </section>\n    \n      </div>\n    </main>\n"

/***/ }),

/***/ "./src/app/sub-header/sub-header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sub-header/sub-header.component.ts ***!
  \****************************************************/
/*! exports provided: SubHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubHeaderComponent", function() { return SubHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubHeaderComponent = /** @class */ (function () {
    function SubHeaderComponent() {
        this.glassList = [
            {
                name: 'VINCENT CHASSE POLARISED',
                image: "01.jpg"
            },
            {
                name: 'VINCENT CHASE',
                image: '02.jpg'
            },
            {
                name: 'RAYBAN',
                image: '03.jpeg'
            },
            {
                name: 'JOHN JACOBS',
                image: '04.jpg'
            },
            {
                name: 'CARERA',
                image: '05.jpg'
            },
            {
                name: 'VOGUE',
                image: '06.jpg'
            }
        ];
    }
    SubHeaderComponent.prototype.ngOnInit = function () {
        // this.glassList.push({name:, imge: '', price: '$200'})
    };
    SubHeaderComponent.prototype.getImage = function (image) {
        return '\\assets\\images\\subheader2\\' + image;
    };
    SubHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-header',
            template: __webpack_require__(/*! ./sub-header.component.html */ "./src/app/sub-header/sub-header.component.html"),
            styles: [__webpack_require__(/*! ./sub-header.component.css */ "./src/app/sub-header/sub-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubHeaderComponent);
    return SubHeaderComponent;
}());



/***/ }),

/***/ "./src/app/sunglass/sunglass.component.css":
/*!*************************************************!*\
  !*** ./src/app/sunglass/sunglass.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: \"Lato\", sans-serif;\r\n}\r\nmain .container {\r\n    margin-left: 100px; /* Same as the width of the sidenav */\r\n    font-size: 28px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n}\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n@media (max-width: 740px) {\r\n    html,\r\n    body,\r\n    header,\r\n    .carousel {\r\n      height: 100vh;\r\n    }\r\n  }\r\n@media (min-width: 800px) and (max-width: 850px) {\r\n    html,\r\n    body,\r\n    header,\r\n    .carousel {\r\n      height: 100vh;\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/sunglass/sunglass.component.html":
/*!**************************************************!*\
  !*** ./src/app/sunglass/sunglass.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container\">\n\n    <!--Navbar-->\n    <nav class=\"navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5\">\n\n      <!-- Navbar brand -->\n      <span class=\"navbar-brand\">Categories:</span>\n\n      <!-- Collapse button -->\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#basicExampleNav\" aria-controls=\"basicExampleNav\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <!-- Collapsible content -->\n      <div class=\"collapse navbar-collapse\" id=\"basicExampleNav\">\n\n        \n\n        <form class=\"form-inline\">\n          <div class=\"md-form my-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n          </div>\n        </form>\n      </div>\n      <!-- Collapsible content -->\n\n    </nav>\n    <!--/.Navbar-->\n\n    <!--Section: Products v.3-->\n    <section class=\"text-center mb-4\">\n\n      <!--Grid row-->\n      <div class=\"row wow fadeIn\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-3 col-md-6 mb-4\" *ngFor=\"let item of glassList; let i = index;\">\n\n          <!--Card-->\n          <div class=\"card\">\n\n            <!--Card image-->\n            <div class=\"view overlay\">\n              <img [src]=\"getImage(item.image)\" class=\"card-img-top\" alt=\"\">\n              <a>\n                <div class=\"mask rgba-white-slight\"></div>\n              </a>\n            </div>\n            <!--Card image-->\n\n            <!--Card content-->\n            <div class=\"card-body text-center\">\n              <!--Category & Title-->\n              <a routerLink=\"Product\" class=\"grey-text\">\n                <h5>{{item.name}}</h5>\n              </a>\n              <h5>\n                <strong>\n                  <a routerLink=\"Product\" class=\"dark-grey-text\">Product Id:{{item.id}}\n                    <span class=\"badge badge-pill danger-color\">NEW</span>\n                  </a>\n                </strong>\n              </h5>\n\n              <h4 class=\"font-weight-bold blue-text\">\n                <strong>{{item.price}}</strong>\n              </h4>\n\n            </div>\n            <!--Card content-->\n\n          </div>\n          <!--Card-->\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n       \n        <!--Fourth column-->\n\n      </div>\n      <!--Grid row-->\n\n      <!--Grid row-->\n      \n      <!--Grid row-->\n\n    </section>\n    <!--Section: Products v.3-->\n\n    <!--Pagination-->\n    <nav class=\"d-flex justify-content-center wow fadeIn\">\n      <ul class=\"pagination pg-blue\">\n\n        <!--Arrow left-->\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n\n        <li class=\"page-item active\">\n          <a class=\"page-link\" href=\"#\">1\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\">2</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\">3</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\">4</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\">5</a>\n        </li>\n\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!--Pagination-->\n\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/sunglass/sunglass.component.ts":
/*!************************************************!*\
  !*** ./src/app/sunglass/sunglass.component.ts ***!
  \************************************************/
/*! exports provided: SunglassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunglassComponent", function() { return SunglassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SunglassComponent = /** @class */ (function () {
    function SunglassComponent() {
        this.glassList = [
            {
                name: 'VINCENT CHASSE POLARISED',
                image: "01.jpg",
                id: '11101',
                price: 120
            },
            {
                name: 'VINCENT CHASE SUNSETTERS',
                image: '03.jpg',
                id: '11102',
                price: 120
            },
            {
                name: 'MASK',
                image: '04.jpg',
                id: '11103',
                price: 220
            },
            {
                name: 'JOHN JACOBS',
                image: '05.jpg',
                id: '11104',
                price: 180
            },
            {
                name: 'VINCENT CHASE POLARIZED',
                image: '06.jpg',
                id: '11105',
                price: 320
            },
            {
                name: 'VOGUE',
                image: '07.jpg',
                id: '11106',
                price: 520
            },
            {
                name: 'VOGUE VO5222S',
                image: '08.jpg',
                id: '11107',
                price: 530
            },
            {
                name: 'RAY-BAN',
                image: '100.jpg',
                id: '11108',
                price: 100
            }
        ];
    }
    SunglassComponent.prototype.ngOnInit = function () {
        // this.glassList.push({name:, imge: '', price: '$200'})
    };
    SunglassComponent.prototype.getImage = function (image) {
        return '\\assets\\images\\101\\' + image;
    };
    SunglassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sunglass',
            template: __webpack_require__(/*! ./sunglass.component.html */ "./src/app/sunglass/sunglass.component.html"),
            styles: [__webpack_require__(/*! ./sunglass.component.css */ "./src/app/sunglass/sunglass.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SunglassComponent);
    return SunglassComponent;
}());



/***/ }),

/***/ "./src/app/women/women.component.css":
/*!*******************************************!*\
  !*** ./src/app/women/women.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/women/women.component.html":
/*!********************************************!*\
  !*** ./src/app/women/women.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sub-header>\n  </app-sub-header>"

/***/ }),

/***/ "./src/app/women/women.component.ts":
/*!******************************************!*\
  !*** ./src/app/women/women.component.ts ***!
  \******************************************/
/*! exports provided: WomenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomenComponent", function() { return WomenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WomenComponent = /** @class */ (function () {
    function WomenComponent() {
    }
    WomenComponent.prototype.ngOnInit = function () {
    };
    WomenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-women',
            template: __webpack_require__(/*! ./women.component.html */ "./src/app/women/women.component.html"),
            styles: [__webpack_require__(/*! ./women.component.css */ "./src/app/women/women.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WomenComponent);
    return WomenComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! P:\Coursera\EYEKART\eyekart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map