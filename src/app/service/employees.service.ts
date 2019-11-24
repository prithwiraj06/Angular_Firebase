import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employee:Employee;
  constructor(private _firebase:AngularFirestore) { }

  AddEmployee(employee: Employee) {
    return this._firebase.collection('/employees').add(employee);
  }
  GetEmployees() {
    return this._firebase.collection('/employees').snapshotChanges();
  }
  updateEmployee(id:string,employee:Employee) {
    return this._firebase.doc('/employees/'+id).update(employee);
  }
  deleteEmployee(id:string) {
    return this._firebase.doc('/employees/'+id).delete();
  }
}
