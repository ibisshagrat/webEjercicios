(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["magic-magic-module"],{

/***/ "WX8N":
/*!*************************************************!*\
  !*** ./src/app/magic/services/magic.service.ts ***!
  \*************************************************/
/*! exports provided: MagicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicService", function() { return MagicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class MagicService {
    constructor(http) {
        this.http = http;
        this.urlEndPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hostMagic;
    }
    getSets() {
        return this.http.get(`${this.urlEndPoint}sets`);
    }
    getCartasSet(id) {
        return this.http.get(`${this.urlEndPoint}cards?set=${id}`);
    }
    mapearSets(setsApi) {
        let sets = [];
        //let set: SetMagic = new SetMagicImp();
        sets = setsApi.sets;
        /*     setsApi.sets.forEach(s => {
              set.code = s.code;
              set.name = s.name;
              sets.push(set);
            }); */
        return sets;
    }
    mapearCartas(cartasApi) {
        let cartas = [];
        cartas = cartasApi.cards;
        return cartas;
    }
}
MagicService.ɵfac = function MagicService_Factory(t) { return new (t || MagicService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MagicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MagicService, factory: MagicService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MagicService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "gaOE":
/*!************************************************!*\
  !*** ./src/app/magic/carta/carta.component.ts ***!
  \************************************************/
/*! exports provided: CartaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaComponent", function() { return CartaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CartaComponent {
    constructor() {
        this.mostrarCarta = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.longitudMax = 50;
    }
    ngOnInit() {
        if (this.carta.flavor != null) {
            if (this.carta.flavor.length > this.longitudMax) {
                this.flavor = this.carta.flavor.substr(0, this.longitudMax) + "...";
            }
            else {
                this.flavor = this.carta.flavor;
            }
        }
    }
    onSolicitarModal() {
        return this.mostrarCarta.emit();
    }
    mandarCarta() {
        return this.mostrarCarta.emit(this.carta);
    }
}
CartaComponent.ɵfac = function CartaComponent_Factory(t) { return new (t || CartaComponent)(); };
CartaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartaComponent, selectors: [["app-carta"]], inputs: { carta: "carta" }, outputs: { mostrarCarta: "mostrarCarta" }, decls: 11, vars: 6, consts: [[1, "col-2"], [1, "card", "align-items-center", 2, "width", "12rem"], ["data-toggle", "modal", "data-target", "#cartaModal", "type", "button", "id", "imagenCarta", 1, "card-img-top", 3, "src", "alt", "click"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "font-italic", "smaller"]], template: function CartaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartaComponent_Template_img_click_2_listener() { return ctx.mandarCarta(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.carta.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.carta.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.carta.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.carta.colors, " ", ctx.carta.type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.flavor);
    } }, styles: [".card[_ngcontent-%COMP%] { background-color: rgba(255,255,255,0.5); }", "img[_ngcontent-%COMP%] { cursor: pointer; }", ".imagenModal[_ngcontent-%COMP%] { border-radius: 15px }", ".modal-dialog[_ngcontent-%COMP%] { max-width: 100%; width: auto !important; display: inline-block; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carta',
                templateUrl: './carta.component.html',
                styles: [
                    '.card { background-color: rgba(255,255,255,0.5); }',
                    'img { cursor: pointer; }',
                    '.imagenModal { border-radius: 15px }',
                    '.modal-dialog { max-width: 100%; width: auto !important; display: inline-block; }'
                ]
            }]
    }], function () { return []; }, { carta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mostrarCarta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "i5SR":
/*!***************************************!*\
  !*** ./src/app/magic/magic.module.ts ***!
  \***************************************/
/*! exports provided: MagicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicModule", function() { return MagicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _magic_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./magic-routing.module */ "xBkR");
/* harmony import */ var _magic_magic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./magic/magic.component */ "vGUD");
/* harmony import */ var _set_set_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set/set.component */ "jB2W");
/* harmony import */ var _carta_carta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carta/carta.component */ "gaOE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class MagicModule {
}
MagicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MagicModule });
MagicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MagicModule_Factory(t) { return new (t || MagicModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _magic_routing_module__WEBPACK_IMPORTED_MODULE_2__["MagicRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MagicModule, { declarations: [_magic_magic_component__WEBPACK_IMPORTED_MODULE_3__["MagicComponent"], _set_set_component__WEBPACK_IMPORTED_MODULE_4__["SetComponent"], _carta_carta_component__WEBPACK_IMPORTED_MODULE_5__["CartaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _magic_routing_module__WEBPACK_IMPORTED_MODULE_2__["MagicRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MagicModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_magic_magic_component__WEBPACK_IMPORTED_MODULE_3__["MagicComponent"], _set_set_component__WEBPACK_IMPORTED_MODULE_4__["SetComponent"], _carta_carta_component__WEBPACK_IMPORTED_MODULE_5__["CartaComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _magic_routing_module__WEBPACK_IMPORTED_MODULE_2__["MagicRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jB2W":
/*!********************************************!*\
  !*** ./src/app/magic/set/set.component.ts ***!
  \********************************************/
/*! exports provided: SetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetComponent", function() { return SetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_magic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/magic.service */ "WX8N");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _carta_carta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carta/carta.component */ "gaOE");





function SetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-carta", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mostrarCarta", function SetComponent_div_0_Template_app_carta_mostrarCarta_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const c_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.solicitarModal(c_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("carta", c_r1);
} }
class SetComponent {
    constructor(magicService) {
        this.magicService = magicService;
        this.mostrarCarta = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    solicitarModal(carta) {
        return this.mostrarCarta.emit(carta);
    }
}
SetComponent.ɵfac = function SetComponent_Factory(t) { return new (t || SetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_magic_service__WEBPACK_IMPORTED_MODULE_1__["MagicService"])); };
SetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetComponent, selectors: [["app-set"]], inputs: { set: "set", cartas: "cartas" }, outputs: { mostrarCarta: "mostrarCarta" }, decls: 1, vars: 1, consts: [["class", "d-inline-flex", 4, "ngFor", "ngForOf"], [1, "d-inline-flex"], [3, "carta", "mostrarCarta"]], template: function SetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SetComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _carta_carta_component__WEBPACK_IMPORTED_MODULE_3__["CartaComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-set',
                templateUrl: './set.component.html',
                styles: []
            }]
    }], function () { return [{ type: _services_magic_service__WEBPACK_IMPORTED_MODULE_1__["MagicService"] }]; }, { set: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cartas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mostrarCarta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "sNmt":
/*!*******************************************!*\
  !*** ./src/app/magic/models/carta-imp.ts ***!
  \*******************************************/
/*! exports provided: CartaImp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaImp", function() { return CartaImp; });
class CartaImp {
}


/***/ }),

/***/ "vGUD":
/*!************************************************!*\
  !*** ./src/app/magic/magic/magic.component.ts ***!
  \************************************************/
/*! exports provided: MagicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicComponent", function() { return MagicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_carta_imp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/carta-imp */ "sNmt");
/* harmony import */ var _services_magic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/magic.service */ "WX8N");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _set_set_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../set/set.component */ "jB2W");







function MagicComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", s_r2.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r2.name);
} }
function MagicComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-set", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mostrarCarta", function MagicComponent_div_11_Template_app_set_mostrarCarta_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.mostrarCarta($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("set", ctx_r1.set)("cartas", ctx_r1.cartas);
} }
class MagicComponent {
    constructor(magicService) {
        this.magicService = magicService;
        this.sets = [];
        this.codigoSet = null;
        this.carta = new _models_carta_imp__WEBPACK_IMPORTED_MODULE_1__["CartaImp"]();
    }
    ngOnInit() {
        this.magicService.getSets().subscribe((response) => {
            this.sets = this.magicService.mapearSets(response);
            console.log(this.sets);
        });
    }
    cargarSet() {
        this.set = null;
        console.log('cargar ', this.codigoSet);
        this.set = this.sets.filter((s) => s.code == this.codigoSet)[0];
        this.magicService.getCartasSet(this.set.code).subscribe((response) => {
            this.cartas = this.magicService.mapearCartas(response);
            console.log(this.cartas);
        });
    }
    mostrarCarta(carta) {
        this.carta = carta;
    }
}
MagicComponent.ɵfac = function MagicComponent_Factory(t) { return new (t || MagicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_magic_service__WEBPACK_IMPORTED_MODULE_2__["MagicService"])); };
MagicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MagicComponent, selectors: [["app-magic"]], decls: 17, vars: 5, consts: [["id", "mtg", 1, "text-center"], ["src", "./assets/MagicLogo.png", "alt", "Magic: the Gathering"], [1, "font-weight-bold"], ["name", "sets", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "cartaModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", 2, "background-color", "transparent"], [1, "modal-body", "text-center"], [1, "imagenModal", 3, "src", "alt"], [3, "value"], [3, "set", "cartas", "mostrarCarta"]], template: function MagicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tu aplicaci\u00F3n de Magic: the Gathering definitiva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Elige una colecci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MagicComponent_Template_select_ngModelChange_9_listener($event) { return ctx.codigoSet = $event; })("change", function MagicComponent_Template_select_change_9_listener() { return ctx.cargarSet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MagicComponent_option_10_Template, 3, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MagicComponent_div_11_Template, 2, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.codigoSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.codigoSet != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.carta.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.carta.name);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _set_set_component__WEBPACK_IMPORTED_MODULE_5__["SetComponent"]], styles: ["#mtg[_ngcontent-%COMP%] { background-image: url(\"./assets/mtg.jpg\"); background-repeat: repeat-y; background-attachment: fixed; background-position: center; min-height: 60vmax}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MagicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-magic',
                templateUrl: './magic.component.html',
                styles: [
                    '#mtg { background-image: url("./assets/mtg.jpg"); background-repeat: repeat-y; background-attachment: fixed; background-position: center; min-height: 60vmax}',
                ],
            }]
    }], function () { return [{ type: _services_magic_service__WEBPACK_IMPORTED_MODULE_2__["MagicService"] }]; }, null); })();


/***/ }),

/***/ "xBkR":
/*!***********************************************!*\
  !*** ./src/app/magic/magic-routing.module.ts ***!
  \***********************************************/
/*! exports provided: MagicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicRoutingModule", function() { return MagicRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _magic_magic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./magic/magic.component */ "vGUD");





const routes = [
    {
        path: '',
        component: _magic_magic_component__WEBPACK_IMPORTED_MODULE_2__["MagicComponent"]
    }
];
class MagicRoutingModule {
}
MagicRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MagicRoutingModule });
MagicRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MagicRoutingModule_Factory(t) { return new (t || MagicRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MagicRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MagicRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=magic-magic-module.js.map