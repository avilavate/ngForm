import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

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
        'username': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required)
      }
    )
  }
  submitForm() {
    console.log(this.myForm);
  }
  ngOnInit() {
  }

}
