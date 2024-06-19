import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
// import { AppState } from 'src/app/models/app-state.model';
// import { Observable } from 'rxjs';
// import { Country } from 'src/app/models/country.model';
// import { User } from 'src/app/models/user.model';
// import { CheckOutData } from 'src/app/models/checkout-data.model';

@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css'],
})
export class StepOneComponent implements OnInit {
  @Input() userFormData: User;
  @Input() CheckOutData: CheckOutData;
  @Input() loading: boolean;
  @Output() stepOneContinue = new EventEmitter<User>();

  countryData$: Observable<Country[]>;
  form: FormGroup;
  countryOptionIds: number[] = [];
  selectedRegion: Country;

  // constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  constructor() {}

  ngOnInit(): void {
    this.countryData$ = this.store.select((state) => state.AuthReducer.country);
    this.countryData$.subscribe((countries) => {
      this.countryOptionIds = countries.map((country) => country.id);
      this.selectedRegion = countries.find(
        (country) => country.id === this.userFormData.region
      );
    });

    // this.form = this.fb.group({
    //   f_name: [this.userFormData.f_name || '', Validators.required],
    //   l_name: [this.userFormData.l_name || '', Validators.required],
    //   phone: [
    //     this.userFormData.phone || '',
    //     [Validators.required, Validators.pattern('^[0-9]*$')],
    //   ],
    //   email: [
    //     this.userFormData.email || '',
    //     [Validators.required, Validators.email],
    //   ],
    //   region: [
    //     this.userFormData.region || '0',
    //     [Validators.required, Validators.pattern('^[0-9]*$')],
    //   ],
    //   city: [this.userFormData.city || '', Validators.required],
    //   street_address: [
    //     this.userFormData.street_address || '',
    //     Validators.required,
    //   ],
    //   save_data_for_future: [this.userFormData.save_data_for_future || false],
    // });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.stepOneContinue.emit(this.form.value);
    }
  }
}
