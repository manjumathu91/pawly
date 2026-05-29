import React, { useState, useContext } from 'react';
import toast from 'react-hot-toast'; // Popup notification-kku
import { CartContext } from '../context/CartContext'; // Context import
import heroImg from '../assets/maine.jpg'; 
import c1 from '../assets/royal.png'; 
import c2 from '../assets/sub.jpg'; 
import c3 from '../assets/toy.png'; 
import c4 from '../assets/touch.png'; 
import c5 from '../assets/treats.png'; 
import c6 from '../assets/tripel.png'; 
const catProducts = [
  { id: 101, name: "Feather Wand Pro", price: 10.00, brand: "Royal Canin", category: "Toys", img: c1},
  { id: 102, name: "Cactus Scratch Post", price: 45.00, brand: "Purina One", category: "Litter", img: c2},
  { id: 103, name: "Gourmet Salmon Bites", price: 20.00, brand: "Meow Mix", category: "Food", img: c3},
  { id: 104, name: "Gourmet Salmon Bites", price: 30.00, brand: "Royal cannin", category: "Toys", img: c4},
 {id: 105, name: "Gourmet Salmon Bites", price: 60.00, brand: "Purina One", category: "Food", img: c5},
   {id: 106, name: "Gourmet Salmon Bites", price: 100.00, brand: "Meow Mix", category: "Food", img: c6},
];

const CatPage = () => {
  const { addToCart } = useContext(CartContext);
  const [maxPrice, setMaxPrice] = useState(200);
  const [selectedBrand, setSelectedBrand] = useState("All");

  const filteredCatProducts = useMemo(() => {
    return catProducts.filter(p => {
      const matchPrice = p.price <= maxPrice;
      const matchBrand = selectedBrand === "All" || p.brand === selectedBrand;
      return matchPrice && matchBrand;
    });
  }, [maxPrice, selectedBrand]);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added!`);
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-20">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative w-full h-[400px] rounded-[3rem] overflow-hidden">
          <img src={heroImg} className="absolute inset-0 w-full h-full object-cover" alt="Cat" />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-center p-16 text-white">
            <h1 className="text-5xl font-bold mb-4">Purr-fect Picks for Your Cat</h1>
            <button className="bg-[#E53E3E] px-8 py-3 rounded-full w-fit font-bold">Explore Favorites</button>
          </div>
        </div>
      </section>
      {/* Category Section */}
<div className="max-w-7xl mx-auto px-4 my-12">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      { name: "Cat Food", icon: "🍴" },
      { name: "Grooming", icon: "✂️" },
      { name: "Litter & Accessories", icon: "🦴" },
      { name: "Toys", icon: "🚗" },
    ].map((cat) => (
      <div key={cat.name} className="bg-[#F9F7F2] p-8 rounded-[2rem] flex flex-col items-center hover:shadow-md transition">
        <div className="text-4xl mb-4">{cat.icon}</div>
        <h3 className="font-bold text-lg">{cat.name}</h3>
      </div>
    ))}
  </div>
</div>

      {/* 2. Main Content */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 mt-10">
        <aside className="w-full md:w-64">
          <h3 className="font-bold mb-4">PRICE RANGE</h3>
          <input type="range" min="0" max="200" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full mb-2" />
          <p className="mb-8">Max: ${maxPrice}</p>

          <h3 className="font-bold mb-4">BRANDS</h3>
          {['All', 'Royal Canin', 'Purina One', 'Meow Mix'].map(b => (
            <label key={b} className="flex gap-2 mb-2"><input type="radio" name="brand" onChange={() => setSelectedBrand(b)} /> {b}</label>
          ))}
        </aside>
         
        <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            
          {filteredCatProducts.map(p => (
            <div key={p.id} className="bg-white p-6 rounded-[2rem] border shadow-sm">
              <img src={p.img} className="w-full h-40 object-cover rounded-2xl mb-4" />
              <h3 className="font-bold">{p.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-xl">${p.price}</span>
                <button onClick={() => handleAddToCart(p)} className="bg-black text-white p-3 rounded-full">🛒</button>
              </div>
            </div>
          ))}
        </main>
        
      </div>
      <div className="flex justify-center mt-12 mb-20">
      <button 
            className="bg-[#EAE4DD] hover:bg-[#d6cfc7] text-[#4A3F35] px-8 py-3 rounded-full font-bold transition-all"
       >
                Load More Treasures
        </button>
        </div>
         </div>
  );
};

export default CatPage;