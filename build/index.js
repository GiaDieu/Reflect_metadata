"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// const plane = {
//   color: "red",
// };
// Reflect.defineMetadata("note", "Hi There", plane);
// Reflect.defineMetadata("height", 10, plane);
// const note = Reflect.getMetadata("note", plane);
// const height = Reflect.getMetadata("height", plane);
// console.log(height);
// console.log(note);
// Reflect.defineMetadata("note", "hi There!", plane, "color");
// const note = Reflect.getMetadata("note", plane, "color");
// console.log(note);
// apply Reflect in TypeScript class
var Plane = /** @class */ (function () {
    function Plane() {
        this.color = "red";
    }
    Plane.prototype.fly = function () {
        console.log("vrrrrr");
    };
    __decorate([
        markFunc("Hi There"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Plane.prototype, "fly", null);
    Plane = __decorate([
        printMetadata
    ], Plane);
    return Plane;
}());
function markFunc(secretInfo) {
    return function (target, key) {
        Reflect.defineMetadata("secret", secretInfo, target, key);
    };
}
function printMetadata(target) {
    // typeof Plane = constructor func
    for (var key in target.prototype) {
        var secret = Reflect.getMetadata("secret", target.prototype, key); // key == 'fly', 'secret' from metadata property
        console.log(secret);
    }
}
