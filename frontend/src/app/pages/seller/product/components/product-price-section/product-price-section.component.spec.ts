import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceSectionComponent } from './product-price-section.component';

describe('ProductPriceSectionComponent', () => {
  let component: ProductPriceSectionComponent;
  let fixture: ComponentFixture<ProductPriceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPriceSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductPriceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
