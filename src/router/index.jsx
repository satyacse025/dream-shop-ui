import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../CommonLayout/CommonLayout";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import { ROUTES } from "../routes";
import PrivateRoute from "./PrivateRoute";
import ProductPage from "../pages/ProductPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
    {
      path: `${ROUTES.HOME}`,
      element: <CommonLayout />,
      children: [
        {
          path: `${ROUTES.HOME}`,
          element: <HomePage />,
        },
        {
          path: `${ROUTES.LOGIN}`,
          element: <Login />,
        },
        {
          path: `${ROUTES.REGISTER}`,
          element: <Register />,
        },
        {
          path: `${ROUTES.PRODUCTS}`,
          element: (
            <PrivateRoute>
              <ProductPage></ProductPage>
            </PrivateRoute>
          ),
        },
        {
          path: `${ROUTES.SINGLE_PRODUCT.STATIC}`,
          element: (
            <PrivateRoute>
              <ProductDetails></ProductDetails>
            </PrivateRoute>
          ),
        },
        {
          path: `${ROUTES.Not_Found}`,
          element: <NotFound />,
        },
      ],
    },
  ]);
  
  export default router;
  