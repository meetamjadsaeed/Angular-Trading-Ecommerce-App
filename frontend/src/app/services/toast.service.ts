import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  showSuccess(message: string): void {
    // Example implementation; adjust as per your UI framework (e.g., ngx-toastr, Angular Material Snackbar, etc.)
    console.log(`SUCCESS: ${message}`);
  }

  showInfo(message: string): void {
    // Example implementation
    console.log(`INFO: ${message}`);
  }

  // Implement other toast notification methods (e.g., showError, showWarning) as needed
}
