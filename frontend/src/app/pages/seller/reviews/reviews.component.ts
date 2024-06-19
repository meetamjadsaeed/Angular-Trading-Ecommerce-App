import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { SellerReducer } from '../../../redux/reducers/SellerReducer';
// import { SelectedProductReviews } from '../../../network/Network';
// import { ProductDetails } from '../../../network/SellerNetwork';
// import { ProductAllReviews } from '../../../redux/actions/CartActions';
// import { useDispatch, useSelector } from '@angular-redux/store';
// import { AllReviewsComponent } from '../../components/ReviewCard/AllReviews.component';
// import { SellerHeaderComponent } from '../../components/SellerHeader/SellerHeader.component';
// import { SellerSideBarComponent } from './SellerSideBar.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  product: string;
  page: string;
  productReview: any[] = [];
  pageCount: number;
  currentPage: number = 1;
  paramData: any;
  // sellerToken = this.store.get(SellerReducer.sellerToken);

  constructor(
    private route: ActivatedRoute // private store: NgRedux<any>,
  ) // private dispatch: Dispatcher
  {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.product = params.get('product');
      this.page = params.get('page');
      this.loadReviews();
      // this.ProductDetails(this.product, this.sellerToken);
    });
  }

  handlePageClick(data: any): void {
    this.currentPage = data.selected + 1;
    this.loadReviews();
  }

  loadReviews(): void {
    // SelectedProductReviews(this.product, this.currentPage)
    //   .then(res => {
    //     this.productReview = res?.data?.data?.data;
    //     this.dispatch(ProductAllReviews([...res?.data?.data?.data]));
    //     const total = res?.data?.data?.total;
    //     const limit = res?.data?.data?.per_page;
    //     this.pageCount = Math.ceil(total / limit);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  }

  ProductDetails(product: string, sellerToken: any): void {
    // ProductDetails(product, sellerToken)
    //   .then(res => {
    //     this.paramData = res?.data?.data?.product;
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  }

  refreshReviews(): void {
    this.loadReviews();
  }
}
