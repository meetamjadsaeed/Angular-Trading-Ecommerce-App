import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.css'],
})
export class PriceRangeComponent {
  @Input() startPrice: number;
  @Input() setStartPrice: Function;
  @Input() endPrice: number;
  @Input() setEndPrice: Function;

  PriceFilterHandler(event: Event) {
    // Implement PriceFilterHandler logic here
  }
}
