"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
let CompanyService = class CompanyService {
    constructor(http) {
        this.http = http;
        this.Url = "/odata/Companies";
    }
    getAllCompanies(queryParams) {
        return this.http.get(`${this.Url}${queryParams}`);
    }
    getCompany(companyID) {
        return this.http.get(`${this.Url}(${companyID})`);
    }
};
CompanyService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map