// signin.component.ts

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
// import { AppState } from '../../store/app.state';
// import { login, sellerLogin } from '../../store/actions/auth.actions';
// import { Adsapi } from '../../store/actions/cart.actions';
// import { GetAds } from '../../network/Network';
// import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit, OnDestroy {
  email = '';
  password = '';
  loading = false;
  sellerCheck = false;
  // adsSubscription: Subscription | undefined;

  constructor(
    private router: Router // private store: Store<AppState>,
  ) // private toastService: ToastService
  {}

  ngOnInit(): void {
    // Handle initialization tasks if needed
    // For example, fetching ads
    this.fetchAds();
  }

  ngOnDestroy(): void {
    // Unsubscribe from subscriptions if any
    // if (this.adsSubscription) {
    //   this.adsSubscription.unsubscribe();
    // }
  }

  fetchAds(): void {
    // GetAds()
    //   .then(res => {
    //     this.store.dispatch(new Adsapi(res?.data?.data?.ads));
    //   })
    //   .catch(err => {
    //     console.error('Error fetching ads:', err);
    //   });
  }

  signInHandler(): void {
    // if (!this.email || !this.password) {
    //   this.toastService.error('Please Enter All Fields');
    //   return;
    // }
    this.loading = true;
    const data = {
      email: this.email,
      password: this.password,
    };
    // setTimeout(() => {
    //   this.loading = false;
    //   if (this.sellerCheck) {
    //     this.store.dispatch(new SellerLogin(data));
    //   } else {
    //     this.store.dispatch(new Login(data));
    //   }
    // }, 600);
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
