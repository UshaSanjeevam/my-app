import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Customer } from '../Shared/customer.model';


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
  getEmployeeList(){
    this.http.get('http://localhost:25741/api/Customer')
    .pipe(map((data : Response) =>{
      return data.json() as Customer[];
    })).toPromise().then(x => {
      this.employeeList = x;
    })
  }

  deleteEmployee(id: string) {
    return this.http.delete('http://10.138.77.181:25847/api/Customer' + id).pipe(map(res => res.json()));
  }
}