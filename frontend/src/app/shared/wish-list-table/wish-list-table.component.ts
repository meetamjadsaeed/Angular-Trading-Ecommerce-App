import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wish-list-table',
  templateUrl: './wish-list-table.component.html',
  styleUrls: ['./wish-list-table.component.css'],
})
export class WishListTableComponent {
  @Input() item: any;
  @Input() index: number;
  @Input() AddToCartHandler: Function;
  @Input() DeleteWishListHandler: Function;
}
