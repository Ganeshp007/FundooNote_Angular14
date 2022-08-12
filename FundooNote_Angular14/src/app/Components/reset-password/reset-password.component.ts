import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user-services/user.service';

interface Language{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  ResetpasswordForm!: FormGroup;
  submitted = false;
  hide: boolean = true;
  durationInSeconds = 5;

  constructor(private formBuilder: FormBuilder,private user: UserService,private _snackbar:MatSnackBar) { }

  ngOnInit() {
      this.ResetpasswordForm = this.formBuilder.group({
        Password: ['', [Validators.required, Validators.minLength(8)]],
        ConfirmPassword: ['', Validators.required],
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.ResetpasswordForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.ResetpasswordForm.invalid) {
          return;
      }
      console.log(this.ResetpasswordForm.value);

      console.log(this.ResetpasswordForm.value);
        let reqdata={
          Password: this.ResetpasswordForm.value.password,
          ConfirmPassword: this.ResetpasswordForm.value.ConfirmPassword,
        }

        this.user.login(reqdata).subscribe((response:any)=>{
          console.log(response);
          this._snackbar.open('Password Reset Sucessfully...','',{
            duration: this.durationInSeconds * 400
          });
        }, (error: any) => {
          console.log(error);
      })
  }

  onReset() {
      this.submitted = false;
      this.ResetpasswordForm.reset();
  }

  ShowPassword() {
    this.hide = !this.hide;
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
