import { Routes } from '@angular/router';

export const COMPONENTS_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () => import('./dashboard/dashboard.component'),
            },
            {
                path: 'table',
                loadComponent: () => import('./table/table.component')
            },
            {
                path: "generate",
                loadComponent: () => import("./generate/generate.component")
            },
            {
                path: "calculadora",
                loadComponent: () => import("./calculadora/calculadora.component")
            }
        ],
    },
];
