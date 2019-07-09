import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: PublicLayoutComponent,
    //     children: [
    //         { path: 'home', component: HomeComponent },
    //         { path: '', redirectTo: '/home', pathMatch: 'full' },
    //         { path: '404', component: PagenotfoundComponent },

    //     ]
    // },

    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }



];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
