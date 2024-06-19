import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stripe-form',
  templateUrl: './stripe-form.component.html',
  styleUrls: ['./stripe-form.component.css'],
})
export class StripeFormComponent {
  @Input() StepTwoContinue: any;
  @Input() handleNext: any;
  @Input() setCardToken: any;
  @Input() cardToken: string;
}
