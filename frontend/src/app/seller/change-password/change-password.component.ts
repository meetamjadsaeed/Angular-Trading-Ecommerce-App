import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { SetChangePassword } from '../../../redux/actions/SellerAction';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import * as Yup from 'yup';
// import * as fromApp from '../../../store/app.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  btnLoading: boolean = false;
  token$: Observable<string>;

  constructor(
    // private store: Store<fromApp.AppState>,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      old_password: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required),
    });

    // this.token$ = this.store.select('SellerReducer').pipe(map(state => state.sellerToken));
  }

  onSubmit(): void {
    if (this.changePasswordForm.valid) {
      // this.btnLoading = true;
      // const formValues = this.changePasswordForm.value;
      // this.token$.subscribe(token => {
      //   this.store.dispatch(SetChangePassword(formValues, token)).subscribe(req => {
      //     if (req) {
      //       this.router.navigate(['/sellerlogin']);
      //     }
      //     this.btnLoading = false;
      //   });
      // });
    } else {
      this.validateAllFormFields(this.changePasswordForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
