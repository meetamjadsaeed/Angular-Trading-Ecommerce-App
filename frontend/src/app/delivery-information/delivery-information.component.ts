import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// import { ToastService } from '../../services/toast.service'; // Replace with your toast service
import { Store, select } from '@ngrx/store';
// import { selectToken } from '../../store/selectors/auth.selectors'; // Replace with your auth selectors
// import { OrderService } from '../../services/order.service'; // Replace with your order service
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

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

  token$: Observable<string>;

  // constructor(
  //   private toastService: ToastService,
  //   private store: Store,
  //   private orderService: OrderService
  // ) {
  //   this.token$ = this.store.pipe(select(selectToken));
  // }

  constructor() {}

  onSubmit(): void {
    // if (this.trackCode.invalid) {
    //   this.toastService.showError('Please enter Tracking id');
    //   return;
    // }
    // this.loading = true;
    // this.spinLoad = true;
    // this.token$.subscribe((token) => {
    //   this.orderService
    //     .trackOrder(this.trackCode.value, token)
    //     .pipe(
    //       tap((res) => {
    //         this.trackResponse = res?.data?.data?.status;
    //         this.spinLoad = false;
    //         this.loading = false;
    //         this.toastService.showInfo(res?.data?.message);
    //       }),
    //       catchError((err) => {
    //         console.error(err);
    //         this.toastService.showError(err?.response?.data?.message);
    //         this.loading = false;
    //         this.spinLoad = false;
    //         throw err;
    //       })
    //     )
    //     .subscribe();
    // });
  }
}
