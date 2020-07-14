import { EmployeeTestComponent } from './employee.component';
import { EditEmployeeComponent } from './edit-employee.component';
import { Transition } from '@uirouter/angular';

export const mainState = {
  name: "main",
  url: "",
  component: EmployeeTestComponent
}

export const editEmployeeState = {
  name: "main.employee",
  url: "/edit/:employeeID",
  params: {
    employeeID: {
      type: "int",
      dynamic: true
    }
  },
  component: EditEmployeeComponent,
  resolve: [
    {
      token: "stateParams",
      dynamic: true,
      deps: [Transition],
      resolveFn: (trans: Transition) => trans.params()
    }
    // TODO add permission/capability here
  ]
}
