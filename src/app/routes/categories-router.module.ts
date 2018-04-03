import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoriesListComponent } from '../components/categories/categories-list.component';
import { AuthGuard } from '../guards/auth.guard';
import { HomeLayoutComponent } from '../layouts/home-layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'categories',
                component: HomeLayoutComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: '',
                        component: CategoriesListComponent
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class CategoriesRouterModule { }
