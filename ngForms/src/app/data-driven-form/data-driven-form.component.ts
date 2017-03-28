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
        'password': new FormControl('', [Validators.required, this.myValidator.bind(this)]),
        'email': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
      }
    )
  }
  myValidator(password: FormControl): { [key: string]: boolean } {
    debugger;
    if (this.myForm && <string>password.value === this.myForm.value.username ) {
      return { 'password': false };
    }
  }

  // myAsyncValidator(password: FormControl): { [key: string]: boolean } {
  //   setTimeout(function () {
  //     if (<string>password.value === 'Avil') {
  //       return { 'password': false };
  //     }
  //   }, 1500);
  // }

  submitForm() {
    console.log(this.myForm);
  }
  addHobby() {

  }
  ngOnInit() {
  }

}
