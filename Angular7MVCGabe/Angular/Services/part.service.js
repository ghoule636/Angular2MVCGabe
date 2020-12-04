"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartService = void 0;
const tslib_1 = require("tslib");
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let PartService = class PartService {
    constructor(http) {
        this.http = http;
        this.Url = "/odata/Parts";
        this.currentPart = new rxjs_1.Subject();
        this.partLoaded$ = this.currentPart.asObservable();
    }
    setCurrentPart(part) {
        this.currentPart.next(part);
    }
    getAllParts(queryParams) {
        return this.http.get(`${this.Url}${queryParams}`);
    }
    getPart(partID) {
        return this.http.get(`${this.Url}(${partID})`);
    }
};
PartService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
], PartService);
exports.PartService = PartService;
//# sourceMappingURL=part.service.js.map