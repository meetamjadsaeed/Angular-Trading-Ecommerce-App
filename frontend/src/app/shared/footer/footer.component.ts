import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  emailForm: FormGroup;
  loading = false;
  newsData: any[] = [];
  socialMediaData: any[] = [];
  companyInfo: any = {};

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.loadCompanyInfo();
    this.loadSocialLinks();
    this.loadNews();
  }

  loadCompanyInfo() {
    this.dataService.getCompanyInfo().subscribe(
      (data) => (this.companyInfo = data.contact),
      (error) => console.error(error)
    );
  }

  loadSocialLinks() {
    this.dataService.getSocialLinks().subscribe(
      (data) => (this.socialMediaData = data.social),
      (error) => console.error(error)
    );
  }

  loadNews() {
    this.dataService.getNews().subscribe(
      (data) => (this.newsData = data.blogs),
      (error) => console.error(error)
    );
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      this.toastr.error('Please Enter a Valid Email');
      return;
    }

    this.loading = true;
    this.dataService
      .postNewsletter({ email: this.emailForm.value.email })
      .subscribe(
        () => {
          this.loading = false;
          this.toastr.success('Join Newsletter Successfully!!');
          this.emailForm.reset();
        },
        (error) => {
          this.loading = false;
          this.toastr.error(error.error.message || 'An error occurred');
          console.error(error);
        }
      );
  }
}
