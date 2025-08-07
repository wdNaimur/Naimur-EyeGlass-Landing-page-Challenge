import React, { useEffect, useState } from "react";
import {
  getFromStorage,
  saveToStorage,
  addToCart,
} from "../../../utils/localStorageHelpers.js";
import { FaCartPlus, FaTrash } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useCartWishlist } from "../../../utils/context/CartWishlistContext";

const WishlistPage = () => {
  useEffect(() => {
    document.title = "EyeGlass | Wishlist";
    window.scrollTo(0, 0);
  }, []);
  const [wishlistItems, setWishlistItems] = useState([]);
  const { updateCounts } = useCartWishlist();

  useEffect(() => {
    const storedWishlist = getFromStorage("wishlist");
    setWishlistItems(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updated);
    saveToStorage("wishlist", updated);
    updateCounts();
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
    toast.success("Item added to Cart");
    updateCounts();
  };

  return (
    <div className="container mx-auto px-4 py-25 font-primary">
      <h2 className="text-3xl font-bold mb-2">Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-text-color/5 rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-primary text-left text-sm font-semibold text-gray-700 border-b border-text-color/10">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {wishlistItems.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.imageUrls[0]}
                        alt={item.name}
                        className="w-14 h-14 object-contain rounded-md bg-white p-2"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-semibold">${item.price}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-6 justify-center">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="text-text-color hover:scale-105 text-sm cursor-pointer"
                      >
                        <FaCartPlus className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-text-color hover:scale-105 text-sm cursor-pointer"
                      >
                        <FaTrash className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
