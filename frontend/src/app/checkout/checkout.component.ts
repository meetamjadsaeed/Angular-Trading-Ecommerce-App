// src/app/checkout/checkout.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/models/app-state.model';
// import { verifyCouponApplicable } from '../../Utils/coupon';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  CartData: any = []; // Replace with actual data type
  couponDetail: any = null; // Replace with actual data type
  subTotal: number = 0;
  couponDiscount: number | null = null;

  // constructor(private store: Store<AppState>) { }
  constructor() {}

  ngOnInit(): void {
    // this.store
    //   .select((state) => state.CartReducer.cartData)
    //   .subscribe((cartData: any) => {
    //     this.CartData = cartData;
    //     this.TotalAmount();
    //   });
    // this.store
    //   .select((state) => state.CartReducer.coupon)
    //   .subscribe((couponDetail: any) => {
    //     this.couponDetail = couponDetail;
    //     this.calculateCouponDiscount();
    //   });
  }

  TotalAmount(): void {
    let total = 0;
    this.CartData.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    this.subTotal = total;
  }

  calculateCouponDiscount(): void {
    // if (this.couponDetail) {
    //   let checkCoupon = verifyCouponApplicable(this.couponDetail, this.subTotal);
    //   if (checkCoupon.status) {
    //     this.couponDiscount = checkCoupon.discount;
    //   }
    // }
  }

  get totalAfterDiscount(): number {
    if (this.couponDiscount !== null) {
      return this.subTotal - this.couponDiscount;
    }
    return this.subTotal;
  }
}
