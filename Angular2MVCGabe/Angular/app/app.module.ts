import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { EmployeeService } from './Service/employee.service';
import { EmployeeComponent } from './Components/employee.component';
import { NgbPaginationModule, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';


let INITIAL_COMPONENTS = [AppComponent, EmployeeComponent]

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, routing, NgbPaginationModule],
    declarations: [INITIAL_COMPONENTS],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, EmployeeService, NgbPaginationConfig],
    bootstrap: [AppComponent]
})
export class AppModule { }