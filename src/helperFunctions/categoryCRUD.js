import axios from "axios";

export const getCategories = async () => {
  return await axios.get("https://ecommerce-venom.onrender.com/api/categories");
};

export const getCategory = async (slug) => {
  return await axios.get(
    `https://ecommerce-venom.onrender.com/api/category/${slug}`
  );
};

export const getCategorySubs = async (_id) => {
  return await axios.get(
    `https://ecommerce-venom.onrender.com/api/category/subs/${_id}`
  );
};

export const removeCategory = async (slug, authtoken) => {
  return await axios.delete(
    `https://ecommerce-venom.onrender.com/api/category/${slug}`,

    { headers: { authtoken } }
  );
};

export const updateCategory = async (slug, category, authtoken) => {
  return await axios.put(
    `https://ecommerce-venom.onrender.com/api/category/${slug}`,
    category,

    { headers: { authtoken } }
  );
};
// export const updateCategoryWithSub = async (id, category, authtoken) => {
//   return await axios.put(
//     `https://ecommerce-venom.onrender.com/api/category`,
//     category,

//     { headers: { authtoken } }
//   );
// };

export const createCategory = async (category, authtoken) => {
  return await axios.post(
    `https://ecommerce-venom.onrender.com/api/category`,
    category,

    { headers: { authtoken } }
  );
};
