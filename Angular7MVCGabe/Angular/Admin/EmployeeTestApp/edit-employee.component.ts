import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { EmployeeService, Employee } from '../../Services/employee.service';
import { StateParams } from '@uirouter/angular';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { debounceTime } from "rxjs/operators";

@Component({
  templateUrl: "../../../Angular/Admin/EmployeeTestApp/edit-employee.template.html"
})
export class EditEmployeeComponent implements OnInit, OnDestroy {
  @Input() stateParams: StateParams;
  editable: boolean;
  employeeSubscription: Subscription;
  currentEmployee: Employee;
  employeeForm: FormGroup;
  firstNameCtrl: FormControl;
  surnameCtrl: FormControl;
  firstNameMsg: { msg: string } = { msg: "" };
  surnameMsg: { msg: string } = { msg: "" };
  validationMessage: { [key: string]: string };
  firstNameMaxLength: 20;
  surnameMaxLength: 20;
  debounce = 100;

  constructor(private readonly employeeService: EmployeeService,
              private readonly fb: FormBuilder) {
    this.editable = false;
    this.currentEmployee = {
      ID: -1,
      FirstName: "",
      Surname: "",
      Email: "",
      AddressID: -1,
      CompanyID: -1
    }

    this.employeeSubscription = employeeService.employeeLoaded$.subscribe(
      employee => {
        this.currentEmployee = employee
        this.editable = false;
        this.updateForm();
      }
    )
  }

  ngOnInit() {
    this.createForm();
    this.loadEmployee();
    this.createValidation();
  }

  ngOnDestroy() {
    this.employeeSubscription.unsubscribe();
  }

  private createForm(): void {
    this.firstNameCtrl = this.fb.control({ value: this.currentEmployee.FirstName, disabled: true },
      [Validators.required, Validators.maxLength(this.firstNameMaxLength)]);
    this.surnameCtrl = this.fb.control({ value: this.currentEmployee.Surname, disabled: true },
      [Validators.required, Validators.maxLength(this.surnameMaxLength)]);

    this.employeeForm = this.fb.group({
      FirstName: this.firstNameCtrl,
      Surname: this.surnameCtrl
    });

    const firstName = this.employeeForm.get("FirstName");
    firstName.valueChanges.pipe(debounceTime(this.debounce)).subscribe(
      value => this.setMessage(firstName, this.firstNameMsg, "FirstName"));
    
  }

  private setMessage(theControl: AbstractControl, theObject: any, theMessage: string): void {
    theObject.msg = "";
    if ((theControl.touched || theControl.dirty) && theControl.errors) {
      theObject.msg = Object.keys(theControl.errors).map(
        key => theObject.msg = this.validationMessage[key + theMessage]).join("");
    }
  }

  private createValidation(): void {
    this.validationMessage = {
      requiredFirstName: "First Name is required!",
      requiredSurname: "Surname is required!",
      maxLengthFirstName: "First name can be at most " + this.firstNameMaxLength + " characters long. ",
      maxLengthSurname: "Surname can be at most " + this.surnameMaxLength + " characters long. "
    };
  }

  private updateForm(): void {
    this.employeeForm.patchValue({
      FirstName: this.currentEmployee.FirstName,
      Surname: this.currentEmployee.Surname
    });
  }

  private loadEmployee() {
    if (this.currentEmployee.ID == -1) {
      this.employeeService.getEmployee(this.stateParams.employeeID).subscribe(response => {
        this.currentEmployee = response;
        this.employeeService.setCurrentEmployee(this.currentEmployee);
        this.updateForm();
      })
    }
  }
}
