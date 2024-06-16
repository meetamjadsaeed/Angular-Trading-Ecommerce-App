// src/app/store/reducers/index.ts
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app.state';
import { authReducer } from './auth/auth.reducer';
import { cartReducer } from './cart/cart.reducer';
import { sellerReducer } from './seller/seller.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  cart: cartReducer,
  seller: sellerReducer,
};
