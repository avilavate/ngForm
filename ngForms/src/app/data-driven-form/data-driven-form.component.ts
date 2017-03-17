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
        'password': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
        'hobbies': new FormArray([new FormControl('M', Validators.required), new FormControl('F', Validators.required)])
      }
    )
  }
  submitForm() {
    console.log(this.myForm);
  }
  addHobby(){
    
  }
  ngOnInit() {
  }

}
