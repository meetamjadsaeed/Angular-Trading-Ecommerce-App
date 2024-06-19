// src/app/components/product-detail/product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { ProductService } from 'src/app/services/product.service';
import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/store/app.state';
// import { AddToCart } from 'src/app/store/actions/cart.actions';
// import { SetSender } from 'src/app/store/actions/chat.actions';

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
    // private productService: ProductService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    // this.token = this.store.select((state) => state.auth.token);
    this.userData = this.store.select((state) => state.auth.userData);
    this.socialLinks = this.store.select((state) => state.auth.socialMedia);

    this.loadProductDetails(productId);
  }

  loadProductDetails(productId: string): void {
    // this.productService.getProductDetails(productId).subscribe((res) => {
    //   this.product = res.data.product;
    //   this.loadSimilarProducts(this.product.id);
    //   this.loadProductReviews(this.product.id, this.currentPage);
    // });
  }

  loadSimilarProducts(productId: string): void {
    // this.productService.getSimilarProducts(productId).subscribe((res) => {
    //   this.similarProducts = res.data;
    // });
  }

  loadProductReviews(productId: string, page: number): void {
    // this.productService
    //   .getSelectedProductReviews(productId, page)
    //   .subscribe((res) => {
    //     this.reviews = res.data.data;
    //     this.pageCount = Math.ceil(res.data.total / res.data.per_page);
    //   });
  }

  addWishList(): void {
    // this.wishLoading = true;
    // const data = { product_id: this.product.id };
    // this.productService.addWishList(data, this.token).subscribe(
    //   (res) => {
    //     this.wishLoading = false;
    //     alert('Product added to wishlist');
    //   },
    //   (err) => {
    //     this.wishLoading = false;
    //     alert('Error adding to wishlist');
    //   }
    // );
  }

  addToCart(): void {
    // const tradeProduct = this.product.is_trade == 1;
    // if (this.product.current_stock <= 0) {
    //   alert('Item is out of stock');
    //   return;
    // }
    // const itemExists = this.store
    //   .select((state) => state.cart.cartData)
    //   .find((item) => item.id === this.product.id);
    // if (itemExists) {
    //   alert('Item already in cart');
    // } else {
    //   const colorData = JSON.parse(this.product.colors);
    //   const data = {
    //     id: this.product.id,
    //     price: this.product.unit_price,
    //     quantity: tradeProduct ? this.product.trade_qty : 1,
    //     color: this.color || colorData,
    //     productitem: this.product,
    //   };
    //   this.store.dispatch(AddToCart(data));
    //   this.router.navigate(['/product-cart']);
    // }
  }

  sendMessageToSupplier(seller: any): void {
    // this.store.dispatch(SetSender(seller));
    // this.router.navigate(['/auth/chats/', seller.name]);
  }

  submitRating(): void {
    // this.loading = true;
    // if (!this.rating || !this.comment) {
    //   alert('Please enter all fields');
    //   this.loading = false;
    //   return;
    // }
    // const data = {
    //   product_id: this.product.id,
    //   comment: this.comment,
    //   rating: this.rating,
    // };
    // this.productService.postProductRating(data, this.token).subscribe(
    //   (res) => {
    //     this.loading = false;
    //     alert('Review submitted successfully');
    //     this.rating = 0;
    //     this.comment = '';
    //     this.loadProductReviews(this.product.id, this.currentPage);
    //   },
    //   (err) => {
    //     this.loading = false;
    //     alert('Error submitting review');
    //   }
    // );
  }
}
