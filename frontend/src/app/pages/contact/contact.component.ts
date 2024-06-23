import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactUsService } from '../../services/contact-us.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private contactService: ContactUsService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.toastr.error('Please Enter All Fields');
      return;
    }

    this.loading = true;

    this.contactService.postContactUs(this.contactForm.value).subscribe(
      () => {
        this.toastr.success('Successfully sent');
        this.contactForm.reset();
        this.loading = false;
      },
      (error) => {
        this.toastr.error('Failed to send');
        this.loading = false;
        console.error(error);
      }
    );
  }
}
