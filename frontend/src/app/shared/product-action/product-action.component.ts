import { Component, Input } from '@angular/core';
// import { useDispatch, useSelector } from '@ngrx/store'; // Assuming you use NgRx for state management
// import { AddToCart } from '../../redux/actions/CartActions';
// import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-product-action',
  template: `
    <button type="button" class="btn bg-cart" (click)="addToCart()">
      <i class="fa fa-cart-plus mr-2"></i>
    </button>
  `,
  styleUrls: ['./product-action.component.css'],
})
export class ProductActionComponent {
  @Input() productData: any;

  // constructor(private dispatch: useDispatch, private toastService: ToastService) {}
  constructor() {}

  addToCart() {
    // Implement your AddToCart logic here
    // if (this.productData.current_stock <= 0) {
    //   this.toastService.error('Item is out of stock');
    //   return;
    // }
    // const tradeProduct = this.productData.is_trade == 1;
    // const checkItemAlreadyExist = this.allStates.filter(val => val?.id == this.productData?.id);
    // if (checkItemAlreadyExist.length > 0) {
    //   this.toastService.info('Item Already Exist in Cart');
    //   return;
    // } else {
    //   const colorData = JSON.parse(this.productData?.colors);
    //   const data = {
    //     id: this.productData?.id,
    //     price: this.productData?.unit_price,
    //     quantity: tradeProduct ? this.productData.trade_qty : 1,
    //     color: colorData[0],
    //     productitem: this.productData,
    //   };
    //   this.dispatch(AddToCart(data));
    // }
  }
}
