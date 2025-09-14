import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Cart } from './components/Cart';
import { Toaster } from './components/Toaster';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Toaster />
        </div>
      </Router>
    </CartProvider>
  );
}