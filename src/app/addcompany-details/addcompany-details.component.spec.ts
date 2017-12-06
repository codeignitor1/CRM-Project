import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompanyDetailsComponent } from './addcompany-details.component';

describe('AddcompanyDetailsComponent', () => {
  let component: AddcompanyDetailsComponent;
  let fixture: ComponentFixture<AddcompanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcompanyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
