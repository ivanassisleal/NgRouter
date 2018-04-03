import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'

import { PersonModule } from './components/person/person.module';
import { CategoriesModule } from './components/categories/categories.module';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    PersonModule,
    CategoriesModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
