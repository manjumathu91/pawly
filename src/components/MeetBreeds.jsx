import React from 'react';
import { motion } from 'framer-motion';

// Assets path-ai check pannikonga
import breed1 from '../assets/golden.png';
import breed2 from '../assets/persian.png';
import breed3 from '../assets/french.png';
import breed4 from '../assets/maine.jpg';

const breeds = [
  { name: "Golden Retriever", tags: ["FRIENDLY", "ACTIVE"], desc: "The quintessential family dog, known for their gentle temperament and intelligence.", img: breed1 },
  { name: "Persian Cat", tags: ["CALM", "LUXURY"], desc: "Famous for their long, beautiful coats and quiet, affectionate personalities.", img: breed2 },
  { name: "French Bulldog", tags: ["PLAYFUL", "ADAPTABLE"], desc: "A small-scale companion with a large-scale personality, perfect for city living.", img: breed3 },
  { name: "Maine Coon", tags: ["GIANT", "LOYAL"], desc: "The 'gentle giant' of the cat wave known for their size and bushy grand.", img: breed4 },
];

const MeetBreeds = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">Meet the Breeds</h2>
          <p className="text-gray-500 mt-2">Finding the perfect match for your lifestyle.</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {breeds.map((breed, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white p-4 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <img src={breed.img} alt={breed.name} className="w-full h-64 object-cover rounded-[1.5rem] mb-4" />
              <h3 className="text-xl font-bold mb-3">{breed.name}</h3>
              <div className="flex gap-2 mb-3">
                {breed.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{breed.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetBreeds;