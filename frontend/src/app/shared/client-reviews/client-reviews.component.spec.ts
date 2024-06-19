import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReviewsComponent } from './client-reviews.component';

describe('ClientReviewsComponent', () => {
  let component: ClientReviewsComponent;
  let fixture: ComponentFixture<ClientReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
