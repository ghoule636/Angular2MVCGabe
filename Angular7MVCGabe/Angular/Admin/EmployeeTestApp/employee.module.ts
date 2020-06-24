import { Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationConfig } from "@ng-bootstrap/ng-bootstrap";
import { mainState } from './router.config';
import { EmployeeTestComponent } from './employee.component';
import { UIRouterModule } from '@uirouter/angular';
//import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: "employee-test-app",
  template: "<ui-view></ui-view>"
})
export class EmployeeTestConfig { }

const INITIAL_STATES = [mainState];
const INTIAL_COMPONENTS = [EmployeeTestConfig, EmployeeTestComponent];

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
  declarations: [INTIAL_COMPONENTS],
  providers: [
    //EmployeeService,
    NgbPaginationConfig
  ],
  bootstrap: [EmployeeTestConfig]
})
export class EmployeeTestModule { }
