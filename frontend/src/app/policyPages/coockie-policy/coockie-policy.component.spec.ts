import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoockiePolicyComponent } from './coockie-policy.component';

describe('CoockiePolicyComponent', () => {
  let component: CoockiePolicyComponent;
  let fixture: ComponentFixture<CoockiePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoockiePolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoockiePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
