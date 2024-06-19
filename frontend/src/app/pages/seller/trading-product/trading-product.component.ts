import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-trading-product',
  templateUrl: './trading-product.component.html',
  styleUrls: ['./trading-product.component.css'],
})
export class TradingProductComponent implements OnInit {
  currentPage: number = 1;
  searchQuery: string | null = null;
  arrangement: string | null = null;
  products: any[] = [];
  pageCount: number = 0;
  checkProductList: number[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentPage = +params['page'] || 1;
      this.searchQuery = params['search'] || null;
      this.arrangement = params['order'] || null;

      this.getTradingProducts();
    });
  }

  getTradingProducts(): void {
    const apiUrl = `YOUR_API_URL_HERE/trading-products?page=${this.currentPage}&search=${this.searchQuery}&order=${this.arrangement}`;

    this.http.get(apiUrl).subscribe(
      (res: any) => {
        this.products = res?.data?.products ?? [];
        const total = res?.data?.total_size ?? 0;
        this.pageCount = Math.ceil(total / 10);
        window.scrollTo(0, 0);
      },
      (error) => {
        console.error('Error fetching trading products:', error);
      }
    );
  }

  handlePageClick(event: any): void {
    this.currentPage = event?.selected + 1;
    this.updateRouteParams();
  }

  handleSelect(productId: number): void {
    if (this.checkProductList.includes(productId)) {
      this.checkProductList = this.checkProductList.filter(
        (id) => id !== productId
      );
    } else {
      this.checkProductList.push(productId);
    }
  }

  handleBulkDelete(): void {
    const deleteUrl = `YOUR_API_URL_HERE/delete-products`;
    const payload = { ids: this.checkProductList };

    this.http.post(deleteUrl, payload).subscribe(
      () => {
        // Handle success
        this.location.go('/seller/tradingproduct');
      },
      (error) => {
        console.error('Error deleting products:', error);
      }
    );
  }

  handleDelete(productId: number): void {
    const deleteUrl = `YOUR_API_URL_HERE/delete-product`;
    const payload = { id: productId };

    this.http.post(deleteUrl, payload).subscribe(
      () => {
        // Handle success
        this.location.go('/seller/tradingproduct');
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }

  handleExcelInputChange(event: any): void {
    const files = event.target.files || event.dataTransfer.files;
    const allowedTypes = ['xlsx', 'csv'];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = file.name.split('.');
      const extension = fileName[fileName.length - 1].toLowerCase();

      if (!allowedTypes.includes(extension)) {
        alert('Your file format is not supported');
        return;
      }

      const formData = new FormData();
      formData.append('products_file', file);

      const uploadUrl = `YOUR_API_URL_HERE/upload-products`;

      this.http.post(uploadUrl, formData).subscribe(
        () => {
          // Handle success
          this.reload();
        },
        (error) => {
          console.error('Error uploading products:', error);
        }
      );
    }
  }

  reload(): void {
    this.router.navigate(['/seller/tradingproduct'], {
      queryParamsHandling: 'preserve',
    });
  }

  updateRouteParams(): void {
    this.router.navigate(['/seller/tradingproduct'], {
      queryParams: {
        page: this.currentPage,
        search: this.searchQuery,
        order: this.arrangement,
      },
      queryParamsHandling: 'merge',
    });
  }
}
