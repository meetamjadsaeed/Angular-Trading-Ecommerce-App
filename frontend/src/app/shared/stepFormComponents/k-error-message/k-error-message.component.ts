import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-k-error-message',
  templateUrl: './k-error-message.component.html',
  styleUrls: ['./k-error-message.component.css'],
})
export class KErrorMessageComponent {
  @Input() control: AbstractControl | null = null;
  @Input() formGroupName: string = '';

  get errorMessage(): string | null {
    if (this.control && this.control.errors) {
      for (const errorName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(errorName)) {
          switch (errorName) {
            case 'required':
              return 'This field is required';
            case 'minlength':
              return `Minimum length is ${this.control.errors[errorName].requiredLength}`;
            // Add more cases as needed
          }
        }
      }
    }
    return null;
  }
}
