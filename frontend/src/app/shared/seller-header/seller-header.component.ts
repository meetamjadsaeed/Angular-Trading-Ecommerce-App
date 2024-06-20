import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
// import { AppState } from '../../store';
// import { logout } from '../../store/actions/auth.actions';
// import { SellerUser } from '../../models/seller-user.model';
// import { CompanyInfo } from '../../models/company-info.model';
// import { selectIsLoggedIn, selectSellerUser, selectCompanyInfo } from '../../store/selectors/auth.selectors';

@Component({
  selector: 'app-seller-header',
  templateUrl: './seller-header.component.html',
  styleUrls: ['./seller-header.component.css'],
})
export class SellerHeaderComponent implements OnInit {
  // sellerIsLogin$: Observable<boolean>;
  // userData$: Observable<SellerUser>;
  // companyInfo$: Observable<CompanyInfo>;

  loading = false;
  collapse = false;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.sellerIsLogin$ = this.store.pipe(select(selectIsLoggedIn));
    // this.userData$ = this.store.pipe(select(selectSellerUser));
    // this.companyInfo$ = this.store.pipe(select(selectCompanyInfo));
  }

  toggleCollapse(): void {
    this.collapse = !this.collapse;
  }

  logoutHandler(): void {
    // this.loading = true;
    // setTimeout(async () => {
    //   this.loading = false;
    //   await this.store.dispatch(logout());
    //   window.location.href = '/Signin';
    // }, 200);
  }
}
