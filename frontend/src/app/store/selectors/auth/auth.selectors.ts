import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from '../../../auth/auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsLogin = createSelector(selectAuthState, (state) => state);

export const selectUsers = createSelector(selectAuthState, (state) => state);

export const selectCompanyInfo = createSelector(
  selectAuthState,
  (state) => state
);

export const selectCategoriesData = createSelector(
  selectAuthState,
  (state) => state
);
