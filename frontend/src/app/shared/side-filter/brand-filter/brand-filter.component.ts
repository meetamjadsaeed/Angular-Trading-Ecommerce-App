import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrls: ['./brand-filter.component.css'],
})
export class BrandFilterComponent {
  @Input() BrandsDataRedux: any[];
  @Input() brandId: number[];

  constructor() {}

  handleSelectBrand(brandId: number, checked: boolean) {
    // Implement handleSelectBrand logic here
  }
}
