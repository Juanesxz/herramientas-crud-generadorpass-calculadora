import { Routes } from '@angular/router';


export const PAGE_ROUTES: Routes = [

    {
        path: '',
        children: [
            { path: '', loadComponent: () => import("./auth/login/login.component") },
            { path: 'register', loadComponent: () => import("./auth/register/register.component") },
        ],
    },

];
