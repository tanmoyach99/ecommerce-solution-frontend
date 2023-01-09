import axios from "axios";

export const getSubs = async () => {
  return await axios.get(
    "https://ecommerce-venom.onrender.com/api/subCategories "
  );
};

export const getSub = async (slug) => {
  return await axios.get(
    `https://ecommerce-venom.onrender.com/api/subCategory/${slug}`
  );
};

export const removeSub = async (slug, authtoken) => {
  return await axios.delete(
    `https://ecommerce-venom.onrender.com/api/subCategory/${slug}`,

    { headers: { authtoken } }
  );
};

export const updateSub = async (slug, subCategory, authtoken) => {
  return await axios.put(
    `https://ecommerce-venom.onrender.com/api/subCategory/${slug}`,
    subCategory,

    { headers: { authtoken } }
  );
};

export const createSub = async (subCategory, authtoken) => {
  return await axios.post(
    `https://ecommerce-venom.onrender.com/api/subCategory`,
    subCategory,

    { headers: { authtoken } }
  );
};
