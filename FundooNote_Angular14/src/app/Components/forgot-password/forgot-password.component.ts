import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user-services/user.service';

interface Language{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  ForgotPassForm!: FormGroup;
  submitted = false;
  durationInSeconds = 5;

  constructor(private formBuilder: FormBuilder , private user: UserService,private _snackbar:MatSnackBar) { }

  ngOnInit() {
      this.ForgotPassForm = this.formBuilder.group({
        Email: ['', [Validators.required, Validators.email]]
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.ForgotPassForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.ForgotPassForm.invalid) {
          return;
      }
      console.log(this.ForgotPassForm.value);

      console.log(this.ForgotPassForm.value);
        let reqdata={
          Email: this.ForgotPassForm.value.Email
        }

        this.user.ForgotPassword(reqdata).subscribe((response:any)=>{
          console.log(response);
          this._snackbar.open('Reset Password Link Sent Sucessfully...','',{
            duration: this.durationInSeconds * 400
          });
        }, (error: any) => {
          console.log(error);
        })
  }

  onReset() {
      this.submitted = false;
      this.ForgotPassForm.reset();
  }

  selectedValue!: string;
  selectedCar!: string;
  Language: Language[] = [
    {value: 'English (United States)-0', viewValue: 'English (United States)'},
    {value: 'English (United Kingdom)-1', viewValue: 'English (United Kingdom)'},
    {value: 'Hindi-2', viewValue: 'Hindi'},
  ];
  selectedLang = this.Language[0].value;
}
