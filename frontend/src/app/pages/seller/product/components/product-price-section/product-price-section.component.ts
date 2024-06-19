import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; // Use FormBuilder for reactive forms

@Component({
  selector: 'app-product-price-section',
  templateUrl: './product-price-section.component.html',
  styleUrls: ['./product-price-section.component.css'],
})
export class ProductPriceSectionComponent implements OnInit {
  @Input() choices: any[];
  @Input() formValues: any = {};
  @Input() selectedVariation: any[] = [];
  @Input() totalStock: number;

  form: FormGroup; // Define FormGroup for reactive form
  variations: any[] = [];
  currentStocks: number;

  discountOption = ['flat', 'percent'].map((x) => ({ label: x, value: x }));

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      unit_price: this.formValues.unit_price ?? 0,
      purchase_price: this.formValues.purchase_price ?? 0,
      tax: this.formValues.tax ?? 0,
      tax_type: this.formValues.tax_type ?? '',
      discount: this.formValues.discount ?? 0,
      discount_type: this.formValues.discount_type ?? '',
    });

    this.currentStocks = this.totalStock;

    // Execute the variation arrangement every time the choices changes
    this.prepareVariations(this.choices);
  }

  handleUnitPrice(event: any) {
    const tempVariations = this.variations.map((x) => ({
      ...x,
      price: event.target.value,
    }));
    this.variations = tempVariations;
  }

  prepareVariations(main: any[]) {
    let tempVariations = main[0];
    if (main.length > 1) {
      for (let i = 1; i < main.length; i++) {
        tempVariations = this.add_variations_to_array(tempVariations, main[i]);
      }
    } else {
      // tempVariations = tempVariations.map(t => ({ type: t.type, price: 0, qty: 0, sku: `sku-${t.type}` }));
    }

    // Update variations with formValues
    // tempVariations.forEach(v => {
    //   const formVariationIndex = this.selectedVariation.find(sv => sv.type === v.type);
    //   v.price = formVariationIndex?.price ?? 0;
    //   v.qty = formVariationIndex?.qty ?? 0;
    // });

    this.variations = tempVariations;
  }

  add_variations_to_array(base: any[], variations: any[]): any[] {
    const ret = [];
    for (const e of base) {
      for (const variation of variations) {
        ret.push({
          type: `${e.type}-${variation.type}`,
          price: 0,
          qty: 0,
          sku: `sku-${e.type}-${variation.type}`,
        });
      }
    }
    return ret;
  }

  handleVariationPriceAndQty(event: any, index: number, column: string) {
    const copyVariation = [...this.variations];
    copyVariation[index][column] = event.target.value;
    if (column === 'qty') {
      const sumQty = copyVariation.reduce(
        (n, current) => n + parseInt(current.qty, 10),
        0
      );
      this.currentStocks = sumQty;
    }
    this.variations = copyVariation;
  }
}
