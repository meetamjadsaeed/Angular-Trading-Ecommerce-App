import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { SellerActionService } from '../services/seller-action.service';
// import { SellerReducerService } from '../services/seller-reducer.service';
// import { GetAllAttribute } from '../network/seller-network.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css'],
})
export class AddNewProductComponent implements OnInit {
  currentCategories: any[];
  currentColors: any[];
  currentBrands: any[];
  currentAttributes: any[] = [];
  trade: boolean;

  constructor(
    private route: ActivatedRoute
  ) // private sellerReducerService: SellerReducerService,
  // private sellerActionService: SellerActionService
  {}

  ngOnInit() {
    // this.currentCategories = this.sellerReducerService.getCategoriesData();
    // this.currentColors = this.sellerReducerService.getColorsData();
    // this.currentBrands = this.sellerReducerService.getBrands();
    // this.trade = this.route.snapshot.queryParams.is_trade === '1';

    this.getAllAttributes();
  }

  getAllAttributes() {
    // const token = this.sellerReducerService.getSellerToken();
    // GetAllAttribute(token)
    //   .then(res => {
    //     this.currentAttributes = res?.data?.data || [];
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  }
}
