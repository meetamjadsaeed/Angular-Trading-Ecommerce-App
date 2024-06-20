import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.css'],
})
export class ChangePasswordModalComponent {
  @Input() isOpenModal: boolean = false;
  @Input() modalBtn: boolean = false;
  @Output() setIsOpenModal = new EventEmitter<boolean>();
  @Output() ChangePasswordHandler = new EventEmitter<void>();

  faTimesCircle = faTimesCircle;

  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  closeModal() {
    this.setIsOpenModal.emit(false);
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      this.ChangePasswordHandler.emit();
    }
  }
}
