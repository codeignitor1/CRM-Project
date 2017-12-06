import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DascompanydetailsComponent } from './dascompanydetails.component';

describe('DascompanydetailsComponent', () => {
  let component: DascompanydetailsComponent;
  let fixture: ComponentFixture<DascompanydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DascompanydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DascompanydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
