import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Assuming you have imported necessary forms modules

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;
  sellerIsLogin: boolean = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder // Inject FormBuilder for reactive forms
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.sellerIsLogin = data['sellerIsLogin'];
      if (this.sellerIsLogin) {
        this.router.navigate(['/seller/profile']);
      }
    });

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember_me: [false],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const values = this.loginForm.value;

    // Assuming you have API endpoints configured in Angular environment or constants
    const apiUrl = 'YOUR_API_URL_HERE/seller/login';

    this.http.post(apiUrl, values).subscribe(
      (response: any) => {
        // Handle successful login
        this.loading = false;
        this.router.navigate(['/seller/profile']);
      },
      (error) => {
        // Handle login error
        this.loading = false;
        console.error('Login error:', error);
        // You can use Angular Material Snackbar or any other notification method for error handling
      }
    );
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
