import { Component } from '@angular/core';
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
export class LoginComponent {
constructor(private employeeservice : EmployeeService,
  private router : Router
){

}
  loginObj : Login = new Login();

  login(){
  this.employeeservice.login(this.loginObj).subscribe((res:any)=>{
    console.log(res)
    // if(res.result){
      alert("login success");
      localStorage.setItem("ticketdata", JSON.stringify(res));
      this.router.navigate(["/dashboard"])
  // }
  // console.log(res)
  } )
  }
}
