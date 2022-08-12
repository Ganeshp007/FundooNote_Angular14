import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';

const routes: Routes = [
  {path:"register", component:UserRegistrationComponent},
  {path:"login", component:UserLoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
