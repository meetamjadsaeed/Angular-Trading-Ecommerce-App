import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order.service'; // Adjust path as per your file structure
import { ViewOrderModal } from '../../components/Modal/ViewOrderModal';

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

  constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  handlePageClick(data: any): void {
    this.currentPage = data?.selected + 1;
    this.getAllOrders();
  }

  getAllOrders(): void {
    this.spinLoad = true;
    this.orderService.getAllOrders(this.currentPage, this.limit).subscribe(
      (res: any) => {
        this.myOrdersData = res?.data?.data;
        const total = res?.data?.total;
        const limit = res?.data?.per_page;
        this.pageCount = Math.ceil(total / limit);
        this.spinLoad = false;
      },
      (err: any) => {
        console.error('Error fetching orders', err);
        this.spinLoad = false;
      }
    );
  }

  viewOrderHandler(item: any): void {
    this.isOpenModal = true;
    this.selectedData = item;
  }
}
