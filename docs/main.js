(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Htc":
/*!***************************************************!*\
  !*** ./src/app/core/shell/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class MainComponent {
    constructor() {
        this.title = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appName;
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ibiss\Dropbox\Estudios y trabajo\Estudios y formacion\30 - DIM\Fase presencial\24. Angular\ProyectosAngular\programacion-web-dim\src\main.ts */"zUnb");


/***/ }),

/***/ "6nXq":
/*!*******************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    appName: 'Dim43',
    unitsCulture: 'metric',
    host: 'http://localhost:8099',
    hostControladores: 'http://localhost:8099/api/',
    hostHateoas: 'https://datos-deportivos-api.herokuapp.com/api',
    hostDatosDeportivos: 'https://datos-deportivos-api.herokuapp.com/api',
    hostMagic: 'https://api.magicthegathering.io/v1/',
    obtenedorPartidos: 'api',
    partidos: [
        {
            id: 1,
            idLocal: 'WESHAM(ING)',
            idVisitante: 'BRIGHT(ING)',
            idCompeticion: 'ING-D1',
            sucesos: [
                { class: 'Gol', idParticipante: 'BRIGHT(ING)' },
                { class: 'Gol', idParticipante: 'BRIGHT(ING)' },
                { class: 'Gol', idParticipante: 'BRIGHT(ING)' },
                { class: 'Tarjeta', tipoTarjeta: 2, idParticipante: 'WESHAM(ING)' }
            ],
            timeStamp: 1508526000000
        },
        {
            id: 2,
            idLocal: 'OSASUN(ESP)',
            idVisitante: 'BARCAB(ESP)',
            idCompeticion: 'ESP-D2',
            sucesos: [
                { class: 'Gol', idParticipante: 'OSASUN(ESP)' },
                { class: 'Gol', idParticipante: 'OSASUN(ESP)' },
                { class: 'Gol', idParticipante: 'BARCAB(ESP)' },
                { class: 'Gol', idParticipante: 'BARCAB(ESP)' }
            ],
            timeStamp: 1508526000000
        },
        {
            id: 3,
            idLocal: 'SETIEN(FRA)',
            idVisitante: 'MONTPE(FRA)',
            idCompeticion: 'FRA-D1',
            sucesos: [
                { class: 'Gol', idParticipante: 'SETIEN(FRA)' },
                { class: 'Tarjeta', tipoTarjeta: 2, idParticipante: 'SETIEN(FRA)' },
                { class: 'Tarjeta', tipoTarjeta: 1, idParticipante: 'SETIEN(FRA)' },
                { class: 'Tarjeta', tipoTarjeta: 2, idParticipante: 'MONTPE(FRA)' },
                { class: 'Tarjeta', tipoTarjeta: 2, idParticipante: 'MONTPE(FRA)' },
                { class: 'Tarjeta', tipoTarjeta: 2, idParticipante: 'MONTPE(FRA)' }
            ],
            timeStamp: 1508525100000
        }
    ]
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

/***/ "B9Cg":
/*!*******************************************************!*\
  !*** ./src/app/core/shell/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "footer", "bg-primary", "fixed-bottom"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FOOTER FUNIONANDO!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NplC":
/*!***********************************************!*\
  !*** ./src/app/core/shell/shell.component.ts ***!
  \***********************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "Tr/i");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "/Htc");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "B9Cg");





class ShellComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShellComponent.ɵfac = function ShellComponent_Factory(t) { return new (t || ShellComponent)(); };
ShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShellComponent, selectors: [["app-shell"]], decls: 3, vars: 0, template: function ShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shell',
                templateUrl: './shell.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "R1V9":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeroesComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeroesComponent.ɵfac = function HeroesComponent_Factory(t) { return new (t || HeroesComponent)(); };
HeroesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroesComponent, selectors: [["app-heroes"]], decls: 15, vars: 0, consts: [["target", "_blank", "rel", "noopener", "href", "https://angular.io/tutorial"], ["target", "_blank", "rel", "noopener", "href", "https://angular.io/cli"], ["target", "_blank", "rel", "noopener", "href", "https://blog.angular.io/"]], template: function HeroesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Here are some links to help you start: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tour of Heroes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CLI Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Angular blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-heroes',
                templateUrl: './heroes.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_shell_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/shell/shell.component */ "NplC");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shell");
    } }, directives: [_core_shell_shell_component__WEBPACK_IMPORTED_MODULE_1__["ShellComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styles: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "Tr/i":
/*!*******************************************************!*\
  !*** ./src/app/core/shell/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







class HeaderComponent {
    constructor() {
        this.title = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appName;
        this.futbol = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFutbol"];
        this.cajaFlecha = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretSquareUp"];
        this.book = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBook"];
        this.dragon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faDragon"];
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 40, vars: 5, consts: [[1, "sticky"], ["routerLink", "/", 1, "logo"], [1, "icon-home"], ["routerLink", "heroes", "routerLinkActive", "router-link-active", 1, "button"], ["routerLink", "about", "routerLinkActive", "router-link-active", 1, "button"], ["width", "32", "src", "./assets/logo.png", 2, "vertical-align", "-0.5em"], ["routerLink", "contacts", 1, "button"], ["routerLink", "car", 1, "button"], [3, "icon"], ["routerLink", "converter", 1, "button"], ["routerLink", "estudios", 1, "button"], ["routerLink", "partidos", 1, "button"], ["routerLink", "participantes", 1, "button"], ["routerLink", "propietarios", 1, "button"], ["routerLink", "magic", 1, "button"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Heroes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " 4 - Carro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Converter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Estudios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Partidos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Participantes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Propietarios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Magic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.cajaFlecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.book);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.futbol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.dragon);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heroes/heroes.component */ "R1V9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__["HeroesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__["HeroesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shell/shell.component */ "NplC");
/* harmony import */ var _shell_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shell/header/header.component */ "Tr/i");
/* harmony import */ var _shell_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shell/main/main.component */ "/Htc");
/* harmony import */ var _shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shell/footer/footer.component */ "B9Cg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ "6nXq");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");










class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_shell_shell_component__WEBPACK_IMPORTED_MODULE_2__["ShellComponent"], _shell_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _shell_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]], exports: [_shell_shell_component__WEBPACK_IMPORTED_MODULE_2__["ShellComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_shell_shell_component__WEBPACK_IMPORTED_MODULE_2__["ShellComponent"], _shell_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _shell_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
                ],
                exports: [_shell_shell_component__WEBPACK_IMPORTED_MODULE_2__["ShellComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heroes/heroes.component */ "R1V9");






const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-home-home-module */ "src-app-home-home-module").then(__webpack_require__.bind(null, /*! src/app/home/home.module */ "ct+p")).then(m => m.HomeModule) /*  si nos fijamos no se hace el Import de homeModule asi ganamos que no se cargue en el main */
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ./about/about.module */ "FQ1g")).then(m => m.AboutModule)
    },
    {
        path: 'contacts',
        loadChildren: () => Promise.all(/*! import() | contacts-contacts-module */[__webpack_require__.e("default~contacts-contacts-module~converter-converter-module~magic-magic-module~participantes-partici~1bf8736f"), __webpack_require__.e("contacts-contacts-module")]).then(__webpack_require__.bind(null, /*! ./contacts/contacts.module */ "1s7i")).then(m => m.ContactsModule)
    },
    {
        path: 'car',
        loadChildren: () => __webpack_require__.e(/*! import() | car-car-module */ "car-car-module").then(__webpack_require__.bind(null, /*! ./car/car.module */ "LRtc")).then(m => m.CarModule)
    },
    {
        path: 'converter',
        loadChildren: () => Promise.all(/*! import() | converter-converter-module */[__webpack_require__.e("default~contacts-contacts-module~converter-converter-module~magic-magic-module~participantes-partici~1bf8736f"), __webpack_require__.e("converter-converter-module")]).then(__webpack_require__.bind(null, /*! ./converter/converter.module */ "gx7t")).then(m => m.ConverterModule)
    },
    {
        path: 'heroes',
        component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__["HeroesComponent"]
    },
    {
        path: 'estudios',
        loadChildren: () => __webpack_require__.e(/*! import() | estudios-estudios-module */ "estudios-estudios-module").then(__webpack_require__.bind(null, /*! ./estudios/estudios.module */ "SkjZ")).then(m => m.EstudiosModule)
    },
    {
        path: 'partidos',
        loadChildren: () => Promise.all(/*! import() | partidos-partidos-module */[__webpack_require__.e("default~contacts-contacts-module~converter-converter-module~magic-magic-module~participantes-partici~1bf8736f"), __webpack_require__.e("partidos-partidos-module")]).then(__webpack_require__.bind(null, /*! ./partidos/partidos.module */ "xF6X")).then(m => m.PartidosModule)
    },
    {
        path: 'propietarios',
        loadChildren: () => Promise.all(/*! import() | propietarios-propietarios-module */[__webpack_require__.e("default~contacts-contacts-module~converter-converter-module~magic-magic-module~participantes-partici~1bf8736f"), __webpack_require__.e("propietarios-propietarios-module")]).then(__webpack_require__.bind(null, /*! ./propietarios/propietarios.module */ "84Vf")).then(m => m.PropietariosModule)
    },
    {
        path: 'participantes',
        loadChildren: () => Promise.all(/*! import() | participantes-participantes-module */[__webpack_require__.e("default~contacts-contacts-module~converter-converter-module~magic-magic-module~participantes-partici~1bf8736f"), __webpack_require__.e("participantes-participantes-module")]).then(__webpack_require__.bind(null, /*! ./participantes/participantes.module */ "0I3g")).then(m => m.ParticipantesModule)
    },
    {
        path: 'magic',
        loadChildren: () => Promise.all(/*! import() | magic-magic-module */[__webpack_require__.e("default~contacts-contacts-module~converter-converter-module~magic-magic-module~participantes-partici~1bf8736f"), __webpack_require__.e("magic-magic-module")]).then(__webpack_require__.bind(null, /*! ./magic/magic.module */ "i5SR")).then(m => m.MagicModule)
    },
    {
        path: 'not-found',
        component: _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map