import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  productSales = [
    {
      "name": "book",
      "value": 5001
    }, {
      "name": "graphic card",
      "value": 7322
    }, {
      "name": "desk",
      "value": 1726
    }, {
      "name": "laptop",
      "value": 2599
    }, {
      "name": "monitor",
      "value": 705
    }
  ];

  productSalesMulti = [
    {
      "name": "book",
      "series": [
        {
          "name": "January",
          "value": 125
        }, {
          "name": "February",
          "value": 197
        }, {
          "name": "March",
          "value": 209
        }
      ]
    }, {
      "name": "graphic card",
      "series": [
        {
          "name": "January",
          "value": 210
        }, {
          "name": "February",
          "value": 255
        }, {
          "name": "March",
          "value": 203
        }
      ]
    }, {
      "name": "desk",
      "series": [
        {
          "name": "January",
          "value": 89
        }, {
          "name": "February",
          "value": 105
        }, {
          "name": "March",
          "value": 66
        }
      ]
    }, {
      "name": "laptop",
      "series": [
        {
          "name": "January",
          "value": 178
        }, {
          "name": "February",
          "value": 165
        }, {
          "name": "March",
          "value": 144
        }
      ]
    }, {
      "name": "monitor",
      "series": [
        {
          "name": "January",
          "value": 144
        }, {
          "name": "February",
          "value": 250
        }, {
          "name": "March",
          "value": 133
        }
      ]
    }
  ]

  view: any[] = [700, 370];

  // options
  legendTitle: string = 'Products';
  legendTitleMulti: string = 'Months';
  legendPosition: string = 'below'; // ['right', 'below']
  legend: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'Sales';
  xAxisLabel: string = 'Products';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  maxXAxisTickLength: number = 30;
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = false;
  trimYAxisTicks: boolean = false;
  rotateXAxisTicks: boolean = false;

  xAxisTicks: any[] = ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 'Genre 7']
  yAxisTicks: any[] = [100, 1000, 2000, 5000, 7000, 10000]

  animations: boolean = true; // animations on load

  showGridLines: boolean = true; // grid lines

  showDataLabel: boolean = true; // numbers on bars

  gradient: boolean = false;
  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };
  schemeType: string = 'ordinal'; // 'ordinal' or 'linear'

  activeEntries: any[] = ['book']
  barPadding: number = 5
  tooltipDisabled: boolean = false;

  yScaleMax: number = 9000;

  roundEdges: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  formatString(input: string): string {
    return input.toUpperCase()
  }

  formatNumber(input: number): number {
    return input
  }

}
