export const getFromStorage = (key) => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const saveToStorage = (key, data) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(data));
};

export const toggleWishlist = (product) => {
  const current = getFromStorage("wishlist");
  const exists = current.find((item) => item.id === product.id);
  let updated;

  if (exists) {
    updated = current.filter((item) => item.id !== product.id);
  } else {
    updated = [...current, product];
  }

  saveToStorage("wishlist", updated);
  return updated;
};

export const addToCart = (product) => {
  const current = getFromStorage("cart");
  const exists = current.find((item) => item.id === product.id);

  let updated;
  if (exists) {
    // Increase quantity if already in cart
    updated = current.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    updated = [...current, { ...product, quantity: 1 }];
  }

  saveToStorage("cart", updated);
  return updated;
};
