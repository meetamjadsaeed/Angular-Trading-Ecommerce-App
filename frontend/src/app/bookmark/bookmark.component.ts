// src/app/bookmark/bookmark.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/models/app-state.model';
// import { GetWishList } from '../../network/Network';
// import { ClearWishList, DeleteWishList } from '../../services/network.service';
// import { AddToCart } from '../../redux/actions/cart.actions';
// import {
//   RemoveWishListData,
//   WishListData,
// } from '../../redux/actions/auth.actions';
// import { ToastService } from '../../services/toast.service';
// import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
})
export class BookmarkComponent implements OnInit {
  allStates: any;
  Token: any;
  UserData: any;
  wishlistDataRedux: any;
  bookMarkData: any[] = [];
  clearLoading: boolean = false;
  spinLoad: boolean = false;
  pageCount: number | undefined;
  currentPage: number = 1;

  constructor() {} // private spinnerService: SpinnerService // private toastService: ToastService, // private store: Store<AppState>,

  ngOnInit(): void {
    // this.store
    //   .select('CartReducer')
    //   .subscribe((state) => (this.allStates = state.cartData));
    // this.store.select('AuthReducer').subscribe((state) => {
    //   this.Token = state.token;
    //   this.UserData = state.users;
    //   this.wishlistDataRedux = state.wishlistData;
    // });
    // this.getWishList();
  }

  getWishList(): void {
    // this.spinLoad = true;
    // GetWishList(this.currentPage, this.Token).subscribe(
    //   (res: any) => {
    //     this.spinLoad = false;
    //     this.bookMarkData = res?.data?.data?.wishlist?.data;
    //     this.store.dispatch(
    //       WishListData({ wishlistData: res?.data?.data?.wishlist?.data })
    //     );
    //     const total = res?.data?.data?.wishlist?.total;
    //     const limit = res?.data?.data?.wishlist?.per_page;
    //     this.pageCount = Math.ceil(total / limit);
    //   },
    //   (err: any) => {
    //     console.error(err);
    //     this.spinLoad = false;
    //   }
    // );
  }

  clearBookmarkHandler(e: any): void {
    // e.preventDefault();
    // this.clearLoading = true;
    // ClearWishList(this.UserData?.id, this.Token).subscribe(
    //   (res: any) => {
    //     this.clearLoading = false;
    //     this.store.dispatch(WishListData({ wishlistData: res?.data?.data }));
    //     this.bookMarkData = res?.data?.data;
    //     this.toastService.showSuccess('Successfully removed!');
    //   },
    //   (err: any) => {
    //     this.clearLoading = false;
    //     console.error(err);
    //   }
    // );
  }

  addToCartHandler(item: any): void {
    // const checkItemAlreadyExist = this.allStates.filter(
    //   (val: any) => val?.id === item?.product?.id
    // );
    // if (checkItemAlreadyExist.length > 0) {
    //   this.toastService.showInfo('Item Already Exist in Cart');
    //   return;
    // } else {
    //   const colorData = JSON.parse(item?.product?.colors);
    //   const data = {
    //     id: item?.product?.id,
    //     price: item?.product?.unit_price,
    //     quantity: 1,
    //     color: colorData[0],
    //     productitem: item?.product,
    //   };
    //   this.store.dispatch(AddToCart(data));
    //   this.deleteWishListHandler(item?.product?.id);
    // }
  }

  deleteWishListHandler(id: any, index?: number): void {
    //   this.spinLoad = true;
    //   DeleteWishList(id, this.Token).subscribe(
    //     (res: any) => {
    //       this.spinLoad = false;
    //       this.store.dispatch(RemoveWishListData({ id }));
    //     },
    //     (err: any) => {
    //       console.error(err);
    //       this.spinLoad = false;
    //     }
    //   );
    // }
    // handlePageClick(data: any): void {
    //   this.currentPage = data?.selected + 1;
    //   this.getWishList();
  }
}
