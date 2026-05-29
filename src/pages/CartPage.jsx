import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, savedItems, updateQuantity, removeFromCart, saveForLater, moveToCart, clearCart } = useContext(CartContext);

  // Calculation Logic
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 10;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert("Checkout Successful! Thank you.");
      clearCart();    
      navigate('/');  
    }
  };

  return (
    // Responsive: Container-la overflow-hidden add panni irukken, so mobile-la screen-a thandi pogadhu
    <div className="w-full max-w-6xl mx-auto p-4 md:p-10 flex flex-col md:flex-row gap-10 overflow-hidden">
      
      {/* Left side: Cart Items List */}
      <div className="flex-1 w-full min-w-0">
        <h1 className="text-3xl font-bold mb-6">Your Sanctuary Basket ({cart.length} items)</h1>
        
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border-b gap-4 flex-wrap">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <img src={item.img} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" alt={item.name} />
                <div className="min-w-0">
                  <p className="font-bold truncate">{item.name}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQuantity(item.id, -1)} className="px-3 border rounded hover:bg-gray-100">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="px-3 border rounded hover:bg-gray-100">+</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                <div className="flex gap-2 text-sm mt-2">
                  <button onClick={() => saveForLater(item)} className="underline hover:text-blue-600">Save</button>
                  <button onClick={() => removeFromCart(item.id)} className="underline text-red-500 hover:text-red-700">Remove</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Right side: Summary + Saved Items */}
      <div className="w-full md:w-80 flex flex-col gap-8 flex-shrink-0">
        
        {/* Order Summary Section */}
        <div className="bg-white p-6 rounded-3xl border shadow-sm w-full">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
            <div className="flex justify-between"><span>Tax (5%)</span><span>${tax.toFixed(2)}</span></div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg font-bold"><span>Total</span><span>${total.toFixed(2)}</span></div>
          </div>
          <button 
            onClick={handleCheckout} 
            className="w-full bg-red-500 text-white py-3 rounded-full font-bold mt-6 hover:bg-red-600 transition duration-200"
          >
            Proceed to Checkout
          </button>
        </div>

        {/* Saved Items Section */}
        {savedItems.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-3xl w-full">
            <h2 className="text-xl font-bold mb-4">Saved for Later</h2>
            {savedItems.map(item => (
              <div key={item.id} className="flex justify-between items-center py-2 border-b">
                <span className="text-sm truncate mr-2">{item.name}</span>
                <button onClick={() => moveToCart(item)} className="text-blue-600 font-bold text-sm whitespace-nowrap">Move to Cart</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;