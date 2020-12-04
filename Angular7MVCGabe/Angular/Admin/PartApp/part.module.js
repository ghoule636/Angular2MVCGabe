"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartModule = exports.PartConfig = void 0;
const tslib_1 = require("tslib");
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const platform_browser_1 = require("@angular/platform-browser");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const angular_1 = require("@uirouter/angular");
const part_service_1 = require("../../Services/part.service");
const part_component_1 = require("./part.component");
const router_config_1 = require("./router.config");
const tree_1 = require("primeng/tree");
let PartConfig = class PartConfig {
};
PartConfig = tslib_1.__decorate([
    core_1.Component({
        selector: "part-app",
        template: "<ui-view></ui-view>"
    })
], PartConfig);
exports.PartConfig = PartConfig;
const INITIAL_STATES = [router_config_1.mainState];
const INTIAL_COMPONENTS = [PartConfig, part_component_1.PartComponent];
let PartModule = class PartModule {
};
PartModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            ng_bootstrap_1.NgbModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            tree_1.TreeModule,
            angular_1.UIRouterModule.forRoot({
                states: INITIAL_STATES,
                useHash: true
            })
        ],
        declarations: [INTIAL_COMPONENTS],
        providers: [
            part_service_1.PartService,
            ng_bootstrap_1.NgbPaginationConfig
        ],
        bootstrap: [PartConfig]
    })
], PartModule);
exports.PartModule = PartModule;
//# sourceMappingURL=part.module.js.map