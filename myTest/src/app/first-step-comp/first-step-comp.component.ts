import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-first-step-comp',
  templateUrl: './first-step-comp.component.html',
  styleUrls: ['./first-step-comp.component.css']
})
export class FirstStepCompComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [' ','Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [10,15, 17, 37, 28, 32, 26, 28], label: 'Day over day Attack' }
   
  ];

  constructor() { }

  ngOnInit() {
  }

}
