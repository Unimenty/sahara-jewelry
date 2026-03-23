import { useState } from 'react';
import { products } from '@/data/products';
import SEO from '@/components/SEO';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { ArrowRight } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  // Deduplicate categories
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setSearchParams(new URLSearchParams());
    } else {
      setSearchParams({ category: category });
    }
  };

  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'All') return true;
    return product.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="bg-[#0f0f0f] min-h-screen flex flex-col pt-32">
      <SEO
        title="Collections | Sahara Jewellery"
        description="Browse our premium range of handcrafted pieces inspired by the eternal sands."
        canonical="/shop"
      />

      {/* Header Area */}
      <section className="py-28 px-8 text-center bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.02] whitespace-nowrap">
          <span className="text-[clamp(8rem,25vw,35rem)] font-serif font-black uppercase leading-none select-none text-center tracking-tighter text-white">
            SAHARA
          </span>
        </div>
        <h1 className="text-5xl sm:text-8xl font-serif text-white mb-8 relative z-10 tracking-tight uppercase">The Edit</h1>
        <p className="text-white/40 text-sm max-w-lg mx-auto relative z-10 font-sans tracking-[0.3em] font-extralight uppercase">
          Curated elegance, inspired by the infinite horizon.
        </p>
      </section>

      {/* Filter Bar */}
      <section className="py-12 px-8 sticky top-[70px] z-40 bg-[#0f0f0f]/95 backdrop-blur-md border-y border-white/5">
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`text-[10px] font-sans uppercase tracking-[0.5em] transition-all duration-500 relative group ${
                selectedCategory.toLowerCase() === category.toLowerCase()
                  ? 'text-primary'
                  : 'text-white/30 hover:text-white'
              }`}
            >
              {category}
              <span className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-500 ${
                selectedCategory.toLowerCase() === category.toLowerCase() ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100'
              }`} />
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid - The Museum Gallery */}
      <section className="flex-grow px-8 md:px-24 lg:px-32 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-40">
          {filteredProducts.map((product, idx) => (
             <ProductCard key={product.id} product={product as any} index={idx} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-32">
            <h3 className="text-3xl font-serif text-white mb-4 italic uppercase tracking-widest">No pieces found</h3>
            <p className="text-white/30 text-[10px] font-sans uppercase tracking-[0.2em] mb-12 px-8">We couldn't find any jewellery matching this category.</p>
            <button
              className="button-sahara mx-auto group"
              onClick={() => handleCategoryClick('All')}
            >
              <span>View All Pieces</span>
              <ArrowRight className="w-4 h-4 translate-y-[1px] group-hover:translate-x-3 transition-transform duration-500" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Shop;
