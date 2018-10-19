import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userDetailsForm: FormGroup;
  fullName : FormControl;
  email: FormControl;
  contact: FormControl;
  gender: FormControl;
  message: FormControl;

 
  createFormControls() {
    this.fullName = new FormControl("Jeorge", Validators.required);
    this.email = new FormControl("", [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.contact = new FormControl("", [Validators.required, Validators.pattern('[0-9]+')]);
    this.message = new FormControl("", Validators.required);
    this.gender = new FormControl("", Validators.required);
  }

  createForm() {
    this.userDetailsForm = new FormGroup({
     
      fullName: this.fullName,
      email: this.email,
      contact: this.contact,
      gender: this.gender,
      message: this.message
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.userDetailsForm.valid) {
      console.log("Form Submitted!");
      console.log(this.userDetailsForm.value);
      
    }
  }
}




