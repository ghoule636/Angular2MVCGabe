import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './Components/home.component';
import { EmployeeService } from './Service/employee.service';

let INITIAL_COMPONENTS = [AppComponent, HomeComponent]

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing],
    declarations: [INITIAL_COMPONENTS],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, EmployeeService],
    bootstrap: [AppComponent]
})
export class AppModule { }