import React, { useEffect, useState } from "react";
import {
  getFromStorage,
  saveToStorage,
} from "../../../utils/localStorageHelpers.js";
import { useCartWishlist } from "../../../utils/context/CartWishlistContext";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

const CartPage = () => {
  useEffect(() => {
    document.title = "EyeGlass | Cart";
    window.scrollTo(0, 0);
  }, []);
  const [cartItems, setCartItems] = useState([]);
  const { updateCounts } = useCartWishlist();

  useEffect(() => {
    const storedCart = getFromStorage("cart");
    setCartItems(storedCart);
  }, []);

  const updateQuantity = (id, delta) => {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCartItems(updated);
    saveToStorage("cart", updated);
    updateCounts();
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    saveToStorage("cart", updated);
    updateCounts();
  };

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-25 font-primary">
      <h2 className="text-3xl font-bold mb-2 ">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-text-color/5 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-left text-sm font-semibold text-gray-700 border-b border-text-color/10">
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3 text-center">Quantity</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {cartItems.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 min-w-50">
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
                    <td className="px-4 py-3 font-medium">${item.price}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 justify-center">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="bg-gray-200 px-2 rounded cursor-pointer hover:bg-gray-300 w-7 h-7"
                        >
                          <FaMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="bg-gray-200 px-2 rounded cursor-pointer hover:bg-gray-300 w-7 h-7"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-text-color hover:scale-105 text-sm cursor-pointer"
                      >
                        <FaTrash className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-right">
            <h3 className="text-xl font-semibold">
              Total: ${getTotalPrice().toFixed(2)}
            </h3>
            <button className="mt-4 px-6 py-2 bg-black text-white rounded cursor-not-allowed">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
