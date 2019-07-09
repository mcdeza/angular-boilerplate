import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// RUTAS
import { AppRoutingModule } from './app-routing.module';

// MÒDULOS
import { PublicPagesModule } from './public-pages/public-pages.module';

// COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [
        PublicPagesModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
