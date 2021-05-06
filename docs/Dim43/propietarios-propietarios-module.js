(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["propietarios-propietarios-module"],{

/***/ "84Vf":
/*!*****************************************************!*\
  !*** ./src/app/propietarios/propietarios.module.ts ***!
  \*****************************************************/
/*! exports provided: PropietariosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropietariosModule", function() { return PropietariosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _propietarios_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propietarios-routing.module */ "D60g");
/* harmony import */ var _propietarios_propietarios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propietarios/propietarios.component */ "ZZH/");
/* harmony import */ var _propietarios_propietario_propietario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./propietarios/propietario/propietario.component */ "8CQf");
/* harmony import */ var _propietario_form_propietario_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./propietario-form/propietario-form.component */ "ST6d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class PropietariosModule {
}
PropietariosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PropietariosModule });
PropietariosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PropietariosModule_Factory(t) { return new (t || PropietariosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _propietarios_routing_module__WEBPACK_IMPORTED_MODULE_2__["PropietariosRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PropietariosModule, { declarations: [_propietarios_propietarios_component__WEBPACK_IMPORTED_MODULE_3__["PropietariosComponent"], _propietarios_propietario_propietario_component__WEBPACK_IMPORTED_MODULE_4__["PropietarioComponent"], _propietario_form_propietario_form_component__WEBPACK_IMPORTED_MODULE_5__["PropietarioFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _propietarios_routing_module__WEBPACK_IMPORTED_MODULE_2__["PropietariosRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropietariosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_propietarios_propietarios_component__WEBPACK_IMPORTED_MODULE_3__["PropietariosComponent"], _propietarios_propietario_propietario_component__WEBPACK_IMPORTED_MODULE_4__["PropietarioComponent"], _propietario_form_propietario_form_component__WEBPACK_IMPORTED_MODULE_5__["PropietarioFormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _propietarios_routing_module__WEBPACK_IMPORTED_MODULE_2__["PropietariosRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "8CQf":
/*!********************************************************************************!*\
  !*** ./src/app/propietarios/propietarios/propietario/propietario.component.ts ***!
  \********************************************************************************/
/*! exports provided: PropietarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropietarioComponent", function() { return PropietarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PropietarioComponent {
    constructor() {
        this.borrar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.rutaEditar = `editar/${this.propietario.id}`;
    }
    onBorrar(propietario) {
        return this.borrar.emit(propietario);
    }
}
PropietarioComponent.ɵfac = function PropietarioComponent_Factory(t) { return new (t || PropietarioComponent)(); };
PropietarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PropietarioComponent, selectors: [["app-propietario"]], inputs: { propietario: "propietario" }, outputs: { borrar: "borrar" }, decls: 11, vars: 5, consts: [[1, "row"], [1, "col-4"], [1, "col-3"], [1, "col-1"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-primary", 3, "click"]], template: function PropietarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Editar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropietarioComponent_Template_button_click_9_listener() { return ctx.onBorrar(ctx.propietario); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.propietario.nombre, " ", ctx.propietario.apellido1, " ", ctx.propietario.apellido2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.propietario.mail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.rutaEditar);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropietarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-propietario',
                templateUrl: './propietario.component.html',
                styles: []
            }]
    }], function () { return []; }, { propietario: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], borrar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "D60g":
/*!*************************************************************!*\
  !*** ./src/app/propietarios/propietarios-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PropietariosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropietariosRoutingModule", function() { return PropietariosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _propietario_form_propietario_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propietario-form/propietario-form.component */ "ST6d");
/* harmony import */ var _propietarios_propietarios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propietarios/propietarios.component */ "ZZH/");
/* harmony import */ var _services_propietarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/propietarios.service */ "SqbD");







const routes = [
    {
        path: '',
        component: _propietarios_propietarios_component__WEBPACK_IMPORTED_MODULE_3__["PropietariosComponent"]
    },
    {
        path: 'alta',
        component: _propietario_form_propietario_form_component__WEBPACK_IMPORTED_MODULE_2__["PropietarioFormComponent"]
    },
    {
        path: 'editar/:id',
        component: _propietario_form_propietario_form_component__WEBPACK_IMPORTED_MODULE_2__["PropietarioFormComponent"]
    }
];
class PropietariosRoutingModule {
}
PropietariosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PropietariosRoutingModule });
PropietariosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PropietariosRoutingModule_Factory(t) { return new (t || PropietariosRoutingModule)(); }, providers: [_services_propietarios_service__WEBPACK_IMPORTED_MODULE_4__["PropietarioService"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PropietariosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropietariosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_services_propietarios_service__WEBPACK_IMPORTED_MODULE_4__["PropietarioService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ST6d":
/*!*****************************************************************************!*\
  !*** ./src/app/propietarios/propietario-form/propietario-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PropietarioFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropietarioFormComponent", function() { return PropietarioFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_propietarios_imp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/propietarios-imp */ "V13G");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_propietarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/propietarios.service */ "SqbD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class PropietarioFormComponent {
    constructor(route, propietarioService, router) {
        this.route = route;
        this.propietarioService = propietarioService;
        this.router = router;
        this.propietario = new _models_propietarios_imp__WEBPACK_IMPORTED_MODULE_1__["PropietariosImp"]();
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
            this.propietarioService
                .getPropietario(idRecuperada)
                .subscribe((response) => {
                this.propietario = response;
                console.log('dentro de la suscripcion', this.propietario.id);
            });
            console.log('fuera de la subscripcion', this.propietario);
        }
        else {
            this.esAlta = true;
            this.propietario.nombre = '';
            this.propietario.apellido1 = '';
            this.propietario.apellido2 = '';
        }
    }
    onEnviar() {
        if (this.esAlta) {
            //Lo añadí para ver si solucionaba el problema con la modificación y sigue fallando. Lo comento
            /*
            this.propietario.numeroCuenta = 'unNumeroCuentaConMuchosDigitos';
            this.propietario.foto = 'UnaDireccion/enLocal/oServidor';
            this.propietario.comentarios = 'Comentarios de Prueba';
            this.propietario.negocio = null;
            this.propietario.pedidos = null;
            */
            this.propietarioService
                .altaPropietaro(this.propietario)
                .subscribe((response) => {
                console.log('alta usuario ', this.propietario.nombre);
                this.router.navigate(['/propietarios']);
            });
        }
        else {
            this.propietario.pedidos = null;
            this.propietarioService
                .modificarPropietario(this.propietario)
                .subscribe((response) => {
                console.log('modificado usuario ', this.propietario.id);
                this.router.navigate(['/propietarios']);
            });
        }
    }
}
PropietarioFormComponent.ɵfac = function PropietarioFormComponent_Factory(t) { return new (t || PropietarioFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_propietarios_service__WEBPACK_IMPORTED_MODULE_3__["PropietarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PropietarioFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PropietarioFormComponent, selectors: [["app-propietario-form"]], decls: 24, vars: 5, consts: [["formParticipantes", "ngForm"], [1, "row"], [1, "col-1"], ["for", "nombrePropietario"], [1, "col-3"], ["id", "nombrePropietario", "type", "text", "name", "id", "required", "", 3, "ngModel", "ngModelChange"], ["for", "apellido1Prop"], ["type", "text", "id", "apellido1Prop", "name", "apellido1", "required", "", 3, "ngModel", "ngModelChange"], ["for", "apellido2Prop"], ["type", "text", "id", "apellido2Prop", "name", "apellido2", 3, "ngModel", "ngModelChange"], ["id", "botonAceptar", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function PropietarioFormComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropietarioFormComponent_Template_input_ngModelChange_9_listener($event) { return ctx.propietario.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Primer Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropietarioFormComponent_Template_input_ngModelChange_15_listener($event) { return ctx.propietario.apellido1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Segundo Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PropietarioFormComponent_Template_input_ngModelChange_20_listener($event) { return ctx.propietario.apellido2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropietarioFormComponent_Template_button_click_22_listener() { return ctx.onEnviar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.tipoAcceso, " participante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.propietario.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.propietario.apellido1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.propietario.apellido2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropietarioFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-propietario-form',
                templateUrl: './propietario-form.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_propietarios_service__WEBPACK_IMPORTED_MODULE_3__["PropietarioService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "SqbD":
/*!***************************************************************!*\
  !*** ./src/app/propietarios/services/propietarios.service.ts ***!
  \***************************************************************/
/*! exports provided: PropietarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropietarioService", function() { return PropietarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _models_propietarios_imp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/propietarios-imp */ "V13G");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");






class PropietarioService {
    constructor(http) {
        this.http = http;
        this.urlEndPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hostControladores + 'propietarios';
    }
    getPropietarios() {
        return this.http.get(this.urlEndPoint);
    }
    getPropietario(id) {
        return this.http.get(`${this.urlEndPoint}/${id}`);
    }
    borrarPropietario(propietario) {
        return this.http.delete(`${this.urlEndPoint}/sin-correo/${propietario.id}`);
    }
    modificarPropietario(propietario) {
        return this.http.put(`${this.urlEndPoint}/${propietario.id}`, propietario);
    }
    altaPropietaro(propietario) {
        return this.http.post(`${this.urlEndPoint}/sin-correo`, propietario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => {
            alert(e.message);
            return e;
        }));
    }
    mapearPropietarios(propietariosApi) {
        let propietarios = [];
        propietariosApi.forEach(p => {
            propietarios.push(this.mapearPropietario(p));
        });
        console.log(propietarios);
        return propietarios;
    }
    mapearPropietario(propietarioApi) {
        let propietarioSalida = new _models_propietarios_imp__WEBPACK_IMPORTED_MODULE_2__["PropietariosImp"]();
        propietarioSalida.id = propietarioApi.id;
        propietarioSalida.nombre = propietarioApi.nombre;
        propietarioSalida.apellido1 = propietarioApi.apellido1;
        propietarioSalida.apellido2 = propietarioApi.apellido2;
        propietarioSalida.mail = propietarioApi.mail;
        propietarioSalida.numeroCuenta = propietarioApi.numeroCuenta;
        propietarioSalida.negocio = propietarioApi.negocio;
        propietarioSalida.foto = propietarioApi.foto;
        propietarioSalida.pedidos = propietarioApi.pedidos;
        propietarioSalida.comentarios = propietarioApi.comentarios;
        return propietarioSalida;
    }
}
PropietarioService.ɵfac = function PropietarioService_Factory(t) { return new (t || PropietarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PropietarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PropietarioService, factory: PropietarioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropietarioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "V13G":
/*!*********************************************************!*\
  !*** ./src/app/propietarios/models/propietarios-imp.ts ***!
  \*********************************************************/
/*! exports provided: PropietariosImp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropietariosImp", function() { return PropietariosImp; });
class PropietariosImp {
}


/***/ }),

/***/ "ZZH/":
/*!*********************************************************************!*\
  !*** ./src/app/propietarios/propietarios/propietarios.component.ts ***!
  \*********************************************************************/
/*! exports provided: PropietariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropietariosComponent", function() { return PropietariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_propietarios_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/propietarios.service */ "SqbD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _propietario_propietario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./propietario/propietario.component */ "8CQf");






function PropietariosComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-propietario", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("borrar", function PropietariosComponent_div_12_Template_app_propietario_borrar_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onBorrar($event); })("nuevo", function PropietariosComponent_div_12_Template_app_propietario_nuevo_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onNuevo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const propietario_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("propietario", propietario_r1);
} }
class PropietariosComponent {
    constructor(propietarioService) {
        this.propietarioService = propietarioService;
        this.propietarios = [];
    }
    ngOnInit() {
        this.propietarioService.getPropietarios().subscribe((response) => {
            this.propietarios = this.propietarioService.mapearPropietarios(response);
        });
    }
    onBorrar(propietario) {
        this.propietarioService
            .borrarPropietario(propietario)
            .subscribe((response) => {
            console.log('Se elimina a ', propietario.nombre, propietario.apellido1, propietario.apellido2);
            this.propietarios = this.propietarios.filter((p) => p.id !== propietario.id);
        });
    }
}
PropietariosComponent.ɵfac = function PropietariosComponent_Factory(t) { return new (t || PropietariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_propietarios_service__WEBPACK_IMPORTED_MODULE_1__["PropietarioService"])); };
PropietariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PropietariosComponent, selectors: [["app-propietarios"]], decls: 13, vars: 1, consts: [["routerLink", "alta", 1, "btn", "btn-primary"], [1, "row"], [1, "col-4"], [1, "col-3"], [1, "col-2"], [1, "w-100"], [4, "ngFor", "ngForOf"], [3, "propietario", "borrar", "nuevo"]], template: function PropietariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Propietarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nuevo propietario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PropietariosComponent_div_12_Template, 2, 1, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.propietarios);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _propietario_propietario_component__WEBPACK_IMPORTED_MODULE_4__["PropietarioComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropietariosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-propietarios',
                templateUrl: './propietarios.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _services_propietarios_service__WEBPACK_IMPORTED_MODULE_1__["PropietarioService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=propietarios-propietarios-module.js.map