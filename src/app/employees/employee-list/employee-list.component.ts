import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { EmployeesService } from 'src/app/service/employees.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnChanges {

  employee:Employee[];
  @Input()newEmployeeData:Employee;
  constructor(private _empService:EmployeesService) { }

  ngOnInit() {
    this._empService.GetEmployees().subscribe(res=>{
      this.employee = res.map(item => {       
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Employee        
      });
    });
  }
  ngOnChanges() {
    this._empService.GetEmployees().subscribe(res=>{
      this.employee = res.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Employee
      })
    })
  }
  deleteEmployee(empId:string) {
    if(confirm('Are you sure want to delete the employee ? ')) {
      this._empService.deleteEmployee(empId);
    }
  }
  updateEmployee(emp:Employee) {
    this._empService.employee = Object.assign({},emp);
  }

}
