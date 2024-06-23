import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishListService } from '../../services/wish-list.service';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
})
export class BookmarkComponent implements OnInit {
  allStates: any;
  Token: string | undefined;
  UserData: any;
  bookMarkData: any[] = [];
  clearLoading: boolean = false;
  spinLoad: boolean = false;
  pageCount: number | undefined;
  currentPage: number = 1;

  constructor(
    private wishlistService: WishListService,
    private authService: AuthService,
    private cartService: CartService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getToken().subscribe((token) => {
      this.Token = token;
      this.getWishList();
    });

    // You may fetch other necessary data (like user details) here if needed
    this.authService.getUserData().subscribe((userData) => {
      this.UserData = userData;
    });

    // Example of subscribing to cart state if needed
    // this.cartService.getCartData().subscribe(state => {
    //   this.allStates = state;
    // });
  }

  getWishList(): void {
    this.spinLoad = true;
    this.wishlistService.getWishlist(this.currentPage, this.Token).subscribe(
      (res: any) => {
        this.spinLoad = false;
        this.bookMarkData = res?.data?.data?.wishlist?.data;
        const total = res?.data?.data?.wishlist?.total;
        const limit = res?.data?.data?.wishlist?.per_page;
        this.pageCount = Math.ceil(total / limit);
      },
      (err: any) => {
        console.error(err);
        this.spinLoad = false;
      }
    );
  }

  clearBookmarkHandler(e: any): void {
    e.preventDefault();
    this.clearLoading = true;
    this.wishlistService.clearWishlist(this.UserData?.id, this.Token).subscribe(
      (res: any) => {
        this.clearLoading = false;
        this.bookMarkData = res?.data?.data;
        this.toastService.showSuccess('Successfully cleared wishlist!');
      },
      (err: any) => {
        this.clearLoading = false;
        console.error(err);
      }
    );
  }

  addToCartHandler(item: any): void {
    const checkItemAlreadyExist = this.allStates?.filter(
      (val: any) => val?.id === item?.product?.id
    );
    if (checkItemAlreadyExist.length > 0) {
      this.toastService.showInfo('Item Already Exist in Cart');
      return;
    } else {
      const colorData = JSON.parse(item?.product?.colors);
      const data = {
        id: item?.product?.id,
        price: item?.product?.unit_price,
        quantity: 1,
        color: colorData[0],
        productitem: item?.product,
      };
      this.cartService.addToCart(data).subscribe(
        () => {
          this.deleteFromWishlistHandler(item?.product?.id);
        },
        (err: any) => {
          console.error(err);
        }
      );
    }
  }

  deleteFromWishlistHandler(productId: string): void {
    this.spinLoad = true;
    this.wishlistService.deleteFromWishlist(productId, this.Token).subscribe(
      () => {
        this.spinLoad = false;
        this.bookMarkData = this.bookMarkData.filter(
          (item) => item.product.id !== productId
        );
      },
      (err: any) => {
        console.error(err);
        this.spinLoad = false;
      }
    );
  }

  handlePageClick(data: any): void {
    this.currentPage = data?.selected + 1;
    this.getWishList();
  }

  navigateBack(): void {
    this.router.navigate(['/blog']); // Adjust navigation as necessary
  }
}
