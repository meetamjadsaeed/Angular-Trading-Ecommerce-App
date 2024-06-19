import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledAccordionsComponent } from './controlled-accordions.component';

describe('ControlledAccordionsComponent', () => {
  let component: ControlledAccordionsComponent;
  let fixture: ComponentFixture<ControlledAccordionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlledAccordionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlledAccordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
