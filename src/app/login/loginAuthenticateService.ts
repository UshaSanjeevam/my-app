
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions, RequestMethod ,HttpModule} from '@angular/http';
import { Observable } from 'rxjs';
import { TokenParamas } from '../classes/tokenparamas';
import { User } from '../Shared/userModel';
 import { map } from "rxjs/operators";
 import { Injectable } from '@angular/core';
import { Customer } from '../customers/Shared/customer.model';



 @Injectable()
export class loginAuthenticateService {
  
  AccessToken:string="";
  private TokenAPI = 'http://localhost:42512';
  private CustomerAPI='http://localhost:25741';
  constructor(
  // private http: HttpClient) { }
    private http:Http){}
  // userAuthentication(userName, password) {
  //   var data = "username=" + userName + "&password=" + password + "&grant_type=password";
  //   var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
  //   return this.http.post(this.TokenAPI + '/token', data, { headers: reqHeader });
  // }
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
// registerUser(user: User) {
//   const body: User = {
//     UserID: user.UserID,
//     Password: user.Password,
//     Email: user.Email,
//     Name: user.Name
    
//   }
//   var reqHeader = new HttpHeaders({'No-Auth':'True'});
//   return this.http.post(this.CustomerAPI + '/api/User/Register', body,{ headers : reqHeader});
// }
getUserClaims(){
  return  this.http.get(this.CustomerAPI+'/api/GetUserClaims');
 }
}


