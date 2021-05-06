(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["converter-converter-module"],{

/***/ "Fl9S":
/*!************************************************************!*\
  !*** ./src/app/converter/service/usa-converter.service.ts ***!
  \************************************************************/
/*! exports provided: UsaConverterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsaConverterService", function() { return UsaConverterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _converter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./converter.service */ "JBTw");



class UsaConverterService {
    constructor(converterService) {
        this.converterService = converterService;
        this.sourceCulture = 'Europe';
        this.targetCulture = 'USA';
        this.convertDistance = this.converterService.fromKilometersToMiles;
        this.convertTemperature = this.converterService.fromCelsiusToFarenheit;
    }
}
UsaConverterService.ɵfac = function UsaConverterService_Factory(t) { return new (t || UsaConverterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_converter_service__WEBPACK_IMPORTED_MODULE_1__["ConverterService"])); };
UsaConverterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsaConverterService, factory: UsaConverterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsaConverterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _converter_service__WEBPACK_IMPORTED_MODULE_1__["ConverterService"] }]; }, null); })();


/***/ }),

/***/ "HwFg":
/*!************************************************************!*\
  !*** ./src/app/converter/converter/converter.component.ts ***!
  \************************************************************/
/*! exports provided: ConverterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterComponent", function() { return ConverterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_converter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/converter.service */ "JBTw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class ConverterComponent {
    constructor(converterService) {
        this.converterService = converterService;
        this.kilometers = 0;
    }
    ngOnInit() {
        this.convert();
    }
    convert() {
        this.miles = this.converterService.fromKilometersToMiles(this.kilometers);
    }
}
ConverterComponent.ɵfac = function ConverterComponent_Factory(t) { return new (t || ConverterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_converter_service__WEBPACK_IMPORTED_MODULE_1__["ConverterService"])); };
ConverterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConverterComponent, selectors: [["app-converter"]], decls: 15, vars: 5, consts: [["for", "kilometers"], ["name", "kilometers", "type", "number", "placeholder", "0", 3, "ngModel", "ngModelChange"], ["value", "Convert", "type", "button", 3, "click"]], template: function ConverterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Distance Converter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " From Europe to USA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kilometers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_Template_input_ngModelChange_9_listener($event) { return ctx.kilometers = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConverterComponent_Template_input_click_10_listener() { return ctx.convert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.kilometers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 2, ctx.miles, "1.2-2"), " miles");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConverterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-converter',
                templateUrl: './converter.component.html',
                styles: []
            }]
    }], function () { return [{ type: _service_converter_service__WEBPACK_IMPORTED_MODULE_1__["ConverterService"] }]; }, null); })();


/***/ }),

/***/ "JBTw":
/*!********************************************************!*\
  !*** ./src/app/converter/service/converter.service.ts ***!
  \********************************************************/
/*! exports provided: ConverterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterService", function() { return ConverterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ConverterService {
    constructor() {
        this.fromKilometersToMiles = (kilometers) => kilometers * 0.62137;
        this.fromMilesToKilometers = (miles) => miles * 1.609;
        this.fromCelsiusToFarenheit = (celsius) => celsius * (9 / 5) + 32;
        this.fromFarenheitToCelsius = (farenheit) => (farenheit - 32) * (5 / 9);
    }
}
ConverterService.ɵfac = function ConverterService_Factory(t) { return new (t || ConverterService)(); };
ConverterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConverterService, factory: ConverterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConverterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "K/bg":
/*!****************************************************************************!*\
  !*** ./src/app/converter/culture-converter/culture-converter.component.ts ***!
  \****************************************************************************/
/*! exports provided: CultureConverterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CultureConverterComponent", function() { return CultureConverterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_culture_converter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/culture-converter.service */ "g8gu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class CultureConverterComponent {
    constructor(cultureConverterService) {
        this.cultureConverterService = cultureConverterService;
        this.sourceUnits = 0;
    }
    ngOnInit() {
        this.source = this.cultureConverterService.sourceCulture;
        this.target = this.cultureConverterService.targetCulture;
        this.convert();
    }
    convert() {
        this.targetUnits = this.cultureConverterService.convertDistance(this.sourceUnits);
    }
}
CultureConverterComponent.ɵfac = function CultureConverterComponent_Factory(t) { return new (t || CultureConverterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_culture_converter_service__WEBPACK_IMPORTED_MODULE_1__["CultureConverterService"])); };
CultureConverterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CultureConverterComponent, selectors: [["app-culture-converter"]], decls: 17, vars: 7, consts: [["for", "sourceUnits"], ["name", "sourceUnits", "type", "number", "placeholder", "0", 3, "ngModel", "ngModelChange"], ["value", "Convert", "type", "button", 3, "click"]], template: function CultureConverterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "culture-converter works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Culture Converter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CultureConverterComponent_Template_input_ngModelChange_11_listener($event) { return ctx.sourceUnits = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CultureConverterComponent_Template_input_click_12_listener() { return ctx.convert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" From ", ctx.source, " to ", ctx.target, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sourceUnits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Distance ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 4, ctx.targetUnits, "1.2-2"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CultureConverterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-culture-converter',
                templateUrl: './culture-converter.component.html',
                styles: []
            }]
    }], function () { return [{ type: _service_culture_converter_service__WEBPACK_IMPORTED_MODULE_1__["CultureConverterService"] }]; }, null); })();


/***/ }),

/***/ "g8gu":
/*!****************************************************************!*\
  !*** ./src/app/converter/service/culture-converter.service.ts ***!
  \****************************************************************/
/*! exports provided: CultureConverterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CultureConverterService", function() { return CultureConverterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CultureConverterService {
    constructor() { }
}
CultureConverterService.ɵfac = function CultureConverterService_Factory(t) { return new (t || CultureConverterService)(); };
CultureConverterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CultureConverterService, factory: CultureConverterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CultureConverterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gx7t":
/*!***********************************************!*\
  !*** ./src/app/converter/converter.module.ts ***!
  \***********************************************/
/*! exports provided: ConverterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterModule", function() { return ConverterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _converter_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converter-routing.module */ "w7aB");
/* harmony import */ var _converter_converter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./converter/converter.component */ "HwFg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _culture_converter_culture_converter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./culture-converter/culture-converter.component */ "K/bg");
/* harmony import */ var _service_culture_converter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/culture-converter.service */ "g8gu");
/* harmony import */ var _service_usa_converter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/usa-converter.service */ "Fl9S");
/* harmony import */ var _service_europe_converter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/europe-converter.service */ "uuJA");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _service_converter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/converter.service */ "JBTw");












const cultureFactory = (converterService) => {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].unitsCulture === 'metric') {
        return new _service_europe_converter_service__WEBPACK_IMPORTED_MODULE_8__["EuropeConverterService"](converterService);
    }
    else {
        return new _service_usa_converter_service__WEBPACK_IMPORTED_MODULE_7__["UsaConverterService"](converterService);
    }
};
class ConverterModule {
}
ConverterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConverterModule });
ConverterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ConverterModule_Factory(t) { return new (t || ConverterModule)(); }, providers: [
        {
            provide: _service_culture_converter_service__WEBPACK_IMPORTED_MODULE_6__["CultureConverterService"],
            useFactory: cultureFactory,
            deps: [_service_converter_service__WEBPACK_IMPORTED_MODULE_10__["ConverterService"]]
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _converter_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConverterRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConverterModule, { declarations: [_converter_converter_component__WEBPACK_IMPORTED_MODULE_3__["ConverterComponent"], _culture_converter_culture_converter_component__WEBPACK_IMPORTED_MODULE_5__["CultureConverterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _converter_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConverterRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConverterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_converter_converter_component__WEBPACK_IMPORTED_MODULE_3__["ConverterComponent"], _culture_converter_culture_converter_component__WEBPACK_IMPORTED_MODULE_5__["CultureConverterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _converter_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConverterRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                providers: [
                    {
                        provide: _service_culture_converter_service__WEBPACK_IMPORTED_MODULE_6__["CultureConverterService"],
                        useFactory: cultureFactory,
                        deps: [_service_converter_service__WEBPACK_IMPORTED_MODULE_10__["ConverterService"]]
                    }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "uuJA":
/*!***************************************************************!*\
  !*** ./src/app/converter/service/europe-converter.service.ts ***!
  \***************************************************************/
/*! exports provided: EuropeConverterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EuropeConverterService", function() { return EuropeConverterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _converter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./converter.service */ "JBTw");



class EuropeConverterService {
    constructor(converterService) {
        this.converterService = converterService;
        this.sourceCulture = 'USA';
        this.targetCulture = 'Europe';
        this.convertDistance = this.converterService.fromMilesToKilometers;
        this.convertTemperature = this.converterService.fromFarenheitToCelsius;
    }
}
EuropeConverterService.ɵfac = function EuropeConverterService_Factory(t) { return new (t || EuropeConverterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_converter_service__WEBPACK_IMPORTED_MODULE_1__["ConverterService"])); };
EuropeConverterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EuropeConverterService, factory: EuropeConverterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EuropeConverterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _converter_service__WEBPACK_IMPORTED_MODULE_1__["ConverterService"] }]; }, null); })();


/***/ }),

/***/ "w7aB":
/*!*******************************************************!*\
  !*** ./src/app/converter/converter-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ConverterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterRoutingModule", function() { return ConverterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _converter_converter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converter/converter.component */ "HwFg");
/* harmony import */ var _culture_converter_culture_converter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./culture-converter/culture-converter.component */ "K/bg");






const routes = [
    {
        path: '',
        component: _converter_converter_component__WEBPACK_IMPORTED_MODULE_2__["ConverterComponent"]
    },
    {
        path: 'culture',
        component: _culture_converter_culture_converter_component__WEBPACK_IMPORTED_MODULE_3__["CultureConverterComponent"]
    },
];
class ConverterRoutingModule {
}
ConverterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConverterRoutingModule });
ConverterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ConverterRoutingModule_Factory(t) { return new (t || ConverterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConverterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConverterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=converter-converter-module.js.map