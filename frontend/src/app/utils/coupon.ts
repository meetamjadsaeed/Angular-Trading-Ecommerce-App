export const verifyCouponApplicable = (couponData, total = 0) => {
  if (Object.keys(couponData).length == 0 || couponData == null || total == 0 || couponData.min_purchase > total) {
    return { status: false, message: "coupon can not be applied on 0 or invalid coupon or minimum purchase must be greater or equal to " + couponData.min_purchase };
  }

  var todaysDate = new Date();
  const expiryDate = new Date(couponData.expire_date);

  if (expiryDate.getTime() < todaysDate.getTime()) {
    return { status: false, message: "coupon is expired, can not be applied " };
  }

  var couponDiscount = couponData.discount_type == "amount" ? couponData.discount : (total / 100) * couponData.discount > couponData.max_discount ? couponData.max_discount : (total / 100) * couponData.discount;
  var discountCondition = couponDiscount > total;
  
  if (discountCondition) {
    return { status: false, message: "coupon can not be applied, your cart subtotal is low" };
  }

  return { status: true, discount: couponDiscount, message: "coupon applied successfully" };
};
