import axios from "axios";

export const createCoupon = async (coupon, authtoken) => {
  return await axios.post(
    `https://ecommerce-venom.onrender.com/api/coupon `,
    { coupon },
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const getCoupons = async () => {
  return await axios.get("https://ecommerce-venom.onrender.com/api/coupons ");
};

export const removeCoupons = async (couponId, authtoken) => {
  return await axios.delete(
    `https://ecommerce-venom.onrender.com/api/coupons/${couponId} `,
    {
      headers: {
        authtoken,
      },
    }
  );
};
