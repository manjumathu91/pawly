import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DogPage from './pages/DogPage';
import FoodPage from './pages/FoodPage';
import GroomingPage from './pages/GroomingPage';
import HealthPage from './pages/HealthPage';
import ToysPage from './pages/ToysPage';
import ProductDetails from './pages/ProductDetails';
import CatPage from './pages/CatPage';
import ShopByBreed from './pages/ShopByBreed';
import CartPage from './pages/CartPage';
import SmallPetsPage from './pages/SmallPetsPage';
import ConsultVet from './pages/ConsultVet';
import FavoritesPage from './pages/FavoritesPage';
import AccountSetting from './pages/AccountSetting';
import Footer from './components/Footer';
import { div } from 'framer-motion/client';


function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
    
    <Router> {/* Inga thaan Router-ai start pannanum */}
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog" element={<DogPage/>}/>
         <Route path="/food" element={<FoodPage />} />
        <Route path="/grooming" element={<GroomingPage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/toys" element={<ToysPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cat" element={<CatPage />} />
        <Route path="/small-pets" element={<SmallPetsPage />} />
        <Route path="/consult-vet" element={<ConsultVet />} />
        <Route path="/wishlist" element={<FavoritesPage />} />
        <Route path="/profile" element={<AccountSetting />} />
        <Route path="/shop-by-breed" element={<ShopByBreed />} />
  
      </Routes>
      
      <Footer />
      
    </Router>
    
  </div> // Inga thaan Router-ai mudikkanum
  );
}

export default App;