import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureproductComponent } from './featureproduct.component';

describe('FeatureproductComponent', () => {
  let component: FeatureproductComponent;
  let fixture: ComponentFixture<FeatureproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
