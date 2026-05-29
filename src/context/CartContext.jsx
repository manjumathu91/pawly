import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  // Add Item - FIXED logic here
  const addToCart = (product) => {
    setCart((prevItems) => {
      const numericPrice = parseFloat(product.price) || 0;
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product,price: numericPrice, quantity: 1 }];
    });
  };

  // Remove Item
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Update Quantity
  const updateQuantity = (id, delta) => {
    setCart((prev) => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  // Move to Saved
  const saveForLater = (item) => {
    setSavedItems((prev) => [...prev, item]);
    removeFromCart(item.id);
  };

  // Move back to Cart
  const moveToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setSavedItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, savedItems, addToCart, removeFromCart, updateQuantity, saveForLater, moveToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};