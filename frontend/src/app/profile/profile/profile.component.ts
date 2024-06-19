import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { EditProfileData, logout } from '../../../redux/actions/AuthActions';
// import { useNavigate } from '@angular/router';
// import { ramdomImage } from '../../../constant/ConstantFunction';
// import { PostChangePassword, UpdateProfile } from '../../../network/Network';
// import { toast } from 'react-toastify';
// import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ChangePasswordModalComponent } from '../../components/Modal/change-password-modal/change-password-modal.component';
// import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userData$: Observable<any>;
  Token$: Observable<string>;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  gender: string;
  logLoading: boolean = false;
  loading: boolean = false;
  newFile: any;
  fileupload: string;
  uploadLoading: boolean = false;
  isOpenModal: boolean = false;
  password: string;
  confirmPassword: string;
  currentPassword: string;
  modalBtn: boolean = false;
  options = [
    { value: '', text: '--Choose an option--' },
    { value: 'Mr', text: 'Mr' },
    { value: 'Ms', text: 'Ms' },
    { value: 'Mrs', text: 'Mrs' },
  ];

  // constructor(
  //   private store: Store<fromApp.AppState>,
  //   private modalService: NgbModal
  // ) {}

  constructor() {}

  ngOnInit(): void {
    // this.userData$ = this.store
    //   .select('AuthReducer')
    //   .pipe(map((state) => state.users));
    // this.Token$ = this.store
    //   .select('AuthReducer')
    //   .pipe(map((state) => state.token));
    // this.userData$.subscribe((userData) => {
    //   this.firstName = userData.f_name;
    //   this.lastName = userData.l_name;
    //   this.email = userData.email;
    //   this.phone = userData.phone;
    //   this.address = userData.street_address;
    //   this.city = userData.city;
    //   this.gender = userData.gender;
    //   this.fileupload = userData.profile_url;
    // });
  }

  LogoutHandler(): void {
    // this.logLoading = true;
    // setTimeout(async () => {
    //   this.logLoading = false;
    //   let x = await this.store.dispatch(logout());
    //   // Navigate to home or login page
    // }, 200);
  }

  handleImageUpload(event: any): void {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      this.newFile = file;
      this.fileupload = reader.result as string;
    };
    reader.readAsDataURL(file);
    this.uploadLoading = true;
  }

  EditProfile(): void {
    // this.loading = true;
    // if (
    //   !this.firstName ||
    //   !this.lastName ||
    //   !this.phone ||
    //   !this.address ||
    //   !this.city ||
    //   !this.gender
    // ) {
    //   this.loading = false;
    //   toast.error('Please Enter All Fields');
    //   return;
    // }
    // let data = new FormData();
    // data.append('f_name', this.firstName);
    // data.append('l_name', this.lastName);
    // data.append('phone', this.phone);
    // data.append('street_address', this.address);
    // data.append('city', this.city);
    // data.append('gender', this.gender);
    // data.append('image', this.newFile);
    // this.Token$.subscribe((Token) => {
    //   UpdateProfile(data, Token)
    //     .then((res: any) => {
    //       this.loading = false;
    //       this.uploadLoading = false;
    //       toast.success(res?.data?.message);
    //       this.store.dispatch(EditProfileData(res?.data?.data?.user));
    //       // Navigate to profile page if needed
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       this.loading = false;
    //       this.uploadLoading = false;
    //     });
    // });
  }

  openChangePasswordModal(): void {
    // const modalRef = this.modalService.open(ChangePasswordModalComponent, {
    //   centered: true,
    // });
    // modalRef.componentInstance.setCurrentPassword(this.currentPassword);
    // modalRef.componentInstance.setPassword(this.password);
    // modalRef.componentInstance.setConfirmPassword(this.confirmPassword);
    // modalRef.componentInstance.ChangePasswordHandler.subscribe(
    //   (result: any) => {
    //     // Handle modal result if needed
    //   }
    // );
  }

  ChangePasswordHandler(): void {
    // this.modalBtn = true;
    // if (!this.currentPassword || !this.password || !this.confirmPassword) {
    //   toast.error('Please enter all fields');
    //   this.modalBtn = false;
    //   return;
    // }
    // if (this.password !== this.confirmPassword) {
    //   toast.error('New password and confirm password must be the same');
    //   this.modalBtn = false;
    //   return;
    // }
    // let data = {
    //   current_password: this.currentPassword,
    //   new_password: this.password,
    //   new_confirm_password: this.confirmPassword,
    // };
    // this.Token$.subscribe((Token) => {
    //   PostChangePassword(data, Token)
    //     .then((res: any) => {
    //       this.modalBtn = false;
    //       toast.success(res?.data?.message);
    //       this.isOpenModal = false;
    //       this.currentPassword = '';
    //       this.password = '';
    //       this.confirmPassword = '';
    //     })
    //     .catch((err) => {
    //       console.log(err?.response?.data?.message);
    //       toast.error(err?.response?.data?.message);
    //       this.modalBtn = false;
    //       this.isOpenModal = false;
    //     });
    // });
  }
}
