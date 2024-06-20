import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
    <div class="stars">
      <i class="fa fa-star" *ngFor="let star of stars"></i>
    </div>
    <div class="star-count">
      <span>{{ ratingValue }}</span>
    </div>
  `,
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  @Input() ratingValue: number = 0;
  stars: number[] = [1, 2, 3, 4, 5]; // Adjust as per your rating logic
}
