import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  @Input() item: any;

  constructor(private router: Router) {}

  navigateToDetail(id: number) {
    this.router.navigateByUrl(`/Product-detail/${id}`, {
      state: { data: this.item },
    });
  }
}
  