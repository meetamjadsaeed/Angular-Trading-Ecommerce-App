import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingProductComponent } from './trading-product.component';

describe('TradingProductComponent', () => {
  let component: TradingProductComponent;
  let fixture: ComponentFixture<TradingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TradingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
