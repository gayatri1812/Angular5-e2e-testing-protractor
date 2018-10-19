import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.ngOnInit(); 
    //fixture.detectChanges();
  });

  it('form invalid when empty', () => {
    expect(component.userDetailsForm.valid).toBeFalsy();
  });

  it('Name field validity', () => {
    let fullName = component.userDetailsForm.controls['fullName']; 
    expect(fullName.valid).toBeTruthy(); 
  });

  it('email field validity', () => {
    let email = component.userDetailsForm.controls['email']; 
    expect(email.valid).toBeFalsy(); 
  });

  it('contact field validity', () => {
    let contact = component.userDetailsForm.controls['contact']; 
    expect(contact.valid).toBeFalsy(); 
  });

  it('gender field validity', () => {
    let gender = component.userDetailsForm.controls['gender']; 
    expect(gender.valid).toBeFalsy(); 
  });

  it('message field validity', () => {
    let message = component.userDetailsForm.controls['message']; 
    expect(message.valid).toBeFalsy(); 
  });

});




  


 

