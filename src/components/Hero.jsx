import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import petImage from '../assets/petImage.png';
const Hero = () => {
  return (
    <section className="px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between bg-[#FFF3E0]">
      
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 space-y-6"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
        >
          Everything Your <br /> 
          <span className="text-[#E53E3E]">Pet Needs</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-600 text-lg md:pr-10"
        >
          Treat your companions to a world of curated wellness, gourmet nutrition, 
          and specialized care designed for their unique happiness.
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <Link to="/shop-by-breed" className="bg-[#E53E3E] text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition shadow-lg text-center">
            Shop Now
          </Link>
          <Link to="/dog" className="bg-[#005B48] text-white px-8 py-3 rounded-full font-semibold hover:bg-green-900 transition shadow-lg text-center">
            Explore Categories
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Content - Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
      >
        <img 
          src={petImage} 
          alt="Pet" 
          className="w-full max-w-sm h-96 md:h-[500px] object-contain rounded-[2rem] shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-105 cursor-pointer"
        />
      </motion.div>

    </section>
  );
};

export default Hero;