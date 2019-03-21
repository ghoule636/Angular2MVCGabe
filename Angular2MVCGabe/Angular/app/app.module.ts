import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UIRouterModule } from "@uirouter/angular";
import { AppComponent } from './app.component';
import { mainState, detailState } from './app.routing';
import { EmployeeService } from './Service/employee.service';
import { EmployeeComponent } from './Components/employee.component';
import { NgbPaginationModule, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { EditEmployeeComponent } from './Components/edit-employee.component';


let INITIAL_COMPONENTS = [AppComponent, EmployeeComponent, EditEmployeeComponent];
let INITIAL_STATES = [mainState, detailState];

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbPaginationModule,
        UIRouterModule.forRoot({
            states: INITIAL_STATES,
            useHash: true
        })
    ],
    declarations: [INITIAL_COMPONENTS],
    providers: [EmployeeService, NgbPaginationConfig],
    bootstrap: [AppComponent]
})
export class AppModule { }