export interface apiResponse {
    message : string,
    result : boolean,
    data : any;
}

export class Department {
   
    departmentName: string
    departmentHead: string
   

    constructor(){
        this.departmentName = ""
        this.departmentHead = ""
    }
}

export class Login {
   emailId:string
   password: string
   

    constructor(){
     this.emailId = "",
     this.password = ""
    }
}

export class EmployeeModel {
    employeeName : string
    contactNo : string
    emailId : string
    gender : string
     constructor(){
      this.emailId = "",
      this.employeeName = ""
      this.gender= ""
      this.contactNo= ""
     }
 }




