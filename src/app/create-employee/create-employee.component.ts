import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  isShow = false;


  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(['']),
      email: new FormControl(['']),

    });
  }
  onSave() {
    this.isShow = true;
  }

  onClear() {
    this.init();
  }


}
