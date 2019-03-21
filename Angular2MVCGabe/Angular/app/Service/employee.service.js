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
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this.Url = "/odata/Employees";
    }
    EmployeeService.prototype.getAllEmployees = function (queryParams) {
        return this._http.get("" + this.Url + queryParams);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this._http.get(this.Url + "(" + id + ")");
        //TODO: tried to get some error handling but it's not going perfectly so I'll return here later.
        // .catch((err: HttpErrorResponse) => { 
        //   console.error('An error occured: ', err.error);
        //   return Observable.of([
        //     {name: "Default values returned by local error handling", id: 97},
        //     {name: "Default values returned by local error handling(2)", id: 98},
        //     {name: "Default values returned by local error handling(3)", id: 99}
        //   ]);
        // });
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map