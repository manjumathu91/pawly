import React from 'react';
import vetImg from '../assets/petdoc.png';

const ExpertAdvice = () => {
  return (
    <section className="py-16 px-6 ">
      <div className="max-w-7xl mx-auto bg-teal-400 rounded-[3rem] flex flex-col md:flex-row items-center overflow-hidden">
        {/* Text Content */}
        <div className="p-12 md:w-1/2">
          <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
            Expert Advice
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">
            Unsure about something? Talk to a Vet.
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get instant video consultations with certified veterinarians from the comfort of your home.
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:bg-gray-800 transition">
            <span>+</span> Book a Call
          </button>
        </div>
        
        {/* Image Side */}
        <div className="md:w-1/2 w-full h-full">
          <img 
            src={vetImg} 
            alt="Vet with puppy" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertAdvice;