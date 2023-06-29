import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routin.module';



@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
    LayoutPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

  ]
})
export class AuthModule { }
