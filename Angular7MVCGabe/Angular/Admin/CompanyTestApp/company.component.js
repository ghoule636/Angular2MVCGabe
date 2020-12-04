"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyTestConponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const company_service_1 = require("../../Services/company.service");
let CompanyTestConponent = class CompanyTestConponent {
    constructor(companyService) {
        this.companyService = companyService;
    }
    ngOnInit() {
        this.loadCompanies();
    }
    loadCompanies() {
        this.companyService.getAllCompanies("").subscribe(result => {
            console.log(result);
            this.allCompanies = result.value;
        });
    }
    selectCompany(selectedCompany) {
        console.log(selectedCompany);
    }
    ngOnDestroy() {
        //throw new Error("Method not implemented.");
    }
};
CompanyTestConponent = tslib_1.__decorate([
    core_1.Component({
        templateUrl: "../Angular/Admin/CompanyTestApp/company.template.html"
    }),
    tslib_1.__metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyTestConponent);
exports.CompanyTestConponent = CompanyTestConponent;
//# sourceMappingURL=company.component.js.map