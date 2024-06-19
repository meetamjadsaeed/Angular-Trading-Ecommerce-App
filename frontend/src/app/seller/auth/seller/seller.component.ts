import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store'; // Assuming you're using NgRx for state management
// import { AppState } from '../../store/app.state'; // Adjust as per your store structure
// import { sellerSignUp } from '../../store/actions/seller.actions'; // Adjust path as per your action file
// import { signUp } from '../../store/actions/auth.actions'; // Adjust path as per your action file

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent implements OnInit {
  loginForm!: FormGroup;
  profileTabs: number = 1;
  btnLoading: boolean = false;
  sellerIsSignup: boolean = false;
  isSignup: boolean = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder // private store: Store<AppState> // Inject Store for state management
  ) {}

  ngOnInit(): void {
    // this.store.select('seller').subscribe(state => {
    //   this.sellerIsSignup = state.isSignup; // Assuming you have state management setup correctly
    //   if (this.sellerIsSignup) {
    //     this.btnLoading = false;
    //     this.router.navigate(['/seller/profile']);
    //   }
    // });

    // this.store.select('auth').subscribe(state => {
    //   this.isSignup = state.isSignup; // Assuming you have state management setup correctly
    //   if (this.isSignup) {
    //     this.router.navigate(['/']);
    //   }
    // });

    this.loginForm = this.formBuilder.group({
      f_name: ['', [Validators.required, Validators.maxLength(15)]],
      l_name: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    });
  }

  changeTabsFunction(tab: number): void {
    this.profileTabs = tab;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.btnLoading = true;
    const values = this.loginForm.value;

    // Assuming you have API endpoints configured in Angular environment or constants
    const apiUrl = 'YOUR_API_URL_HERE/seller/signup';

    this.http.post(apiUrl, values).subscribe(
      (response: any) => {
        // Handle successful signup
        this.btnLoading = false;
        this.router.navigate(['/seller/profile']);
      },
      (error) => {
        // Handle signup error
        this.btnLoading = false;
        console.error('Signup error:', error);
        // You can use Angular Material Snackbar or any other notification method for error handling
      }
    );
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
