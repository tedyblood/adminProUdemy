
import {RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NoPageFoundComponent} from './pages/no-page-found/no-page-found.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    {path: 'login',         component: LoginComponent},
    {path: 'register',      component: RegisterComponent},
    {path: '**',            component: NoPageFoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes , { useHash: true });