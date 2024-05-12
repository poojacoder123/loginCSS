import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../core/services/department.service';
import { Department, EmployeeModel } from '../../../core/models/APIMODELS';
import { NAPipe } from '../../shared/pipe/na.pipe';
import { EmployeeService } from '../../../core/services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule, NAPipe],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent implements OnInit {
  departmentList : Department[] = [];
  employee$ : Observable<EmployeeModel[]> |undefined
constructor(
  private departmentService : DepartmentService,
  private employeeService : EmployeeService
){

}
ngOnInit(): void {
 this.loadDepartment();
 this.loadEmployee();
 this.employee$ = this.employeeService.getEmployee();
 console.log(this.employee$, "employee observable")
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
  })
}
}
