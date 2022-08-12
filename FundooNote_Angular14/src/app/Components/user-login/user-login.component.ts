import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user-services/user.service';

interface Language{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  LoginForm!: FormGroup;
  submitted = false;
  hide: boolean = true;
  durationInSeconds = 5;

  constructor(private formBuilder: FormBuilder , private user: UserService,private _snackbar:MatSnackBar) { }

  ngOnInit() {
      this.LoginForm = this.formBuilder.group({
          Email: ['', [Validators.required, Validators.email]],
          Password: ['', [Validators.required, Validators.minLength(8)]],
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.LoginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.LoginForm.invalid) {
          return;
      }
      console.log(this.LoginForm.value);

      console.log(this.LoginForm.value);
        let reqdata={
          Email: this.LoginForm.value.Email,
          Password: this.LoginForm.value.Password,
        }

        this.user.login(reqdata).subscribe((response:any)=>{
          console.log(response);
          localStorage.setItem("token",response.data);

          this._snackbar.open('Login Sucessfull...','',{
            duration: this.durationInSeconds * 400,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
        }, (error: any) => {
          console.log(error);
        })
  }

  onReset() {
      this.submitted = false;
      this.LoginForm.reset();
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
