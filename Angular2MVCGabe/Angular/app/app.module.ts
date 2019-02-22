import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { EmployeeService } from './Service/employee.service';
import { EmployeeComponent } from './Components/employee.component';

let INITIAL_COMPONENTS = [AppComponent, EmployeeComponent]

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, routing],
    declarations: [INITIAL_COMPONENTS],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, EmployeeService],
    bootstrap: [AppComponent]
})
export class AppModule { }