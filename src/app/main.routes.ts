import { Routes } from '@angular/router';

export const MaintRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'first'
    },
    {
        path: 'first',
        loadChildren: 'src/app/modules/first/first.module#FirstModule'
    }
]