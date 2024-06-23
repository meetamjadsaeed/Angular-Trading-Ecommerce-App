import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  similarProducts: any[] = [];
  reviews: any[] = [];
  currentPage: number = 1;
  pageCount: number;
  comment: string = '';
  rating: number = 0;
  wishLoading: boolean = false;
  loading: boolean = false;
  color: string = '';
  token: string;
  userData: any;
  socialLinks: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.loadProductDetails(productId);
  }

  loadProductDetails(productId: string): void {
    this.productService.getProductDetails(productId).subscribe((res) => {
      this.product = res.data.product;
      this.loadSimilarProducts(this.product.id);
      this.loadProductReviews(this.product.id, this.currentPage);
    });
  }

  loadSimilarProducts(productId: string): void {
    this.productService.getSimilarProducts(productId).subscribe((res) => {
      this.similarProducts = res.data;
    });
  }

  loadProductReviews(productId: string, page: number): void {
    this.productService
      .getSelectedProductReviews(productId, page)
      .subscribe((res) => {
        this.reviews = res.data.data;
        this.pageCount = Math.ceil(res.data.total / res.data.per_page);
      });
  }

  addWishList(): void {
    this.wishLoading = true;
    const data = { product_id: this.product.id };
    this.productService.addWishList(data, this.token).subscribe(
      (res) => {
        this.wishLoading = false;
        alert('Product added to wishlist');
      },
      (err) => {
        this.wishLoading = false;
        alert('Error adding to wishlist');
      }
    );
  }

  addToCart(): void {
    const tradeProduct = this.product.is_trade == 1;
    if (this.product.current_stock <= 0) {
      alert('Item is out of stock');
      return;
    }
    // Implement color selection logic if necessary

    const data = {
      id: this.product.id,
      price: this.product.unit_price,
      quantity: tradeProduct ? this.product.trade_qty : 1,
      color: this.color || this.product.colors,
      productitem: this.product,
    };
    this.productService.addToCart(data).subscribe(
      () => {
        alert('Item added to cart');
        this.router.navigate(['/product-cart']);
      },
      (err) => {
        console.error('Error adding to cart', err);
        alert('Error adding to cart');
      }
    );
  }

  sendMessageToSupplier(seller: any): void {
    // Implement logic for sending message to seller
    this.router.navigate(['/auth/chats/', seller.name]);
  }

  submitRating(): void {
    if (!this.rating || !this.comment) {
      alert('Please enter all fields');
      return;
    }
    const data = {
      product_id: this.product.id,
      comment: this.comment,
      rating: this.rating,
    };
    this.productService.postProductRating(data).subscribe(
      () => {
        alert('Review submitted successfully');
        this.rating = 0;
        this.comment = '';
        this.loadProductReviews(this.product.id, this.currentPage);
      },
      (err) => {
        console.error('Error submitting review', err);
        alert('Error submitting review');
      }
    );
  }
}
