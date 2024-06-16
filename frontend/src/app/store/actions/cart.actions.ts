import { createAction, props } from '@ngrx/store';

export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ cartData: any[] }>()
);
