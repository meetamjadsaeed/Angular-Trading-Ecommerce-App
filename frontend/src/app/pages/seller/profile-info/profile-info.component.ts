import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { EditProfileData } from '../../../redux/actions/SellerAction';
// import { SellerReducer } from '../../../redux/reducers/SellerReducer';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
})
export class ProfileInfoComponent {
  profileForm!: FormGroup;
  btnLoading: boolean = false;
  // currentSeller = SellerReducer.sellerUser;
  // token = SellerReducer.sellerToken;

  constructor(private fb: FormBuilder, private router: Router) {
    // this.profileForm = this.fb.group({
    //   f_name: [this.currentSeller.f_name, Validators.required],
    //   l_name: [this.currentSeller.l_name, Validators.required],
    //   business_name: [this.currentSeller.business_name, Validators.required],
    //   phone: [this.currentSeller.phone, Validators.required],
    //   email: [{ value: this.currentSeller.email, disabled: true }, [Validators.required, Validators.email]]
    // });
  }

  async onSubmit(): Promise<void> {
    // if (this.profileForm.valid) {
    //   this.btnLoading = true;
    //   const values = this.profileForm.value;
    //   try {
    //     await EditProfileData(values, this.token);
    //     this.btnLoading = false;
    //     // Handle success, navigate or show success message
    //   } catch (error) {
    //     console.error('Error editing profile:', error);
    //     this.btnLoading = false;
    //     // Handle error, show toast or error message
    //   }
    // }
  }
}
