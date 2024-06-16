import { AuthState } from '../auth/auth.state';
import { CartState } from './states/cart/cart.state';
import { SellerState } from './states/seller/seller.state';

export interface AppState {
  auth: AuthState;
  cart: CartState;
  seller: SellerState;
}
