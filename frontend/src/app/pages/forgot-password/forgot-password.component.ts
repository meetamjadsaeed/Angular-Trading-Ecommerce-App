import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  newPassword: string = '';
  reNewPassword: string = '';
  loading: boolean = false;
  token: string | null = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  newPasswordHandler(): void {
    if (!this.newPassword || !this.reNewPassword) {
      this.snackBar.open('Please fill in all fields', '', {
        duration: 3000,
        panelClass: 'error-snackbar',
      });
      return;
    }
    if (this.newPassword !== this.reNewPassword) {
      this.snackBar.open('Passwords do not match', '', {
        duration: 3000,
        panelClass: 'error-snackbar',
      });
      return;
    }

    this.loading = true;
    const data = {
      password: this.newPassword,
      confirm_password: this.reNewPassword,
      reset_token: this.token,
    };

    setTimeout(() => {
      // Simulating asynchronous operation
      this.authService.setResetPassword(data).subscribe(
        () => {
          this.loading = false;
          this.snackBar.open('Password reset successful', '', {
            duration: 3000,
            panelClass: 'success-snackbar',
          });
          this.router.navigate(['/signin']);
        },
        (error) => {
          this.loading = false;
          console.error(error);
          this.snackBar.open(error?.error?.message || 'An error occurred', '', {
            duration: 3000,
            panelClass: 'error-snackbar',
          });
        }
      );
    }, 600);
  }
}
