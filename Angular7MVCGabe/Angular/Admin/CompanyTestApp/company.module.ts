import { Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationConfig } from "@ng-bootstrap/ng-bootstrap";
import { mainState } from './router.config';
import { CompanyTestConponent } from './company.component';
import { UIRouterModule } from '@uirouter/angular';
import { CompanyService } from '../../Services/company.service'



@Component({
  selector: "company-test-app",
  template: "<ui-view></ui-view>"
})

export class CompanyTestConfig { }

const INITIAL_STATES = [mainState]
const INITIAL_COMPONENTS = [CompanyTestConfig, CompanyTestConponent]

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: true
    })
  ],
  declarations: [INITIAL_COMPONENTS],
  providers: [
    CompanyService,
    NgbPaginationConfig
  ],
  bootstrap: [CompanyTestConfig]
})
export class CompanyTestModule { }
