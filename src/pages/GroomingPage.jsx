import React, { useState, useMemo, useContext } from 'react'; 
import toast from 'react-hot-toast'; 
import { CartContext } from '../context/CartContext'; 
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Assets
import heroImg from '../assets/golden.png'; 
import arrivalImg from '../assets/newarrival.jpg'; 
import subImg from '../assets/dogpack.jpg'; 
import p1 from '../assets/shampoo.png';
import p2 from '../assets/brush.png';
import p3 from '../assets/teer.png';
import p4 from '../assets/balm.png';
import p5 from '../assets/trimmers.png';
import p6 from '../assets/towel.png';

const groomingProducts = [
  { id: 1, name: "Organic Oatmeal Shampoo", price: 24.00, category: "Shampoos", scent: "Lavender", img: p1 },
  { id: 2, name: "Shed-Free Brush Pro", price: 32.50, category: "Brushes", scent: "Unscented", img: p2 },
  { id: 3, name: "Tear-Free Facial Wash", price: 18.00, category: "Wellness", scent: "Aloe Vera", img: p3 },
  { id: 4, name: "Healing Paw Balm", price: 49.00, category: "Wellness", scent: "Citrus", img: p4 },
  { id: 5, name: "Pro-Series Trimmers", price: 12.00, category: "Brushes", scent: "Unscented", img: p5 },
  { id: 6, name: "Quick-Dry Spa Towel", price: 17.00, category: "Shampoos", scent: "Lavender", img: p6 },
];

const GroomingPage = () => {
  const { addToCart } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState("All Grooming");
  const [activeScent, setActiveScent] = useState("All");
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(100);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
   const handleSignUp = () => {
  if (email.trim() === "") {
    setEmailError(true); // Error irundha state-ai true aakku
  } else {
    setEmailError(false); // No error, proceed
    navigate('/profile');
  }
};
const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart!`, {
      style: { borderRadius: '10px', background: '#333', color: '#fff' },
    });
  };
  const filteredProducts = useMemo(() => {
    return groomingProducts.filter(p => {
      const matchCat = activeCat === "All Grooming" || p.category === activeCat;
      const matchScent = activeScent === "All" || p.scent === activeScent;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchPrice = p.price <= maxPrice;
      return matchCat && matchScent && matchSearch && matchPrice;
    });
  }, [activeCat, activeScent, search, maxPrice]);

  return (
    <div className="bg-[#FDFBF7] min-h-screen p-4 md:p-8">
      {/* 1. Hero Section */}
      <div className="max-w-7xl mx-auto mb-10 bg-[#EDE7DD] rounded-[2rem] md:rounded-[3rem] h-[300px] md:h-[400px] flex items-center overflow-hidden relative">
        <div className="w-full md:w-1/2 p-8 md:p-16 z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Freshness for Every Furry Friend</h1>
          <button className="bg-[#E53E3E] text-white px-6 py-3 rounded-full font-bold">Shop Best Sellers</button>
        </div>
        <img src={heroImg} className="absolute right-0 w-1/2 h-full object-cover rounded-l-[3rem] hidden md:block" alt="Hero" />
      </div>

      {/* 2. Search & Category (Responsive) */}
      <div className="max-w-4xl mx-auto mb-10 flex flex-col items-center">
        <input type="text" placeholder="Find treats..." onChange={(e) => setSearch(e.target.value)} className="w-full p-4 rounded-full border shadow-sm mb-6" />
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {['All Grooming', 'Shampoos', 'Brushes', 'Wellness'].map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} className={`px-4 md:px-6 py-2 rounded-full font-bold transition ${activeCat === cat ? 'bg-[#E53E3E] text-white' : 'bg-[#E5DACE]'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Main Content (Responsive Grid) */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <button className="md:hidden w-full bg-gray-200 p-3 rounded-full font-bold" onClick={() => setIsFilterOpen(!isFilterOpen)}>
          {isFilterOpen ? "Hide Filters" : "Show Filters"}
        </button>

        <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-72 space-y-8`}>
           <h3 className="font-bold">PRICE RANGE</h3>
           <input type="range" min="10" max="100" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full accent-[#E53E3E]" />
           <p className="text-sm">Max Price: ${maxPrice}</p>
           
           <h3 className="font-bold">SCENT</h3>
           <div className="flex flex-wrap gap-2">
             {['All', 'Aloe Vera', 'Lavender', 'Unscented', 'Citrus'].map(s => (
               <button key={s} onClick={() => setActiveScent(s)} className={`px-4 py-2 border rounded-full text-sm ${activeScent === s ? 'bg-[#E53E3E] text-white' : 'bg-white'}`}>{s}</button>
             ))}
           </div>

           <div className="bg-[#EDE7DD] rounded-3xl p-4 text-center hidden md:block">
             <img src={arrivalImg} className="rounded-2xl mb-3 w-full h-32 object-cover" alt="New Arrival" />
             <p className="font-bold">New Arrivals!</p>
           </div>
        </aside>

        <main className="flex-1">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProducts.map(p => (
                <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={p.id} className="bg-white p-6 rounded-[2rem] border shadow-sm">
                  <img src={p.img} className="w-full h-40 object-cover rounded-2xl mb-4" />
                  <h3 className="font-bold">{p.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold">${p.price}</span>
                    // Main content grid-kulla irukkura button-ai update pannunga:
                      <button 
                           onClick={() => handleAddToCart(p)} 
                          className="bg-[#E53E3E] text-white p-3 rounded-full hover:bg-red-600 transition"
                              >
                             🛒
                      </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </main>
      </div>

      <div className="max-w-7xl mx-auto mt-20 bg-[#EDE7DD] p-12 rounded-[3rem] flex items-center justify-between">
  <div className="w-1/2">
    <h2 className="text-4xl font-bold mb-6">Join the Pawly Pack</h2>
    <div className="relative">
      <div className="flex gap-4 items-center">
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => { setEmail(e.target.value); setEmailError(false); }} // Typing appo error-ai remove pannu
          className={`p-4 rounded-full w-full border ${emailError ? 'border-red-500' : 'border-transparent'} focus:outline-none`} 
        />
        <button 
          onClick={handleSignUp}
          className="bg-[#064E3B] text-white px-10 py-4 rounded-full font-bold whitespace-nowrap hover:bg-[#043d2e] transition"
        >
          Sign Up
        </button>
      </div>
      {/* 3. Error Message Display */}
      {emailError && (
        <p className="text-red-600 text-sm mt-2 ml-4 font-bold">Please enter your email to continue!</p>
      )}
    </div>
  </div>
  <img src={subImg} className="w-64 h-64 rounded-3xl object-cover" alt="Join Pawly" />
</div>
    </div>
  );
};

export default GroomingPage;