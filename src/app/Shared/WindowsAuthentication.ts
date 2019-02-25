import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import {windowsModel} from '../Shared/windowsModel';
import{ Auth } from '../Shared/Auth';
import { Routes, RouterModule, Router } from "@angular/router";
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class WindowsAuthentication {
    private actionUrl: string;
private baseUrl = 'http://localhost:11462/api/values';
private auth: Auth;
private options = new RequestOptions({ withCredentials: true });
   // employeeIdentity:windowsModel[];
    tokenParams:windowsModel;
  constructor(private http : Http,private router:Router,private _http:HttpClient) {
    this.actionUrl = 'http://localhost:11462/api/values';
   }


              getAuthentication():any {
        this.http.get(this.baseUrl, this.options)
          .pipe(map((data : Response) =>{
   return data.json() as windowsModel;
   })).toPromise().then(x => {
  this.tokenParams = x;
  localStorage.setItem("Authenticated",JSON.stringify(this.tokenParams));
}).catch(
    //this.HandleException
  

    
    
)
        }
        HandleException(err:Response):any{
                if(err.status< 200){
                    localStorage.setItem("Authenticated","ServiceIssue");
                 
                }
           
        }


    private extractData<T>(res: Response) {
        if (res.status < 200 || res.status >= 300) {
          throw new Error('Bad response status: ' + res.status);
        }
        const body = res.json ? res.json() : null;
        return <T>(body || {});
      }

    public handleError(error: Response) { 
        console.error(error); 
        return Observable.throw(error.json().error || 'Server error'); 
        } 

      
           
        
           
            getwindowsUser(): Observable<windowsModel[]> {
              return this._http.get<windowsModel[]>(this.baseUrl,  {withCredentials: true})
            
           }
    }
    



