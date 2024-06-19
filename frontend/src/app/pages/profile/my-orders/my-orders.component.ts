import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { WishListData } from '../../../redux/actions/AuthActions';
// import { GetAllOrders, GetWishList } from '../../../network/Network';
// import { ImageUrl } from '../../../network/ApiUrl';
// import { SpinnerCircular } from 'spinners-react';
// import * as fromApp from '../../../store/app.reducer';
// import { ViewOrderModal } from '../../components/Modal/ViewOrderModal';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  myOrdersData: any[] = [];
  spinLoad: boolean = true;
  pageCount: number | undefined;
  currentPage: number = 1;
  limit: number = 10;
  isOpenModal: boolean = false;
  selectedData: any;

  // constructor(private router: Router, private store: Store<fromApp.AppState>) {}
  constructor() {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  handlePageClick(data: any): void {
    this.currentPage = data?.selected + 1;
    this.getAllOrders();
  }

  getAllOrders(): void {
    // this.spinLoad = true;
    // GetAllOrders(this.currentPage, this.Token)
    //   .then((res: any) => {
    //     this.myOrdersData = res?.data?.data?.data;
    //     const total = res?.data?.data?.total;
    //     const limit = res?.data?.data?.per_page;
    //     this.pageCount = Math.ceil(total / limit);
    //     this.spinLoad = false;
    //   })
    //   .catch((err: any) => {
    //     console.log(err);
    //     this.spinLoad = false;
    //   });
  }

  viewOrderHandler(item: any): void {
    this.isOpenModal = true;
    this.selectedData = item;
  }
}
