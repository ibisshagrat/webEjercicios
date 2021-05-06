(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estudios-estudios-module"],{

/***/ "SkjZ":
/*!*********************************************!*\
  !*** ./src/app/estudios/estudios.module.ts ***!
  \*********************************************/
/*! exports provided: EstudiosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudiosModule", function() { return EstudiosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _estudios_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estudios-routing.module */ "rcVX");
/* harmony import */ var _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estudios/estudios.component */ "gjlV");
/* harmony import */ var _estudios_info_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./estudios/info/info.component */ "UCPX");
/* harmony import */ var _guia_guia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guia/guia.component */ "uT83");
/* harmony import */ var _estudios_info_asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estudios/info/asignatura/asignatura.component */ "XFmw");








class EstudiosModule {
}
EstudiosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EstudiosModule });
EstudiosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EstudiosModule_Factory(t) { return new (t || EstudiosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _estudios_routing_module__WEBPACK_IMPORTED_MODULE_2__["EstudiosRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EstudiosModule, { declarations: [_estudios_estudios_component__WEBPACK_IMPORTED_MODULE_3__["EstudiosComponent"], _estudios_info_info_component__WEBPACK_IMPORTED_MODULE_4__["InfoComponent"], _guia_guia_component__WEBPACK_IMPORTED_MODULE_5__["GuiaComponent"], _estudios_info_asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_6__["AsignaturaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _estudios_routing_module__WEBPACK_IMPORTED_MODULE_2__["EstudiosRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstudiosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_estudios_estudios_component__WEBPACK_IMPORTED_MODULE_3__["EstudiosComponent"], _estudios_info_info_component__WEBPACK_IMPORTED_MODULE_4__["InfoComponent"], _guia_guia_component__WEBPACK_IMPORTED_MODULE_5__["GuiaComponent"], _estudios_info_asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_6__["AsignaturaComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _estudios_routing_module__WEBPACK_IMPORTED_MODULE_2__["EstudiosRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "UCPX":
/*!**********************************************************!*\
  !*** ./src/app/estudios/estudios/info/info.component.ts ***!
  \**********************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], decls: 2, vars: 0, template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "info works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info',
                templateUrl: './info.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XFmw":
/*!***************************************************************************!*\
  !*** ./src/app/estudios/estudios/info/asignatura/asignatura.component.ts ***!
  \***************************************************************************/
/*! exports provided: AsignaturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturaComponent", function() { return AsignaturaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class AsignaturaComponent {
    constructor(activateRoute) {
        this.codAsignatura = '';
        this.codAsignatura = activateRoute.snapshot.params['codAsignatura'];
    }
    ngOnInit() {
    }
}
AsignaturaComponent.ɵfac = function AsignaturaComponent_Factory(t) { return new (t || AsignaturaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
AsignaturaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsignaturaComponent, selectors: [["app-asignatura"]], decls: 3, vars: 3, template: function AsignaturaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("gu\u00EDa de: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.codAsignatura), "");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsignaturaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-asignatura',
                templateUrl: './asignatura.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "gjlV":
/*!*********************************************************!*\
  !*** ./src/app/estudios/estudios/estudios.component.ts ***!
  \*********************************************************/
/*! exports provided: EstudiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudiosComponent", function() { return EstudiosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class EstudiosComponent {
    constructor() { }
    ngOnInit() {
    }
}
EstudiosComponent.ɵfac = function EstudiosComponent_Factory(t) { return new (t || EstudiosComponent)(); };
EstudiosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EstudiosComponent, selectors: [["app-estudios"]], decls: 20, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-8"], ["routerLink", "info", 1, "button"], ["routerLink", "guia", 1, "button"], ["routerLink", "info/js", 1, "button"], [1, "col-4"], ["src", "https://picsum.photos/400/500"]], template: function EstudiosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Curso DIM43");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, reprehenderit. Harum quisquam temporibus eum pariatur vel numquam aliquam dolores ratione odit voluptatem! Tenetur totam mollitia numquam delectus vel quo itaque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " mas informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "guia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "info JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstudiosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-estudios',
                templateUrl: './estudios.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rcVX":
/*!*****************************************************!*\
  !*** ./src/app/estudios/estudios-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EstudiosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudiosRoutingModule", function() { return EstudiosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estudios/estudios.component */ "gjlV");
/* harmony import */ var _estudios_info_asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estudios/info/asignatura/asignatura.component */ "XFmw");
/* harmony import */ var _estudios_info_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./estudios/info/info.component */ "UCPX");
/* harmony import */ var _guia_guia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guia/guia.component */ "uT83");








const routes = [
    {
        path: '',
        component: _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_2__["EstudiosComponent"],
        children: [
            {
                path: 'info', component: _estudios_info_info_component__WEBPACK_IMPORTED_MODULE_4__["InfoComponent"]
            },
            {
                path: 'info/:codAsignatura', component: _estudios_info_asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_3__["AsignaturaComponent"]
            }
        ]
    },
    {
        path: 'guia',
        component: _guia_guia_component__WEBPACK_IMPORTED_MODULE_5__["GuiaComponent"]
    }
];
class EstudiosRoutingModule {
}
EstudiosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EstudiosRoutingModule });
EstudiosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EstudiosRoutingModule_Factory(t) { return new (t || EstudiosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EstudiosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstudiosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "uT83":
/*!*************************************************!*\
  !*** ./src/app/estudios/guia/guia.component.ts ***!
  \*************************************************/
/*! exports provided: GuiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiaComponent", function() { return GuiaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GuiaComponent {
    constructor() { }
    ngOnInit() {
    }
}
GuiaComponent.ɵfac = function GuiaComponent_Factory(t) { return new (t || GuiaComponent)(); };
GuiaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuiaComponent, selectors: [["app-guia"]], decls: 2, vars: 0, template: function GuiaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "guia works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuiaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-guia',
                templateUrl: './guia.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=estudios-estudios-module.js.map