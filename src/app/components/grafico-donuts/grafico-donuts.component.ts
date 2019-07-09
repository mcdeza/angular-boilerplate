import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-grafico-donuts',
    templateUrl: './grafico-donuts.component.html',
    styles: []
})
export class GraficoDonutsComponent implements OnInit {

    // Doughnut
    @Input('chartLabels') doughnutChartLabels: string[] = [];
    @Input('chartData') doughnutChartData: number[] = [];
    @Input('chartType') doughnutChartType: string = '';


    constructor() { }

    ngOnInit() {
    }

}
