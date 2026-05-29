import React from 'react';
import { motion } from 'framer-motion';

// Replace these with your actual image imports
import doc1 from '../assets/doc1.png';
import doc2 from '../assets/doc2.png';
import doc3 from '../assets/doc3.png';
import doc4 from '../assets/doc4.png';

const experts = [
  { name: "Dr. Sarah Jenkins", role: "Senior Nutrition Specialist", img: doc1 },
  { name: "Dr. Michael Chen", role: "Behavioral Expert", img: doc2 },
  { name: "Dr. Elena Rodriguez", role: "Senior Care Specialist", img: doc3 },
  { name: "Dr. James Wilson", role: "Emergency Care", img: doc4 },
];

const MeetExperts = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Meet Our Experts
        </motion.h2>
        <p className="text-gray-500 mb-16 max-w-lg mx-auto">
          Our certified veterinary doctors are here to provide the highest standard of specialized care for your beloved companions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-6 flex flex-col items-center border border-gray-100"
            >
              <img src={expert.img} alt={expert.name} className="w-full h-64 object-cover rounded-2xl mb-6" />
              <h3 className="text-xl font-bold text-gray-900">{expert.name}</h3>
              <p className="text-red-800 text-sm font-medium mb-6">{expert.role}</p>
              <button className="w-full py-3 border-2 border-red-900 text-red-900 rounded-full font-bold hover:bg-red-900 hover:text-white transition-all duration-300">
                Book Consultation
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetExperts;