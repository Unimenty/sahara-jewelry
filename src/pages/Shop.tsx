import { useState } from 'react';
import { products } from '@/data/products';
import SEO from '@/components/SEO';
import { Link, useSearchParams } from 'react-router-dom';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setSearchParams(new URLSearchParams());
    } else {
      setSearchParams({ category });
    }
  };

  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'All') return true;
    return product.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title="Shop Collections | Axels"
        description="Browse our premium range of handcrafted jewelry rings, necklaces, and earrings."
        canonical="/shop"
      />

      {/* Header Area */}
      <section className="py-20 px-8 text-center border-b border-border">
        <h1 className="text-4xl sm:text-5xl font-serif text-foreground mb-6">Collections</h1>
        <p className="text-muted-foreground text-sm max-w-lg mx-auto">
          Explore our complete catalog of minimalist, beautifully crafted fine jewelry.
        </p>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-border py-4 px-8 sticky top-[80px] z-40 bg-background/90 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`text-[11px] uppercase tracking-widest font-medium transition-colors ${
                selectedCategory.toLowerCase() === category.toLowerCase()
                  ? 'text-primary border-b border-primary pb-1'
                  : 'text-muted-foreground hover:text-foreground pb-1 border-b border-transparent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
      <section className="flex-grow p-6 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => {
            const defaultVariant = (product.variants?.[0] || { price: 150 }) as any;
            return (
              <Link
                key={product.id}
                to={`/shop/${product.id}`}
                className="group flex flex-col transition-all duration-300"
              >
                {/* Image — light gray bg, contain fit with padding */}
                <div className="relative aspect-square overflow-hidden bg-[#F2F2F2] rounded-sm">
                  <img
                    src={product.image || "https://images.unsplash.com/photo-1599643478514-4fb651010362?q=80&w=1000&auto=format&fit=crop"}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Product Info — Centered text */}
                <div className="py-6 text-center">
                  <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-sm text-foreground/60">${defaultVariant.price.toFixed(2)}</span>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-32">
            <h3 className="text-2xl font-serif text-foreground mb-4">No pieces found</h3>
            <p className="text-muted-foreground text-sm mb-8 px-8">We couldn't find any jewelry matching this category.</p>
            <button
              className="border-b border-foreground text-[10px] uppercase tracking-widest font-medium pb-1 hover:text-primary hover:border-primary transition-colors"
              onClick={() => handleCategoryClick('All')}
            >
              View All Collections
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Shop;
