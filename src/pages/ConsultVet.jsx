import React, { useState } from 'react';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import p1 from '../assets/doc1.png';
import p2 from '../assets/doc2.png';
import p3 from '../assets/doc3.png';

const ConsultVet = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Bill Download Function
  const downloadBill = () => {
    const input = document.getElementById('bill-content');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
      pdf.save("Medical_Report.pdf");
    });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert vet care, <br/>right on your rug.</h1>
          <p className="text-gray-600">Choose your preferred consultation method and get instant access.</p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border shadow-sm">
              <h2 className="font-bold mb-4">1. Choose Mode</h2>
              <div className="flex gap-4">
                <button className="flex-1 bg-[#005D5D] text-white py-4 rounded-2xl font-bold">Chat</button>
                <button className="flex-1 bg-gray-50 border py-4 rounded-2xl font-bold">Video</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border shadow-sm">
              <h2 className="font-bold mb-4">2. Session Details</h2>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {["Nutrition", "General Health", "Grooming", "Behavior"].map(i => (
                  <button key={i} className="border p-4 rounded-xl text-sm font-semibold hover:bg-gray-50">{i}</button>
                ))}
              </div>
              <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase">Choose Time Slot</h3>
              <div className="space-y-2">
                {["Today, 2:30 PM", "Today, 4:00 PM", "Tomorrow, 10:00 AM"].map(slot => (
                  <button key={slot} onClick={() => setSelectedSlot(slot)} className={`w-full p-4 rounded-xl border text-left ${selectedSlot === slot ? 'bg-teal-50 border-teal-500' : 'bg-white'}`}>
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Bill Content ID here) */}
          <div id="bill-content" className="space-y-6">
            <div className="bg-[#005D5D] text-white p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-1">Oliver is ready</h2>
              <p className="mb-6 opacity-80">3-year old Golden Retriever</p>
              <div className="bg-white/10 p-4 rounded-2xl mb-6 flex justify-between items-center">
                <span className="text-3xl font-bold">$24.00</span>
                <span className="text-sm">20-min consultation</span>
              </div>
              <button className="w-full bg-[#E65C5C] py-4 rounded-full font-bold">Start consultation</button>
            </div>

            <div className="bg-white p-8 rounded-3xl border shadow-sm">
              <h3 className="font-bold mb-4">✅ Post-Session Advice</h3>
              <p className="text-sm text-gray-600 mb-4">Oliver's Personalized Wellness Plan: Increase wet food and daily grooming.</p>
              <button onClick={downloadBill} className="text-teal-700 font-bold underline text-sm">Download Full Medical Report ⬇️</button>
            </div>
          </div>
        </div>

        {/* Resident Experts Section */}
        <div className="pt-10">
          <h2 className="text-2xl font-bold mb-6">Our Resident Experts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Example-kku 3 doctors-ku image add panrom */}
  {[
    { name: "Dr. Sarah Jenkins", img: p1 },
    { name: "Dr. Marcus Thorne", img: p2 },
    { name: "Dr. Elena Rodriguez", img: p3}
  ].map((expert, i) => (
    <div key={i} className="bg-white p-6 rounded-3xl border text-center">
      {/* Ingathan Image add panrom */}
      <img 
        src={expert.img} 
        alt={expert.name} 
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" 
      />
      <h3 className="font-bold">{expert.name}</h3>
      <p className="text-yellow-600 text-sm font-bold">⭐ 4.9</p>
    </div>
  ))}
  
  {/* Meet Team card */}
  <div className="bg-[#005D5D] text-white p-6 rounded-3xl flex flex-col items-center justify-center">
    <h3 className="font-bold">And 15 others</h3>
    <button className="bg-white text-black px-4 py-2 mt-2 rounded-full text-sm font-bold">Meet Team</button>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default ConsultVet;