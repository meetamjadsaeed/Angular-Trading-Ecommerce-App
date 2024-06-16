// src/app/header/header.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
// import { Adsapi } from '../../redux/actions/CartActions';

import { AppState } from '../../store/app.state';
import { logout } from '../../store/actions/auth.actions';
import {
  selectCategoriesData,
  selectCompanyInfo,
  selectIsLogin,
  selectUsers,
} from '../../store/selectors/auth/auth.selectors';
import { NetworkService } from '../../services/network.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() setChecked: any;
  @Input() checked: any;

  loading = false;
  adsData: any[] = [];
  collapse = false;

  isLogin$ = this.store.select(selectIsLogin);
  userData$ = this.store.select(selectUsers);
  CartReduxData$ = this.store.select((state) => state.cart.cartData);
  CompanyInfoRedux$ = this.store.select(selectCompanyInfo);
  CategoriesRedux$ = this.store.select(selectCategoriesData);

  constructor(
    private store: Store<AppState>,
    private networkService: NetworkService
  ) {}

  ngOnInit(): void {
    this.loadAds();
    this.loadProductsFilter();
  }

  toggleCollapse(): void {
    this.collapse = !this.collapse;
  }

  logoutHandler(event: Event): void {
    event.preventDefault();
    this.loading = true;
    setTimeout(async () => {
      this.loading = false;
      await this.store.dispatch(logout());
      window.location.href = '/Signin';
    }, 200);
  }

  loadProductsFilter(): void {
    this.networkService.getProductsFilter(this.checked).subscribe(
      (res: any) => {
        // Handle response as needed
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  loadAds(): void {
    this.networkService.getAds().subscribe(
      (res: any) => {
        this.adsData = res?.data?.data?.ads;
        // this.store.dispatch(Adsapi(res?.data?.data?.ads));
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
