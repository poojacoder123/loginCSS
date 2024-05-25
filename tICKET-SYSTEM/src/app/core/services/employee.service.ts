import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel, Login, apiResponse } from '../models/APIMODELS';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  login(object:Login): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(environment.API_URL + constant.API_END_POINT.LOGIN, object);
  }
  getEmployee(): Observable<any> {
    return this.http.get<any>(environment.API_URL + constant.API_END_POINT.GET_EMPLOYEE);
  }

  registerEmployee(object:EmployeeModel) : Observable<any>{
    return  this.http.post<EmployeeModel>(environment.API_URL + constant.API_END_POINT.CREATE_EMPLOYEE, object);
  }
 


}
