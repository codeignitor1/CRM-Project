import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasstatusbarComponent } from './dasstatusbar.component';

describe('DasstatusbarComponent', () => {
  let component: DasstatusbarComponent;
  let fixture: ComponentFixture<DasstatusbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasstatusbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasstatusbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
