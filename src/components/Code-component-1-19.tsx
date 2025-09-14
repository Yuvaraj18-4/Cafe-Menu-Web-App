import { Link, useLocation } from 'react-router-dom';
import { Coffee, ShoppingCart, Home, Menu } from 'lucide-react';
import { useCart } from './CartContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const Navbar = () => {
  const location = useLocation();
  const { state } = useCart();
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="text-xl font-bold text-amber-800">Brew & Bite</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'text-amber-800 bg-amber-100' 
                  : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            
            <Link
              to="/menu"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/menu') 
                  ? 'text-amber-800 bg-amber-100' 
                  : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
              }`}
            >
              <Menu className="h-4 w-4" />
              <span>Menu</span>
            </Link>
            
            <Link
              to="/cart"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors relative ${
                isActive('/cart') 
                  ? 'text-amber-800 bg-amber-100' 
                  : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
              }`}
            >
              <div className="relative">
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-amber-600 hover:bg-amber-600"
                  >
                    {totalItems}
                  </Badge>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/">
              <Button 
                variant={isActive('/') ? 'default' : 'ghost'} 
                size="sm"
                className={isActive('/') ? 'bg-amber-600 hover:bg-amber-700' : ''}
              >
                <Home className="h-4 w-4" />
              </Button>
            </Link>
            
            <Link to="/menu">
              <Button 
                variant={isActive('/menu') ? 'default' : 'ghost'} 
                size="sm"
                className={isActive('/menu') ? 'bg-amber-600 hover:bg-amber-700' : ''}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button 
                variant={isActive('/cart') ? 'default' : 'ghost'} 
                size="sm"
                className={`relative ${isActive('/cart') ? 'bg-amber-600 hover:bg-amber-700' : ''}`}
              >
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-red-500"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};