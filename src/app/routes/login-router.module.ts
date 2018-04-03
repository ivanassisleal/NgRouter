import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginLayoutComponent } from '../layouts/login-layout.component';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: LoginLayoutComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent
          }
        ]
      }
    ])],
  declarations: []
})
export class LoginRouterModule { }
