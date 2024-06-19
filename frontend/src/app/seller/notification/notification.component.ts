import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { GetAllNotifications, MarkNotification } from '../../../network/SellerNetwork';
// import { SellerReducer } from '../../../redux/reducers/SellerReducer';
// import { toast } from 'react-toastify';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notifications: any[] = [];
  token: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.token = SellerReducer.sellerToken;
    // this.getAllNotifications();
  }

  getAllNotifications(): void {
    // GetAllNotifications(this.token)
    //   .then(res => {
    //     this.notifications = res?.data?.data?.notifications ?? [];
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  handleClickNotification(notificationId: number): void {
    // MarkNotification(notificationId, this.token)
    //   .then(res => {
    //     this.router.navigate(['/seller/order-detail/', notificationId]);
    //   })
    //   .catch(err => {
    //     toast.error(err?.response?.data?.payload?.message);
    //   });
  }
}
