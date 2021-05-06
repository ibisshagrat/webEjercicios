(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["participantes-participantes-module"],{

/***/ "03c6":
/*!************************************************************************!*\
  !*** ./src/app/participantes/participantes/participantes.component.ts ***!
  \************************************************************************/
/*! exports provided: ParticipantesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantesComponent", function() { return ParticipantesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_participante_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/participante.service */ "C3pO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _participante_participante_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./participante/participante.component */ "bAt+");






function ParticipantesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-participante", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("borrar", function ParticipantesComponent_div_7_Template_app_participante_borrar_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.borrarParticipante($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const participante_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("participante", participante_r1);
} }
class ParticipantesComponent {
    constructor(participanteService) {
        this.participanteService = participanteService;
        this.participantes = [];
    }
    ngOnInit() {
        this.participanteService.getParticipantes().subscribe(response => {
            this.participantes = this.participanteService.extraerParticipantes(response);
        });
    }
    borrarParticipante(id) {
        this.participanteService.delete(id).subscribe(response => {
            console.log("se elimino a ", id, response.status);
            this.participantes = this.participantes.filter(p => p.id != id);
        });
    }
}
ParticipantesComponent.ɵfac = function ParticipantesComponent_Factory(t) { return new (t || ParticipantesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_participante_service__WEBPACK_IMPORTED_MODULE_1__["ParticipanteService"])); };
ParticipantesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParticipantesComponent, selectors: [["app-participantes"]], decls: 8, vars: 1, consts: [[1, "row"], [1, "col-10"], [1, "col-2"], ["routerLink", "alta", 1, "btn", "btn-primary"], [4, "ngFor", "ngForOf"], [3, "participante", "borrar"]], template: function ParticipantesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Participantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Alta participante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ParticipantesComponent_div_7_Template, 2, 1, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.participantes);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _participante_participante_component__WEBPACK_IMPORTED_MODULE_4__["ParticipanteComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticipantesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-participantes',
                templateUrl: './participantes.component.html',
                styles: []
            }]
    }], function () { return [{ type: _services_participante_service__WEBPACK_IMPORTED_MODULE_1__["ParticipanteService"] }]; }, null); })();


/***/ }),

/***/ "0I3g":
/*!*******************************************************!*\
  !*** ./src/app/participantes/participantes.module.ts ***!
  \*******************************************************/
/*! exports provided: ParticipantesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantesModule", function() { return ParticipantesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _participantes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./participantes-routing.module */ "Ml+U");
/* harmony import */ var _participantes_participantes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./participantes/participantes.component */ "03c6");
/* harmony import */ var _participantes_participante_participante_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./participantes/participante/participante.component */ "bAt+");
/* harmony import */ var _participante_form_participante_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./participante-form/participante-form.component */ "pbOa");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class ParticipantesModule {
}
ParticipantesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ParticipantesModule });
ParticipantesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ParticipantesModule_Factory(t) { return new (t || ParticipantesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _participantes_routing_module__WEBPACK_IMPORTED_MODULE_2__["ParticipantesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParticipantesModule, { declarations: [_participantes_participantes_component__WEBPACK_IMPORTED_MODULE_3__["ParticipantesComponent"], _participantes_participante_participante_component__WEBPACK_IMPORTED_MODULE_4__["ParticipanteComponent"], _participante_form_participante_form_component__WEBPACK_IMPORTED_MODULE_5__["ParticipanteFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _participantes_routing_module__WEBPACK_IMPORTED_MODULE_2__["ParticipantesRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticipantesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_participantes_participantes_component__WEBPACK_IMPORTED_MODULE_3__["ParticipantesComponent"], _participantes_participante_participante_component__WEBPACK_IMPORTED_MODULE_4__["ParticipanteComponent"], _participante_form_participante_form_component__WEBPACK_IMPORTED_MODULE_5__["ParticipanteFormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _participantes_routing_module__WEBPACK_IMPORTED_MODULE_2__["ParticipantesRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "5GE0":
/*!***********************************************************!*\
  !*** ./src/app/participantes/models/participante-impl.ts ***!
  \***********************************************************/
/*! exports provided: ParticipanteImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipanteImpl", function() { return ParticipanteImpl; });
class ParticipanteImpl {
    getId() {
        return this.id;
    }
}


/***/ }),

/***/ "C3pO":
/*!****************************************************************!*\
  !*** ./src/app/participantes/services/participante.service.ts ***!
  \****************************************************************/
/*! exports provided: ParticipanteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipanteService", function() { return ParticipanteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _models_participante_impl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/participante-impl */ "5GE0");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");







class ParticipanteService {
    constructor(http) {
        this.http = http;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].hostHateoas;
        this.urlEndPointHateoas = `${this.host}/participantes/`;
    }
    getParticipantes() {
        return this.http.get(`${this.urlEndPointHateoas}?page=0&size=1000`);
    }
    getParticipante(id) {
        let urlGet = `${this.urlEndPointHateoas}${id}`;
        return this.http.get(urlGet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((e) => {
            if (e.status !== 401 && e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
        }));
    }
    editarParticipante(participante) {
        return this.http.put(`${this.urlEndPointHateoas}/${participante.id}`, participante).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((e) => {
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
        }));
    }
    delete(id) {
        return this.http.delete(`${this.urlEndPointHateoas}${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((e) => {
            if (e.status === 405) {
                console.error('Pide permisos para tocar la BBDD del jefe, y limpia toda la broza que has dejado!');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
        }));
    }
    extraerParticipantes(respuestaApi) {
        const participantes = [];
        let participanteMapeado;
        respuestaApi._embedded.participantes.forEach((p) => {
            participantes.push(this.mapearParticipante(p));
        });
        return participantes;
    }
    mapearParticipante(participanteAPI) {
        const participante = new _models_participante_impl__WEBPACK_IMPORTED_MODULE_3__["ParticipanteImpl"]();
        participante.id = participanteAPI.id;
        participante.nombre = participanteAPI.nombre;
        console.log("Dentro mapear", participante.id, participante.nombre);
        return participante;
    }
    altaParticipante(participante) {
        return this.http.post(`${this.urlEndPointHateoas}`, participante).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((e) => {
            console.log("error");
            if (e.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
            }
            if (e.error.mensaje) {
                console.error(e.error.mensaje);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
        }));
    }
}
ParticipanteService.ɵfac = function ParticipanteService_Factory(t) { return new (t || ParticipanteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ParticipanteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ParticipanteService, factory: ParticipanteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticipanteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Ml+U":
/*!***************************************************************!*\
  !*** ./src/app/participantes/participantes-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ParticipantesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantesRoutingModule", function() { return ParticipantesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _participante_form_participante_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./participante-form/participante-form.component */ "pbOa");
/* harmony import */ var _participantes_participantes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./participantes/participantes.component */ "03c6");






const routes = [
    {
        path: '',
        component: _participantes_participantes_component__WEBPACK_IMPORTED_MODULE_3__["ParticipantesComponent"]
    },
    {
        path: 'alta',
        component: _participante_form_participante_form_component__WEBPACK_IMPORTED_MODULE_2__["ParticipanteFormComponent"]
    },
    {
        path: 'editar/:id',
        component: _participante_form_participante_form_component__WEBPACK_IMPORTED_MODULE_2__["ParticipanteFormComponent"]
    }
];
class ParticipantesRoutingModule {
}
ParticipantesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ParticipantesRoutingModule });
ParticipantesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ParticipantesRoutingModule_Factory(t) { return new (t || ParticipantesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParticipantesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticipantesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bAt+":
/*!************************************************************************************!*\
  !*** ./src/app/participantes/participantes/participante/participante.component.ts ***!
  \************************************************************************************/
/*! exports provided: ParticipanteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipanteComponent", function() { return ParticipanteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ParticipanteComponent {
    constructor() {
        this.borrar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.rutaEditar = `editar/${this.participante.id}`;
    }
    onBorrar(id) {
        console.log("empezamos el borrado");
        this.borrar.emit(id);
    }
}
ParticipanteComponent.ɵfac = function ParticipanteComponent_Factory(t) { return new (t || ParticipanteComponent)(); };
ParticipanteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParticipanteComponent, selectors: [["app-participante"]], inputs: { participante: "participante" }, outputs: { borrar: "borrar" }, decls: 9, vars: 2, consts: [[1, "row"], [1, "col-2"], [1, "col-auto"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-primary", 3, "click"]], template: function ParticipanteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Editar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParticipanteComponent_Template_button_click_7_listener() { return ctx.onBorrar(ctx.participante.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Borrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.participante.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.rutaEditar);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticipanteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-participante',
                templateUrl: './participante.component.html',
                styles: []
            }]
    }], function () { return []; }, { participante: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], borrar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "pbOa":
/*!********************************************************************************!*\
  !*** ./src/app/participantes/participante-form/participante-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: ParticipanteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipanteFormComponent", function() { return ParticipanteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_participante_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/participante-impl */ "5GE0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_participante_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/participante.service */ "C3pO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class ParticipanteFormComponent {
    constructor(route, participanteService, router) {
        this.route = route;
        this.participanteService = participanteService;
        this.router = router;
    }
    ngOnInit() {
        this.getId();
        if (this.esAlta) {
            this.tipoAcceso = 'Alta';
        }
        else {
            this.tipoAcceso = 'Modificar';
        }
    }
    getId() {
        const idRecuperada = this.route.snapshot.params.id;
        if (idRecuperada != undefined) {
            this.participanteService.getParticipante(idRecuperada).subscribe(response => {
                this.participante = this.participanteService.mapearParticipante(response);
                console.log("dentro del suscripcion", this.participante.id);
            });
            console.log("fuera de la subscripcion", this.participante);
        }
        else {
            this.esAlta = true;
            this.participante = new _models_participante_impl__WEBPACK_IMPORTED_MODULE_1__["ParticipanteImpl"]();
            this.participante.id = '';
            this.participante.nombre = '';
        }
    }
    onEnviar() {
        if (this.esAlta) {
            this.participanteService
                .altaParticipante(this.participante)
                .subscribe((response) => {
                console.log('Se ha añadido a ', this.participante.nombre);
                this.router.navigate(['/participantes']);
            });
        }
        else {
            this.participanteService.editarParticipante(this.participante).subscribe((response) => {
                console.log('Se ha modificado a ', this.participante.nombre);
                this.router.navigate(['/participantes']);
            });
        }
    }
}
ParticipanteFormComponent.ɵfac = function ParticipanteFormComponent_Factory(t) { return new (t || ParticipanteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_participante_service__WEBPACK_IMPORTED_MODULE_3__["ParticipanteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ParticipanteFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParticipanteFormComponent, selectors: [["app-participante-form"]], decls: 19, vars: 5, consts: [["formParticipantes", "ngForm"], [1, "row"], [1, "col-1"], ["for", "nombreEquipo"], [1, "col-auto"], ["id", "nombreEquipo", "type", "text", "name", "id", "required", "", 3, "ngModel", "ngModelChange"], ["for", "idEquipo"], ["type", "text", "id", "idEquipo", "name", "nombre", "required", "", 3, "ngModel", "readonly", "ngModelChange"], ["id", "botonAceptar", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function ParticipanteFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParticipanteFormComponent_Template_input_ngModelChange_9_listener($event) { return ctx.participante.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParticipanteFormComponent_Template_input_ngModelChange_15_listener($event) { return ctx.participante.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParticipanteFormComponent_Template_button_click_17_listener() { return ctx.onEnviar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.tipoAcceso, " participante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.participante.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.participante.id)("readonly", !ctx.esAlta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticipanteFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-participante-form',
                templateUrl: './participante-form.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_participante_service__WEBPACK_IMPORTED_MODULE_3__["ParticipanteService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=participantes-participantes-module.js.map