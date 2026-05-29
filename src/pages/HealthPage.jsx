import React, { useState, useMemo, useContext } from 'react'; // useContext add
import toast from 'react-hot-toast'; // Notification
import { CartContext } from '../context/CartContext'; // Path correct-ah irukkanum
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import heroImg from '../assets/golden.png';
import p1 from '../assets/vite.png';
import p2 from '../assets/treats.png';
import p3 from '../assets/plaque.png';
import p4 from '../assets/first.png';

const products = [
  { id: 1, name: "Multi-Vitamin Chews", price: 24.99, category: "Anxiety", age: "Adult", img: p1 },
  { id: 2, name: "Calming Treats", price: 19.50, category: "Anxiety", age: "Puppy", img: p2 },
  { id: 3, name: "Plaque Remover", price: 32.00, category: "Digestion", age: "Adult", img: p3 },
  { id: 4, name: "First Aid Kit", price: 45.00, category: "Wellness", age: "Senior", img: p4 },
  { id: 5, name: "Pro-Series Trimmer", price: 22.00, category: "Digestion", age: "Adult", img: p2 },
];

const HealthPage = () => {
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [activeConcerns, setActiveConcerns] = useState([]);
  const [activeAges, setActiveAges] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  // Filter Logic
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCat = selectedCategory === "All" || p.category === selectedCategory;
      const matchC = activeConcerns.length === 0 || activeConcerns.includes(p.category);
      const matchA = activeAges.length === 0 || activeAges.includes(p.age);
      return matchesSearch && matchCat && matchC && matchA;
    });
  }, [ searchTerm,selectedCategory,activeConcerns, activeAges]);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart!`, {
      style: { borderRadius: '10px', background: '#333', color: '#fff' },
    });
  };

  const handleToggle = (setter, state, value) => {
    if (state.includes(value)) setter(state.filter(item => item !== value));
    else setter([...state, value]);
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen p-4 md:p-8">
      {/* 1. Hero */}
      <motion.div className="max-w-7xl mx-auto mb-10 bg-[#EDE7DD] rounded-[3rem] h-[350px] flex items-center p-12 relative overflow-hidden">
        <img src={heroImg} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
        <div className="relative z-10"><h1 className="text-5xl font-bold">Vibrant Health</h1>
        <button className="bg-[#E53E3E] text-white px-8 py-3 rounded-full font-bold w-fit">Shop Bestsellers</button></div>
      </motion.div>

      {/* 2. Search & Category Buttons */}
<div className="max-w-4xl mx-auto mb-12 text-center">
  <input 
  type="text" 
  placeholder="Find treats..." 
  value={searchTerm} // value-ai bind pannunga
  onChange={(e) => setSearchTerm(e.target.value)} // Type pannum pothu update aagum
  className="w-full p-4 rounded-full border mb-6 shadow-sm" 
/>
  
  <div className="flex flex-wrap justify-center gap-3">
    {['All', 'Anxiety', 'Digestion', 'Wellness'].map(cat => (
      <button 
        key={cat} 
        onClick={() => setSelectedCategory(cat)} 
        className={`px-6 py-2 rounded-full border transition ${
          selectedCategory === cat 
            ? 'bg-black text-white' 
            : 'bg-white hover:bg-gray-100'
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
  </div>

      {/* 3. Aside + Main */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <aside className="w-full md:w-64 space-y-8">
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">Health Concern</h3>
            {['Anxiety', 'Digestion', 'Wellness'].map(c => (
              <label key={c} className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" onChange={() => handleToggle(setActiveConcerns, activeConcerns, c)} className="w-5 h-5 accent-red-600" /> {c}
              </label>
            ))}
          </div>
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">Age Group</h3>
            {['Puppy', 'Adult', 'Senior'].map(a => (
              <label key={a} className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" onChange={() => handleToggle(setActiveAges, activeAges, a)} className="w-5 h-5 accent-red-600" /> {a}
              </label>
            ))}
          </div>
        </aside>

        <main className="flex-1">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map(p => (
                <motion.div key={p.id} layout className="bg-white p-6 rounded-3xl border shadow-sm">
                  <img src={p.img} className="w-full h-40 object-cover rounded-2xl mb-4" />
                  <h3 className="font-bold">{p.name}</h3>
                  <p className="text-xl font-bold">${p.price}</p>
                         <button 
                           onClick={() => handleAddToCart(p)} 
                             className="mt-4 w-full border border-black py-2 rounded-full hover:bg-black hover:text-white transition"
                                 >
                                Add to Cart
                           </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </main>
      </div>
    {/* 4. Unsure Section */}
      <div className="max-w-7xl mx-auto mt-20 bg-[#064E3B] p-12 rounded-[3rem] text-white flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold mb-2">Unsure about your dog's health?</h2>
          <p>Chat with a licensed vet in minutes.</p>
        </div>
        <button className="bg-[#5EEAD4] text-black px-8 py-4 rounded-full font-bold">Book Consultation</button>
      </div>
    </div>
  );
};

export default HealthPage;