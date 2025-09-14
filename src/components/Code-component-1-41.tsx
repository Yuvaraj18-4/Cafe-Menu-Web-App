import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

export const Cart = () => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const { items, total } = state;

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
    if (newQuantity === 0) {
      toast.success('Item removed from cart');
    }
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id);
    toast.success(`${name} removed from cart`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Cart cleared');
  };

  const handleCheckout = () => {
    toast.success('Checkout functionality would be implemented here!', {
      description: `Total: $${total.toFixed(2)} for ${items.length} item${items.length !== 1 ? 's' : ''}`,
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-8 px-4 max-w-4xl mx-auto">
        <div className="text-center py-16">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-600 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Looks like you haven't added any items to your cart yet. Explore our delicious menu!
          </p>
          <Link to="/menu">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4">
              Browse Menu
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
          Your Cart
        </h1>
        <div className="flex justify-center items-center gap-4 text-gray-600">
          <Badge variant="outline" className="border-amber-300 text-amber-700">
            {items.length} item{items.length !== 1 ? 's' : ''}
          </Badge>
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearCart}
            className="border-red-300 text-red-600 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Cart
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <Card key={item.id} className="border-amber-200 shadow-md">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {/* Item Image */}
                  <div className="flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg text-amber-800">
                          {item.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id, item.name)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {item.description && (
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {item.description}
                      </p>
                    )}

                    <div className="flex justify-between items-center">
                      <div className="text-lg font-bold text-amber-700">
                        ${item.price.toFixed(2)} each
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0 border-amber-300"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0 border-amber-300"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="mt-2 text-right">
                      <span className="text-sm text-gray-500">Subtotal: </span>
                      <span className="font-semibold text-amber-700">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="border-amber-200 shadow-lg sticky top-24">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Order Summary
              </h3>

              <div className="space-y-3 mb-4">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-amber-800">Total:</span>
                <span className="text-2xl font-bold text-amber-700">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg"
                size="lg"
              >
                Proceed to Checkout
              </Button>

              <Link to="/menu">
                <Button
                  variant="outline"
                  className="w-full mt-3 border-amber-300 text-amber-700 hover:bg-amber-50"
                >
                  Continue Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};