import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { AssignmentsService } from '../../../shared/assignments.service';
import { filter, map, pairwise, tap, throttleTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Assignment } from './../../../assignments/assignment.model';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  NoteResult = [
    {
      "name": "",
      "value": 0
    }
  ];

  //Taille
  view: any[] = [650, 370];

  // options
  legendTitle: string = 'Categorie';
  // legendTitleMulti: string = 'Months';
  legendPosition: string = 'below'; // ['right', 'below']
  legend: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = "Nombre d'élèves";
  xAxisLabel: string = "Categorie";
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  maxXAxisTickLength: number = 30;
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = false;
  trimYAxisTicks: boolean = false;
  rotateXAxisTicks: boolean = false;

  xAxisTicks: any[] = ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 'Genre 7']
  yAxisTicks: any[] = [50, 100, 150, 200, 250, 300]

  animations: boolean = true; // animations on load

  showGridLines: boolean = true; // grid lines

  showDataLabel: boolean = true; // numbers on bars

  gradient: boolean = false;
  colorScheme = {
    domain: ['#a5d6a7', '#66bb6a', '#388e3c', '#1b5e20', '#25706F']
  };
  schemeType: string = 'ordinal'; // 'ordinal' or 'linear'

  activeEntries: any[] = ['book']
  barPadding: number = 5
  tooltipDisabled: boolean = false;

  yScaleMax: number = 9000;

  roundEdges: boolean = false;


  constructor(
    private assignmentsService: AssignmentsService
  ) {}

  ngOnInit(): void {
    this.getchart();
  }

  // avec pagination...
  getchart() {
    this.assignmentsService
      .getAssignmentchartJs()
      .subscribe((data: any) => {
        this.NoteResult = data;
        console.log(data)
      });
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


  // options of Pie Chart
  showLegend: boolean = true;
  showLabels: boolean = true;
   //Taille
   viewPie: any[] = [500, 300];
  isDoughnut: boolean = true;
}
