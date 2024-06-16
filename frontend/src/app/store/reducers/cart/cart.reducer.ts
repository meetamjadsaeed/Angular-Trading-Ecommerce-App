// src/app/cart/store/cart.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadCartSuccess } from '../../actions/cart.actions';

export const initialState: CartState = {
  cartData: [],
};

export const cartReducer = createReducer(
  initialState,
  on(loadCartSuccess, (state, { cartData }) => ({
    ...state,
    cartData,
  }))
  // Add more reducer cases as needed
);
