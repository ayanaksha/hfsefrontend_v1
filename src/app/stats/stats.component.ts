import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  public statsOptions = {
    scaleShowVerticalLines: false,
    responsive: false
  };

  public statsLabels = ['2006','2007','2008','2009','2010','2011','2012'];
  public statsChartType1 = 'bar';
  public statsChartType2 = 'pie';
  public statsLegends = true;
  
  public statsData = [
    {data: [10,15,30,40,68,85,97], label: 'Series A' },
    {data: [12,25,58,60,68,85,97], label: 'Series B' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
