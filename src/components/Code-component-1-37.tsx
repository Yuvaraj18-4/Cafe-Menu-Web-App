import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { useCart } from './CartContext';
import { menuItems } from './menuData';
import { MenuItemCard } from './MenuItemCard';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';

export const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addItem } = useCart();

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(menuItems.map(item => item.category)))];

  // Filter items based on search and category
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleAddToCart = (item: any) => {
    addItem(item);
    toast.success(`${item.name} added to cart!`, {
      description: `$${item.price.toFixed(2)} - ${item.category}`,
    });
  };

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
          Our Menu
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our carefully crafted selection of premium coffee, delicious snacks, and delightful desserts.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border-amber-200 focus:border-amber-400 focus:ring-amber-400"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          <Filter className="h-5 w-5 text-amber-600 mt-1" />
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-colors ${
                selectedCategory === category 
                  ? 'bg-amber-600 hover:bg-amber-700' 
                  : 'border-amber-300 text-amber-700 hover:bg-amber-50'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Info */}
      <div className="mb-6 text-center">
        <Badge variant="outline" className="border-amber-300 text-amber-700">
          {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} found
        </Badge>
      </div>

      {/* Menu Items Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <MenuItemCard
              key={item.id}
              item={item}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-16 w-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No items found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search terms or category filter
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            className="mt-4 border-amber-300 text-amber-700 hover:bg-amber-50"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};