import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'pages-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  inValidUser: boolean;

  submitForm(): void {
    this.inValidUser = this.validateForm.get('userName').value 
    && this.validateForm.get('password').value 
    && this.validateLoginInfo();

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }

    if(!this.inValidUser){
      
    }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
  
  validateLoginInfo(): boolean {
    return !(this.validateForm.get('userName').value == 'user1' &&
      this.validateForm.get('password').value == '123456');
  }
}
