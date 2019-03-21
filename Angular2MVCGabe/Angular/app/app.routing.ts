import { EmployeeComponent } from './Components/employee.component';
import { EditEmployeeComponent } from './Components/edit-employee.component';
import { Transition } from '@uirouter/core';

export const mainState = {name: 'main', url: '', component: EmployeeComponent}

export const detailState= {
    name:'main.employee',
    url: '/:employeeID',
    component: EditEmployeeComponent,
    resolve: [
        {
            token: 'stateParams',
            deps: [Transition],
            resolveFn: (trans: Transition) => trans.params()
        }
    ]
}