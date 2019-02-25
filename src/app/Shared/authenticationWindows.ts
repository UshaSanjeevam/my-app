import { Component, OnInit,Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { HttpClient } from "@angular/common/http";
import { Routes, RouterModule, Router } from "@angular/router";
import {windowsModel} from '../Shared/windowsModel';
import{ Auth } from '../Shared/Auth';
import {Http,  Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

import {map,catchError} from 'rxjs/operators';

@Injectable()
export class authenticationWindows {
  private actionUrl: string;
  private baseUrl = 'http://localhost:11462/api/values';
  private auth: Auth;
  private options = new RequestOptions({ withCredentials: true });
     // employeeIdentity:windowsModel[];
      tokenParams:windowsModel;
    constructor(private http : Http,private router:Router) {
      this.actionUrl = 'http://localhost:11462/api/values';
     }
            getAuthentication():any {
            return  this.http.get(this.baseUrl, this.options)
            .pipe(map(res => res.json()));
              }
              deleteEmployee(id: string) {
                return this.http.delete('http://10.138.77.181:25847/api/Customer' + id).pipe(map(res => res.json()));
              }
}