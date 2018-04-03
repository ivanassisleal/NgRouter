import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PersonListComponent } from '../components/person/person-list.component';
import { PersonEditComponent } from '../components/person/person-edit.component';
import { AuthGuard } from '../guards/auth.guard';
import { HomeLayoutComponent } from '../layouts/home-layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'persons',
                component: HomeLayoutComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: '',
                        component: PersonListComponent
                    },
                    {
                        path: ':id',
                        component: PersonEditComponent
                        
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class PersonRouterModule { }