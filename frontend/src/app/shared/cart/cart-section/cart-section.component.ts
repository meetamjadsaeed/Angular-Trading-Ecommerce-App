import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../../services/auth.service';
// import { CartService } from '../../../services/cart.service';
// import { ToastService } from '../../../services/toast.service'; // Assuming you have a toast service for notifications

@Component({
  selector: 'app-cart-section',
  templateUrl: './cart-section.component.html',
  styleUrls: ['./cart-section.component.css'],
})
export class CartSectionComponent implements OnInit {
  token: string;
  user: any;
  cartData: any[] = [];

  constructor() // private cartService: CartService, // private authService: AuthService,
  // private toastService: ToastService
  {}

  ngOnInit(): void {
    // this.authService.token$.subscribe(token => this.token = token);
    // this.authService.user$.subscribe(user => this.user = user);
    // this.cartService.cartData$.subscribe(cartData => this.cartData = cartData);
  }

  increment(index: number, error = false, updated = false): void {
    // this.cartData = this.cartData.map((item, i) => {
    //   if (i === index) {
    //     let addUp = updated ? item.quantity : item.quantity + 1;
    //     if (this.user?.role !== 'Trader' && addUp >= item.productitem.current_stock) {
    //       this.toastService.error('Cannot add more, product is out of stock');
    //       error = true;
    //     } else {
    //       item.quantity = addUp;
    //       updated = true;
    //     }
    //   }
    //   return item;
    // });
    // this.cartService.updateCartData(this.cartData);
  }

  decrement(index: number): void {
    this.cartData = this.cartData.map((item, i) => {
      if (i === index) {
        let deductedValue = item.quantity - 1;
        if (
          this.user?.role === 'Trader' &&
          deductedValue >= item.productitem.trade_qty
        ) {
          item.quantity = deductedValue !== 0 ? deductedValue : item.quantity;
        } else {
          item.quantity = deductedValue !== 0 ? deductedValue : item.quantity;
        }
      }
      return item;
    });
    // this.cartService.updateCartData(this.cartData);
  }

  removeCartItem(index: number): void {
    this.cartData = this.cartData.filter((_, i) => i !== index);
    // this.cartService.updateCartData(this.cartData);
  }
}
