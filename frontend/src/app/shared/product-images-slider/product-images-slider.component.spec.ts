import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImagesSliderComponent } from './product-images-slider.component';

describe('ProductImagesSliderComponent', () => {
  let component: ProductImagesSliderComponent;
  let fixture: ComponentFixture<ProductImagesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImagesSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductImagesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
