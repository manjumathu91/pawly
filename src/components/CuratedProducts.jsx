import React, { useContext } from 'react';
import toast from 'react-hot-toast'; // Import toast
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react'; 
import { CartContext } from '../context/CartContext';

// Replace these with your actual product images
import p1 from '../assets/product1.png';
import p2 from '../assets/product2.png';
import p3 from '../assets/product3.png';

const products = [
  { name: "Ancestral Grain Blend",  desc: "Holistic nutrition for active breeds.", price: "$45.00", img: p1, color: "bg-red-800" },
  { name: "Tough-Tug Rope Pro",  desc: "Indestructible fun for power chewers.", price: "$18.50", img: p2, color: "bg-teal-800" },
  { name: "Vitality Drops 3-in-1", desc: "Omega-3 & Joint support for seniors.", price: "$29.99", img: p3, color: "bg-yellow-800" },
];

const CuratedProducts = () => {
  const { addToCart } = useContext(CartContext);
  const handleAdd = (prod) => {
    addToCart({ ...prod, quantity: 1 });
    // Intha line dhaan popup-ai varavaikkum
    toast.success(`${prod.name} added to cart!`, {
      style: { borderRadius: '10px', background: '#333', color: '#fff' },
    });
  };
  return (
    <section className="py-20 px-4 md:px-8 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Curated For Excellence</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((prod, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col"
            >
              
              
              <img src={prod.img} alt={prod.name} className="w-full h-64 object-contain mb-6" />
              
              <h3 className="text-xl font-bold mb-2">{prod.name}</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow">{prod.desc}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-2xl text-red-800 font-bold">{prod.price}</span>
                <button 
                  onClick={() => handleAdd(prod)} // Inga dhaan cart-la add aagum
                  className="bg-gray-100 p-3 rounded-full hover:bg-red-100 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedProducts;