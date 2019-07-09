import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './pages/home/home.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { SharedModule } from '../shared/shared.module';
import { PUBLIC_PAGES_ROUTES } from './public-pages.routes';



@NgModule({
    declarations: [
        HomeComponent,
        PublicLayoutComponent
    ],
    exports: [
        HomeComponent,
        PublicLayoutComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        PUBLIC_PAGES_ROUTES
    ]
})
export class PublicPagesModule { }
