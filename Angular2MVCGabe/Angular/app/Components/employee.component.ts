import { Component, OnInit } from '@angular/core'
import { EmployeeService, Employee } from '../Service/employee.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

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

    constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService, private ngbConfig: NgbPaginationConfig) {
        //sets default page to 1
        this.currentPage = 1;
        // sets page size to 12
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

    SetControlsState(isEnable: boolean) {
        isEnable ? this.employeeForm.enable() : this.employeeForm.disable();
    }
}