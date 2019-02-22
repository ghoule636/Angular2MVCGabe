import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './Components/employee.component';

const appRoutes: Routes = [
    { path: 'Admin', redirectTo: 'Admin/Employee', pathMatch: 'full' },
    { path: 'Admin/Employee', component: EmployeeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);