(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["car-car-module"],{

/***/ "6qiD":
/*!******************************************!*\
  !*** ./src/app/car/car/car.component.ts ***!
  \******************************************/
/*! exports provided: CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return CarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/display.component */ "Pqjq");
/* harmony import */ var _pedals_pedals_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedals/pedals.component */ "apCL");




class CarComponent {
    constructor() {
        this.getDelta = (drive) => drive + (this.car.maxSpeed - this.car.currentSpeed) / 10;
    }
    ngOnInit() {
        this.car = { name: 'Roadster', maxSpeed: 120, currentSpeed: 0 };
        this.checkLimits();
    }
    checkLimits() {
        this.disableBrake = false;
        this.disableThrottle = false;
        if (this.car.currentSpeed <= 0) {
            this.car.currentSpeed = 0;
            this.disableBrake = true;
        }
        else if (this.car.currentSpeed >= this.car.maxSpeed) {
            this.car.currentSpeed = this.car.maxSpeed;
            this.disableThrottle = true;
        }
    }
    onBrake(drive) {
        this.car.currentSpeed -= this.getDelta(drive);
        this.checkLimits();
    }
    onThrottle(drive) {
        this.car.currentSpeed += this.getDelta(drive);
        this.checkLimits();
    }
}
CarComponent.ɵfac = function CarComponent_Factory(t) { return new (t || CarComponent)(); };
CarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarComponent, selectors: [["app-car"]], decls: 2, vars: 6, consts: [[3, "model", "currentSpeed", "topSpeed", "units"], [3, "disableBrake", "disableThrottle", "brake", "throttle"]], template: function CarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-display", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-pedals", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("brake", function CarComponent_Template_app_pedals_brake_1_listener($event) { return ctx.onBrake($event); })("throttle", function CarComponent_Template_app_pedals_throttle_1_listener($event) { return ctx.onThrottle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.car.name)("currentSpeed", ctx.car.currentSpeed)("topSpeed", ctx.car.maxSpeed)("units", "Km/h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableBrake", ctx.disableBrake)("disableThrottle", ctx.disableThrottle);
    } }, directives: [_display_display_component__WEBPACK_IMPORTED_MODULE_1__["DisplayComponent"], _pedals_pedals_component__WEBPACK_IMPORTED_MODULE_2__["PedalsComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-car',
                templateUrl: './car.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LRtc":
/*!***********************************!*\
  !*** ./src/app/car/car.module.ts ***!
  \***********************************/
/*! exports provided: CarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarModule", function() { return CarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _car_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car-routing.module */ "qbl3");
/* harmony import */ var _car_car_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car/car.component */ "6qiD");
/* harmony import */ var _car_display_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./car/display/display.component */ "Pqjq");
/* harmony import */ var _car_pedals_pedals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car/pedals/pedals.component */ "apCL");







class CarModule {
}
CarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CarModule });
CarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CarModule_Factory(t) { return new (t || CarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _car_routing_module__WEBPACK_IMPORTED_MODULE_2__["CarRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarModule, { declarations: [_car_car_component__WEBPACK_IMPORTED_MODULE_3__["CarComponent"], _car_display_display_component__WEBPACK_IMPORTED_MODULE_4__["DisplayComponent"], _car_pedals_pedals_component__WEBPACK_IMPORTED_MODULE_5__["PedalsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _car_routing_module__WEBPACK_IMPORTED_MODULE_2__["CarRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_car_car_component__WEBPACK_IMPORTED_MODULE_3__["CarComponent"], _car_display_display_component__WEBPACK_IMPORTED_MODULE_4__["DisplayComponent"], _car_pedals_pedals_component__WEBPACK_IMPORTED_MODULE_5__["PedalsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _car_routing_module__WEBPACK_IMPORTED_MODULE_2__["CarRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Pqjq":
/*!******************************************************!*\
  !*** ./src/app/car/car/display/display.component.ts ***!
  \******************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class DisplayComponent {
    constructor() {
        this.getSpeedClass = () => this.currentSpeed < this.getThreshold() ? 'primary' : 'secondary';
        this.getThreshold = () => this.topSpeed * 0.8;
    }
    ngOnInit() { }
}
DisplayComponent.ɵfac = function DisplayComponent_Factory(t) { return new (t || DisplayComponent)(); };
DisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayComponent, selectors: [["app-display"]], inputs: { model: "model", currentSpeed: "currentSpeed", topSpeed: "topSpeed", units: "units" }, decls: 10, vars: 13, consts: [[1, "card"], [1, "section"], [3, "value", "ngClass", "max"]], template: function DisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.model, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Top speed: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 7, ctx.topSpeed, "1.0-0"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 10, ctx.currentSpeed, "1.2-2"), " ", ctx.units, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.currentSpeed)("ngClass", ctx.getSpeedClass())("max", ctx.topSpeed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-display',
                templateUrl: './display.component.html',
                styles: []
            }]
    }], function () { return []; }, { model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], topSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], units: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "apCL":
/*!****************************************************!*\
  !*** ./src/app/car/car/pedals/pedals.component.ts ***!
  \****************************************************/
/*! exports provided: PedalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedalsComponent", function() { return PedalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PedalsComponent {
    constructor() {
        this.brake = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.throttle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
}
PedalsComponent.ɵfac = function PedalsComponent_Factory(t) { return new (t || PedalsComponent)(); };
PedalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedalsComponent, selectors: [["app-pedals"]], inputs: { disableBrake: "disableBrake", disableThrottle: "disableThrottle" }, outputs: { brake: "brake", throttle: "throttle" }, decls: 5, vars: 2, consts: [["value", "brake", "type", "button", 1, "secondary", 3, "disabled", "click"], ["value", "throttle", "type", "button", 1, "tertiary", 3, "disabled", "click"]], template: function PedalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pedals:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedalsComponent_Template_input_click_3_listener() { return ctx.brake.emit(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedalsComponent_Template_input_click_4_listener() { return ctx.throttle.emit(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableBrake);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableThrottle);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pedals',
                templateUrl: './pedals.component.html',
                styles: []
            }]
    }], function () { return []; }, { disableBrake: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disableThrottle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], brake: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], throttle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "qbl3":
/*!*******************************************!*\
  !*** ./src/app/car/car-routing.module.ts ***!
  \*******************************************/
/*! exports provided: CarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarRoutingModule", function() { return CarRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _car_car_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car/car.component */ "6qiD");





const routes = [
    {
        path: '',
        component: _car_car_component__WEBPACK_IMPORTED_MODULE_2__["CarComponent"]
    }
];
class CarRoutingModule {
}
CarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CarRoutingModule });
CarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CarRoutingModule_Factory(t) { return new (t || CarRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=car-car-module.js.map