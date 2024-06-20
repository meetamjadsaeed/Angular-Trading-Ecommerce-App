import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css'],
})
export class AllReviewsComponent {
  @Input() productReview: any[];
  @Input() seller: boolean = false;
  @Input() ParamData: any;
  @Input() pageCount: number;

  refreshReviews() {
    // Implement your refreshReviews logic here if needed
  }

  handlePageClick(event: any) {
    // Implement your handlePageClick logic here
    console.log(event); // Example log
  }
}
