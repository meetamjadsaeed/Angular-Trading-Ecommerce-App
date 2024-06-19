import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Assuming HttpClient is used for API calls
import { environment } from '../../environments/environment'; // Import your environment file

@Component({
  selector: 'app-productspage',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'], // Adjust path to your CSS
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

  // Inject ActivatedRoute and HttpClient
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

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
    // Adjust API endpoint and parameters as per your backend
    // this.http.get(`${environment.apiBaseUrl}/products`, { params: { currentPage: this.currentPage.toString(), bidi, ...data } })
    //   .subscribe((res: any) => {
    //     this.productsData = res?.data?.data?.products?.data;
    //     this.productImages = res?.data?.data?.products?.data;
    //     this.spinLoad = false;
    //     const total = res?.data?.data?.products?.total;
    //     const limit = res?.data?.data?.products?.per_page;
    //     this.pageCount = Math.ceil(total / limit);
    //   }, error => {
    //     this.spinLoad = false;
    //     console.error('Error fetching products', error);
    //   });
  }

  handleSelectCategory(id: string): void {
    this.checked = id;
  }

  handlePageClick(data: any): void {
    this.currentPage = data?.selected + 1;
  }

  handleSelectCate(id: string, checked: boolean): void {
    if (checked) {
      this.CateId = id;
      const bidi = this.Parameters?.Id;
      const data = {
        highToLow: this.highToLow,
        price_start: this.startPrice,
        price_end: this.endPrice,
        category_id: '',
        subcategory_id: id,
        brand_id: this.brandId,
      };
      this.getProductsRequest(null, data);
    } else {
      this.CateId = null;
      const bidi = this.Parameters?.Id;
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
  }

  handleSelectBrand(id: number, checked: boolean): void {
    const brandExist = this.brandId.indexOf(id);
    if (brandExist !== -1) {
      this.brandId.splice(brandExist, 1);
    } else {
      this.brandId.push(id);
    }
    const bidi = this.Parameters?.Id;
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

  getHomeBanner(): void {
    const data = { type: 'all' };
    // Adjust API endpoint for fetching banners
    // this.http.get(`${environment.apiBaseUrl}/home/banner`, { params: data })
    //   .subscribe((res: any) => {
    //     const arr = res?.data?.filter((item: any) => item.banner_type === 'product_page');
    //     this.bannerData = arr.length > 0 ? arr[0] : null;
    //   }, error => {
    //     console.error('Error fetching banners', error);
    //   });
  }

  HandleNext(): void {
    if (this.NextDataUrl) {
      this.http.get(this.NextDataUrl).subscribe(
        (data: any) => {
          this.productsData = data?.data?.data?.data;
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
      this.http.get(this.PreDataUrl).subscribe(
        (data: any) => {
          this.productsData = data?.data?.data?.data;
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
    const bidi = this.Parameters?.Id;
    const data = {
      highToLow: this.highToLow,
      price_start: this.startPrice,
      price_end: this.endPrice,
      category_id: '',
      subcategory_id: this.CateId,
      brand_id: this.brandId,
    };
    // this.getProductsRequest();
  }

  HIghLowFunc(e: string): void {
    this.highToLow = e;
    const bidi = this.Parameters?.Id;
    const data = {
      highToLow: e,
      price_start: this.startPrice,
      price_end: this.endPrice,
      category_id: '',
      subcategory_id: this.CateId,
      brand_id: this.brandId,
    };
    // this.getProductsRequest();
  }

  // You can adjust any other lifecycle hooks and methods as per your requirements
}
