
import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customers.model';
@Pipe({ name: 'search' })
export class dropdownpipe implements PipeTransform {
transform(employeeList: any, searchText: any):Customer{
if(searchText == null || searchText =="" || searchText ==undefined) return employeeList;

return employeeList.filter(function(search){
return search.CompanyName.toLowerCase().indexOf(searchText.toLowerCase()) > -1 
|| search.ContactName.toLowerCase().indexOf(searchText.toLowerCase()) > -1
||  search.ContactTitle.toLowerCase().indexOf(searchText.toLowerCase()) > -1
||  search.CustomerID.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
})
}
} 