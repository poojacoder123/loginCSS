import { Component, OnInit } from '@angular/core';
import { Login, apiResponse } from '../../../core/models/APIMODELS';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../core/services/employee.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
constructor(private employeeservice : EmployeeService,
  private router : Router
){

}
ngOnInit() {
}
  loginObj : Login = new Login();

  login(){
    console.log(this.loginObj)
  this.employeeservice.login(this.loginObj).subscribe((res:any)=>{
    console.log(res)
    // if(res.result){
      alert("login success");
      localStorage.setItem("ticketdata", JSON.stringify(res));
      localStorage.setItem("userData", JSON.stringify(res));
      this.router.navigate(["/dashboard"])
      this.ngOnInit();
 
  } )
  }
}
