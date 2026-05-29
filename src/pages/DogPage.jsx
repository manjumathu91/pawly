import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';

// Import images
import dogHeroImg from '../assets/petImage.png'; 
import foodImg from '../assets/food1.png';
import toyImg from '../assets/toy.png';
import bedImg from '../assets/bed.png';
import subImg from '../assets/holdingcart.jpg';

const products = [
  { id: 1, name: "Wilderness Salmon & Potato", brand: "Royal Canin", price: 24.99, category: "Nutrition", img: foodImg, rating: 4.9 },
  { id: 2, name: "Indestructible Helix Chew", brand: "Blue Buffalo", price: 18.50, category: "Toys", img: toyImg, rating: 4.8 },
  { id: 3, name: "DreamCloud Ortho Bed", brand: "Purina Pro", price: 89.00, category: "Wellness", img: bedImg, rating: 5.0 },
];

const DogPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [filterBrand, setFilterBrand] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const filteredProducts = products.filter(p => {
    const matchBrand = filterBrand === "All" || p.brand === filterBrand;
    const matchPrice = p.price <= maxPrice;
    return matchBrand && matchPrice;
  });
   const handleSubscribe = () => {
  if (email.trim() === "") {
    setEmailError(true);
  } else {
    setEmailError(false);

    navigate('/profile'); 
  }
};
  // Browse by Need click handler - Dynamic Navigation
  const handleNeedClick = (name) => {
    // '/food', '/grooming', '/health', '/toys' route-ku pogum
    navigate(`/${name.toLowerCase()}`); 
  };
  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Parent div click aagatha thadukkum
    addToCart({ ...product, quantity: 1 }); // Product-ai cart-la add pannum
    toast.success(`${product.name} added to cart!`); // Popup notification
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-20">
      
      {/* 1. Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="rounded-[3rem] overflow-hidden relative group h-[450px]">
           <img src={dogHeroImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Hero" />
           <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-16">
              <h1 className="text-6xl text-white font-bold mb-4">Happy Tails, <br/> Happy Hearts.</h1>
              <button onClick={() => navigate('/shop')} className="bg-[#E53E3E] text-white px-8 py-3 rounded-full w-48 font-bold hover:bg-[#c53030]">Explore Dog Shop</button>
           </div>
        </div>
      </div>

      {/* 2. Browse by Need */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-8">Browse by Need</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[ 
            {name: 'Food', icon: '🍖'}, 
            {name: 'Grooming', icon: '✂️'}, 
            {name: 'Health', icon: '💊'}, 
            {name: 'Toys', icon: '🎾'} 
          ].map((item) => (
            <div 
              key={item.name} 
              onClick={() => handleNeedClick(item.name)} 
              className="bg-white p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Filter & Product Grid */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        <aside className="w-full md:w-64 space-y-8">
          <h3 className="font-bold text-xl">Filters</h3>
          
          <div>
            <p className="font-bold mb-3">Popular Brands</p>
            {['All', 'Royal Canin', 'Blue Buffalo', 'Purina Pro'].map(brand => (
               <label key={brand} className="flex items-center gap-2 mb-2 cursor-pointer">
                 <input type="radio" name="brand" onChange={() => setFilterBrand(brand)} className="accent-[#8B3D3D]" /> {brand}
               </label>
            ))}
          </div>

          <div>
            <h3 className="font-bold mb-3">Price Range</h3>
            <input type="range" min="10" max="100" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-[#8B3D3D]" />
            <p className="text-sm">Max Price: ${maxPrice}</p>
          </div>
        </aside>
        

        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              onClick={() => navigate(`/product/${product.id}`)} 
              className="bg-white p-6 rounded-[2rem] border hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img src={product.img} className="w-full h-48 object-cover rounded-2xl mb-4" alt={product.name} />
              <h3 className="font-bold text-lg">{product.name}</h3>
              <div className="flex justify-between items-center mt-6">
                <span className="font-bold text-2xl">${product.price}</span>
                <button 
      onClick={(e) => handleAddToCart(e, product)} 
      className="bg-[#8B3D3D] text-white p-4 px-6 rounded-full hover:scale-110 transition"
    >
      Add
    </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 3. Join Section with Error Logic */}
      <div className="max-w-7xl mx-auto px-6 mt-20 bg-[#EDE7DD] p-12 rounded-[3rem] flex items-center justify-between">
        <div className="w-1/2">
          <h2 className="text-4xl font-bold mb-6">Join the Pawly Pack</h2>
          <div className="relative">
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter email" 
                value={email}
                onChange={(e) => { setEmail(e.target.value); setEmailError(false); }}
                className={`p-4 rounded-full w-full border ${emailError ? 'border-red-500' : 'border-transparent'}`} 
              />
              <button onClick={handleSubscribe} className="bg-[#064E3B] text-white px-10 py-4 rounded-full font-bold whitespace-nowrap">Sign Up</button>
            </div>
            {emailError && <p className="text-red-600 text-sm mt-2 ml-4 font-bold">Please enter your email!</p>}
          </div>
        </div>
        <img src={subImg} className="w-64 h-64 rounded-3xl object-cover" alt="Join" />
      </div>
      
    </div>
  );
};

export default DogPage;