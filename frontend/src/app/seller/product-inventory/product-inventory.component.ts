import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
// import { GetAllProducts, addProductBulk, deleteProduct, deleteProducts } from '../../../network/SellerNetwork';
// import { SellerReducer } from '../../../redux/reducers/SellerReducer';
// import { toast } from 'react-toastify';

@Component({
  selector: 'app-product-inventory',
  templateUrl: './product-inventory.component.html',
  styleUrls: ['./product-inventory.component.css'],
})
export class ProductInventoryComponent implements OnInit {
  currentPage: number = 1;
  searchQuery: string | null = null;
  arrangement: string | null = null;
  checkProductList: number[] = [];
  products: any[] = [];
  pageCount: number = 0;
  token: string = '';
  excelFile: File | null = null;

  @ViewChild('excelFileInput') excelFileInput!: ElementRef<HTMLInputElement>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.token = SellerReducer.sellerToken;
    this.getProducts();
  }

  getProducts(): void {
    // GetAllProducts(this.currentPage, this.token, this.searchQuery, this.arrangement)
    //   .then(res => {
    //     this.products = res?.data?.data?.products ?? [];
    //     const total = res?.data?.data?.total_size;
    //     this.pageCount = Math.ceil(total / 10);
    //     window.scrollTo(0, 0);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  handlePageClick(data: any): void {
    this.currentPage = data?.selected + 1;
    this.getProducts();
  }

  handleSelect(e: Event, productId: number): void {
    if (e.target instanceof HTMLInputElement) {
      const isChecked = e.target.checked;
      if (isChecked) {
        this.checkProductList.push(productId);
      } else {
        const index = this.checkProductList.indexOf(productId);
        if (index !== -1) {
          this.checkProductList.splice(index, 1);
        }
      }
    }
  }

  async handleBulkDelete(): Promise<void> {
    // const x = await deleteProducts({ ids: this.checkProductList }, this.token);
    // if (x) {
    //   window.location.href = '/seller/ProductInventory';
    // }
  }

  async handleDelete(id: number): Promise<void> {
    // const x = await deleteProduct({ id: id }, this.token);
    // if (x) {
    //   window.location.href = '/seller/ProductInventory';
    // }
  }

  async handleExcelInputChange(event: Event): Promise<void> {
    const element = event.target as HTMLInputElement;
    const files = element.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const fileName = files[i].name.split('.');
        const extension = fileName[fileName.length - 1];
        const allowedTypes = ['xlsx', 'csv'];
        if (!allowedTypes.includes(extension.toLowerCase())) {
          alert('Your file format is not supported');
          this.excelFileInput.nativeElement.value = '';
          return;
        }
        const formData = new FormData();
        formData.append('products_file', files[i]);
        // try {
        //   const x = await addProductBulk(formData, this.token);
        //   if (x) {
        //     this.getProducts();
        //   } else {
        //     toast.error('Excel file format is not correct. Please contact the developer.');
        //   }
        // } catch (err) {
        //   console.log(err);
        //   toast.error('Error uploading products.');
        // }
      }
    }
  }

  navigateToProductDetail(productId: number): void {
    this.router.navigate(['/seller/productdetail/', productId]);
  }

  navigateToReview(productId: number): void {
    this.router.navigate(['/seller/review/', productId, 1]);
  }

  getStatusButton(status: any): string {
    switch (status) {
      case 'completed':
      case 'delivered':
        return 'active';
      case 'pending':
      case 'cancelled':
        return 'inactive';
      case 'shipping':
        return 'shipping';
      case 1:
        return 'active';
      case 0:
        return 'inactive';
      default:
        return 'processing';
    }
  }
}
