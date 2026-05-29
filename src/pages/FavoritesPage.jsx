import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { ShoppingCart, Heart, Trash2 } from 'lucide-react'; 
import { CartContext } from '../context/CartContext'; 
import f1 from '../assets/leather.png';
import f2 from '../assets/toy.png';
import f3 from '../assets/bed.png';
import f4 from '../assets/bell.png'
import dogIm from '../assets/dog.png';
const FavoritesPage = () => {
  const { addToCart } = useContext(CartContext); // Cart context logic
  const handleMoveToCart = (item) => {
    addToCart(item); // Cart-kku add aagum
    toast.success(`${item.name} moved to cart!`, {
      style: { borderRadius: '10px', background: '#333', color: '#fff' },
    });
  };

  const favoriteItems = [
    { id: 1, name: "Heritage Leather Collar", price: 45.00, image:f1, rating: "4.9" },
    { id: 2, name: "Velvet Cloud Bed", price: 89.00, image: f2, rating: "5.0" },
    { id: 3, name: "Nature-Tug Hemp Toy", price: 18.50, image:f3, rating: "4.7" },
    { id: 4, name: "SmartFlow Auto Feeder", price: 120.00, image:f4, rating: "4.8" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-4 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Your Favorites 🐾</h1>
            <p className="text-gray-600">These will make their tails wag!</p>
          </div>
          <button className="text-red-500 font-bold text-sm flex items-center gap-1">
             View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteItems.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-4 border shadow-sm"
            >
              {/* Image Section - Responsive */}
              <div className="h-48 rounded-2xl mb-4 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
                
              </div>

              <h3 className="font-bold text-lg mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-2">⭐ {item.rating} (reviews)</p>
              <p className="text-xl font-bold mb-4">${item.price.toFixed(2)}</p>
              
              {/* Add to Cart Logic */}
              <button 
                onClick={() => handleMoveToCart(item)} // Itha use pannunga
                className="w-full bg-[#E65C5C] text-white py-3 rounded-full font-bold"
               >
                Move to Cart
               </button>
            </motion.div>
            
          ))}
        </div>
      </div>
      {/* Weekend Essentials Section */}
<motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-20 bg-[#F5F5DC] rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10"
>
  {/* Text Side */}
  <div className="flex-1 space-y-6">
    <span className="bg-[#40E0D0] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
      Trending Now
    </span>
    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
      Don't forget the essentials for your weekend adventures!
    </h2>
    <p className="text-gray-700 text-lg">
      Our top-rated travel kit is currently on sale. Keep your furry friend comfortable wherever the trail leads.
    </p>
    <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition">
      Explore Travel Collection →
    </button>
  </div>

  {/* Image Side */}
  <div className="flex-1 w-full">
    <img 
      src={dogIm}
      alt="Dog in car" 
      className="w-full h-auto rounded-[30px] shadow-2xl object-cover"
    />
    {/* Testimonial box overlapping */}
    <div className="bg-yellow-300 p-6 rounded-2xl -mt-10 ml-4 shadow-lg border-2 border-black">
      <p className="font-bold italic">"The best gear we've ever bought for Luna!"</p>
      <p className="text-sm mt-2">— Sarah K.</p>
    </div>
  </div>
</motion.div>
    </div>
  );
};

export default FavoritesPage;