import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListTableComponent } from './wish-list-table.component';

describe('WishListTableComponent', () => {
  let component: WishListTableComponent;
  let fixture: ComponentFixture<WishListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishListTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
