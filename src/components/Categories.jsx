import React from 'react';
import { motion } from 'framer-motion';
import dogImage from '../assets/dog.png'; 
import catImage from '../assets/cat.png';
import rabbitImage from '../assets/rabbit.webp';

const Categories = () => {
  const dogFeatures = ["Durable Gear", "Puppy Nutrition"];
  return (
    <section className="py-20 px-4 md:px-8 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold">Shop by Category</h2>
            <p className="text-gray-500 mt-2">Tailored experiences for every member of the family.</p>
          </div>
          <a href="#" className="text-[#8B1A1A] font-bold hover:underline">View All →</a>
        </div>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Dogs (Dog image will be below text in mobile due to flex-col-reverse or column layout) */}
          <motion.div className="md:col-span-2 bg-[#FFF9E6] p-8 rounded-[2.5rem] flex flex-col-reverse md:flex-row justify-between items-center shadow-sm">
            <div className="w-full md:w-[60%] mt-6 md:mt-0">
              <span className="text-6xl font-bold text-black/10">01</span>
              <h3 className="text-3xl font-bold mt-6">Everything for Dogs</h3>
              <p className="text-gray-600 my-6">From heavy-duty chew toys to grain-free gourmet feasts.</p>
              {/* Added Features List */}
              <div className="flex flex-col gap-2 mb-6">
                {dogFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center text-green-500 font-semibold">
                    <span className="mr-2">✓</span> {feature}
                  </div>
                ))}
              </div>
              <button className="bg-[#4A3F2C] text-white px-8 py-3 rounded-full">Shop Canine</button>
            </div>
            <img src={dogImage} className="w-48 h-48 lg:h-[350px] lg:w-[350px] rounded-3xl" alt="Dog" />
          </motion.div>

          {/* Card 2: Cats */}
          <motion.div className="md:col-span-1 bg-[#E6F8F5] p-8 rounded-[2.5rem] flex flex-col shadow-sm">
            <span className="text-6xl font-bold text-black/10">02</span>
            <h3 className="text-3xl font-bold mt-2">Feline Essentials</h3>
            <p className="text-gray-600 my-4">Pamper your cat with luxury.</p>
            <img src={catImage} className="w-full h-64 object-cover rounded-3xl mt-auto" alt="Cat" />
          </motion.div>

          {/* Card 3: Small Pets */}
          <motion.div className="md:col-span-3 bg-[#FDF08D] p-8 rounded-[2.5rem] flex flex-col-reverse md:flex-row justify-between items-center shadow-sm">
            <div className="w-full md:w-[60%] mt-6 md:mt-0">
              <h3 className="text-3xl font-bold">Small Pet Kingdom</h3>
              <p className="text-gray-600 my-4">Specialized habitats and treats for rabbits, hamsters, and birds.</p>
              <button className="bg-[#4A3F2C] text-white px-8 py-3 rounded-full">Discover Small Pets</button>
            </div>
            <img src={rabbitImage} className="w-48 h-48 rounded-3xl rotate-3" alt="Rabbit" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Categories;