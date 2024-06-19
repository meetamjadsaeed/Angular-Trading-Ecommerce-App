import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-sidebar',
  templateUrl: './seller-sidebar.component.html',
  styleUrls: ['./seller-sidebar.component.css'],
})
export class SellerSidebarComponent implements OnInit {
  user = { f_name: '', l_name: '', image: '', phone: '', email: '' };
  imagePreview: string | null = null;
  notifications: any[] = [];
  userImageUrl = 'YOUR_API_URL'; // Replace with your actual API URL

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Fetch user data and notifications
    this.http.get('URL_TO_FETCH_USER_DATA').subscribe((userData: any) => {
      this.user = userData;
    });

    this.http.get('URL_TO_FETCH_NOTIFICATIONS').subscribe((res: any) => {
      this.notifications = res?.data?.notifications ?? [];
    });
  }

  updateReadOnAll(): void {
    const data = this.notifications
      .filter((x) => x.read === 0)
      .map((x) => x.id);

    this.http
      .post('URL_TO_MARK_NOTIFICATIONS_BULK', { notifications: data })
      .subscribe(
        () => {
          // Handle success or navigation if needed
        },
        (error) => {
          console.error('Error marking notifications:', error);
        }
      );
  }

  handleImageInputChange(event: any): void {
    const files = event.target.files || event.dataTransfer.files;
    const allowedTypes = ['jpg', 'jpeg', 'png'];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = file.name.split('.');
      const extension = fileName[fileName.length - 1].toLowerCase();

      if (!allowedTypes.includes(extension)) {
        alert('Your file format is not supported');
        return;
      }

      const formData = new FormData();
      formData.append('f_name', this.user.f_name);
      formData.append('l_name', this.user.l_name);
      formData.append('phone', this.user.phone);
      formData.append('email', this.user.email);
      formData.append('image', file);

      this.http.post('URL_TO_UPDATE_PROFILE', formData).subscribe(
        () => {
          // Handle success or reset form
          this.imagePreview = null;
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }

  handleClickNotification(notiId: number, modalId: string, type: string): void {
    this.http.post('URL_TO_MARK_NOTIFICATION', { notiId }).subscribe(
      () => {
        // Handle success or navigation if needed
        if (type.includes('Order')) {
          this.router.navigate(['/seller/order-detail/', modalId]);
        }
      },
      (error) => {
        console.error('Error marking notification:', error);
      }
    );
  }
}
