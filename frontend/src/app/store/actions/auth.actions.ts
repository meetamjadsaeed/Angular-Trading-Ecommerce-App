import { createAction, props } from '@ngrx/store';

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ users: any }>()
);
export const logout = createAction('[Auth] Logout');
export const loadCompanyInfoSuccess = createAction(
  '[Auth] Load Company Info Success',
  props<{ companyInfo: any }>()
);
export const loadCategoriesSuccess = createAction(
  '[Auth] Load Categories Success',
  props<{ categoriesData: any[] }>()
);
