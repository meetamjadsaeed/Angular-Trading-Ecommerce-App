// src/app/step-form/step-form.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/models/app-state.model';
// import { ApplyCoupons, PlaceOrder } from '../../network/Network';
// import { ToastService } from '../../services/toast.service';
// import { updateShipmentDetails } from '../../redux/actions/auth.actions';
// import { ClearCart, CouponRemoved } from '../../redux/actions/cart.actions';
// import { verifyCouponApplicable } from '../../Utils/coupon';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.css'],
})
export class StepFormComponent implements OnInit {
  @Input() CheckOutData: any;

  // Other state variables
  activeStep: number = 0;
  skipped: Set<number> = new Set();
  loading: boolean = false;
  couponDiscount: number | null = null;
  userFormData: any = {
    // Initialize with default values
  };
  cardToken: string = '';

  // constructor(
  //   private store: Store<AppState>,
  //   private toastService: ToastService
  // ) {}

  constructor() {}

  ngOnInit(): void {
    // Initialize any required data
    this.userFormData = {
      // Initialize with relevant data from CheckOutData or defaults
      ...this.userFormData,
      ...this.CheckOutData?.customer_info, // Adjust as per your structure
    };
    this.cardToken = this.CheckOutData?.cardToken ?? '';
  }

  ngAfterViewInit(): void {
    // Initialize any necessary jQuery or DOM manipulations if needed
  }

  handleNext(): void {
    let newSkipped = this.skipped;
    if (this.isStepSkipped(this.activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(this.activeStep);
    }
    this.activeStep++;
    this.skipped = newSkipped;
  }

  handleBack(): void {
    let newSkipped = this.skipped;
    if (this.isStepSkipped(this.activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(this.activeStep);
    }
    this.activeStep--;
    this.skipped = newSkipped;
  }

  handleReset(): void {
    this.activeStep = 0;
    this.skipped = new Set();
  }

  handleSkip(): void {
    if (!this.isStepOptional(this.activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.activeStep++;
    const newSkipped = new Set(this.skipped.values());
    newSkipped.add(this.activeStep - 1);
    this.skipped = newSkipped;
  }

  PlaceOrderHandler(e: Event): void {
    e.preventDefault();
    this.loading = true;

    let saveCheckoutData = {
      ...this.userFormData,
      cardToken: this.cardToken,
    };

    // if (this.userFormData.save_data_for_future) {
    //   this.store.dispatch(updateShipmentDetails(saveCheckoutData));
    // }

    let data = {
      cart: this.CheckOutData?.CartData,
      customer_info: this.userFormData,
      coupon_data: this.CheckOutData?.couponData,
      discount: this.couponDiscount == null ? 0 : this.couponDiscount,
      stripe_token: this.cardToken,
      role:
        this.CheckOutData?.Token == undefined
          ? 'guest'
          : this.CheckOutData?.userDataRedux.role,
    };

    // PlaceOrder(data, this.CheckOutData?.Token).subscribe(
    //   (res: any) => {
    //     this.loading = false;
    //     this.store.dispatch(ClearCart());
    //     this.store.dispatch(CouponRemoved({}));
    //     this.toastService.showSuccess('Order placed successfully!');
    //     // Adjust navigation as per Angular routing
    //     // Navigate to "/thankyou" with order data
    //   },
    //   (err: any) => {
    //     this.loading = false;
    //     console.error(err);
    //   }
    // );
  }

  StepOneContinue(userDetails: any): void {
    this.loading = true;
    this.userFormData = userDetails;
    let newSkipped = this.skipped;
    if (this.isStepSkipped(this.activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(this.activeStep);
      this.loading = false;
    }
    this.activeStep++;
    this.skipped = newSkipped;
    this.loading = false;
  }

  StepTwoContinue(e: Event): void {
    e.preventDefault();
    if (!this.cardToken) {
      // this.toastService.showError("Invalid Card Details");
      return;
    }
    let newSkipped = this.skipped;
    if (this.isStepSkipped(this.activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(this.activeStep);
    }
    this.activeStep++;
    this.skipped = newSkipped;
  }

  isStepOptional(step: number): boolean {
    return step === 1; // Adjust as per your logic
  }

  isStepSkipped(step: number): boolean {
    return this.skipped.has(step);
  }
}
