import React, { useState, useMemo, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';
import heroImg from '../assets/smallPetsHero.jpg'; 
import sidebarPetImg from '../assets/french.png'; 
import s1 from '../assets/toy.png'; 
import s2 from '../assets/playdog.png'; 
import s3 from '../assets/towel.png';
import s4 from '../assets/newarrival.jpg';
import s5 from '../assets/bed.png';
import s6 from '../assets/brush.png';
const smallPetsProducts = [
  { id: 201, name: "Timothy Hay", price: 18.99, animal: "Rabbit", brand: "Oxbow", img: s1 },
  { id: 202, name: "Hamster Wheel Pro", price: 34.50, animal: "Hamster", brand: "Kaytee", img: s2 },
  { id: 203, name: "Cozy Bunny Hideout", price: 42.00, animal: "Rabbit", brand: "Oxbow", img: s3 },
  { id: 205, name: "Cozy Bunny Hideout", price: 60.00, animal: "Hamster", brand: "kaytee", img: s5 },
  { id: 206, name: "Cozy Bunny Hideout", price: 70.00, animal: "Rabbit", brand: "Oxbow", img: s6 },
  
];

const SmallPetsPage = () => {
  const { addToCart } = useContext(CartContext);
  const [activeAnimals, setActiveAnimals] = useState([]);
  const [activeBrands, setActiveBrands] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100);

  const handleAnimalToggle = (animal) => {
    setActiveAnimals(prev => prev.includes(animal) ? prev.filter(i => i !== animal) : [...prev, animal]);
  };

  const handleBrandToggle = (brand) => {
    setActiveBrands(prev => prev.includes(brand) ? prev.filter(i => i !== brand) : [...prev, brand]);
  };
  
  const filteredProducts = useMemo(() => {
    return smallPetsProducts.filter(p => {
      const matchAnimal = activeAnimals.length === 0 || activeAnimals.includes(p.animal);
      const matchBrand = activeBrands.length === 0 || activeBrands.includes(p.brand);
      const matchPrice = p.price <= maxPrice;
      return matchAnimal && matchBrand && matchPrice;
    });
  }, [activeAnimals, activeBrands, maxPrice]);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added!`);
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-20 w-full overflow-x-hidden">
      
      {/* 1. Hero Section - Fully Responsive */}
      <section className="px-2 md:px-4 py-4 w-full">
        <div className="relative w-full h-[250px] md:h-[400px] rounded-[2rem] md:rounded-[3rem] overflow-hidden">
          <img src={heroImg} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-6 md:px-16">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Little Friends,<br/>Big Love
            </h1>
            <button className="bg-teal-400 text-sm md:text-base px-6 py-3 rounded-full font-bold w-fit">
              Shop All Small Pets
            </button>
          </div>
        </div>
      </section>

      {/* 2. Categories - Scrollable on mobile */}
      <div className="max-w-5xl mx-auto px-4 my-8 md:my-16 overflow-x-auto flex flex-wrap gap-8 md:justify-center">
        {[{ name: "FOOD", icon: "🍴" }, { name: "HABITATS", icon: "🏠" }, { name: "TOYS", icon: "🎾" }, { name: "BEDDING", icon: "🛏️" }].map((cat) => (
          <div key={cat.name} className="flex flex-col items-center min-w-[70px] group cursor-pointer">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#F5EFE6] flex items-center justify-center text-2xl md:text-4xl mb-2 group-hover:scale-110 transition">
              {cat.icon}
            </div>
            <span className="font-bold text-[10px] md:text-sm tracking-wider text-gray-700">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* 3. Main Content - Responsive Flex */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-72 space-y-6">
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border">
            <h3 className="font-bold mb-4 text-xs uppercase text-gray-500">Animal Type</h3>
            {['Hamster', 'Rabbit', 'Guinea Pig', 'Bird'].map(a => (
              <label key={a} className="flex gap-3 mb-3 cursor-pointer items-center">
                <input type="checkbox" className="accent-teal-500 w-4 h-4" onChange={() => handleAnimalToggle(a)} /> 
                {a}
              </label>
            ))}
          </div>

          <div className="bg-white p-6 rounded-[2rem] shadow-sm border">
            <h3 className="font-bold mb-4 text-xs uppercase text-gray-500">Price Range</h3>
            <input type="range" min="0" max="100" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-teal-500" />
            <div className="flex justify-between text-sm mt-2 font-bold">${maxPrice}+</div>
          </div>

          <div className="hidden lg:block bg-gradient-to-br from-[#5D8B8E] to-[#4A7072] p-6 rounded-[2rem] text-white">
            <h3 className="font-bold text-lg">New Arrival</h3>
            <img src={sidebarPetImg} alt="Pet" className="w-24 h-24 object-contain mx-auto mt-4" />
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 w-full">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProducts.map(p => (
                <motion.div layout key={p.id} className="bg-white p-6 rounded-[2rem] border shadow-sm">
                  <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded-2xl mb-4" />
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <p className="text-red-600 font-bold text-xl mt-2">${p.price}</p>
                  <button onClick={() => handleAddToCart(p)} className="mt-4 w-10 h-10 bg-red-600 text-white rounded-full ml-auto block">+</button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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

export default SmallPetsPage;