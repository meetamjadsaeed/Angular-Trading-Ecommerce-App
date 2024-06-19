import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { NgRedux, select } from '@angular-redux/store';
// import { SellerReducer } from '../../../redux/reducers/SellerReducer';
// import { SelectedProductReviews, ProductDetails } from '../../../network/SellerNetwork';
// import { updateProduct } from '../../../redux/actions/SellerAction';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch, useSelector } from '@angular-redux/store';
// import { ImageWrapperComponent, SelectWrapperComponent, SwitchWrapperComponent, TextAreaWrapperComponent, TextWrapperComponent, toFormData } from '../../../Form/Element';
// import VariationComponent from './Product/Components/Variation.component';
// import ProductPriceSectionComponent from './Product/Components/ProductPrice.component';
// import { SellerHeaderComponent } from '../../components/SellerHeader/SellerHeader.component';
// import { SellerSideBarComponent } from './SellerSideBar.component';
// import { SellerFooterComponent } from '../../components/SellerFooter/SellerFooter.component';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const fileSize = 1000000;

const checkFileSize = (element: any) => {
  if (element.status == 'add' || element.status == 'del') return false;
  return element.file.size > fileSize;
};

const checkFileType = (element: any) => {
  if (element.status == 'add' || element.status == 'del') return false;
  return !SUPPORTED_FORMATS.includes(element.file.type);
};

@Component({
  selector: 'app-seller-product-detail',
  templateUrl: './seller-product-detail.component.html',
  styleUrls: ['./seller-product-detail.component.css'],
})
export class SellerProductDetailComponent implements OnInit {
  currentCategories: any[];
  currentColors: any[];
  currentBrands: any[];
  currentAttributes: any[];
  currentProduct: any = {};
  productCategory: any = {};
  productSubCategory: any = {};
  choices: any[] = [];
  isTrade: boolean = false;
  subcategoryOptions: any[] = [];

  // @select(['SellerReducer', 'sellerToken']) sellerToken$: Observable<string>;

  constructor(
    private route: ActivatedRoute // private ngRedux: NgRedux<any>,
  ) // private dispatch: Dispatcher
  {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const product_id = params.get('product_id');
      this.loadInitialData(product_id);
    });
  }

  loadInitialData(product_id: string): void {
    // this.sellerToken$.subscribe(token => {
    //   if (this.currentAttributes.length === 0) {
    //     GetAllAttribute(token)
    //       .then((res) => {
    //         this.currentAttributes = res?.data?.data;
    //       })
    //       .catch((err) => {
    //         console.error(err);
    //       });
    //   }
    //   if (Object.keys(this.currentProduct).length === 0) {
    //     ProductDetails(product_id, token)
    //       .then((res) => {
    //         this.currentProduct = res?.data?.data.product;
    //         this.productCategory = res?.data?.data.product_category;
    //         this.productSubCategory = res?.data?.data.sub_product_category;
    //       })
    //       .catch((err) => {
    //         console.error(err);
    //       });
    //   }
    // });
  }

  handleSubCategories(currentCatId: any): void {
    const tempCat = this.currentCategories.find((x) => x.id === currentCatId);

    // this.subcategoryOptions = tempCat.childes.map((ele) => {
    //   return { label: ele.name, value: ele.id };
    // });
  }

  handleImages(): void {
    // Implement image handling logic as needed
  }

  handleTrade(currentVal: boolean): void {
    this.isTrade = currentVal;
  }

  handleChoices(newChoice: any[]): void {
    this.choices = newChoice;
  }

  onSubmitForm(values: any): void {
    const {
      image,
      meta_image,
      images,
      attributes,
      variations,
      choices,
      colors,
      ...rest
    } = values;
    // const collectImageFiles = images.filter((f) => f.status !== 'add' && f.status !== 'del').map((e) => e.file);
    const prepareFormObject = {
      ...rest,
      colors: JSON.stringify(colors),
      variations: JSON.stringify(variations),
      choices: JSON.stringify(choices),
      attributes: JSON.stringify(attributes),
    };
    // const formValues = toFormData(prepareFormObject);
    // collectImageFiles.forEach((image, index) => {
    //   formValues.append(`images[${index}]`, image);
    // });
    // images.forEach((image, index) => {
    //   if (image.status === 'add') {
    //     formValues.append(`previous_images[${index}]`, image.image);
    //   }
    // });
    // formValues.append('image', image[0]?.file ?? null);
    // formValues.append('image_updated', image[0]?.status === undefined ?? false);
    // formValues.append('meta_image', meta_image[0]?.file ?? null);
    // formValues.append('meta_image_updated', meta_image[0]?.status === undefined ?? false);

    // this.sellerToken$.subscribe(token => {
    //   this.dispatch(updateProduct(formValues, () => {}, token));
    // });
  }
}
