import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { GetAllOrders } from '../../../network/SellerNetwork';
// import { OrdersData } from '../../../redux/actions/SellerAction';
// import { SellerReducer } from '../../../redux/reducers/SellerReducer';
// import { SellerFooterComponent } from '../../components/seller-footer/seller-footer.component';
// import { SellerHeaderComponent } from '../../components/seller-header/seller-header.component';
// import { SellerSideBarComponent } from '../seller-side-bar/seller-side-bar.component';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css'],
})
export class MyOrderComponent implements OnInit {
  searchQuery: string | null = null;
  arrangement: string | null = null;
  currentPage: number = 1;
  orders: any[] = [];
  pageCount: number = 0;
  token: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.currentPage = params['page'] ?? 1;
    //   this.searchQuery = params['search'] ?? null;
    //   this.arrangement = params['order'] ?? null;
    //   this.token = SellerReducer.sellerToken;
    //   this.getAllOrders();
    // });
  }

  getAllOrders(): void {
    // GetAllOrders(this.currentPage, this.token, this.searchQuery, this.arrangement)
    //   .then(res => {
    //     let tempOrders = res?.data?.data?.orders ?? [];
    //     tempOrders = tempOrders.map(o => {
    //       return {
    //         ...o,
    //         orderImage: o.details[0].product.thumbnail_url
    //       };
    //     });
    //     this.orders = tempOrders;
    //     const total = res?.data?.data?.total_size;
    //     this.pageCount = Math.ceil(total / 10);
    //     window.scrollTo(0, 0);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  handlePageClick(event: any): void {
    this.currentPage = event.selected + 1;
    this.getAllOrders();
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
        return 'inactive';
    }
  }
}
