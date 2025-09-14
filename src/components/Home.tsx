import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Heart, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1642315160505-b3dff3a3c8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc1NzYyMDM0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cozy cafe interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Coffee className="h-16 w-16 text-amber-400 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold">Brew & Bite</h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Where every cup tells a story and every bite brings joy
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
                Explore Our Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Why Choose Brew & Bite?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're passionate about serving the finest coffee and delicious treats in a warm, welcoming atmosphere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <Coffee className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Premium Coffee</h3>
              <p className="text-gray-600">
                Sourced from the finest beans around the world, expertly roasted to perfection.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Made with Love</h3>
              <p className="text-gray-600">
                Every item is crafted with care and attention to detail by our passionate team.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <Star className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-800 mb-2">5-Star Experience</h3>
              <p className="text-gray-600">
                Exceptional service and quality that keeps our customers coming back for more.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-amber-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Browse our delicious menu and place your order today!
          </p>
          <Link to="/menu">
            <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 px-8 py-4 text-lg">
              View Full Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};