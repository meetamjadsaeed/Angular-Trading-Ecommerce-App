import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; // Import ngx-toastr for notifications
// import { PostReply } from '../../../network/Network'; // Import PostReply function

@Component({
  selector: 'app-reply-form',
  templateUrl: './reply-form.component.html',
  styleUrls: ['./reply-form.component.css'],
})
export class ReplyFormComponent {
  @Input() reply: any;
  @Input() seller: boolean = false;

  replyForm: FormGroup;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.replyForm = this.formBuilder.group({
      review_id: [this.reply.review_id, Validators.required],
      comment: ['', Validators.required],
      parent_id: [this.reply.id ? this.reply.id : 0],
    });
  }

  onSubmit() {
    if (this.replyForm.valid) {
      this.loading = true;
      const formData = this.replyForm.value;
      // Implement your token logic as needed
      const userToken = ''; // Replace with your user token logic
      const sellerToken = ''; // Replace with your seller token logic
      const token = this.seller ? sellerToken : userToken;
      // PostReply(formData, token, this.seller)
      //   .then((res) => {
      //     this.loading = false;
      //     // Reset form and notify success
      //     this.replyForm.reset();
      //     this.toastr.success('Reply successfully sent');
      //   })
      //   .catch((err) => {
      //     this.loading = false;
      //     console.error('Error submitting reply:', err);
      //     // Handle error and show appropriate notification
      //     if (err?.response?.data?.message === 'Unauthenticated.') {
      //       this.toastr.error('Please Login');
      //     } else {
      //       this.toastr.error('Failed to submit reply');
      //     }
      //   });
    }
  }
}
