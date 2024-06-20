import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css'],
})
export class ReviewCardComponent {
  @Input() comment: string;
  @Input() rating: number;
  @Input() loading: boolean;

  // Event emitter for rating change
  onRatingChange(rating: number) {
    // Implement any logic needed for rating change
    console.log('New rating:', rating);
  }

  // Event emitter for submitting rating
  onSubmitRating() {
    // Implement your SubmitRating logic here
    console.log('Submitting rating...');
  }
}
