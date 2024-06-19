import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hotdeals',
  templateUrl: './hotdeals.component.html',
  styleUrls: ['./hotdeals.component.css'],
})
export class HotdealsComponent implements OnInit {
  bannerData: any[] = []; // Adjust type according to your API response
  // Define other properties as needed

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBannerData();
    // Initialize other data fetching methods as needed
  }

  fetchBannerData() {
    this.http
      .get<any>('API_URL') // Replace 'API_URL' with your actual API endpoint
      .subscribe(
        (data) => {
          // Process API response as needed
          this.bannerData = data?.filter(
            (item) => item.banner_type === 'product_page'
          );
        },
        (error) => {
          console.error('Error fetching banner data', error);
        }
      );
  }

  // Define other methods for fetching products, handling filters, pagination, etc.
}
