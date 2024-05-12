import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeModel } from '../../../core/models/APIMODELS';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
constructor(){
  const localData = localStorage.getItem("ticketdata");
  if(localData){
    this.loggedData = JSON.parse(localData);
  }
  console.log(this.loggedData)
}
  loggedData : EmployeeModel = new EmployeeModel();
}
