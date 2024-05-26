import { Routes } from '@angular/router';
import { LoginComponent } from './component/pages/login/login.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { EmployeeComponent } from './component/pages/employee/employee.component';
import { TicketsComponent } from './component/pages/tickets/tickets.component';
import { NewTicketComponent } from './component/pages/new-ticket/new-ticket.component';
import { DepartmentComponent } from './component/pages/department/department.component';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch:"full"},
    {path : "login", component : LoginComponent},
    // {path : "", component: HeaderComponent, 
    // children :[
        {
            path: "dashboard",
            component : DashboardComponent,
            canActivate: [authGuard]
        },
        {
            path: "employee",
            component : EmployeeComponent
        },
        {
            path: "tickets",
            component : TicketsComponent,
            canActivate: [authGuard]

        },
        {
            path: "new-ticket",
            component : NewTicketComponent,
            canActivate: [authGuard]
        },
        {
            path: "department",
            component :DepartmentComponent
        }
    // ]}
   
];
