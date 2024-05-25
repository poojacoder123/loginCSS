import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../core/services/employee.service';
import { EmployeeModel } from '../../../core/models/APIMODELS';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {
addEmployee!: FormGroup;
employeeList : EmployeeModel[] = [];
formVisible : boolean = false;
  constructor(
     private _fb: FormBuilder,
     private _employeeService: EmployeeService){

  }
ngOnInit(): void {

  this.loadEmployees();
    this.addEmployee = this._fb.group({
      employeeName : ["", Validators.required],
      contactNo : ["", Validators.required],
      emailId : ["", Validators.required],
      gender : ["", Validators.required],
      password : ["", Validators.required],   
    })
}

saveEmployee(){
console.log(this.addEmployee.value)
this._employeeService.registerEmployee(this.addEmployee.value).subscribe((data)=>{
 alert("data saved")})
}
loadEmployees(){
  this._employeeService.getEmployee().subscribe((data)=>{
  this.employeeList = data;
  console.log(this.employeeList)
  })
   }

   viewEmpl(){
    this.formVisible =!this.formVisible;
    console.log(this.formVisible)
   }
deleteEmployee(){

}

}

