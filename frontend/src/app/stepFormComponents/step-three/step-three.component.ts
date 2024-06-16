import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AppState } from '../store/app.state'; // Update this path as per your app structure
// import { selectCountryData } from '../store/selectors/auth.selectors'; // Update this path as per your app structure

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css'],
})
export class StepThreeComponent implements OnInit {
  @Input() CheckOutData: any;
  @Input() PlaceOrderHandler: any;
  @Input() userFormData: any;
  @Input() loading: boolean;

  selectedCountry: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // this.store.select(selectCountryData).subscribe(countryData => {
    //   this.selectedCountry = countryData?.find(
    //     (curElem) => curElem?.id === this.userFormData.region
    //   );
    // });
  }
}
