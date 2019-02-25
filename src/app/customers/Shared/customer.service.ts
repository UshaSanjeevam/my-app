import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Customer } from '../Shared/customer.model';
import { promise } from 'protractor';


@Injectable()
export class CustomerService {
  selectedEmployee : Customer;
  employeeList : Customer[];
  constructor(private http : Http) { }

  postEmployee(emp : Customer){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://10.138.77.181:25847/api/Customer',body,requestOptions).pipe(map(x => x.json()));
  }

  putEmployee(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:25741/api/Customer/' + id,
      body,
      requestOptions).pipe(map(res => res.json()));
  }
  getEmployeeList() :Promise<any[]>{
   // this.http.get('http://localhost:25741/api/Customer')
   return this.http.get('http://localhost:42512/api/Employee/getCustomers').pipe(map((data : Response) =>{
      return data.json() as any[];
    },err=>
     
    {
    return null;
   })).toPromise();
  }

  deleteEmployee(id: string) {
    return this.http.delete('http://10.138.77.181:25847/api/Customer' + id).pipe(map(res => res.json()));
  }
}