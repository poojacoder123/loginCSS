import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../core/services/department.service';
import { Department, EmployeeModel, apiResponse } from '../../../core/models/APIMODELS';
import { NAPipe } from '../../shared/pipe/na.pipe';
import { EmployeeService } from '../../../core/services/employee.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule, NAPipe, CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent implements OnInit {
  departmentList : Department[] = [];
  employeeList : any[]= [];
  departmentObj : Department = new Department();
  getDepartmetbyId :Department [] |apiResponse= [];
  editId :any;
  // employee$ : Observable<EmployeeModel> |undefined
constructor(
  private departmentService : DepartmentService,
  private employeeService : EmployeeService
){

}
ngOnInit(): void {
 this.loadDepartment();
 this.loadEmployee();
 console.log(this.employeeList)
//  this.employee$ = this.employeeService.getEmployee();
//  console.log(this.employee$, "employee observable")

}

loadDepartment(){
  this.departmentService.getAllDepartment().subscribe((res)=>{
    console.log(res)
    this.departmentList = res;
  })

}
loadEmployee(){
  this.employeeService.getEmployee().subscribe((res)=>{
    console.log(res)
    this.employeeList = res;

  })
}
addDepartment(){
  console.log(this.departmentObj)
this.departmentService.addDepartment(this.departmentObj).subscribe((res)=>{
  // console.log(res);
  alert("department added")
  this.ngOnInit();
})
}
editDeparment(obj:any){
this.editId = obj._id;
this.departmentObj = obj
alert(this.editId);
}
editDep(){
  if(this.editId ){
    this.departmentService.updateDepartment(this.departmentObj,this.editId).subscribe((res)=>{
      console.log(res);
      alert("department updated")
      this.ngOnInit();
    })
  }

}
deleteDeparment(obj:any){
let id = obj;
this.departmentService.deleteDepartment(id).subscribe((res)=>{
  console.log("deleted");
  this.loadDepartment();
})

}
}
