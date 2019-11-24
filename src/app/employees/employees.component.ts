import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  newEmployee:Employee;
  constructor() { }

  ngOnInit() {
  }
  employeeAdded(employee:Employee) {
    if(employee) {
      this.newEmployee = employee;
    }
  }
}
