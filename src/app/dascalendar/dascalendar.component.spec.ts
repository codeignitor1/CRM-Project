import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DascalendarComponent } from './dascalendar.component';

describe('DascalendarComponent', () => {
  let component: DascalendarComponent;
  let fixture: ComponentFixture<DascalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DascalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DascalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
