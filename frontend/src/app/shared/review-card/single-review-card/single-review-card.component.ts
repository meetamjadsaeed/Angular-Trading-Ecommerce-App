import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; // Install ngx-toastr for notifications
import * as moment from 'moment'; // Install moment.js for date formatting

// Import interfaces and types as needed

@Component({
  selector: 'app-single-review-card',
  templateUrl: './single-review-card.component.html',
  styleUrls: ['./single-review-card.component.css'],
})
export class SingleReviewCardComponent implements OnInit {
  @Input() item: any;
  @Input() seller: boolean = false;

  formActive: boolean = false;
  initialReplyForm: any;

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    this.initialReplyForm = {
      review_id: this.item.id,
      comment: '',
      parent_id: 0,
    };
  }

  toggleFormActive() {
    this.formActive = !this.formActive;
  }

  refreshReviews() {
    // Implement refreshReviews logic here
  }
}
