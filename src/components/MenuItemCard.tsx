import { Plus } from 'lucide-react';
import { MenuItem } from './CartContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuItemCard = ({ item, onAddToCart }: MenuItemCardProps) => {
  return (
    <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative overflow-hidden rounded-t-lg">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-2 left-2 bg-amber-600 hover:bg-amber-600">
          {item.category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-amber-800 line-clamp-1">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-amber-700 ml-2">
            ${item.price.toFixed(2)}
          </span>
        </div>
        
        {item.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {item.description}
          </p>
        )}
        
        <Button 
          onClick={() => onAddToCart(item)}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};