import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormArray } from '@angular/forms'

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent implements OnInit {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup(
      {
        'username': new FormControl('Max', Validators.required),
        'password': new FormControl('', [Validators.required, this.myValidator]),
        'email': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
      }
    )
  }
  myValidator(password: FormControl): { [key: string]: boolean } {
    if (<string>password.value === 'Avil') {
      return { 'password': false };
    }
  }

  submitForm() {
    console.log(this.myForm);
  }
  addHobby() {

  }
  ngOnInit() {
  }

}
