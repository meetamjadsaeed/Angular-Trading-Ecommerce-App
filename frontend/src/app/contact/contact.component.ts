import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import { ContactService } from '../../services/contact.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContactService } from '../services/contact.service';
// import { selectToken, selectCompanyInfo } from '../../store/selectors/auth.selectors';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;
  loading = false;
  token$: Observable<string>;
  companyInfo$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private contactService: ContactService,
    private store: Store
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });

    // this.token$ = this.store.pipe(select(selectToken));
    // this.companyInfo$ = this.store.pipe(select(selectCompanyInfo));
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.toastr.error('Please Enter All Fields');
      return;
    }

    this.loading = true;

    this.token$.subscribe((token) => {
      this.contactService
        .postContactUs(this.contactForm.value, token)
        .subscribe(
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
    });
  }
}
