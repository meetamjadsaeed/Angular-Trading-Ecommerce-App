import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  @Input() item: any;
  @Input() index: number;
  @Input() quantity: number;
  @Output() removeCartItem = new EventEmitter<number>();
  @Output() increment = new EventEmitter<number>();
  @Output() decrement = new EventEmitter<number>();

  token: string;
  user: any;

  // constructor(private authService: AuthService) {
  //   this.authService.token$.subscribe(token => this.token = token);
  //   this.authService.user$.subscribe(user => this.user = user);
  // }

  constructor() {}

  handleIncrement(id: number): void {
    this.increment.emit(id);
  }

  handleDecrement(id: number): void {
    this.decrement.emit(id);
  }

  handleRemoveCartItem(id: number): void {
    this.removeCartItem.emit(id);
  }
}
