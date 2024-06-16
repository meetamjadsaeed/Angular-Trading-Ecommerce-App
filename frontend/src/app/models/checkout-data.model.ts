// src/app/models/checkout-data.model.ts
export interface CheckOutData {
  subTotal: number;
  total: number;
  CartData: any[]; // Replace with actual data type
  couponData: {
    discount: number;
  }; // Replace with actual data type
}
