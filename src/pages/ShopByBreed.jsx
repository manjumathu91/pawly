import React from 'react';
import { FaPaintBrush, FaLeaf } from 'react-icons/fa';
import goldenImg from '../assets/golden.png';
import frenchieImg from '../assets/french.png';
import corgiImg from '../assets/weish.png';
import maineCoonImg from '../assets/maine.jpg';
import spotlightImg from '../assets/shopdog.png'; 
import foodImg from '../assets/food.png';
import trainingImg from '../assets/training.png';
const breeds = [
  { id: 1, label: "LARGE BREED", name: "Golden Retriever", desc: "Energetic, Loyal & High-Maintenance Coat.", img: goldenImg },
  { id: 2, label: "APARTMENT FRIENDLY", name: "French Bulldog", desc: "Playful, Smart & Sensitive Digestion.", img: frenchieImg },
  { id: 3, label: "ACTIVE HERDER", name: "Welsh Corgi", desc: "Alert, Spirited & Prone to Joint Care Needs.", img: corgiImg },
  { id: 4, label: "GENTLE GIANT", name: "Maine Coon", desc: "Social, Fluffy & Requires Premium Hydration.", img: maineCoonImg },
];

const ShopByBreed = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* 1. Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">Curated for your <span className="text-[#8B3D3D]">unique</span> companion.</h1>
        <p className="text-gray-600 max-w-xl mx-auto">Every breed has a story, a personality, and specific needs.</p>
      </div>

      {/* 2. Trending Section Title */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Trending Dog Breeds</h2>
        <a href="#" className="text-[#8B3D3D] font-bold">View All Breeds →</a>
      </div>
      
      {/* 3. Trending Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
        {breeds.map((breed) => (
          <div key={breed.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition">
            <img 
              src={breed.img} 
              alt={breed.name} 
              className="h-64 w-full object-cover rounded-t-3xl" 
            />
            <div className="p-6">
              <p className="text-[#8B3D3D] text-xs font-bold tracking-widest uppercase mb-2">{breed.label}</p>
              <h3 className="text-xl font-bold mb-2">{breed.name}</h3>
              <p className="text-gray-500 text-sm">{breed.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 4. BREED SPOTLIGHT SECTION (NEW) */}
      <div className="bg-[#FAF3EA] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        
        {/* Left Side: Content */}
        <div className="flex-1 z-10">
          <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-4">Breed Spotlight</p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">The Golden Standard</h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-md">
            Known for their lustrous golden coats and unwavering loyalty, Golden Retrievers are the heart of the family. 
            However, their active lifestyle and sensitive skin require a specialized approach to nutrition and grooming.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#8B3D3D] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#702d2d] transition shadow-lg">
              Explore Shop
            </button>
            <button className="bg-white border-2 border-gray-100 px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-50 transition">
               Care Guide
            </button>
          </div>
        </div>

        {/* Right Side: Image and Rating Card */}
        <div className="flex-1 relative">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src={spotlightImg} 
              alt="Golden Retriever Spotlight" 
              className="w-full h-[450px] object-cover" 
            />
          </div>

          {/* Floating Rating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 flex flex-col gap-1">
            <div className="flex items-center gap-2">
               <span className="text-yellow-400">★</span>
               <span className="font-bold text-lg">4.9/5 Rating</span>
            </div>
            <p className="text-gray-500 text-xs">Trusted by over 15,000<br/> Golden owners.</p>
          </div>
        </div>
    </div>
      
    {/* 5. Recommended Food & Health Check Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        
        {/* Recommended Food (Spans 2 columns) */}
        <div className="lg:col-span-2 bg-[#FFFDF9] rounded-[3rem] p-10 flex flex-col md:flex-row gap-8 border border-orange-100">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">Recommended Food</h2>
            <p className="text-gray-600 mb-6">Goldens need high DHA and Joint support. We’ve vetted the best formulas for their high energy levels.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2"><span className="text-teal-500">✔</span> Grain-Free Premium Salmon</li>
              <li className="flex items-center gap-2"><span className="text-teal-500">✔</span> High-Impact Glucosamine Kibble</li>
            </ul>
            <button className="bg-[#0D5C53] text-white px-8 py-3 rounded-full font-bold">Shop Nutrition</button>
          </div>
          <img src={foodImg} className="w-40 h-40 lg:h-[300px] lg:w-[300px] rounded-2xl object-cover" alt="Food" />
        </div>

        {/* Health Check */}
        <div className="bg-[#FDEB7B] rounded-[3rem] p-10">
          <h2 className="text-3xl font-bold mb-4">Health Check</h2>
          <p className="text-gray-800 mb-6">Retrievers are prone to hip dysplasia. Maintain a healthy weight and incorporate Omega-3 supplements.</p>
          <div className="bg-[#FAE76E] p-4 rounded-2xl border border-yellow-300">
            <p className="text-sm font-bold uppercase mb-1">Vet Tip</p>
            <p className="text-sm italic">"Regular swimming is the best low-impact exercise for their joints."</p>
          </div>
        </div>
      </div>

     {/* 6. Grooming & Training Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 mb-20">
        
        {/* Grooming Section */}
        <div className="bg-[#FF7575] rounded-[3rem] p-10 text-white">
          <h2 className="text-4xl font-bold mb-4">Grooming Essentials</h2>
          <p className="mb-8 opacity-90">That double coat needs attention twice a week to prevent matting and manage shedding.</p>
          <div className="flex gap-4">
             <button className="bg-white/20 p-4 rounded-2xl flex-1 flex items-center justify-center gap-2 font-bold hover:bg-white/30 transition">
                <FaPaintBrush /> DE-SHEDDER
             </button>
             <button className="bg-white/20 p-4 rounded-2xl flex-1 flex items-center justify-center gap-2 font-bold hover:bg-white/30 transition">
               <FaLeaf /> SOOTHING OAT
             </button>
          </div>
        </div>

        {/* Training Section */}
        <div className="bg-[#FAF3EA] rounded-[3rem] p-10 flex items-center gap-8">
           <img src={trainingImg} className="w-32 h-32 rounded-2xl object-cover" alt="Training" />
           <div>
             <h2 className="text-3xl font-bold mb-2">Master the Mind</h2>
             <p className="text-gray-600 mb-4">Golden Retrievers thrive on positive reinforcement.</p>
             <a href="#" className="font-bold text-[#8B3D3D]">Free Training Guide →</a>
           </div>
        </div>
      </div>
    </div> // Indha div dhaan main container-ai close pannum
  );
};

export default ShopByBreed;