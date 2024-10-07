export const ROUTES = {
    HOME: "/",
    PRODUCTS: "/products",
    REGISTER: "/register",
    LOGIN: "/login",
    NOT_FOUND: '*',
    SINGLE_PRODUCT: {
      STATIC: "/products/:proId",
      DYNAMIC: (proId) => `/products/${proId}`,
    },
  };
  