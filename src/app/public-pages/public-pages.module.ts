import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MÓDULOS
import { ChartsModule } from 'ng2-charts';

// RUTAS
import { PUBLIC_PAGES_ROUTES } from './public-pages.routes';

// COMPONENTES
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraficoDonutsComponent } from '../components/grafico-donuts/grafico-donuts.component';


@NgModule({
    declarations: [
        HomeComponent,
        PublicLayoutComponent,
        DashboardComponent,
        GraficoDonutsComponent
    ],
    exports: [
        HomeComponent,
        PublicLayoutComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        ChartsModule,
        PUBLIC_PAGES_ROUTES
    ]
})
export class PublicPagesModule { }
