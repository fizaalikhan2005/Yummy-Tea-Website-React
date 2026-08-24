import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  // This state controls whether the cart menu is open or closed
  const [isCartOpen, setIsCartOpen] = useState(false);

  // This state will hold all the drinks the user adds to their cart!
  const [cartItems, setCartItems] = useState([]);
  return (
    <BrowserRouter>
      {/* Navbar stays at the top */}
      <Navbar />
      
      {/* Routes will display the Home page when the URL is "/" */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Footer stays at the bottom */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;