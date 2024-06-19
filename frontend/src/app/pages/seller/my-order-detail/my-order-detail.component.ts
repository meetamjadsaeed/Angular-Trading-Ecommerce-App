import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { GetOrder } from '../../../network/SellerNetwork';
// import { SellerReducer } from '../../../redux/reducers/SellerReducer';
// import { SellerFooterComponent } from '../../components/seller-footer/seller-footer.component';
// import { SellerHeaderComponent } from '../../components/seller-header/seller-header.component';
// import { SellerSideBarComponent } from '../seller-side-bar/seller-side-bar.component';

@Component({
  selector: 'app-my-order-detail',
  templateUrl: './my-order-detail.component.html',
  styleUrls: ['./my-order-detail.component.css'],
})
export class MyOrderDetailComponent implements OnInit {
  order_id: string | null = null;
  token: string = '';
  order: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.order_id = params['order_id'] ?? null;
    //   this.token = SellerReducer.sellerToken;
    //   this.getOrderDetails();
    // });
  }

  getOrderDetails(): void {
    // if (this.order_id !== null) {
    //   GetOrder(this.order_id, this.token)
    //     .then(res => {
    //       this.order = res?.data?.data ?? {};
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }

  getStatusClass(status: string | null): string {
    switch (status) {
      case 'completed':
      case 'delivered':
        return 'active';
      case 'pending':
      case 'cancelled':
        return 'inactive';
      case 'shipping':
        return 'shipping';
      default:
        return 'processing';
    }
  }
}
