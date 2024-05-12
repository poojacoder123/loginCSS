import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, apiResponse } from '../models/APIMODELS';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  login(object:Login): Observable<apiResponse> {
    return this.http.post<apiResponse>(environment.API_URL + constant.API_END_POINT.LOGIN, object);
  }

}
