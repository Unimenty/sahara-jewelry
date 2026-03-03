
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import ProductDetailsDialog from './ProductDetailsDialog';
import { products } from '@/data/products';

const FeaturedProducts = () => {
  const ProductItem = ({ product }: { product: any }) => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const { addToCart, setDrawerOpen } = useCart();

    return (
      <div>
        <Card
          className="group hover:shadow-2xl transition-all duration-500 bg-card border border-border/40 shadow-lg rounded-xl sm:rounded-2xl overflow-hidden flex flex-col h-full"
        >
          <div
            className="relative overflow-hidden aspect-square sm:aspect-[5/4] cursor-pointer"
            onClick={() => setIsDetailsOpen(true)}
          >
            <div className="absolute inset-0 bg-white flex items-center justify-center p-2 sm:p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute top-2 right-2 flex flex-col space-y-2 hidden sm:flex sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <Button size="icon" variant="secondary" className="bg-card/90 backdrop-blur-sm shadow-md rounded-xl border-0 h-8 w-8">
                  <Heart className="w-4 h-4 text-rose-500" />
                </Button>
                <Button size="icon" variant="secondary" className="bg-card/90 backdrop-blur-sm shadow-md rounded-xl border-0 h-8 w-8">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <CardContent className="p-3 sm:p-4 flex flex-col flex-grow">
            <div className="mb-1 sm:mb-2">
              <span className="text-[7px] sm:text-[9px] font-bold text-primary uppercase tracking-[0.15em] bg-primary/10 px-1.5 sm:px-2 py-0.5 rounded">
                {product.category}
              </span>
            </div>

            <h3
              className="text-sm sm:text-lg font-bold text-card-foreground mb-1 sm:mb-3 group-hover:text-primary transition-colors leading-tight min-h-[2.5rem] sm:min-h-0 cursor-pointer"
              onClick={() => setIsDetailsOpen(true)}
            >
              {product.name}
            </h3>



            <div className="mt-auto pt-3 sm:pt-4 border-t border-border/30 flex flex-col space-y-2 sm:space-y-3">
              <div className="flex items-baseline space-x-1 sm:space-x-2">
                <span className="text-base sm:text-xl font-black text-foreground">
                  {product.variants[0].price.toFixed(2)}
                  <span className="text-[8px] sm:text-[10px] font-bold ml-1 text-muted-foreground uppercase">GHS</span>
                </span>
              </div>
              <Button
                onClick={() => {
                  const defaultVariant = product.variants[0];
                  addToCart({
                    id: product.id.toString(),
                    name: product.name,
                    image: defaultVariant.image || product.image,
                    price: defaultVariant.price,
                    quantity: 1,
                    variant: {
                      volume: defaultVariant.volume,
                      packSize: 1
                    }
                  });
                  toast.success("Added to cart! 🛍️", {
                    description: `1x ${product.name} (${defaultVariant.volume})`,
                  });
                  setDrawerOpen(true);
                }}
                className="w-full h-9 sm:h-11 gradient-warm text-white font-bold rounded-lg sm:rounded-xl border-0 shadow-md hover:scale-[1.02] transition-all text-[11px] sm:text-sm px-1"
              >
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>

        <ProductDetailsDialog
          product={product as any}
          open={isDetailsOpen}
          onOpenChange={setIsDetailsOpen}
        />
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover our most popular quality products, made with love and quality ingredients
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-16 sm:mt-20">
          <Link to="/shop">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-black py-6 px-12 rounded-xl transition-all duration-300 text-lg"
            >
              Explore Full Catalog
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
