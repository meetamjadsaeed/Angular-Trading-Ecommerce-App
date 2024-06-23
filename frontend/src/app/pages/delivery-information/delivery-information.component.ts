import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { catchError, tap } from 'rxjs/operators';
import { ToastService } from '../../services/toast.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-delivery-information',
  templateUrl: './delivery-information.component.html',
  styleUrls: ['./delivery-information.component.css'],
})
export class DeliveryInformationComponent {
  trackCode = new FormControl('', Validators.required);
  loading = false;
  spinLoad = false;
  trackResponse: any = {};

  constructor(
    private toastService: ToastService,
    private orderService: OrderService
  ) {}

  onSubmit(): void {
    if (this.trackCode.invalid) {
      this.toastService.showError('Please enter Tracking id');
      return;
    }

    this.loading = true;
    this.spinLoad = true;

    this.orderService
      .trackOrder(this.trackCode.value)
      .pipe(
        tap((res) => {
          this.trackResponse = res?.data?.data?.status;
          this.spinLoad = false;
          this.loading = false;
          this.toastService.showInfo(res?.data?.message);
        }),
        catchError((err) => {
          console.error(err);
          this.toastService.showError(err?.response?.data?.message);
          this.loading = false;
          this.spinLoad = false;
          throw err;
        })
      )
      .subscribe();
  }
}
