import {
  AUTH,
  LOGIN,
  SIGNUP,
  CATEGORIES,
  CUSTOMER,
  PRODUCTS,
  RELATED_PRODUCTS,
  TRADING,
  LATEST,
  ORDER,
  LIST,
  CONTACTUS,
  UPDATE_PROFILE,
  SEARCH,
  NAME,
  BRANDS,
  PAGE,
  STATUS,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
  DETAILS,
  SELLER,
  SELLER_PROFILE_UPDATE,
  SELLER_CHANGE_PASSWORD,
  SELLER_PRODUCT_STORE,
  SELLER_ORDERS,
  SEARCH_QUERY,
  ORDER_BY,
  SELLER_ORDER_SHOW,
  ATTRIBUTES,
  SHOW,
  SELLER_PRODUCT_UPDATE,
  SELLER_PRODUCT_DELETE_BULK,
  SELLER_PRODUCT_DELETE,
  SELLER_NOTIFICATIONS,
  SELLER_PRODUCT_STORE_BULK,
  SELLER_NOTIFICATIONS_Marked_Clicked,
  SELLER_NOTIFICATIONS_Marked_Read,
  // end
  // FROGOT_PASSWORD,
} from './Endpoint';

import {
  doGet,
  doPost,
  doPatch,
  doDelete,
  doPostProfilePictureUpload,
  doPostProduct,
} from './Config';

export const postSignIn = (data) => {
  return doPost(`${SELLER}${AUTH}${LOGIN}`, data);
};

export const postSignUp = (data) => {
  return doPost(`${SELLER}${AUTH}${SIGNUP}`, data);
};

export const GetAllCategories = () => {
  return doGet(`${CATEGORIES}`);
};

// Product related functions
export const GetProducts = (
  currentPage = 0,
  token,
  search = null,
  arrangement = null
) => {
  return doGet(
    `${SELLER}${PRODUCTS}${PAGE}=${currentPage}&${SEARCH_QUERY}=${search}&${ORDER_BY}=${arrangement}`,
    token
  );
};

export const GetTradingProducts = (
  currentPage = 0,
  token,
  search = null,
  arrangement = null
) => {
  return doGet(
    `${SELLER}${TRADING}${PAGE}=${currentPage}&${SEARCH_QUERY}=${search}&${ORDER_BY}=${arrangement}`,
    token
  );
};

export const ProductDetails = (data, $token) => {
  return doGet(`${SELLER}${PRODUCTS}${SHOW}/${data}`, $token);
};

export const postAddProduct = (data, token) => {
  return doPost(`${SELLER}${SELLER_PRODUCT_STORE}`, data, token);
};

export const postAddProductBulk = (data, token) => {
  return doPost(`${SELLER}${SELLER_PRODUCT_STORE_BULK}`, data, token);
};

export const postUpdateProduct = (data, token) => {
  return doPost(`${SELLER}${SELLER_PRODUCT_UPDATE}`, data, token);
};

export const deleteByProductId = (data, token) => {
  return doPost(`${SELLER}${SELLER_PRODUCT_DELETE}`, data, token);
};

export const deleteBulkProduct = (data, token) => {
  return doPost(`${SELLER}${SELLER_PRODUCT_DELETE_BULK}`, data, token);
};

// notifications
export const GetAllNotifications = (token) => {
  return doGet(`${SELLER_NOTIFICATIONS}`, token);
};

// mark notification
export const MarkNotification = (data, token) => {
  return doPost(`${SELLER_NOTIFICATIONS_Marked_Clicked}`, { id: data }, token);
};

export const MarkNotificationBulk = (data, token) => {
  return doPost(`${SELLER_NOTIFICATIONS_Marked_Read}`, { ids: data }, token);
};

// order request below
export const GetAllOrders = (
  currentPage = 0,
  token,
  search = null,
  arrangement = null
) => {
  return doGet(
    `${SELLER_ORDERS}${PAGE}=${currentPage}&${SEARCH_QUERY}=${search}&${ORDER_BY}=${arrangement}`,
    token
  );
};

export const GetOrder = (order_id, token) => {
  return doGet(`${SELLER_ORDER_SHOW}/${order_id}`, token);
};

// attributes
export const GetAllAttribute = (token) => {
  return doGet(`${SELLER}${ATTRIBUTES}`, token);
};

export const PostContactUs = (data, token) => {
  return doPost(`${CONTACTUS}`, data, token);
};

// Profile functions below
export const UpdateProfile = (data, token) => {
  return doPost(`${SELLER}${SELLER_PROFILE_UPDATE}`, data, token);
};

export const UpdateProfilePic = (data, token) => {
  return doPostProfilePictureUpload(
    `${SELLER}${SELLER_PROFILE_UPDATE}`,
    data,
    token
  );
};

export const GetAllBrands = () => {
  return doGet(`${BRANDS}`);
};

export const GetFilterBrands = (currentPage, id) => {
  return doGet(`${BRANDS}${PRODUCTS}/${id}${PAGE}=${currentPage}`);
};

export const forgotPasswordApi = (data) => {
  return doPost(`${SELLER}${AUTH}${FORGOT_PASSWORD}`, data);
};

export const ResetPasswordApi = (data, token) => {
  return doPost(`${SELLER}${AUTH}${RESET_PASSWORD}`, data, token);
};

export const PostChangePassword = (data, token) => {
  return doPost(`${SELLER}${SELLER_CHANGE_PASSWORD}`, data, token);
};
