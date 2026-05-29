import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Vet-Vetted Products", desc: "Every snack and toy is hand-picked and approved by our expert veterinary panel.", icon: "🏥" },
  { title: "Fast Paw-Delivery", desc: "Swift shipping to your doorstep, because we know someone is waiting for their treats.", icon: "🚚" },
  { title: "24/7 Expert Support", desc: "Real humans (and animal lovers) available day and night for all your pet queries.", icon: "🎧" },
  { title: "Happy Tail Guarantee", desc: "Not happy? No wagging tail? We'll make it right with our 30-day easy return policy.", icon: "👍" }
];

const Features = () => {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-center text-[#008080] font-bold mb-4 uppercase tracking-widest text-sm">The Pawly Promise</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Why Pet Parents Love Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // Inga logic: Even index (0,2) - yellow, Odd index (1,3) - teal
              className={`p-8 rounded-[2rem] border border-black/5 shadow-sm min-h-[230px] hover:shadow-lg transition-all duration-300 ${
                index % 2 === 0 ? "bg-[#FFF9E6]" : "bg-[#E6F8F5]"
              }`}
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;