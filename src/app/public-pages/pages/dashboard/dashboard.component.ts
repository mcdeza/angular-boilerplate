import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styles: []
})
export class DashboardComponent implements OnInit {

    graficos: any = {
        'grafico1': {
            'labels': ['Con Nocilla', 'Con Natilla', 'Nada'],
            'data': [24, 30, 46],
            'type': 'doughnut',
            'leyenda': 'El pan se come con'
        },
        'grafico2': {
            'labels': ['Hombres', 'Mujeres'],
            'data': [4500, 6000],
            'type': 'doughnut',
            'leyenda': 'Entrevistados'
        },
    };

    constructor() { }

    ngOnInit() {
    }

}
