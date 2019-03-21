import { Component, OnInit } from '@angular/core'
import { EmployeeService, Employee } from '../Service/employee.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { StateService } from "@uirouter/core";

@Component({
    templateUrl: '../Angular/app/Components/employee.template.html'
})

export class EmployeeComponent implements OnInit {
    // the following controls pagination
    currentPage: number;
    totalItems: number;
    //set to true to display loading animation
    indicateLoading: boolean = false;
    //list of employees to display
    employees: Employee[];
    //form to control the employee details
    employeeForm: FormGroup
    test: string;

    constructor(private formBuilder: FormBuilder,
                private employeeService: EmployeeService,
                private ngbConfig: NgbPaginationConfig,
                private stateService: StateService) {
        // settings for the pagination
        this.currentPage = 1;
        ngbConfig.pageSize = 12;
        ngbConfig.size = 'sm';
        ngbConfig.boundaryLinks = true;
        ngbConfig.rotate = true;
        ngbConfig.maxSize = 3;
        ngbConfig.ellipses = false;
    }

    ngOnInit(): void {
        this.employeeForm = this.formBuilder.group({ 
            Id: [''],
            FirstName: ['', Validators.required],
            Surname: [''],
            Email: ['']
        })
        this.getEmployees();
    }

    getEmployees(): void {
        this.indicateLoading = true;
        this.employeeService.getAllEmployees(`?$orderby=FirstName&$top=${this.ngbConfig.pageSize}&$count=true`).subscribe( response => {
            this.employees = response.value;
            this.totalItems = response['@odata.count']
            this.indicateLoading = false;
        });
    }

    addEmployee(): void {
        console.log("Add Employee!")
    }

    selectEmployee(selectedEmployee: Employee): void {
        this.employeeService.setCurrentEmployee(selectedEmployee);
        this.stateService.go('main.employee', {employeeID: selectedEmployee.ID});
    }

    pageChanged(page: number): void {
        this.currentPage = page;
        //This string is the odata query values it is used to skip the correct amount of 
        //employees to ensure we load the correct pagination values.
        let queryString = `?$orderby=FirstName&$top=${this.ngbConfig.pageSize}&$skip=`;
        queryString += `${(this.currentPage - 1) * this.ngbConfig.pageSize}`;
        this.employeeService.getAllEmployees(queryString).subscribe( response => {
            this.employees = response.value;
        });
    }

    SetControlsState(isEnable: boolean) {
        isEnable ? this.employeeForm.enable() : this.employeeForm.disable();
    }
}