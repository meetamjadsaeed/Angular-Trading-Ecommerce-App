import { createReducer, on } from '@ngrx/store';
import {
  loadCategoriesSuccess,
  loadCompanyInfoSuccess,
  loginSuccess,
  logout,
} from '../../actions/auth.actions';

export const initialState: AuthState = {
  isLogin: false,
  users: null,
  companyInfo: null,
  categoriesData: [],
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { users }) => ({
    ...state,
    isLogin: true,
    users,
  })),
  on(logout, (state) => ({
    ...state,
    isLogin: false,
    users: null,
  })),
  on(loadCompanyInfoSuccess, (state, { companyInfo }) => ({
    ...state,
    companyInfo,
  })),
  on(loadCategoriesSuccess, (state, { categoriesData }) => ({
    ...state,
    categoriesData,
  }))
);
