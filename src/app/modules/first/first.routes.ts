import {Routes} from '@angular/router'
import { FirstOutletComponent } from './pages/first-outlet/first-outlet.component'
import { LandingPageComponent } from './pages/landing-page/landing-page.component'
import { TestAreaComponent } from './pages/test-area/test-area.component'
import { ResultComponent } from './pages/result/result.component'
export const FirstRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'landing-page'
    },
    {
        path: 'landing-page',
        component: FirstOutletComponent,
        children: [
            {
                path: '',
                component: LandingPageComponent,
                data: {animation: 'landingPage'}
            },
            {
                path: 'test',
                component: TestAreaComponent,
                data: {animation: 'testPage'}
            },
            {
                path: 'result/:data',
                component: ResultComponent,
                data: {animation: 'result'}
            }
        ]
    }
]