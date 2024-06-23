import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { BannersService } from '../../services/banners.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  Categories: any;
  BrandsDataRedux: any;
  AdsData: any;
  TopProductsRedux: any;
  productsData: any[] = [];
  NextDataUrl: string | null = null;
  PreDataUrl: string | null = null;
  spinLoad: boolean = false;
  pageCount: number | undefined;
  currentPage: number = 1;
  startPrice: number = 1;
  endPrice: number = 10000;
  highToLow: boolean | null = null;
  bannerData: any;
  loader: boolean = true;

  constructor(
    private allProducts: ProductsService,
    private allBanners: BannersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.spinLoad = true;
    this.allProducts.getProducts().subscribe(
      (data) => {
        this.productsData = data.data;
        this.NextDataUrl = data.next_page_url;
        this.PreDataUrl = data.prev_page_url;
        this.pageCount = Math.ceil(data.total / data.per_page);
        this.spinLoad = false;
      },
      (error) => {
        console.error(error);
        this.spinLoad = false;
      }
    );

    this.allBanners.getBanners('z').subscribe(
      (data) => {
        this.bannerData = data;
      },
      (error) => {
        console.error(error);
        this.spinLoad = false;
      }
    );
  }

  handleNext(): void {
    if (this.NextDataUrl) {
      this.allProducts.getProductsByUrl(this.NextDataUrl).subscribe(
        (res) => {
          this.productsData = res.data.data;
          this.NextDataUrl = res.data.next_page_url;
          this.PreDataUrl = res.data.prev_page_url;
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }

  handlePrev(): void {
    if (this.PreDataUrl) {
      this.allProducts.getProductsByUrl(this.PreDataUrl).subscribe(
        (res) => {
          this.productsData = res.data.data;
          this.NextDataUrl = res.data.next_page_url;
          this.PreDataUrl = res.data.prev_page_url;
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }

  handlePriceFilter(): void {
    this.spinLoad = true;
    this.allProducts.filterProductsByPrice(this.startPrice, this.endPrice).subscribe(
      (res) => {
        this.productsData = res.data.data.products.data;
        this.pageCount = Math.ceil(res.data.data.products.total / res.data.data.products.per_page);
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
    this.allProducts.sortProductsByOrder(this.highToLow).subscribe(
      (res) => {
        this.productsData = res;
        this.NextDataUrl = res.next_page_url;
        this.PreDataUrl = res..prev_page_url;
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
