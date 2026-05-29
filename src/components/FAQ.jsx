import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    { q: "How do I choose the right food for my puppy?", a: "We provide detailed guides based on breed and age..." },
    { q: "What is your return policy for toys?", a: "You can return unused toys within 30 days." },
    { q: "Are your supplements safe for seniors?", a: "Yes, our senior line is vet-approved." },
    { q: "Do you offer international shipping?", a: "Currently, we ship within the country." }
  ];

  return (
    <section className="py-16 px-6 bg-[#FDFBF7]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Curious Minds Want to Know</h2>
        {questions.map((item, index) => (
          <div key={index} className="mb-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <button 
              className="w-full p-6 text-left flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold">{item.q}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && <div className="p-6 pt-0 text-gray-600">{item.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};
export default FAQ;