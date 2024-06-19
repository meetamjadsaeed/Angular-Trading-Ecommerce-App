import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-variation-list',
  template: `
    <ng-container *ngIf="variations.length > 0">
      <div class="proddetialname">
        <h6 class="prodtitle">Variant</h6>
        <h6 class="prodtitle">Variant Price</h6>
        <h6 class="prodtitle">Variant SKU</h6>
        <h6 class="prodtitle">Variant Qty</h6>
      </div>

      <div
        *ngFor="let variation of variations; let i = index"
        class="proddetialname"
      >
        <h6 class="prodtitle">{{ variation.type }}</h6>
        <div class="d-flex w-100">
          <!-- <input type="number" class="form-control w-75" [(ngModel)]="variation.price" (input)="handleChange({ target: { value: variation.price } }, i, 'price')"> -->
          <!-- <input type="text" class="form-control w-75" [(ngModel)]="variation.sku"> -->
          <!-- <input type="number" class="form-control w-75" [(ngModel)]="variation.qty" (input)="handleChange({ target: { value: variation.qty } }, i, 'qty')"> -->
        </div>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class VariationListComponent implements OnInit {
  @Input() variations: any[];
  @Input() formVariation: any[];

  @Output() handleChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // Set initial values if needed
  }
}
