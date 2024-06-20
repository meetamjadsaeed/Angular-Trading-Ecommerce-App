import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reply-box',
  templateUrl: './reply-box.component.html',
  styleUrls: ['./reply-box.component.css'],
})
export class ReplyBoxComponent {
  @Input() reply: any;
  @Input() seller: boolean = false;

  formActive: boolean = false;

  refreshReviews() {
    // Implement refreshReviews logic here
  }
}
