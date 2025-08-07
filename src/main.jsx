import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./components/shop/cart/CartPage.jsx";
import WishlistPage from "./components/shop/wishlist/WishlistPage.jsx";
import { CartWishlistProvider } from "./utils/context/CartWishlistContext";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartWishlistProvider>
      <RouterProvider router={router} />
    </CartWishlistProvider>
  </StrictMode>
);
