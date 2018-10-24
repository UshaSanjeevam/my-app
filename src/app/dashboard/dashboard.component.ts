import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";
import{ loginAuthenticateService } from '../login/loginAuthenticateService';
import { Customer} from '../customers/Shared/customer.model';
import{ AuthGuard } from '../auth/auth.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  parsedata:any;
  constructor( private router:Router,private authenticateservice:loginAuthenticateService){}
displayToken:string; 
customer:Customer[];

ngOnInit() {}
  
  Logout() {
    localStorage.removeItem('userToken');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
