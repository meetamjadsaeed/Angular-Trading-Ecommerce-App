import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { ClearCart, CouponApplied } from '../../store/actions/cart.actions';
// import { ApplyCoupons } from '../../services/network.service';
// import { ToastService } from '../../services/toast.service';
// import { verifyCouponApplicable } from '../../utils/coupon';
// import { CartSectionComponent } from '../cart-section/cart-section.component';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  templateUrl: './productcart.component.html',
  styleUrls: ['./productcart.component.css'],
})
export class ProductCartComponent implements OnInit {
  cartData$: Observable<any>;
  couponDetail$: Observable<any>;
  token$: Observable<string>;
  isLogin$: Observable<boolean>;
  subTotal: number = 0;
  coupons: string = '';
  loading: boolean = false;
  couponDiscount: number | null = null;
  cartData: any[] = [];
  quantity: number = 1;

  constructor(
    private store: Store<any>,
    private router: Router // private networkService: ApplyCoupons,
  ) // private toastService: ToastService
  {
    this.cartData$ = this.store.pipe(select((state) => state.cart.cartData));
    this.couponDetail$ = this.store.pipe(select((state) => state.cart.coupon));
    this.token$ = this.store.pipe(select((state) => state.auth.token));
    this.isLogin$ = this.store.pipe(select((state) => state.auth.isLogin));
  }

  ngOnInit() {
    this.cartData$.subscribe((cartData) => {
      this.cartData = cartData;
      this.calculateTotalAmount();
      if (this.cartData.length === 0) {
        this.router.navigate(['/']);
      }
    });

    // this.couponDetail$.subscribe(couponDetail => {
    //   if (couponDetail) {
    //     const checkCoupon = verifyCouponApplicable(couponDetail, this.subTotal);
    //     if (checkCoupon.status) {
    //       this.couponDiscount = checkCoupon.discount;
    //     }
    //   }
    // });
  }

  calculateTotalAmount() {
    this.subTotal = this.cartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  applyCouponsHandler(event: Event) {
    // event.preventDefault();
    // this.loading = true;
    // this.networkService.applyCoupons(this.coupons).subscribe(
    //   res => {
    //     this.loading = false;
    //     const checkCoupon = verifyCouponApplicable(res.data.coupon, this.subTotal);
    //     if (checkCoupon.status) {
    //       this.toastService.success('Successfully Applied');
    //       this.couponDiscount = checkCoupon.discount;
    //       this.store.dispatch(CouponApplied({ coupon: res.data.coupon }));
    //     } else {
    //       this.store.dispatch(CouponApplied({}));
    //       this.toastService.error(checkCoupon.message);
    //     }
    //   },
    //   err => {
    //     this.loading = false;
    //     this.toastService.error(err.response.data.message);
    //   }
    // );
  }

  clearCart() {
    // this.store.dispatch(ClearCart());
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
          couponData: this.couponDetail$,
        },
      },
    });
  }
}
