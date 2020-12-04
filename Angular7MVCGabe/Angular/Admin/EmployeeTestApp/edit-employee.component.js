"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditEmployeeComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const employee_service_1 = require("../../Services/employee.service");
const angular_1 = require("@uirouter/angular");
const forms_1 = require("@angular/forms");
const operators_1 = require("rxjs/operators");
let EditEmployeeComponent = class EditEmployeeComponent {
    constructor(employeeService, fb) {
        this.employeeService = employeeService;
        this.fb = fb;
        this.firstNameMsg = { msg: "" };
        this.surnameMsg = { msg: "" };
        this.debounce = 100;
        this.editable = false;
        this.currentEmployee = {
            ID: -1,
            FirstName: "",
            Surname: "",
            Email: "",
            AddressID: -1,
            CompanyID: -1
        };
        this.employeeSubscription = employeeService.employeeLoaded$.subscribe(employee => {
            this.currentEmployee = employee;
            this.editable = false;
            this.updateForm();
        });
    }
    ngOnInit() {
        this.createForm();
        this.loadEmployee();
        this.createValidation();
    }
    ngOnDestroy() {
        this.employeeSubscription.unsubscribe();
    }
    createForm() {
        this.firstNameCtrl = this.fb.control({ value: this.currentEmployee.FirstName, disabled: true }, [forms_1.Validators.required, forms_1.Validators.maxLength(this.firstNameMaxLength)]);
        this.surnameCtrl = this.fb.control({ value: this.currentEmployee.Surname, disabled: true }, [forms_1.Validators.required, forms_1.Validators.maxLength(this.surnameMaxLength)]);
        this.employeeForm = this.fb.group({
            FirstName: this.firstNameCtrl,
            Surname: this.surnameCtrl
        });
        const firstName = this.employeeForm.get("FirstName");
        firstName.valueChanges.pipe(operators_1.debounceTime(this.debounce)).subscribe(value => this.setMessage(firstName, this.firstNameMsg, "FirstName"));
    }
    setMessage(theControl, theObject, theMessage) {
        theObject.msg = "";
        if ((theControl.touched || theControl.dirty) && theControl.errors) {
            theObject.msg = Object.keys(theControl.errors).map(key => theObject.msg = this.validationMessage[key + theMessage]).join("");
        }
    }
    createValidation() {
        this.validationMessage = {
            requiredFirstName: "First Name is required!",
            requiredSurname: "Surname is required!",
            maxLengthFirstName: "First name can be at most " + this.firstNameMaxLength + " characters long. ",
            maxLengthSurname: "Surname can be at most " + this.surnameMaxLength + " characters long. "
        };
    }
    updateForm() {
        this.employeeForm.patchValue({
            FirstName: this.currentEmployee.FirstName,
            Surname: this.currentEmployee.Surname
        });
    }
    loadEmployee() {
        if (this.currentEmployee.ID == -1) {
            this.employeeService.getEmployee(this.stateParams.employeeID).subscribe(response => {
                this.currentEmployee = response;
                this.employeeService.setCurrentEmployee(this.currentEmployee);
                this.updateForm();
            });
        }
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", angular_1.StateParams)
], EditEmployeeComponent.prototype, "stateParams", void 0);
EditEmployeeComponent = tslib_1.__decorate([
    core_1.Component({
        templateUrl: "../../../Angular/Admin/EmployeeTestApp/edit-employee.template.html"
    }),
    tslib_1.__metadata("design:paramtypes", [employee_service_1.EmployeeService,
        forms_1.FormBuilder])
], EditEmployeeComponent);
exports.EditEmployeeComponent = EditEmployeeComponent;
//# sourceMappingURL=edit-employee.component.js.map