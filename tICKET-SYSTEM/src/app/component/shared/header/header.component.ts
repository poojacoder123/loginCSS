import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EmployeeModel } from '../../../core/models/APIMODELS';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  loggedData : any;
  roleAssigned : string | undefined;
constructor(
  private router : Router
){
  const localData = localStorage.getItem("ticketdata");
  if(localData){
    this.loggedData = JSON.parse(localData);
    console.log(this.loggedData.role)
    // const role = this.loggedData.role.roles
    // console.log(role);
  }
  console.log(this.loggedData)
}
ngOnInit(): void {
      this.roleAssigned= this.loggedData.user.role[0].roles;
      // console.log(role)
}

logout(){
  alert("logout")
  localStorage.removeItem("ticketdata");
  localStorage.removeItem("userData");
  this.router.navigate(["/"])
  
}

  // loggedData : EmployeeModel = new EmployeeModel();
}
