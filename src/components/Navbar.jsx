import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  // Active link check function
  const isActive = (path) => location.pathname === path;
  
  // Dynamic styling for active and hover states
  const getLinkClass = (path) => 
    isActive(path) 
      ? "text-[#E53E3E] font-bold border-b-2 border-[#E53E3E]" 
      : "text-gray-700 hover:text-[#E53E3E] hover:border-b-2 border-[#E53E3E] transition-all";

  return (
    <nav className="w-full relative flex items-center justify-between px-4 md:px-16 py-4 bg-[#FFF3E0] font-sans border-b border-gray-200">
      
      {/* 1. Hamburger Menu (Mobile) */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 2. Logo */}
      <Link to="/" className="text-4xl font-bold text-[#E53E3E] flex items-center gap-1">
        🐾 Pawly
      </Link>

      {/* 3. Desktop Menu */}
      <div className="hidden lg:flex gap-6 xl:gap-8 font-medium text-sm xl:text-lg">
        <Link to="/" className={getLinkClass('/')}>Home</Link>
        <Link to="/dog" className={getLinkClass('/dog')}>Dog</Link>
        <Link to="/cat" className={getLinkClass('/cat')}>Cat</Link>
        <Link to="/small-pets" className={getLinkClass('/small-pets')}>Small Pets</Link>
        <Link to="/shop-by-breed" className={getLinkClass('/shop-by-breed')}>Shop By Breed</Link>
        <Link to="/consult-vet" className={getLinkClass('/consult-vet')}>Consult vet</Link>
      </div>

      {/* 4. Search Bar (Desktop) */}
      <div className="hidden lg:flex bg-white px-4 py-2 rounded-full border border-gray-200 items-center gap-2 shadow-sm">
        <FaSearch className="text-gray-400" />
        <input type="text" placeholder="Find treats..." className="outline-none text-sm bg-transparent w-32" />
      </div>

      {/* 5. Icons */}
      <div className="flex items-center gap-6 text-xl text-gray-700">
  <FaSearch className="lg:hidden cursor-pointer" onClick={() => setShowSearch(!showSearch)} />
  
  {/* Heart Icon (Wishlist page-ku) */}
  <Link to="/wishlist">
    <FaHeart className="cursor-pointer hover:text-[#E53E3E]" />
  </Link>
  
  {/* Shopping Cart Icon (Cart page-ku) */}
  <Link to="/cart">
    <FaShoppingCart className="cursor-pointer hover:text-[#E53E3E]" />
  </Link>
  
  {/* User Icon (Profile/Login page-ku) */}
  <Link to="/profile">
    <FaUser className="cursor-pointer hover:text-[#E53E3E]" />
  </Link>
</div>
      
      {/* Search Popup (Mobile) */}
      {showSearch && (
        <div className="absolute top-20 right-6 bg-white p-3 rounded-lg shadow-xl border z-50">
          <input type="text" placeholder="Find treats..." className="outline-none p-1 text-sm border-b" />
        </div>
      )}

      {/* 6. Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#FFF3E0] shadow-lg p-6 flex flex-col gap-6 z-50 lg:hidden border-b">
          <Link to="/" onClick={() => setIsOpen(false)} className={getLinkClass('/')}>Home</Link>
          <Link to="/dog" onClick={() => setIsOpen(false)} className={getLinkClass('/dog')}>Dog</Link>
          <Link to="/cat" onClick={() => setIsOpen(false)} className={getLinkClass('/cat')}>Cat</Link>
          <Link to="/small-pets" onClick={() => setIsOpen(false)} className={getLinkClass('/small-pets')}>Small Pets</Link>
          <Link to="/shop-by-breed" onClick={() => setIsOpen(false)} className={getLinkClass('/shop-by-breed')}>Shop By Breed</Link>
          <Link to="/consult-vet" onClick={() => setIsOpen(false)} className={getLinkClass('/consult-vet')}>Consult vet</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;