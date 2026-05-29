import React, { useState, useEffect, useContext } from 'react'; // useContext add pannunga
import toast from 'react-hot-toast'; // Notification-kku
import { CartContext } from '../context/CartContext'; // Path correct-ah irukkanum

// Assets
import heroImg from '../assets/golden.png';
import subImg from '../assets/holdingcart.jpg';
import f1 from '../assets/royal.png';
import f2 from '../assets/food2.png';
import f3 from '../assets/food3.png';
import f4 from '../assets/food4.png';
import f5 from '../assets/food5.png';
import f6 from '../assets/food6.png';
import f7 from '../assets/food7.png';
import f8 from '../assets/food8.png';

const allProducts = [
  { id: 1, name: "Royal Canin Adult", price: 64.99, img: f1, category: "Adult", foodType: "Dry Food" },
  { id: 2, name: "Purina Pro Plan", price: 58.50, img: f2, category: "Puppy", foodType: "Dry Food" },
  { id: 3, name: "Blue Buffalo", price: 72.00, img: f3, category: "Senior", foodType: "Wet Food" },
  { id: 4, name: "Hill's Science Diet", price: 49.99, img: f4, category: "Adult", foodType: "Raw Diet" },
  { id: 5, name: "Wellness CORE", price: 68.99, img: f5, category: "Puppy", foodType: "Dry Food" },
  { id: 6, name: "Freshpet Vital", price: 28.45, img: f6, category: "Senior", foodType: "Wet Food" },
  { id: 7, name: "Acana Singles", price: 82.99, img: f7, category: "Adult", foodType: "Raw Diet" },
  { id: 8, name: "The Honest Kitchen", price: 74.99, img: f8, category: "Puppy", foodType: "Dry Food" },
];

const FoodPage = () => {
  const { addToCart } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({ lifeStage: [], foodType: [] });
  const [sortBy, setSortBy] = useState("Relevance");
  const [maxPrice, setMaxPrice] = useState(150);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [cart, setCart] = useState([]);
  // 2. Handler function
const handleSubscribe = () => {
  if (email.trim() === "") {
    setEmailError(true);
  } else {
    setEmailError(false);
    alert("Subscribed successfully!");
    setEmail(""); // Success-ku aprom clear pannidalam
  }
};

  // Filter & Sort Logic
  useEffect(() => {
    let result = allProducts.filter(p => p.price <= maxPrice);

    if (selectedFilters.lifeStage.length > 0) {
      result = result.filter(p => selectedFilters.lifeStage.includes(p.category));
    }
    if (selectedFilters.foodType.length > 0) {
      result = result.filter(p => selectedFilters.foodType.includes(p.foodType));
    }

    // Sorting
    if (sortBy === "Price: Low to High") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [selectedFilters, maxPrice, sortBy]);

  const toggleFilter = (type, val) => {
    setSelectedFilters(prev => {
      const current = prev[type];
      const updated = current.includes(val) ? current.filter(item => item !== val) : [...current, val];
      return { ...prev, [type]: updated };
    });
  };
  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart!`, {
      style: { borderRadius: '10px', background: '#333', color: '#fff' },
    });
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-20">
      {/* 1. Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative rounded-[3rem] h-[300px] md:h-[450px] w-full overflow-hidden shadow-sm border">
          <img src={heroImg} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
          <div className="relative z-10 flex flex-col justify-center h-full p-6 md:p-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">Fuel Their Play</h1>
            <button className="bg-[#E53E3E] text-white px-8 py-3 rounded-full font-bold w-fit">Shop Bestsellers</button>
          </div>
        </div>
      </div>

      {/* 2. Main Content */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 mt-10">
        <aside className="w-full md:w-64 space-y-8">
           <div>
             <h3 className="font-bold text-sm uppercase text-gray-500 mb-4">Life Stage</h3>
             {['Puppy', 'Adult', 'Senior'].map(s => (
               <label key={s} className="flex gap-3 items-center cursor-pointer mb-2">
                 <input type="checkbox" onChange={() => toggleFilter('lifeStage', s)} className="w-5 h-5 accent-[#E53E3E]" /> {s}
               </label>
             ))}
           </div>

           <div>
             <h3 className="font-bold text-sm uppercase text-gray-500 mb-4">Food Type</h3>
             {['Dry Food', 'Wet Food', 'Raw Diet'].map(f => (
               <label key={f} className="flex gap-3 items-center cursor-pointer mb-2">
                 <input type="checkbox" onChange={() => toggleFilter('foodType', f)} className="w-5 h-5 accent-[#E53E3E]" /> {f}
               </label>
             ))}
           </div>

           <div>
             <h3 className="font-bold text-sm uppercase text-gray-500 mb-4">Price Range</h3>
             <input type="range" min="10" max="150" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-[#E53E3E]" />
             <p className="text-sm font-bold mt-2">Max Price: ${maxPrice}</p>
           </div>
        </aside>

        <main className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <p className="font-medium text-gray-600">Showing {filteredProducts.length} items</p>
            <select className="bg-white border p-2 rounded-lg" onChange={(e) => setSortBy(e.target.value)}>
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(p => (
              <div key={p.id} className="bg-white p-6 rounded-3xl border hover:shadow-2xl transition">
                <img src={p.img} className="w-full h-40 object-contain rounded-2xl mb-4" />
                <h3 className="font-bold">{p.name}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold">${p.price}</span>
                     <button 
                      onClick={() => handleAddToCart(p)} 
                          className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition"
                       >
                           🛒
                    </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* 3. Subscription Section */}
     <div className="max-w-7xl mx-auto px-4 mt-20">
  <div className="bg-[#5EEAD4] p-8 md:p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Never run out of their favorites.</h2>
      
      <div className="relative w-full">
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => { setEmail(e.target.value); setEmailError(false); }}
          className={`p-4 rounded-full w-full mb-2 outline-none border ${emailError ? 'border-red-600' : 'border-transparent'}`} 
        />
        {emailError && (
          <p className="text-red-700 text-sm font-bold ml-4 mb-2">Please enter a valid email address!</p>
        )}
      </div>

      <button 
        onClick={handleSubscribe}
        className="bg-[#064E3B] text-white px-8 py-4 rounded-full font-bold hover:bg-[#043d2e] transition"
      >
        Subscribe
      </button>
    </div>
      <img src={subImg} className="w-full md:w-64 h-64 object-cover rounded-3xl" alt="Subscription" />
     </div>
  </div>
    </div>
  );
};

export default FoodPage;