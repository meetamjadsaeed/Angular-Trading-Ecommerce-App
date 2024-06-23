import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../../services/toast.service'; // Adjust path as per your service

@Component({
  selector: 'app-productspage',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductspageComponent implements OnInit {
  Parameters: any;
  regularSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  checked: string | null = null;
  CateId: string | null = null;
  brandId: number[] = [];
  productsData: any[] = [];
  NextDataUrl: string | undefined;
  PreDataUrl: string | undefined;
  spinLoad = false;
  pageCount: number | undefined;
  currentPage = 1;
  startPrice = 1;
  endPrice = 10000;
  highToLow: string | null = null;
  productImages: any[] = [];
  bannerData: any;
  loader = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    // private applyCouponsService: ApplyCouponsService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.Parameters = params;
      this.getProductsRequest(this.checked);
    });
    this.getHomeBanner();
  }

  getProductsRequest(id: string | null, data?: any): void {
    this.spinLoad = true;
    const bidi = this.Parameters?.Id;
    this.productService
      .getProducts({ currentPage: this.currentPage.toString(), bidi, ...data })
      .subscribe(
        (res: any) => {
          this.productsData = res?.data?.data?.products?.data || [];
          this.productImages = res?.data?.data?.products?.data || [];
          this.spinLoad = false;
          const total = res?.data?.data?.products?.total || 0;
          const limit = res?.data?.data?.products?.per_page || 1;
          this.pageCount = Math.ceil(total / limit);
        },
        (error) => {
          this.spinLoad = false;
          console.error('Error fetching products', error);
        }
      );
  }

  handleSelectCategory(id: string): void {
    this.checked = id;
    this.CateId = id; // Update selected category ID
    this.fetchFilteredProducts();
  }

  handleSelectCate(id: string, checked: boolean): void {
    if (checked) {
      this.CateId = id;
    } else {
      this.CateId = null;
    }
    this.fetchFilteredProducts();
  }

  handleSelectBrand(id: number, checked: boolean): void {
    if (checked) {
      this.brandId.push(id);
    } else {
      const index = this.brandId.indexOf(id);
      if (index !== -1) {
        this.brandId.splice(index, 1);
      }
    }
    this.fetchFilteredProducts();
  }

  fetchFilteredProducts(): void {
    const data = {
      highToLow: this.highToLow,
      price_start: this.startPrice,
      price_end: this.endPrice,
      category_id: '',
      subcategory_id: this.CateId,
      brand_id: this.brandId,
    };
    this.getProductsRequest(null, data);
  }

  handlePageClick(data: any): void {
    this.currentPage = data?.selected + 1;
    this.fetchFilteredProducts();
  }

  getHomeBanner(): void {
    const params = { type: 'all' };
    this.productService.getHomeBanner(params).subscribe(
      (res: any) => {
        const arr = res?.data?.filter(
          (item: any) => item.banner_type === 'product_page'
        );
        this.bannerData = arr.length > 0 ? arr[0] : null;
      },
      (error) => {
        console.error('Error fetching banners', error);
      }
    );
  }

  HandleNext(): void {
    if (this.NextDataUrl) {
      this.productService.getNextPageData(this.NextDataUrl).subscribe(
        (data: any) => {
          this.productsData = data?.data?.data?.data || [];
          this.NextDataUrl = data?.data?.data?.next_page_url;
          this.PreDataUrl = data?.data?.data?.prev_page_url;
        },
        (error) => {
          console.error('Error fetching next page data', error);
        }
      );
    }
  }

  HandlePre(): void {
    if (this.PreDataUrl) {
      this.productService.getPreviousPageData(this.PreDataUrl).subscribe(
        (data: any) => {
          this.productsData = data?.data?.data?.data || [];
          this.PreDataUrl = data?.data?.data?.prev_page_url;
          this.NextDataUrl = data?.data?.data?.next_page_url;
        },
        (error) => {
          console.error('Error fetching previous page data', error);
        }
      );
    }
  }

  PriceFilterHandler(e: Event): void {
    e.preventDefault();
    this.fetchFilteredProducts();
  }

  HIghLowFunc(e: string): void {
    this.highToLow = e;
    this.fetchFilteredProducts();
  }
}
