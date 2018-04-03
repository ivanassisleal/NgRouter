import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from '../layouts/home-layout.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeLayoutComponent,
        canActivate: [AuthGuard],
        children:
          [
            {
              path: '',
              component: DashboardComponent
            }
          ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class DashboardRouterModule { }
