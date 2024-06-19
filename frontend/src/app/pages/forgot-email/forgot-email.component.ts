import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'; // Replace with your toast notification service
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.css'],
})
export class ForgotEmailComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  forgetPasswordHandler(): void {
    if (this.email.invalid) {
      this.snackBar.open('Please enter correct email', '', {
        duration: 3000,
        panelClass: 'error-snackbar',
      });
      return;
    }

    this.loading = true;
    const data = { email: this.email.value };

    // setTimeout(() => { // Simulating asynchronous operation
    //   this.authService.forgotPassword(data)
    //     .subscribe(
    //       () => {
    //         this.loading = false;
    //         this.snackBar.open('Successfully sent', '', { duration: 3000, panelClass: 'success-snackbar' });
    //         this.email.reset(); // Reset form field after successful submission
    //         // Navigate to new password route
    //         this.router.navigate(['/newpassword']);
    //       },
    //       error => {
    //         this.loading = false;
    //         console.error(error);
    //         this.snackBar.open(error?.error?.message || 'An error occurred', '', { duration: 3000, panelClass: 'error-snackbar' });
    //       }
    //     );
    // }, 600);
  }
}
