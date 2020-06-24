import { Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { UIRouterModule } from '@uirouter/angular'
//import { EmployeeService } from '../../Services/employee.service'
import { mainState } from './router.config';
import { CompanyTestConponent } from './company.component';
import { NgbModule, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "company-test-app",
  template: "<ui-view></ui-view>"
})

export class CompanyTestConfig { }

const INITIAL_STATES = [mainState]
const INITAL_COMPONENTS = [CompanyTestConponent]

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
  declarations: [INITAL_COMPONENTS],
  providers: [
    //EmployeeService,
    NgbPaginationConfig
  ],
  bootstrap: [CompanyTestConfig]
})
export class CompanyTestModule { }
