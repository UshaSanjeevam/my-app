
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions, RequestMethod ,HttpModule} from '@angular/http';
import { Observable } from 'rxjs';
import { TokenParamas } from '../classes/tokenparamas';
import { User } from '../Shared/userModel';
 import { map } from "rxjs/operators";
 import { Injectable } from '@angular/core';
import { Customer } from '../customers/Shared/customer.model';
import { userDetails } from '../classes/userDetails';



 @Injectable()
export class loginAuthenticateService {
  
  AccessToken:string="";
  private TokenAPI = 'http://localhost:42512';
  private CustomerAPI='http://localhost:25741';
  constructor(private http:Http){}
  
login(UserName:string,Password:string):Observable<any>{
  var headersForTokenAPI=new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  var data= "username=" + UserName + "&password=" + Password + "&grant_type=password";
  return this.http.post(this.TokenAPI+'/Token',data,{headers: headersForTokenAPI })

  
  .pipe(map((data : Response) =>{
    return data.json()}));
  
}

getCustomers():Observable<Customer[]>{
  var headersForCustomerAPI=new Headers();
  if(this.AccessToken){
    headersForCustomerAPI.append("Authorization",'Bearer'+this.AccessToken)
  }
  return this.http.get(this.CustomerAPI+'/api/customer') .pipe(map((data : Response) =>{
    return data.json()}));
  
}

getUserClaims(){
  return  this.http.get(this.CustomerAPI+'/api/GetUserClaims');
 }
 
windowsAuth(){
    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    let options = new RequestOptions({headers: headers, withCredentials: true});

    return this.http.
       get(
         'http://localhost:11462/api/values',
         {withCredentials: true}
         )
       .pipe(map((data:Response)=>{
  return data.json()}));

       
 } 

}


