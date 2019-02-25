import { Component, OnInit } from '@angular/core';
import{ CustomerService } from '../Shared/customer.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {
  constructor(public employeeService: CustomerService, private toastr: ToastrService) { }
 
  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.employeeService.selectedEmployee = {
      CustomerID: '',
      CompanyName: '',
      ContactName: '',
      ContactTitle: '',
      Address:'',
      City :'',
      Region:'',
     PostalCode:'',
      Country:'',
      Phone:'',
      Fax:''

    }
  }
 
  onSubmit(form: NgForm) {
    if (form.value.CustomerID == null) {
      this.employeeService.postEmployee(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.employeeService.getEmployeeList();
          this.toastr.success('New Record Added Succcessfully', 'Employee Register');
        })
    }
    else {
      this.employeeService.putEmployee(form.value.CustomerID, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.employeeService.getEmployeeList();
        this.toastr.info('Record Updated Successfully!', 'Employee Register');
      });
    }
  }

}
