import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { GetAds } from '../../network/Network';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email = '';
  password = '';
  loading = false;
  sellerCheck = false;
  adsData: any = null; // Variable to store fetched ads data

  constructor(private router: Router, private toastService: ToastService) {}

  ngOnInit(): void {
    this.fetchAds();
  }

  fetchAds(): void {
    GetAds()
      .then((res) => {
        this.adsData = res?.data?.data?.ads; // Save ads data in the variable
        this.toastService.success('Ads fetched successfully');
      })
      .catch((err) => {
        console.error('Error fetching ads:', err);
        this.toastService.error('Failed to fetch ads');
      });
  }

  signInHandler(): void {
    if (!this.email || !this.password) {
      this.toastService.error('Please Enter All Fields');
      return;
    }

    this.loading = true;
    const data = {
      email: this.email,
      password: this.password,
    };

    // Simulating async login process
    setTimeout(() => {
      this.loading = false;
      if (this.sellerCheck) {
        // Simulate seller login logic
        this.toastService.success('Seller login successful');
        console.log('Seller login:', data);
      } else {
        // Simulate regular login logic
        this.toastService.success('User login successful');
        console.log('User login:', data);
      }
      // Example of navigating to another route
      this.router.navigateByUrl('/dashboard');
    }, 600);
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
