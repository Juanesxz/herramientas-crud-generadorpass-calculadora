import { Routes } from '@angular/router';
import { LandingComponent } from './page/landing/landing.component';
import { LayoutComponent } from './layout/layout.component';



export const routes: Routes = [
    { path: '', component: LandingComponent },
    {
        path: 'auth',
        loadChildren: () => import('./page/page.routes').then(r => r.PAGE_ROUTES),
    },
    {
        path: "dashboard",
        component: LayoutComponent,
        loadChildren: () => import("./components/components.routes").then(r => r.COMPONENTS_ROUTES),
    },
    {
        path: 'page404',
        loadChildren: () => import("./page/page404/page404.component")
    },
    {
        path: '**',
        redirectTo: 'page404',
    },
];
