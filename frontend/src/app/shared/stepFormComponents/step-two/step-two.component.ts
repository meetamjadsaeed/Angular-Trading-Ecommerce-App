import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css'],
})
export class StepTwoComponent {
  @Input() StepTwoContinue: any;
  @Input() handleNext: any;
  @Input() CheckOutData: any;
  @Input() setCardToken: any;
  @Input() cardToken: string;
}
