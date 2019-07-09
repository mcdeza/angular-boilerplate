import { RouterModule, Routes } from '@angular/router';


import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from '../pages/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const publicPagesRoutes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: '404', component: PagenotfoundComponent },

        ]
    },
];


export const PUBLIC_PAGES_ROUTES = RouterModule.forChild(publicPagesRoutes);
