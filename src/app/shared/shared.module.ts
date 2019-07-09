import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PagenotfoundComponent } from '../pages/pagenotfound/pagenotfound.component';



@NgModule({
    declarations: [
        HeaderComponent,
        LeftsidebarComponent,
        BreadcrumbsComponent,
        PagenotfoundComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        LeftsidebarComponent,
        BreadcrumbsComponent,
        PagenotfoundComponent
    ]
})
export class SharedModule { }
