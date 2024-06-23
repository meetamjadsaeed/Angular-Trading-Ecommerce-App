import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';
import { verifyCouponApplicable } from '../../utils/coupon';

@Component({
  selector: 'app-product-cart',
  templateUrl: './productcart.component.html',
  styleUrls: ['./productcart.component.css'],
})
export class ProductCartComponent implements OnInit {
  cartData: any[] = [];
  couponDetail: any;
  token: string;
  isLogin: boolean;
  subTotal: number = 0;
  coupons: string = '';
  loading: boolean = false;
  couponDiscount: number | null = null;

  constructor(
    private router: Router,
    private cartService: CartService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.loadCartData();
  }

  loadCartData() {
    this.cartService.getCartData().subscribe(
      (cartData) => {
        this.cartData = cartData;
        this.calculateTotalAmount();
        if (this.cartData.length === 0) {
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.error('Error loading cart data', error);
      }
    );
  }

  calculateTotalAmount() {
    this.subTotal = this.cartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  applyCouponsHandler(event: Event) {
    event.preventDefault();
    this.loading = true;
    this.cartService.applyCoupon(this.coupons).subscribe(
      (res) => {
        this.loading = false;
        const checkCoupon = verifyCouponApplicable(
          res.data.coupon,
          this.subTotal
        );
        if (checkCoupon.status) {
          this.toastService.success('Successfully Applied');
          this.couponDiscount = checkCoupon.discount;
          this.couponDetail = res.data.coupon;
        } else {
          this.toastService.error(checkCoupon.message);
        }
      },
      (err) => {
        this.loading = false;
        console.error('Error applying coupon', err);
        this.toastService.error(err.error.message || 'An error occurred');
      }
    );
  }

  clearCart() {
    this.cartService.clearCart().subscribe(
      () => {
        this.cartData = [];
        this.subTotal = 0;
        this.couponDetail = null;
        this.couponDiscount = null;
        this.toastService.success('Cart cleared successfully');
      },
      (error) => {
        console.error('Error clearing cart', error);
        this.toastService.error(error.error.message || 'An error occurred');
      }
    );
  }

  proceedToCheckout() {
    this.router.navigate(['/checkout'], {
      state: {
        data: {
          cartData: this.cartData,
          subTotal: this.subTotal.toFixed(2),
          total:
            this.couponDiscount != null
              ? (this.subTotal - this.couponDiscount).toFixed(2)
              : this.subTotal.toFixed(2),
          couponData: this.couponDetail,
        },
      },
    });
  }
}
