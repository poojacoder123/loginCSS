import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { constant } from '../constant/constant';
import { Observable } from 'rxjs';
import { Department, apiResponse } from '../models/APIMODELS';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAllDepartment(): Observable<any> {
    return this.http.get<any>(environment.API_URL + constant.API_END_POINT.GET_DEPARTMENT);
  }
  addDepartment(object:Department): Observable<apiResponse> {
    return this.http.post<apiResponse>(environment.API_URL + constant.API_END_POINT.CREATE_DEPARTMENT, object);
  }
  updateDepartment(object: Department, id: string): Observable<apiResponse> {
    return this.http.put<apiResponse>(environment.API_URL + constant.API_END_POINT.EDIT_DEPARTMENT +id, object);
  }
  deleteDepartment(id:number): Observable<apiResponse> {
    return this.http.delete<apiResponse>(environment.API_URL + constant.API_END_POINT.DELETE_DEPARTMENT+ id);
  }

  getDepartmentById(id:number) : Observable<apiResponse>{
    return this.http.get<apiResponse>(environment.API_URL +id);
  }
}
