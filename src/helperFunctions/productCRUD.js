import axios from "axios";

export const createProduct = async (product, authtoken) => {
  return await axios.post(
    `https://ecommerce-venom.onrender.com/api/product`,
    product,

    { headers: { authtoken } }
  );
};

export const getProductsByCount = async (count) => {
  return await axios.get(
    `https://ecommerce-venom.onrender.com/api/products/${count}`
  );
};

export const deleteProduct = async (slug, authtoken) => {
  return await axios.delete(
    `https://ecommerce-venom.onrender.com/api/product/${slug}`,

    { headers: { authtoken } }
  );
};

export const getProductsForUpdate = async (slug) => {
  return await axios.get(
    `https://ecommerce-venom.onrender.com/api/products/update/${slug}`
  );
};

export const updateProducts = async (slug, product, authtoken) => {
  return await axios.put(
    `https://ecommerce-venom.onrender.com/api/product/${slug}`,
    product,
    {
      headers: { authtoken },
    }
  );
};

export const getProducts = async (sort, order, page) => {
  return await axios.post(`https://ecommerce-venom.onrender.com/api/products`, {
    sort,
    order,
    page,
  });
};

export const productCount = async () => {
  return await axios.get(
    `https://ecommerce-venom.onrender.com/api/products/total`
  );
};

export const ratingProducts = async (productId, star, authtoken) => {
  return await axios.put(
    `https://ecommerce-venom.onrender.com/api/product/star/${productId}`,
    { star },
    {
      headers: { authtoken },
    }
  );
};

export const getRelated = async (productId) => {
  return await axios.get(
    `https://ecommerce-venom.onrender.com/api/products/related/${productId}`
  );
};

export const getProductsByQuery = async (arg) => {
  return await axios.post(
    `https://ecommerce-venom.onrender.com/api/search/filters`,
    arg
  );
};
