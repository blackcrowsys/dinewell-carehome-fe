import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ResidentsComponent} from './residents/residents.component';
import {AuthGuard} from './_guards/auth.guard';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
    {
        path: 'residents',
        component: ResidentsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
