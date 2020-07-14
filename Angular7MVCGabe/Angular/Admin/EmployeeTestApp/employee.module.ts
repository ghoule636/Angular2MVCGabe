import { Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationConfig } from "@ng-bootstrap/ng-bootstrap";
import { mainState, editEmployeeState } from './router.config';
import { EmployeeTestComponent } from './employee.component';
import { UIRouterModule } from '@uirouter/angular';
import { EmployeeService } from '../../Services/employee.service';
import { EditEmployeeComponent } from './edit-employee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: "employee-test-app",
  template: "<ui-view></ui-view>"
})
export class EmployeeTestConfig { }

const INITIAL_STATES = [mainState, editEmployeeState];
const INTIAL_COMPONENTS = [EmployeeTestConfig, EmployeeTestComponent, EditEmployeeComponent];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: true
    })
  ],
  declarations: [INTIAL_COMPONENTS],
  providers: [
    EmployeeService,
    NgbPaginationConfig
  ],
  bootstrap: [EmployeeTestConfig]
})
export class EmployeeTestModule { }
