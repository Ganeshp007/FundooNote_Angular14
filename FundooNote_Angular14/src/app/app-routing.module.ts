import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';

const routes: Routes = [
  {path:"register", component:UserRegistrationComponent},
  {path:"login", component:UserLoginComponent},
  {path:"forgotpassword", component:ForgotPasswordComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
