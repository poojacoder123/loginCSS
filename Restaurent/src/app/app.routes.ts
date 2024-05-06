import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { CustomerEnquiryComponent } from './component/pages/customer-enquiry/customer-enquiry.component';
import { ContactComponent } from './component/pages/contact/contact.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"about", component: ContactComponent },
    {path:"customerenquiry", component: CustomerEnquiryComponent}
];
