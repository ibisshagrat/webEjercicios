(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{LRtc:function(e,t,r){"use strict";r.r(t),r.d(t,"CarModule",(function(){return d}));var s=r("ofXK"),n=r("tyNb"),a=r("fXoL");let c=(()=>{class e{constructor(){this.getSpeedClass=()=>this.currentSpeed<this.getThreshold()?"primary":"secondary",this.getThreshold=()=>.8*this.topSpeed}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Cb({type:e,selectors:[["app-display"]],inputs:{model:"model",currentSpeed:"currentSpeed",topSpeed:"topSpeed",units:"units"},decls:10,vars:13,consts:[[1,"card"],[1,"section"],[3,"value","ngClass","max"]],template:function(e,t){1&e&&(a.Lb(0,"h2"),a.mc(1),a.Kb(),a.Lb(2,"h3"),a.mc(3),a.Vb(4,"number"),a.Kb(),a.Lb(5,"div",0),a.Lb(6,"div",1),a.mc(7),a.Vb(8,"number"),a.Kb(),a.Jb(9,"progress",2),a.Kb()),2&e&&(a.xb(1),a.oc(" ",t.model," "),a.xb(2),a.oc(" Top speed: ",a.Xb(4,7,t.topSpeed,"1.0-0"),""),a.xb(4),a.pc(" ",a.Xb(8,10,t.currentSpeed,"1.2-2")," ",t.units," "),a.xb(2),a.ac("value",t.currentSpeed)("ngClass",t.getSpeedClass())("max",t.topSpeed))},directives:[s.j],pipes:[s.d],encapsulation:2}),e})(),i=(()=>{class e{constructor(){this.brake=new a.n,this.throttle=new a.n}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Cb({type:e,selectors:[["app-pedals"]],inputs:{disableBrake:"disableBrake",disableThrottle:"disableThrottle"},outputs:{brake:"brake",throttle:"throttle"},decls:5,vars:2,consts:[["value","brake","type","button",1,"secondary",3,"disabled","click"],["value","throttle","type","button",1,"tertiary",3,"disabled","click"]],template:function(e,t){1&e&&(a.Lb(0,"h3"),a.mc(1," Pedals:\n"),a.Kb(),a.Lb(2,"form"),a.Lb(3,"input",0),a.Sb("click",(function(){return t.brake.emit(1)})),a.Kb(),a.Lb(4,"input",1),a.Sb("click",(function(){return t.throttle.emit(1)})),a.Kb(),a.Kb()),2&e&&(a.xb(3),a.ac("disabled",t.disableBrake),a.xb(1),a.ac("disabled",t.disableThrottle))},encapsulation:2}),e})();const o=[{path:"",component:(()=>{class e{constructor(){this.getDelta=e=>e+(this.car.maxSpeed-this.car.currentSpeed)/10}ngOnInit(){this.car={name:"Roadster",maxSpeed:120,currentSpeed:0},this.checkLimits()}checkLimits(){this.disableBrake=!1,this.disableThrottle=!1,this.car.currentSpeed<=0?(this.car.currentSpeed=0,this.disableBrake=!0):this.car.currentSpeed>=this.car.maxSpeed&&(this.car.currentSpeed=this.car.maxSpeed,this.disableThrottle=!0)}onBrake(e){this.car.currentSpeed-=this.getDelta(e),this.checkLimits()}onThrottle(e){this.car.currentSpeed+=this.getDelta(e),this.checkLimits()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Cb({type:e,selectors:[["app-car"]],decls:2,vars:6,consts:[[3,"model","currentSpeed","topSpeed","units"],[3,"disableBrake","disableThrottle","brake","throttle"]],template:function(e,t){1&e&&(a.Jb(0,"app-display",0),a.Lb(1,"app-pedals",1),a.Sb("brake",(function(e){return t.onBrake(e)}))("throttle",(function(e){return t.onThrottle(e)})),a.Kb()),2&e&&(a.ac("model",t.car.name)("currentSpeed",t.car.currentSpeed)("topSpeed",t.car.maxSpeed)("units","Km/h"),a.xb(1),a.ac("disableBrake",t.disableBrake)("disableThrottle",t.disableThrottle))},directives:[c,i],encapsulation:2}),e})()}];let p=(()=>{class e{}return e.\u0275mod=a.Gb({type:e}),e.\u0275inj=a.Fb({factory:function(t){return new(t||e)},imports:[[n.f.forChild(o)],n.f]}),e})(),d=(()=>{class e{}return e.\u0275mod=a.Gb({type:e}),e.\u0275inj=a.Fb({factory:function(t){return new(t||e)},imports:[[s.b,p]]}),e})()}}]);