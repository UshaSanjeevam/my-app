import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import {NgbDropdownConfig, NgbDropdown,NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Customer } from './customers.model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { NgbDropdownToggle } from '../../../node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [NgbDropdownConfig,NgbPaginationConfig] // add NgbDropdownConfig to the component providers
})
export class DropdownComponent  {
  search:any;
  p: number = 1;
  employeeList : Customer[];
  filteredData : Customer[];
  globalemployees: Customer[];
  values='';


  constructor(private config: NgbDropdownConfig,private http : Http,paging: NgbPaginationConfig) {
    // customize default values of dropdowns used by this component tree
    config.placement ='right-bottom';
   config.autoClose = true;
  paging.size = 'sm';
   paging.boundaryLinks = true;
  }

  //Init
  ngOnInit() {
    this.getEmployeeList();
  }

  //HttpService call
  getEmployeeList(){
    this.http.get('http://10.138.77.181:25847/api/Customer')
    .pipe(map((data : Response) =>{
      return data.json() as Customer[];
    })).toPromise().then(x => {
      this.employeeList = x;
      this.globalemployees=x;

    })
    err => {
      throw err;
    }
  }
  
  //Ontab enter
  // onKeydown(event: any) { 
  //   this.employeeList=this.globalemployees;
  // }

  //On key enter
  onKey(value: any) {
    //this.employeeList;
   // this.values = value ;
  //  this.verifyFilterData(value);
  }
  
  verifyFilterData(input:any){
      if (this.filteredData.length == 0) {
        alert("Please Verify Your Input");
      }
      
  }
  
  }

