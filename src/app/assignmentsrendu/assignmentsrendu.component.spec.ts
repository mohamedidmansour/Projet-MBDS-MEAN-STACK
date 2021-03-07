import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsrenduComponent } from './assignmentsrendu.component';

describe('AssignmentsrenduComponent', () => {
  let component: AssignmentsrenduComponent;
  let fixture: ComponentFixture<AssignmentsrenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentsrenduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsrenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
