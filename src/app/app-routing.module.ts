import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRouterModule } from './routes/dashboard-router.module';
import { LoginRouterModule } from './routes/login-router.module';
import { CategoriesRouterModule } from './routes/categories-router.module';
import { PersonRouterModule } from './routes/person-router.module';

@NgModule({
	imports: [
		DashboardRouterModule,
		CategoriesRouterModule,
		PersonRouterModule,
		LoginRouterModule

	],
	exports: [
		RouterModule,
		DashboardRouterModule,
		CategoriesRouterModule,
		PersonRouterModule,
		LoginRouterModule

	]
})
export class AppRoutingModule { }