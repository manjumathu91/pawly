import React, { useState, useContext,useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Navigate-kku
import { CartContext } from '../context/CartContext'; // Context import
import foodImg from '../assets/food1.png';
import coopersPhoto from '../assets/dog.png';
import coopersReview from '../assets/dogpack.jpg';
import BellaPhoto from '../assets/food2.png';
import BellaReview from '../assets/holdingcart.jpg';
import LunaPhoto from '../assets/golden.png';
import LunaReview from '../assets/persian.png';
import chickenImg from '../assets/tough.png'; // Inga unga image path
import bedImg from '../assets/bed.png'; // Files assets folder-la irukkanum
import boneImg from '../assets/balm.png';
import treatImg from '../assets/treats.png';

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // Hook-ai define pannunga
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("5 lb");
  const scrollRef = useRef(null);
  const scroll = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };

  // Mock Data (Real app-la idhu props-ah varum)
  const product = {
    id: 1,
    name: "Grain-Free Salmon & Sweet Potato",
    price: 42.00,
    oldPrice: 54.00,
    description: "Crafted with sustainably sourced Atlantic salmon and organic sweet potatoes. Designed specifically for active dogs with sensitive skin and coat health needs.",
    img: foodImg // Unga image path-ai inge podunga
  };

  // Cart-la add panni cart page-ku poga logic
  const handleAddToCart = () => {
    addToCart({ ...product, quantity, size: selectedSize });
    navigate('/cart'); // Direct-ah cart page-ku kuttitu pogum
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen p-4 md:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left: Product Image */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-6 rounded-[3rem] border shadow-sm">
          <img src={product.img} alt={product.name} className="w-full h-[500px] object-cover rounded-[2rem]" />
        </motion.div>

        {/* Right: Product Details */}
        <div className="flex flex-col">
          <span className="bg-yellow-200 text-xs font-bold px-3 py-1 rounded-full w-fit uppercase">Nutrition Specialist</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-2 mb-4 text-yellow-500">
            ★★★★★ <span className="text-gray-500 text-sm">(128 Reviews)</span>
          </div>
          
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-4xl font-bold text-red-500">${product.price.toFixed(2)}</span>
            <span className="text-gray-400 line-through text-xl">${product.oldPrice.toFixed(2)}</span>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <p className="font-bold mb-3">SELECT SIZE</p>
            <div className="flex gap-4">
              {["5 lb", "15 lb", "30 lb"].map(size => (
                <button 
                  key={size} 
                  onClick={() => setSelectedSize(size)}
                  className={`px-8 py-2 rounded-full border-2 font-bold transition ${selectedSize === size ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Row: Quantity + Add to Cart */}
          <div className="flex gap-4 items-center">
            <div className="flex items-center border rounded-full bg-white shadow-inner">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-6 py-4">-</button>
              <span className="px-6 font-bold">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="px-6 py-4">+</button>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-[#D97D8C] text-white py-4 rounded-full font-bold shadow-lg hover:bg-[#c66c7b] transition"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      {/* SECTION: Pure Ingredients & Feeding Guide */}
<section className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
  
  {/* Pure Ingredients Card */}
  <div className="bg-white p-8 rounded-[2rem] border shadow-sm">
    <h2 className="text-3xl font-bold mb-4">Pure Ingredients</h2>
    <p className="text-gray-600 mb-6">We believe in transparency. No fillers, no by-products, just wholesome nutrition from the earth and sea.</p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[
        { name: "Atlantic Salmon", desc: "Rich in Omega-3 fatty acids" },
        { name: "Sweet Potato", desc: "High fiber energy source" },
        { name: "Fresh Kale", desc: "Superfood antioxidant boost" },
        { name: "Turmeric", desc: "Natural anti-inflammatory" }
      ].map((item, i) => (
        <div key={i}>
          <p className="font-bold text-red-500 text-lg">• {item.name}</p>
          <p className="text-sm text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Feeding Guide Card */}
  <div className="bg-[#7DF9FF] p-8 rounded-[2rem] shadow-sm">
    <h2 className="text-3xl font-bold mb-6">Feeding Guide</h2>
    <div className="space-y-4">
      {[
        { weight: "5 - 15 lbs", cup: "1/2 - 1 1/4 cups" },
        { weight: "16 - 30 lbs", cup: "1 1/4 - 2 cups" },
        { weight: "31 - 50 lbs", cup: "2 - 3 cups" },
        { weight: "51+ lbs", cup: "3+ cups" }
      ].map((guide, i) => (
        <div key={i} className="flex justify-between border-b border-black/10 pb-2">
          <span className="font-bold">{guide.weight}</span>
          <span>{guide.cup}</span>
        </div>
      ))}
    </div>
    <p className="mt-6 text-sm text-gray-700 font-medium">Adjust portions based on your dog's activity level and weight goals.</p>
  </div>
  
</section>
{/* Happy Tails Section with Images */}
<section className="max-w-7xl mx-auto p-8">
  <h2 className="text-3xl font-bold mb-8">Happy Tails</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { 
        name: "Cooper & Sarah", 
        text: "Cooper's coat has never looked shinier!...", 
        userImg: coopersPhoto, // User profile pic
        reviewImg: coopersReview// Dog photo in review
      },
      { 
        name: "Bella&Mike", 
        text: "Cooper's coat has never looked shinier!...", 
        userImg: BellaPhoto, // User profile pic
        reviewImg: BellaReview// Dog photo in review
      },
      { 
        name: "Luna&James", 
        text: "Cooper's coat has never looked shinier!...", 
        userImg: LunaPhoto, // User profile pic
        reviewImg: LunaReview// Dog photo in review
      },
      // ... baki 2 cards-um ipdiye add pannunga
    ].map((review, i) => (
      <div key={i} className="bg-white p-6 rounded-[2rem] border shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <img src={review.userImg} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-bold">{review.name}</p>
            <p className="text-yellow-500">★★★★★</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{review.text}</p>
        {/* Review Image display */}
        <img src={review.reviewImg} className="w-full h-40 object-cover rounded-2xl" />
      </div>
    ))}
  </div>
</section>
<section className="max-w-7xl mx-auto p-4 md:p-8">
  {/* Header & Arrows */}
  <div className="flex justify-between items-center mb-6 md:mb-8">
    <h2 className="text-2xl md:text-3xl font-bold">Pairs Perfectly With</h2>
    <div className="flex gap-2">
      <button 
        onClick={() => scroll(-300)} 
        className="p-2 md:p-3 rounded-full border bg-white hover:bg-gray-100 transition shadow-sm"
      >
        ←
      </button>
      <button 
        onClick={() => scroll(300)} 
        className="p-2 md:p-3 rounded-full border bg-white hover:bg-gray-100 transition shadow-sm"
      >
        →
      </button>
    </div>
  </div>

  {/* Scrollable Container */}
  <div 
    ref={scrollRef} 
    className="flex gap-4 md:gap-8 overflow-x-auto pb-4 scroll-smooth scrollbar-hide snap-x"
  >
    {[
      { name: "Organic Chicken Jerky", price: "$18.00", img: chickenImg },
      { name: "Cloud Comfort Bed", price: "$85.00", img: bedImg },
      { name: "Sustainable Rubber Bone", price: "$14.00", img: boneImg },
      { name: "Grain-Free Treats", price: "$12.00", img: treatImg }
    ].map((item, i) => (
      <div key={i} className="min-w-[200px] md:min-w-[300px] snap-start">
        <img 
          src={item.img} 
          alt={item.name} 
          className="w-full h-60 md:h-80 object-cover rounded-[1.5rem] md:rounded-[2rem] mb-4 bg-gray-100" 
        />
        <p className="font-bold text-md md:text-lg">{item.name}</p>
        <p className="text-red-500 font-bold">{item.price}</p>
      </div>
    ))}
  </div>
</section>
      
    </div> 
  );
};

export default ProductPage;
