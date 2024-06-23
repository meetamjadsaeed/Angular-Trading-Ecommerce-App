import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr'; // Replace with your toast service
import { ProductsService } from '../../services/products.service';
import { BannersService } from '../../services/banners.service';

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

  constructor(
    private http: HttpClient,
    private router: Router,
    private productService: ProductsService,
    private bannerService: BannersService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getHomeBanner();
  }

  getAllProducts() {
    this.productService.getAllProducts(this.currentPage).subscribe(
      (res) => {
        this.productsData = res?.data?.data?.data;
        this.productImages = res?.data?.data?.products?.data;
      },
      (err) => {
        console.error(err);
        this.toastr.error('Failed to fetch products');
      }
    );
  }

  getHomeBanner() {
    this.bannerService.getMainBanners().subscribe(
      (res) => {
        this.bannerData = res?.data.filter(
          (item) => item.banner_type === 'main_banner'
        );
      },
      (err) => {
        console.error(err);
        this.toastr.error('Failed to fetch banners');
      }
    );
  }

  submitSearch(event: any) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.searchSpinLoad = true;
      if (!this.productsSearch) {
        this.searchSpinLoad = false;
        this.toastr.warning('Please enter a search term');
        return;
      }
      this.productService.searchProducts(this.productsSearch).subscribe(
        (res) => {
          this.searchData = res?.data?.data?.products?.data;
          this.searchSpinLoad = false;
        },
        (err) => {
          console.error(err);
          this.searchSpinLoad = false;
          this.toastr.error('Failed to search products');
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
    this.productService.getProductsByCategory(id).subscribe(
      (res) => {
        this.productsData = res?.data?.data?.data;
        this.productImages = res?.data?.data?.products?.data;
      },
      (err) => {
        console.error(err);
        this.toastr.error('Failed to fetch products by category');
      }
    );
  }

  navigateTo(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
