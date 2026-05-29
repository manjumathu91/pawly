import React, { useState, useMemo } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// Assets (Unga path correct-a irukanum)
import heroImg from '../assets/playdog.png';
import toy1 from '../assets/tough.png';
import toy2 from '../assets/brainy.png';
import toy3 from '../assets/tripel.png';
import toy4 from '../assets/squeaky.png';
import toy5 from '../assets/pro.png';
import toy6 from '../assets/majest.png';

const toysData = [
  { id: 1, name: "Tough Chew Bone", price: 18.50, badge: "SUPER DURABLE", img: toy1, size: "Medium", material: "Rubber" },
  { id: 2, name: "Brainy Treat Slider", price: 24.99, badge: "PUP'S FAVORITE", img: toy2, size: "Small", material: "Rope" },
  { id: 3, name: "Triple-Knot Tug Rope", price: 12.00, badge: "BEST SELLER", img: toy3, size: "Medium", material: "Rubber" },
  { id: 4, name: "Squeaky Squirrel", price: 9.50, badge: "NEW", img: toy4, size: "Large", material: "Rubber" },
  { id: 5, name: "Pro Ball Launcher", price: 32.00, badge: "ECO-FRIENDLY", img: toy5, size: "Medium", material: "Rubber" },
  { id: 6, name: "Majest Mallad", price: 32.00, badge: "ECO-FRIENDLY", img: toy6, size: "Large", material: "Rope" },
];

const ToysPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  // Filter logic: Case-insensitive comparison
  const filteredToys = useMemo(() => {
    return toysData.filter(t => {
      const matchSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchSize = selectedSizes.length === 0 || selectedSizes.includes(t.size);
      const matchMat = selectedMaterials.length === 0 || selectedMaterials.includes(t.material);
      return matchSearch && matchSize && matchMat;
    });
  }, [searchTerm, selectedSizes, selectedMaterials]);
 const handleAddToCart = (toy) => {
    addToCart(toy);
    navigate('/cart');
  };
  

  const toggleFilter = (setter, state, value) => {
    setter(state.includes(value) ? state.filter(i => i !== value) : [...state, value]);
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen p-4 md:p-8">
      {/* 1. Hero Section */}
      <section className="relative max-w-7xl mx-auto bg-[#A7C5D5] rounded-[3rem] h-[300px] md:h-[350px] flex items-center overflow-hidden mb-12">
        <div className="relative z-10 p-6 md:p-12 w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Playtime is the Best Time</h1>
          <p className="mb-6 hidden md:block">Discover a curated world of durable, safe, and wildly fun toys.</p>
          <button className="bg-[#E53E3E] text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-bold">Shop Bestsellers</button>
        </div>
        <img src={heroImg} className="absolute right-0 w-1/2 h-full object-cover opacity-80 md:opacity-100" alt="Dog" />
      </section>

      {/* 2. Find Bar */}
      <div className="max-w-3xl mx-auto mb-12">
        <input 
          type="text" 
          placeholder="Find toys..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 rounded-full border shadow-sm outline-none focus:ring-2 focus:ring-teal-500" 
        />
      </div>

      {/* 3. Categories Icons */}
      <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-5 gap-4 mb-16 text-center">
        {['Chew Toys', 'Fetch', 'Puzzles', 'Plushies', 'Tug'].map((cat, i) => (
          <div key={i} className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-2xl md:text-4xl border shadow-lg">
              {['🦴', '🎾', '🧩', '🧸', '🪢'][i]}
            </div>
            <p className="font-bold mt-2 text-sm">{cat}</p>
          </div>
        ))}
      </div>

      {/* 4. Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Aside */}
        <aside className="w-full md:w-64 space-y-6">
          <div>
            <h3 className="font-bold mb-2">Dog Size</h3>
            {['Small', 'Medium', 'Large'].map(s => (
              <label key={s} className="flex items-center gap-2 py-1 cursor-pointer">
                <input type="checkbox" checked={selectedSizes.includes(s)} onChange={() => toggleFilter(setSelectedSizes, selectedSizes, s)} /> {s}
              </label>
            ))}
          </div>
          <div>
            <h3 className="font-bold mb-2">Material</h3>
            {['Rubber', 'Rope', 'Plush'].map(m => (
              <label key={m} className="flex items-center gap-2 py-1 cursor-pointer">
                <input type="checkbox" checked={selectedMaterials.includes(m)} onChange={() => toggleFilter(setSelectedMaterials, selectedMaterials, m)} /> {m}
              </label>
            ))}
          </div>
        </aside>

        {/* Grid */}
        <main className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredToys.length > 0 ? filteredToys.map((toy) => (
              <motion.div layout key={toy.id} className="bg-white p-4 rounded-[2rem] border shadow-sm">
                <span className="bg-black text-white text-[10px] px-2 py-1 rounded-full">{toy.badge}</span>
                <img src={toy.img} className="w-full h-40 object-cover rounded-2xl my-4" alt={toy.name} />
                <h3 className="font-bold text-lg">{toy.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold text-xl">${toy.price}</p>
                  <button 
  onClick={() => handleAddToCart(toy)} // Inga toy-ai pass pannunga
  className="bg-red-500 text-white px-4 py-2 rounded-full"
>
  Add to Cart
</button>
                     
                </div>
              </motion.div>
            )) : <p className="text-gray-500">No toys found matching your filters.</p>}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ToysPage;