import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { filter, map, pairwise, tap, throttleTime } from 'rxjs/operators';
import { AssignmentsService } from '../shared/assignments.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import {MatDialog} from '@angular/material/dialog';
import { Assignment } from './../assignments/assignment.model';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-assignmentsrendu',
  templateUrl: './assignmentsrendu.component.html',
  styleUrls: ['./assignmentsrendu.component.css']
})
export class AssignmentsrenduComponent implements OnInit {
  titre = 'Mon application sur les Assignments 2 !';
  assignments: Assignment[] = [];
  index:number;
  public pageSlice=this.assignments


  constructor(
    private assignmentsService: AssignmentsService,
    private ngZone: NgZone,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}


  ngOnInit(): void {
    this.index=1;
    this.getAssignments(this.index);
  }

  // avec pagination...
  getAssignments(index:number) {
    this.assignmentsService
      .getAssignmentswithoutPagine(index)
      .subscribe((data: any) => {
        this.assignments = data;
        this.pageSlice=this.assignments.slice(0,6);
        console.log(this.assignments)
      });
  }

  OnPageChange(event : PageEvent)
  {
      console.log(event)
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.assignments.length)
      {
          endIndex = this.assignments.length;
      }
      this.pageSlice=this.assignments.slice(startIndex,endIndex);
  }
}
