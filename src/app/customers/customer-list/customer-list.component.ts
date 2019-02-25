import { Component,Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Customer } from '../Shared/customer.model';
import{ CustomerService } from '../Shared/customer.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent  {
  employeeList : Customer[];
  //constructor(private modalService: NgbModal) {}

  // open(){
  //   const modalRef = this.modalService.open(CustomerListComponent);
  //   modalRef.componentInstance.name = 'World';
  // }
  constructor(public employeeService: CustomerService,private toastr : ToastrService) { }
 
 
  ngOnInit() {
    this.employeeService.getEmployeeList().then((data:any[])=>{
      this.employeeList=data;
    });
    
  }
 
  showForEdit(emp: Customer) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }
 
 
  onDelete(CustomerID: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(CustomerID)
      .subscribe(x => {
        this.employeeService.getEmployeeList();
        this.toastr.warning("Deleted Successfully","Employee Register");
      })
    }
  }
}





