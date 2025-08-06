// utils/context/CartWishlistContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { getFromStorage } from "../localStorageHelpers";

const CartWishlistContext = createContext();

export const CartWishlistProvider = ({ children }) => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    updateCounts();
  }, []);

  const updateCounts = () => {
    const wishlist = getFromStorage("wishlist");
    const cart = getFromStorage("cart");

    setWishlistCount(wishlist?.length || 0);
    setCartCount(cart?.length || 0);
  };

  return (
    <CartWishlistContext.Provider
      value={{ wishlistCount, cartCount, updateCounts }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
};

export const useCartWishlist = () => useContext(CartWishlistContext);
