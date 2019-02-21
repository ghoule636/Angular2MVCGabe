﻿import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home.component';
import { EmployeeComponent } from './Components/employee.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'employee', component: EmployeeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);