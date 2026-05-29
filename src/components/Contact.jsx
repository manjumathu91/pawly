import React from 'react';
import { motion } from 'framer-motion';
// 1. Inga dhaan unga image-ai import panreenga
import contactMap from '../assets/touch.png'; 

const Contact = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Left Side: Contact Details */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900">Let's Stay in Touch</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#D94C4C] p-3 rounded-full text-white text-xl">📍</div>
              <div>
                <h4 className="font-bold text-lg">Main Sanctuary</h4>
                <p className="text-gray-600">123 Pet Wellness Ave, Suite 400<br/>San Francisco, CA 94103</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#007C74] p-3 rounded-full text-white text-xl">📞</div>
              <div>
                <h4 className="font-bold text-lg">Call Us</h4>
                <p className="text-gray-600">General: (555) PAW-LY01<br/>Vet Hotline: (555) VET-CARE</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#9F852A] p-3 rounded-full text-white text-xl">✉️</div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-gray-600">hello@pawly.care<br/>support@pawly.care</p>
              </div>
            </div>
          </div>
          {/* Social Icons - Follow the Fun */}
<div className="mt-12">
  <h4 className="font-bold mb-4 text-lg">Follow the Fun</h4>
  <div className="flex gap-6 text-3xl">
    {/* Neenga inga link/button use pannalam */}
    <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">🌐</a>
    <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">👥</a>
    <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">📸</a>
  </div>
</div>
        </motion.div>

        {/* Right Side: Map Area (Image Added Here) */}
        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* 2. Inga dhaan 'contactMap' image-ai potrukken */}
          <div className="rounded-[2.5rem] w-full h-[400px] lg:h-[800px] shadow-2xl overflow-hidden">
            <img 
              src={contactMap} 
              alt="Location Map" 
              className="w-full h-full object-cover" 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;