import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EmployeesService } from 'src/app/service/employees.service';
import { Employee } from 'src/app/model/employee.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() existingEmployee:Employee;
  employee:Employee;
  @Output() newEmployeeAdded:EventEmitter<Employee> = new EventEmitter<Employee>();
  
  constructor(private _empService: EmployeesService) { }

  ngOnInit() {
    this.resetFormData();
  }
  resetFormData(form?:NgForm){
    if(form !=null) {
      form.resetForm();
    }
    this._empService.employee = {
      id:null,
      userName:'',
      empCode: '',
      mobile: ''
    }
  }
  saveEmployee(form:NgForm) {
    let data = Object.assign({},form.value);
    delete data.id;
    if(form.value.id == null){
      this._empService.AddEmployee(data);
    }
    else{
      this._empService.updateEmployee(form.value.id,data);
    }
    this.newEmployeeAdded.emit(this._empService.employee);
    this.resetFormData(form);   
  }
}
