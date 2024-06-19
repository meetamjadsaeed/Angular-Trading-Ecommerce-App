import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { PageData } from '../../../network/Network';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  Categories: any; // Adjust type based on actual data structure
  BrandsDataRedux: any; // Adjust type based on actual data structure
  AdsData: any; // Adjust type based on actual data structure
  TopProductsRedux: any; // Adjust type based on actual data structure
  productsData: any[] = [];
  NextDataUrl: string | null = null;
  PreDataUrl: string | null = null;
  spinLoad: boolean = false;
  pageCount: number | undefined;
  currentPage: number = 1;
  startPrice: number = 1;
  endPrice: number = 10000;
  highToLow: boolean | null = null;
  bannerData: any; // Adjust type based on actual data structure
  loader: boolean = true;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.spinLoad = true;
    this.http
      .get<any>('your-api-url') // Replace 'your-api-url' with actual API endpoint
      .subscribe(
        (res) => {
          this.productsData = res?.data?.data?.data;
          this.NextDataUrl = res?.data?.data?.next_page_url;
          this.PreDataUrl = res?.data?.data?.prev_page_url;
          this.pageCount = Math.ceil(
            res?.data?.data?.total / res?.data?.data?.per_page
          );
          this.spinLoad = false;
        },
        (err) => {
          console.error(err);
          this.spinLoad = false;
        }
      );

    // Additional API calls and data handling as needed (e.g., banner data)
    this.http
      .get<any>('your-banner-api-url') // Replace 'your-banner-api-url' with actual API endpoint
      .subscribe(
        (res) => {
          this.bannerData = res?.data;
        },
        (err) => {
          console.error(err);
        }
      );
  }

  handleNext(): void {
    if (this.NextDataUrl) {
      this.http.get<any>(this.NextDataUrl).subscribe(
        (res) => {
          this.productsData = res?.data?.data?.data;
          this.NextDataUrl = res?.data?.data?.next_page_url;
          this.PreDataUrl = res?.data?.data?.prev_page_url;
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }

  handlePrev(): void {
    if (this.PreDataUrl) {
      this.http.get<any>(this.PreDataUrl).subscribe(
        (res) => {
          this.productsData = res?.data?.data?.data;
          this.NextDataUrl = res?.data?.data?.next_page_url;
          this.PreDataUrl = res?.data?.data?.prev_page_url;
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }

  handlePriceFilter(): void {
    this.spinLoad = true;
    this.http
      .post<any>('your-price-filter-api-url', {
        startPrice: this.startPrice,
        endPrice: this.endPrice,
      })
      .subscribe(
        (res) => {
          this.productsData = res?.data?.data?.products?.data;
          this.pageCount = Math.ceil(
            res?.data?.data?.products?.total /
              res?.data?.data?.products?.per_page
          );
          this.spinLoad = false;
        },
        (err) => {
          console.error(err);
          this.spinLoad = false;
        }
      );
  }

  handleSortOrder(order: boolean): void {
    this.highToLow = order;
    this.spinLoad = true;
    this.http
      .post<any>('your-sort-api-url', { highToLow: this.highToLow })
      .subscribe(
        (res) => {
          this.productsData = res?.data?.data?.data;
          this.NextDataUrl = res?.data?.data?.next_page_url;
          this.PreDataUrl = res?.data?.data?.prev_page_url;
          this.spinLoad = false;
        },
        (err) => {
          console.error(err);
          this.spinLoad = false;
        }
      );
  }

  navigateToProductDetails(id: number): void {
    this.router.navigate(['/product', id]);
  }
}
