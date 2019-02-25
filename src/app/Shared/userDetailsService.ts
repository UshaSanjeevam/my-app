import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions, RequestMethod ,HttpModule} from '@angular/http';
import { Observable, observable } from 'rxjs';
import { TokenParamas } from '../classes/tokenparamas';
import { User } from '../Shared/userModel';
 import { map } from "rxjs/operators";
 import { Injectable } from '@angular/core';
import { userDetails } from '../classes/userDetails';



@Injectable()
export class userDetailsService {
    employeeList : userDetails;
    AccessToken:string="";
    private TokenAPI = 'http://localhost:42512/';
    private CustomerAPI='http://localhost:25741';
    constructor(private http:Http){}
  

    getUserDetails(USERID:string){
       return this.http.get(this.TokenAPI+'api/UserDetails/getUserDetails?USERID='+USERID).pipe(map((data : Response) =>{
        return data.json() as any[];
      },err=>
       
      {
      return null;
     })).toPromise();
      }
 
    
}



