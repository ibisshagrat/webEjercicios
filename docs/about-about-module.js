(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "+wPt":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "JaJ+");
/* harmony import */ var _about_authors_author_author_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/authors/author/author.component */ "5M+R");
/* harmony import */ var _about_authors_authors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/authors/authors.component */ "ho5F");
/* harmony import */ var _about_info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/info/info.component */ "m2Vq");
/* harmony import */ var _about_links_links_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/links/links.component */ "lLOL");









const routes = [
    {
        path: '',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        children: [
            {
                path: 'links', component: _about_links_links_component__WEBPACK_IMPORTED_MODULE_6__["LinksComponent"]
            },
            {
                path: 'info', component: _about_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"]
            },
            {
                path: 'authors', component: _about_authors_authors_component__WEBPACK_IMPORTED_MODULE_4__["AuthorsComponent"]
            },
            {
                path: 'authors/:id', component: _about_authors_author_author_component__WEBPACK_IMPORTED_MODULE_3__["AuthorComponent"]
            }
        ]
    }
];
class AboutRoutingModule {
}
AboutRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "5M+R":
/*!****************************************************************!*\
  !*** ./src/app/about/about/authors/author/author.component.ts ***!
  \****************************************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class AuthorComponent {
    constructor(activateRoute) {
        this.authorId = '';
        this.authorId = activateRoute.snapshot.params['id'];
    }
    ngOnInit() {
    }
}
AuthorComponent.??fac = function AuthorComponent_Factory(t) { return new (t || AuthorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
AuthorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AuthorComponent, selectors: [["app-author"]], decls: 3, vars: 3, template: function AuthorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("El autor que me viene por la ruta y es: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, ctx.authorId), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-author',
                templateUrl: './author.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "FQ1g":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ "+wPt");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "JaJ+");
/* harmony import */ var _about_links_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/links/links.component */ "lLOL");
/* harmony import */ var _about_info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/info/info.component */ "m2Vq");
/* harmony import */ var _about_authors_authors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/authors/authors.component */ "ho5F");
/* harmony import */ var _about_authors_author_author_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/authors/author/author.component */ "5M+R");









class AboutModule {
}
AboutModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AboutModule });
AboutModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AboutModule, { declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _about_links_links_component__WEBPACK_IMPORTED_MODULE_4__["LinksComponent"], _about_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"], _about_authors_authors_component__WEBPACK_IMPORTED_MODULE_6__["AuthorsComponent"], _about_authors_author_author_component__WEBPACK_IMPORTED_MODULE_7__["AuthorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _about_links_links_component__WEBPACK_IMPORTED_MODULE_4__["LinksComponent"], _about_info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"], _about_authors_authors_component__WEBPACK_IMPORTED_MODULE_6__["AuthorsComponent"], _about_authors_author_author_component__WEBPACK_IMPORTED_MODULE_7__["AuthorComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "JaJ+":
/*!************************************************!*\
  !*** ./src/app/about/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 10, vars: 0, consts: [[1, "sticky"], ["routerLink", "links", 1, "button"], ["routerLink", "info", 1, "button"], ["routerLink", "authors", 1, "button"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Tutorial Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " More Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Credit Authors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ho5F":
/*!**********************************************************!*\
  !*** ./src/app/about/about/authors/authors.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsComponent", function() { return AuthorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthorsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthorsComponent.??fac = function AuthorsComponent_Factory(t) { return new (t || AuthorsComponent)(); };
AuthorsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AuthorsComponent, selectors: [["app-authors"]], decls: 4, vars: 0, consts: [["routerLink", "kzurro", 1, "button"], ["routerLink", "Pogonowsky", 1, "button"]], template: function AuthorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Proto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Pogonowsky ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authors',
                templateUrl: './authors.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lLOL":
/*!******************************************************!*\
  !*** ./src/app/about/about/links/links.component.ts ***!
  \******************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LinksComponent {
    constructor() { }
    ngOnInit() {
    }
}
LinksComponent.??fac = function LinksComponent_Factory(t) { return new (t || LinksComponent)(); };
LinksComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LinksComponent, selectors: [["app-links"]], decls: 2, vars: 0, template: function LinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "links works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-links',
                templateUrl: './links.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "m2Vq":
/*!****************************************************!*\
  !*** ./src/app/about/about/info/info.component.ts ***!
  \****************************************************/
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
InfoComponent.??fac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(); };
InfoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: InfoComponent, selectors: [["app-info"]], decls: 2, vars: 0, template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "info works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info',
                templateUrl: './info.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map