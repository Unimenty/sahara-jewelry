import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Star, Heart, Eye, Grid3X3, List, ChevronRight, Minus, Plus, Box, Package, Info } from 'lucide-react';
import ProductDetailsDialog from '@/components/ProductDetailsDialog';
import { products } from '@/data/products';

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');


  const categories = ['All Products', ...Array.from(new Set(products.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  // Component for handle product selection state
  const ProductCard = ({ product, viewMode }: { product: any, viewMode: string }) => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [selectedVolume, setSelectedVolume] = useState(product.variants[0].volume);
    const [quantity, setQuantity] = useState(1);

    const currentVariant = product.variants.find((v: any) => v.volume === selectedVolume);
    const packSizes = [1, currentVariant.bulkPackSize];
    const [selectedPack, setSelectedPack] = useState(packSizes[0]);
    const { addToCart, setDrawerOpen } = useCart();

    const handleAddToCart = () => {
      addToCart({
        id: product.id.toString(),
        name: product.name,
        image: currentVariant.image || product.image,
        price: currentVariant.price * selectedPack,
        quantity: quantity,
        variant: {
          volume: selectedVolume,
          packSize: selectedPack
        }
      });

      toast.success("Added to cart! 🛍️", {
        description: `${quantity}x ${product.name} (${selectedVolume}, Pack of ${selectedPack})`,
      });

      setDrawerOpen(true);
    };

    // Handle volume change: update current variant and reset pack if invalid
    const handleVolumeChange = (vol: string) => {
      setSelectedVolume(vol);
      const newVariant = product.variants.find((v: any) => v.volume === vol);
      if (selectedPack !== 1) {
        setSelectedPack(newVariant.bulkPackSize);
      }
    };

    return (
      <>
        <Card
          key={product.id}
          className={`group hover:shadow-2xl transition-all duration-500 bg-card border border-border/40 shadow-lg rounded-2xl overflow-hidden flex flex-col h-full ${viewMode === 'list' ? 'md:flex-row md:items-stretch' : ''
            }`}
        >
          <div
            className={`relative overflow-hidden cursor-pointer ${viewMode === 'list' ? 'md:w-64 flex-shrink-0' : 'aspect-[5/4]'}`}
            onClick={() => setIsDetailsOpen(true)}
          >
            <div className="absolute inset-0 bg-white flex items-center justify-center p-4 sm:p-6">
              <img
                src={currentVariant.image || product.image}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />

              {/* View Details Hover Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <Button size="sm" className="w-full bg-white/90 backdrop-blur-sm text-black border-0 font-bold hover:bg-white text-xs py-1 h-8 rounded-xl">
                  Quick View
                </Button>
              </div>


            </div>
          </div>

          <CardContent className={`p-4 flex flex-col flex-grow ${viewMode === 'list' ? 'md:justify-center' : ''}`}>
            <div className="mb-2 flex justify-between items-start">
              <span className="text-[9px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded">
                {product.category}
              </span>

            </div>

            <h3
              className="text-lg font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors leading-tight cursor-pointer"
              onClick={() => setIsDetailsOpen(true)}
            >
              {product.name}
            </h3>

            {/* Volume Selection - Compact */}
            <div className="mb-4 space-y-1.5">
              <span className="text-[10px] font-medium text-muted-foreground uppercase flex items-center gap-1">
                <Box className="w-2.5 h-2.5" /> Volume
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.variants.map((v: any) => (
                  <button
                    key={v.volume}
                    onClick={() => handleVolumeChange(v.volume)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all border ${selectedVolume === v.volume
                      ? 'bg-primary border-primary text-white shadow-sm'
                      : 'bg-muted/30 border-border/50 text-muted-foreground'
                      }`}
                  >
                    {v.volume}
                  </button>
                ))}
              </div>
            </div>

            {/* Pack Selection - Compact */}
            <div className="mb-5 space-y-1.5">
              <span className="text-[10px] font-medium text-muted-foreground uppercase flex items-center gap-1">
                <Package className="w-2.5 h-2.5" /> Pack Size
              </span>
              <div className="flex flex-wrap gap-1.5">
                {packSizes.map((size: number) => (
                  <button
                    key={size}
                    onClick={() => setSelectedPack(size)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all border ${selectedPack === size
                      ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                      : 'bg-muted/30 border-border/50 text-muted-foreground'
                      }`}
                  >
                    {size === 1 ? 'Single' : `Pack of ${size}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-border/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-black text-foreground">
                    {(currentVariant.price * selectedPack).toFixed(2)}
                    <span className="text-[10px] font-bold ml-1 text-muted-foreground uppercase">GHS</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center bg-muted/30 rounded-xl p-0.5 border border-border/20">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 rounded-lg"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <div className="w-6 text-center font-bold text-xs">{quantity}</div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 rounded-lg"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>

                <Button
                  className="flex-1 gradient-warm text-white font-bold py-5 rounded-xl border-0 shadow-md hover:scale-[1.02] transition-all text-sm"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <ProductDetailsDialog
          product={product}
          open={isDetailsOpen}
          onOpenChange={setIsDetailsOpen}
        />
      </>
    );
  };

  const filteredProducts = products.filter(product => {
    return selectedCategory === 'All Products' || product.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-background py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 gradient-sunset opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-2xl sm:text-4xl font-black text-foreground mb-4 leading-tight tracking-tight">
            Our <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Shop</span>
          </h1>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-8 bg-background sticky top-[64px] z-40 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter - Scrolling for Mobile */}
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer whitespace-nowrap px-6 py-2.5 rounded-2xl border-2 transition-all font-bold text-sm ${selectedCategory === category
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105'
                  : 'bg-card border-border hover:border-primary hover:text-primary'
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-black text-foreground">
              {selectedCategory} <span className="text-muted-foreground font-medium ml-2 text-sm">({filteredProducts.length} items)</span>
            </h2>
          </div>

          <div className={`grid gap-8 ${viewMode === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'grid-cols-1'
            }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24 bg-card rounded-[3rem] shadow-2xl border border-border/50 max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-muted rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-black mb-3">No matches found</h3>
              <p className="text-muted-foreground text-lg mb-8 px-8">We couldn't find any products matching your current search or filters.</p>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary font-black px-10 rounded-2xl"
                onClick={() => {
                  setSelectedCategory('All Products');
                }}
              >
                Reset All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
