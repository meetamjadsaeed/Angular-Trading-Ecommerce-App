import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { CompanyInfo, GetNews, PostNewsLetter, SocialLinks } from '../../network/Network';
import { Store } from '@ngrx/store'; // Assuming you use NgRx for state management
// import { AuthActions } from '../../redux/actions/auth.actions';
import { ToastrService } from 'ngx-toastr'; // Assuming you use ngx-toastr for notifications
import * as moment from 'moment'; // Import moment for date formatting

@Component({
  selector: 'app-seller-footer',
  templateUrl: './seller-footer.component.html',
  styleUrls: ['./seller-footer.component.css'],
})
export class SellerFooterComponent implements OnInit {
  email: string = '';
  loading: boolean = false;
  newsData: any[] = [];
  socialMediaData: any[] = [];
  companyInfoRedux: any = {};

  constructor(
    private router: Router,
    private store: Store<any>, // Inject NgRx store
    private toastr: ToastrService // Inject ngx-toastr service
  ) {}

  ngOnInit(): void {
    this.getSocialLinks();
    this.getCompanyInfo();
    this.getNews();
  }

  NewsLetterHandler() {
    this.loading = true;
    if (!this.email.trim()) {
      this.toastr.error('Please Enter Email');
      this.loading = false;
      return;
    }
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.email.trim()
      )
    ) {
      this.toastr.error('Invalid Email');
      this.loading = false;
      return;
    }
    const data = { email: this.email.trim() };
    // PostNewsLetter(data)
    //   .then((res: any) => {
    //     this.loading = false;
    //     this.toastr.success('Join Newsletter Successfully!!');
    //     this.email = '';
    //   })
    //   .catch((err: any) => {
    //     this.loading = false;
    //     this.toastr.error(err?.response?.data?.message || 'Something went wrong');
    //     console.log(err);
    //   });
  }

  getSocialLinks() {
    // SocialLinks()
    //   .then((res: any) => {
    //     this.socialMediaData = res?.data?.data?.social || [];
    //     this.store.dispatch(AuthActions.SocialMediaStore({ socialMedia: this.socialMediaData }));
    //   })
    //   .catch((err: any) => {
    //     console.log(err);
    //   });
  }

  getCompanyInfo() {
    // CompanyInfo()
    //   .then((res: any) => {
    //     this.companyInfoRedux = res?.data?.data?.contact || {};
    //     this.store.dispatch(AuthActions.CompanyInfoStore({ companyInfo: this.companyInfoRedux }));
    //   })
    //   .catch((err: any) => {
    //     console.log(err);
    //   });
  }

  getNews() {
    // GetNews()
    //   .then((res: any) => {
    //     this.newsData = res?.data?.data?.blogs || [];
    //   })
    //   .catch((err: any) => {
    //     console.log(err);
    //   });
  }

  formatDate(date: string): string {
    // return moment(date).format('MMMM Do YYYY, h:mm');
  }
}
