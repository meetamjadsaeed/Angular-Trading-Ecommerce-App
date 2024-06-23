// src/app/checkout/checkout.component.ts

import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { verifyCouponApplicable } from '../../utils/coupon';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  CartData: any[] = [];
  couponDetail: any = null;
  subTotal: number = 0;
  couponDiscount: number | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartData();
    this.loadCouponDetails();
  }

  loadCartData(): void {
    this.cartService.getCartData().subscribe((data) => {
      this.CartData = data;
      this.TotalAmount();
    });
  }

  loadCouponDetails(): void {
    this.cartService.getCouponDetails().subscribe((data) => {
      this.couponDetail = data;
      this.calculateCouponDiscount();
    });
  }

  TotalAmount(): void {
    let total = 0;
    this.CartData.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    this.subTotal = total;
  }

  calculateCouponDiscount(): void {
    if (this.couponDetail) {
      let checkCoupon = verifyCouponApplicable(
        this.couponDetail,
        this.subTotal
      );
      if (checkCoupon.status) {
        this.couponDiscount = checkCoupon.discount;
      } else {
        this.couponDiscount = null; // Coupon is not applicable
      }
    } else {
      this.couponDiscount = null; // No coupon applied
    }
  }

  get totalAfterDiscount(): number {
    if (this.couponDiscount !== null) {
      return this.subTotal - this.couponDiscount;
    }
    return this.subTotal;
  }
}
