import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KErrorMessageComponent } from './k-error-message.component';

describe('KErrorMessageComponent', () => {
  let component: KErrorMessageComponent;
  let fixture: ComponentFixture<KErrorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KErrorMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
