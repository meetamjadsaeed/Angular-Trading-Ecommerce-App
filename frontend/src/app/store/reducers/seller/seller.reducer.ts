// src/app/cart/store/cart.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { SellerState } from '../../states/seller/seller.state';
import { loadCartSuccess } from '../../actions/cart.actions';

export const initialState: SellerState = {
  cartData: [],
};

export const sellerReducer = createReducer(
  initialState,
  on(loadCartSuccess, (state, { cartData }) => ({
    ...state,
    cartData,
  }))
);
