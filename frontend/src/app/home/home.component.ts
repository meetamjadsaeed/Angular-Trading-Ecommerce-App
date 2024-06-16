// home.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  HotDeals: any[] = [];
  AdsData: any[] = [];
  TopProductsRedux: any[] = [];
  tradeProductRedux: any[] = [];
  productsData: any[] = [];
  bannerData: any[] = [];
  loader: boolean = true;
  searchSpinLoad: boolean = false;
  searchData: any[] = [];
  productsSearch: string = '';
  productImages: any[] = [];
  checked: string = '';
  currentPage: number = 1;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getHomeBanner();
  }

  getAllProducts() {
    this.http.get<any>(`/api/products?page=${this.currentPage}`).subscribe(
      (res) => {
        this.productsData = res?.data?.data?.data;
        this.productImages = res?.data?.data?.products?.data;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getProductsFilter(id: string) {
    this.http.get<any>(`/api/products/filter/${id}`).subscribe(
      (res) => {
        // Handle response as needed
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getHomeBanner() {
    this.http.get<any>('/api/home/banner').subscribe(
      (res) => {
        this.bannerData = res?.data.filter(
          (item) => item.banner_type === 'main_banner'
        );
      },
      (err) => {
        console.error(err);
      }
    );
  }

  submitSearch(event: any) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.searchSpinLoad = true;
      if (!this.productsSearch) {
        // Handle error with toast or message
        this.searchSpinLoad = false;
        return;
      }
      this.http
        .get<any>(`/api/products/search/${this.productsSearch}`)
        .subscribe(
          (res) => {
            this.searchData = res?.data?.data?.products?.data;
            this.searchSpinLoad = false;
          },
          (err) => {
            console.error(err);
            // Handle error with toast or message
            this.searchSpinLoad = false;
          }
        );
    }
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.getAllProducts();
  }

  handleSelectCategory(id: string) {
    this.checked = id;
    this.getProductsFilter(id);
  }

  navigateTo(url: string) {
    if (url) {
      window.open(url, '_blank'); // Open URL in a new tab
    }
  }
}
