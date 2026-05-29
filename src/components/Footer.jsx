import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      // 'bg-[#FDFBF7]' thaan antha light color. 
      // 'rounded-t-[3rem]' curve-kku.
      className=" mt-20 pt-20 pb-10 px-6 md:px-16" 
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#8B3D3D]">Pawly</h2>
          <p className="text-gray-600 leading-relaxed">
            Curating the world's finest supplies for your non-human family members. We believe in quality, longevity, and extra belly rubs.
          </p>
          <div className="flex gap-4 text-xl">
            <span>🌐</span> <span>👥</span> <span>🔄</span>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="font-bold text-sm tracking-widest mb-6">PET CARE</h4>
          <ul className="space-y-4 text-gray-600">
            <li className="hover:text-teal-600 cursor-pointer">Puppy Care</li>
            <li className="hover:text-teal-600 cursor-pointer">Senior Wellness</li>
            <li className="hover:text-teal-600 cursor-pointer">Adopt Don't Shop</li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="font-bold text-sm tracking-widest mb-6">SUSTAINABILITY</h4>
          <ul className="space-y-4 text-gray-600">
            <li className="hover:text-teal-600 cursor-pointer">Eco-Packaging</li>
            <li className="hover:text-teal-600 cursor-pointer">Ethical Sourcing</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-sm tracking-widest mb-6">NEWSLETTER</h4>
          <p className="text-gray-600 mb-6">Get treats and tips in your inbox.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full p-4 rounded-full border border-gray-200 bg-white"
            />
            <button className="absolute right-2 top-2 bg-[#8B3D3D] text-white w-10 h-10 rounded-full">➔</button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-20 pt-8 border-t border-gray-200 text-gray-400 text-sm">
        &copy; 2024 Pawly Sanctuary. Made with love and treats.
      </div>
    </motion.footer>
  );
};

export default Footer;