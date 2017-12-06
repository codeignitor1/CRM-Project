import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLeadComponent } from './generate-lead.component';

describe('GenerateLeadComponent', () => {
  let component: GenerateLeadComponent;
  let fixture: ComponentFixture<GenerateLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
