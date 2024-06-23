// thankyou.component.ts

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css'],
})
export class ThankyouComponent {
  orderId: string | undefined;
  orderAmount: string | undefined;
  orderStatus: string | undefined;

  constructor(private route: ActivatedRoute) {
    const state = this.route.snapshot?.state?.data;
    this.orderId = state?.id;
    this.orderAmount = state?.order_amount;
    this.orderStatus = state?.order_status;
  }
}
