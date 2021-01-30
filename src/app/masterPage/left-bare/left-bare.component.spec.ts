import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBareComponent } from './left-bare.component';

describe('LeftBareComponent', () => {
  let component: LeftBareComponent;
  let fixture: ComponentFixture<LeftBareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftBareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
