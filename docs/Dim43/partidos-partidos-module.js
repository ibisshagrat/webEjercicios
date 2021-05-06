(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partidos-partidos-module"],{

/***/ "3/js":
/*!*******************************************************!*\
  !*** ./src/app/partidos/services/partidos.service.ts ***!
  \*******************************************************/
/*! exports provided: PartidosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidosService", function() { return PartidosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class PartidosService {
    constructor(http) {
        this.http = http;
    }
    getPartidosEnvironment() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].partidos;
    }
    getPartidosApi() {
        return null;
    }
}
PartidosService.ɵfac = function PartidosService_Factory(t) { return new (t || PartidosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PartidosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PartidosService, factory: PartidosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartidosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "DZP1":
/*!*********************************************************!*\
  !*** ./src/app/partidos/partidos/partidos.component.ts ***!
  \*********************************************************/
/*! exports provided: PartidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidosComponent", function() { return PartidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_partidos_api_no_inverso_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/partidos-api-no-inverso.service */ "OkS4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _partido_partido_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partido/partido.component */ "Rbbh");
/* harmony import */ var _tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tarjeta/tarjeta.component */ "Uzz4");







function PartidosComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const part_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", part_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", part_r3.idLocal, " - ", part_r3.idVisitante, "");
} }
function PartidosComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-partido", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mostrarTarjeta", function PartidosComponent_div_5_Template_app_partido_mostrarTarjeta_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.mostrarTarjetas($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("partido", ctx_r1.partido);
} }
function PartidosComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tarjeta", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tarjeta_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tarjeta", tarjeta_r7);
} }
function PartidosComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tarjetas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PartidosComponent_div_6_div_3_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tarjetas);
} }
class PartidosComponent {
    constructor(partidosApi) {
        this.partidosApi = partidosApi;
        this.partidos = [];
        this.partido = null;
        this.muestraTarjetas = false;
        this.tarjetas = [];
    }
    ngOnInit() {
        this.partidosApi.getPartidos().subscribe(response => {
            this.partidos = this.partidosApi.extraerPartidos(response);
        });
    }
    getPartido() {
        let resultado = this.partidos.filter((c) => c.id == this.idPartido)[0];
        this.partido = resultado;
        this.calcularResultado();
        this.isTarjetas();
        this.mostrarTarjetas(false);
    }
    calcularResultado() {
        let goles = this.partido.sucesos.filter((s) => s.class == 'Gol');
        this.partido.marcadorLocal = goles.filter((g) => g.idParticipante == this.partido.idLocal).length;
        this.partido.marcadorVisitante = goles.filter((g) => g.idParticipante == this.partido.idVisitante).length;
    }
    isTarjetas() {
        let cantidadTarjetas = this.partido.sucesos.filter(s => s.class == "Tarjeta").length;
        if (cantidadTarjetas > 0) {
            this.partido.hayTarjetas = true;
        }
        else {
            this.partido.hayTarjetas = false;
        }
    }
    mostrarTarjetas(orden) {
        this.muestraTarjetas = orden;
        if (orden) {
            this.tarjetas = this.partido.sucesos.filter((s) => s.class == 'Tarjeta');
        }
    }
}
PartidosComponent.ɵfac = function PartidosComponent_Factory(t) { return new (t || PartidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_partidos_api_no_inverso_service__WEBPACK_IMPORTED_MODULE_1__["PartidosApiNoInversoService"])); };
PartidosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PartidosComponent, selectors: [["app-partidos"]], decls: 7, vars: 4, consts: [["for", "listaPartidos"], ["name", "listaPartidos", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], [3, "partido", "mostrarTarjeta"], [4, "ngFor", "ngForOf"], [3, "tarjeta"]], template: function PartidosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lista partidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PartidosComponent_Template_select_ngModelChange_3_listener($event) { return ctx.idPartido = $event; })("change", function PartidosComponent_Template_select_change_3_listener() { return ctx.getPartido(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PartidosComponent_option_4_Template, 3, 3, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PartidosComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PartidosComponent_div_6_Template, 4, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.idPartido);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.partidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.idPartido != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.muestraTarjetas);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _partido_partido_component__WEBPACK_IMPORTED_MODULE_4__["PartidoComponent"], _tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_5__["TarjetaComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartidosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-partidos',
                templateUrl: './partidos.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _services_partidos_api_no_inverso_service__WEBPACK_IMPORTED_MODULE_1__["PartidosApiNoInversoService"] }]; }, null); })();


/***/ }),

/***/ "OkS4":
/*!**********************************************************************!*\
  !*** ./src/app/partidos/services/partidos-api-no-inverso.service.ts ***!
  \**********************************************************************/
/*! exports provided: PartidosApiNoInversoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidosApiNoInversoService", function() { return PartidosApiNoInversoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _models_partido_impl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/partido-impl */ "cAp5");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class PartidosApiNoInversoService {
    constructor(http) {
        this.http = http;
        this.urlDatosDeportivosPartidos = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hostDatosDeportivos}/partidos`;
    }
    getPartidos() {
        return this.http.get(this.urlDatosDeportivosPartidos);
    }
    extraerPartidos(respuestaApi) {
        const partidos = [];
        respuestaApi._embedded.partidos.forEach(p => {
            const pMapeado = this.extraerPartido(p);
            partidos.push(pMapeado);
        });
        return partidos;
    }
    extraerPartido(partidoDesdeAPI) {
        const pe = this.mapearPartido(partidoDesdeAPI);
        const url = partidoDesdeAPI._links.self.href;
        pe.id = url.slice(url.lastIndexOf('/') + 1, url.length);
        const sucesos = [];
        this.http.get(`${this.urlDatosDeportivosPartidos}/${pe.id}/sucesos`)
            .subscribe(r => {
            let arraySucesos = r._embedded.goles;
            if (arraySucesos) {
                sucesos.push(...this.mapearSucesos(arraySucesos));
            }
            arraySucesos = r._embedded.tarjetas;
            if (arraySucesos) {
                sucesos.push(...this.mapearSucesos(arraySucesos));
            }
        });
        pe.sucesos = sucesos;
        return pe;
    }
    mapearPartido(partidoApi) {
        const partido = new _models_partido_impl__WEBPACK_IMPORTED_MODULE_2__["PartidoImpl"]();
        partido.idLocal = partidoApi.idLocal;
        partido.idVisitante = partidoApi.idVisitante;
        partido.timeStamp = partidoApi.timeStamp;
        partido.sucesos = partidoApi.sucesos;
        return partido;
    }
    mapearSuceso(sucesoAPI) {
        let suceso = null;
        if (sucesoAPI.tipoTarjeta) {
            suceso = {
                class: 'Tarjeta',
                idParticipante: sucesoAPI.idParticipante,
                timestamp: sucesoAPI.timestamp,
                tipoTarjeta: sucesoAPI.tipoTarjeta == 'ROJA' ? '1' : '2'
            };
        }
        else {
            suceso = {
                class: 'Gol',
                idParticipante: sucesoAPI.idParticipante,
                timestamp: sucesoAPI.timestamp
            };
        }
        return suceso;
    }
    mapearSucesos(sucesosAPI) {
        const sucesos = [];
        sucesosAPI.forEach(s => sucesos.push(this.mapearSuceso(s)));
        return sucesos;
    }
}
PartidosApiNoInversoService.ɵfac = function PartidosApiNoInversoService_Factory(t) { return new (t || PartidosApiNoInversoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PartidosApiNoInversoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PartidosApiNoInversoService, factory: PartidosApiNoInversoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartidosApiNoInversoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Rbbh":
/*!****************************************************************!*\
  !*** ./src/app/partidos/partidos/partido/partido.component.ts ***!
  \****************************************************************/
/*! exports provided: PartidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidoComponent", function() { return PartidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PartidoComponent {
    constructor() {
        this.mostrarTarjeta = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
PartidoComponent.ɵfac = function PartidoComponent_Factory(t) { return new (t || PartidoComponent)(); };
PartidoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PartidoComponent, selectors: [["app-partido"]], inputs: { partido: "partido" }, outputs: { mostrarTarjeta: "mostrarTarjeta" }, decls: 7, vars: 5, consts: [["id", "botonTarjetas", 1, "btn", "btn-info", 3, "disabled", "click"]], template: function PartidoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Partido del ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PartidoComponent_Template_button_click_5_listener() { return ctx.mostrarTarjeta.emit(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mostrar Tarjetas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", ctx.partido.idLocal, " ", ctx.partido.marcadorLocal, " - ", ctx.partido.marcadorVisitante, " ", ctx.partido.idVisitante, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.partido.hayTarjetas);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartidoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-partido',
                templateUrl: './partido.component.html',
                styles: []
            }]
    }], function () { return []; }, { partido: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mostrarTarjeta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "SRa3":
/*!*****************************************************!*\
  !*** ./src/app/partidos/partidos-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PartidosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidosRoutingModule", function() { return PartidosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _partidos_partidos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partidos/partidos.component */ "DZP1");





const routes = [
    {
        path: '',
        component: _partidos_partidos_component__WEBPACK_IMPORTED_MODULE_2__["PartidosComponent"],
    }
];
class PartidosRoutingModule {
}
PartidosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PartidosRoutingModule });
PartidosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PartidosRoutingModule_Factory(t) { return new (t || PartidosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PartidosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartidosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Uzz4":
/*!****************************************************************!*\
  !*** ./src/app/partidos/partidos/tarjeta/tarjeta.component.ts ***!
  \****************************************************************/
/*! exports provided: TarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarjetaComponent", function() { return TarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0, a1) { return { "tarjetaRoja": a0, "tarjetaAmarilla": a1 }; };
class TarjetaComponent {
    constructor() {
        this.tarjetaIcono = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSquareFull"];
        this.esAmarilla = false;
        this.esRoja = false;
    }
    ngOnInit() {
        this.determinarColor();
    }
    determinarColor() {
        if (this.tarjeta.tipoTarjeta == 1) {
            this.esRoja = true;
        }
        else if (this.tarjeta.tipoTarjeta == 2) {
            this.esAmarilla = true;
        }
    }
}
TarjetaComponent.ɵfac = function TarjetaComponent_Factory(t) { return new (t || TarjetaComponent)(); };
TarjetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TarjetaComponent, selectors: [["app-tarjeta"]], inputs: { tarjeta: "tarjeta" }, decls: 5, vars: 6, consts: [[1, "row"], [1, "col-2"], [1, "col-1"], [3, "icon", "ngClass"]], template: function TarjetaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tarjeta.idParticipante, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.tarjetaIcono)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.esRoja, ctx.esAmarilla));
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".tarjetaRoja[_ngcontent-%COMP%] { color: red; }", ".tarjetaAmarilla[_ngcontent-%COMP%] { color: yellow; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TarjetaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tarjeta',
                templateUrl: './tarjeta.component.html',
                styles: [
                    '.tarjetaRoja { color: red; }',
                    '.tarjetaAmarilla { color: yellow; }',
                ]
            }]
    }], function () { return []; }, { tarjeta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "cAp5":
/*!*************************************************!*\
  !*** ./src/app/partidos/models/partido-impl.ts ***!
  \*************************************************/
/*! exports provided: PartidoImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidoImpl", function() { return PartidoImpl; });
class PartidoImpl {
}


/***/ }),

/***/ "lUI0":
/*!***********************************************************!*\
  !*** ./src/app/partidos/services/partidos-api.service.ts ***!
  \***********************************************************/
/*! exports provided: PartidosApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidosApiService", function() { return PartidosApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _partidos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partidos.service */ "3/js");



class PartidosApiService {
    constructor(partidosService) {
        this.partidosService = partidosService;
        this.getPartidos = this.partidosService.getPartidosApi;
    }
}
PartidosApiService.ɵfac = function PartidosApiService_Factory(t) { return new (t || PartidosApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_partidos_service__WEBPACK_IMPORTED_MODULE_1__["PartidosService"])); };
PartidosApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PartidosApiService, factory: PartidosApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartidosApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _partidos_service__WEBPACK_IMPORTED_MODULE_1__["PartidosService"] }]; }, null); })();


/***/ }),

/***/ "umiw":
/*!***************************************************************!*\
  !*** ./src/app/partidos/services/partidos-obtener.service.ts ***!
  \***************************************************************/
/*! exports provided: PartidosObtenerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidosObtenerService", function() { return PartidosObtenerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PartidosObtenerService {
    constructor() { }
}
PartidosObtenerService.ɵfac = function PartidosObtenerService_Factory(t) { return new (t || PartidosObtenerService)(); };
PartidosObtenerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PartidosObtenerService, factory: PartidosObtenerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartidosObtenerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wVfd":
/*!*******************************************************************!*\
  !*** ./src/app/partidos/services/partidos-environment.service.ts ***!
  \*******************************************************************/
/*! exports provided: PartidosEnvironmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidosEnvironmentService", function() { return PartidosEnvironmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _partidos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partidos.service */ "3/js");



class PartidosEnvironmentService {
    constructor(partidosService) {
        this.partidosService = partidosService;
        this.getPartidos = this.partidosService.getPartidosEnvironment;
    }
}
PartidosEnvironmentService.ɵfac = function PartidosEnvironmentService_Factory(t) { return new (t || PartidosEnvironmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_partidos_service__WEBPACK_IMPORTED_MODULE_1__["PartidosService"])); };
PartidosEnvironmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PartidosEnvironmentService, factory: PartidosEnvironmentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartidosEnvironmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _partidos_service__WEBPACK_IMPORTED_MODULE_1__["PartidosService"] }]; }, null); })();


/***/ }),

/***/ "xF6X":
/*!*********************************************!*\
  !*** ./src/app/partidos/partidos.module.ts ***!
  \*********************************************/
/*! exports provided: PartidosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidosModule", function() { return PartidosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _partidos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partidos-routing.module */ "SRa3");
/* harmony import */ var _partidos_partidos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partidos/partidos.component */ "DZP1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _partidos_partido_partido_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partidos/partido/partido.component */ "Rbbh");
/* harmony import */ var _partidos_tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partidos/tarjeta/tarjeta.component */ "Uzz4");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _services_partidos_obtener_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/partidos-obtener.service */ "umiw");
/* harmony import */ var _services_partidos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/partidos.service */ "3/js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_partidos_environment_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/partidos-environment.service */ "wVfd");
/* harmony import */ var _services_partidos_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/partidos-api.service */ "lUI0");














const factoriaObtenedor = (partidoService) => {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].obtenedorPartidos == "environment") {
        return new _services_partidos_environment_service__WEBPACK_IMPORTED_MODULE_11__["PartidosEnvironmentService"](partidoService);
    }
    else if (src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].obtenedorPartidos == "api") {
        return new _services_partidos_api_service__WEBPACK_IMPORTED_MODULE_12__["PartidosApiService"](partidoService);
    }
};
class PartidosModule {
}
PartidosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PartidosModule });
PartidosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PartidosModule_Factory(t) { return new (t || PartidosModule)(); }, providers: [
        {
            provide: _services_partidos_obtener_service__WEBPACK_IMPORTED_MODULE_8__["PartidosObtenerService"],
            useFactory: factoriaObtenedor,
            deps: [_services_partidos_service__WEBPACK_IMPORTED_MODULE_9__["PartidosService"]]
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _partidos_routing_module__WEBPACK_IMPORTED_MODULE_2__["PartidosRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PartidosModule, { declarations: [_partidos_partidos_component__WEBPACK_IMPORTED_MODULE_3__["PartidosComponent"], _partidos_partido_partido_component__WEBPACK_IMPORTED_MODULE_5__["PartidoComponent"], _partidos_tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_6__["TarjetaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _partidos_routing_module__WEBPACK_IMPORTED_MODULE_2__["PartidosRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartidosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_partidos_partidos_component__WEBPACK_IMPORTED_MODULE_3__["PartidosComponent"], _partidos_partido_partido_component__WEBPACK_IMPORTED_MODULE_5__["PartidoComponent"], _partidos_tarjeta_tarjeta_component__WEBPACK_IMPORTED_MODULE_6__["TarjetaComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _partidos_routing_module__WEBPACK_IMPORTED_MODULE_2__["PartidosRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
                ],
                providers: [
                    {
                        provide: _services_partidos_obtener_service__WEBPACK_IMPORTED_MODULE_8__["PartidosObtenerService"],
                        useFactory: factoriaObtenedor,
                        deps: [_services_partidos_service__WEBPACK_IMPORTED_MODULE_9__["PartidosService"]]
                    }
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=partidos-partidos-module.js.map