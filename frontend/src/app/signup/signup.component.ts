// signup.component.ts

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
// import { AppState } from '../../store/app.state';
// import { sellerSignUp } from '../../store/actions/seller.actions';
// import { signUp } from '../../store/actions/auth.actions';
// import { ToastService } from '../../services/toast.service';
// import * as Yup from 'yup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  profileTabs = 1;
  btnLoading = false;
  signUpForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState> // private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnDestroy(): void {
    // Clean up any subscriptions or resources here if needed
  }

  initializeForm(): void {
    this.signUpForm = this.formBuilder.group({
      f_name: ['', [Validators.required, Validators.maxLength(15)]],
      l_name: ['', [Validators.required, Validators.maxLength(15)]],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      business_name: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password_confirmation: [
        '',
        [Validators.required, this.passwordConfirmationValidator],
      ],
      terms: [false, [Validators.requiredTrue]],
    });
  }

  passwordConfirmationValidator(control): any {
    const password = control.parent?.get('password');
    const confirmPassword = control.parent?.get('password_confirmation');
    if (!password || !confirmPassword) {
      return null;
    }
    return password.value === confirmPassword.value
      ? null
      : { passwordsNotMatch: true };
  }

  signInHandler(): void {
    // if (this.signUpForm.invalid) {
    //   this.toastService.error('Please fill out all required fields correctly.');
    //   return;
    // }
    // this.btnLoading = true;
    // const values = this.signUpForm.value;
    // values['is_trader'] = this.profileTabs === 2; // Set is_trader based on selected tab
    // this.store.dispatch(this.profileTabs === 3 ? new SellerSignUp(values) : new SignUp(values, () => {
    //   this.btnLoading = false;
    //   this.router.navigateByUrl('/');
    // }));
  }

  changeTabsFunction(tabNumber: number): void {
    this.profileTabs = tabNumber;
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
