// src/pages/Home.jsx

import React from 'react';
// Components folder-la irukra files-ai import pannunga
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import MeetBreeds from '../components/MeetBreeds';
import MeetExperts from '../components/MeetExperts';
import CuratedProducts from '../components/CuratedProducts';
import FAQ from '../components/FAQ';
import ExpertAdvice from '../components/ExpertAdvice';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      {/* Ingadhaan ellam section-aium serthu oru page-ah mathuroom */}
      <Hero />
      <Categories />
      <MeetBreeds />
      <MeetExperts />
      <CuratedProducts />
      <FAQ />
      <ExpertAdvice />
      <Contact/>
    </div>
  );
};

export default Home;