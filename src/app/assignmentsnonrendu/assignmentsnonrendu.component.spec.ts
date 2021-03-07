import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsnonrenduComponent } from './assignmentsnonrendu.component';

describe('AssignmentsnonrenduComponent', () => {
  let component: AssignmentsnonrenduComponent;
  let fixture: ComponentFixture<AssignmentsnonrenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentsnonrenduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsnonrenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
