import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { ShoppingCart, ArrowLeft } from "lucide-react";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);
  const { addToCart, setDrawerOpen } = useCart();
  const [selectedVolume, setSelectedVolume] = useState(product?.variants?.[0]?.volume || "Standard");

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  const currentVariant = product.variants?.find((v) => v.volume === selectedVolume) || (product.variants?.[0] as any) || { price: 150 };

  const handleAddToCart = () => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      image: currentVariant.image || product.image,
      price: currentVariant.price,
      quantity: 1,
      variant: {
        volume: selectedVolume,
        packSize: 1,
      },
    });

    toast.success("Added to cart", {
      description: `1x ${product.name}`,
    });

    setDrawerOpen(true);
  };

  return (
    <div className="bg-background min-h-screen">
      <SEO
        title={`${product.name} | Axels`}
        description={product.description}
        canonical={`/shop/${product.id}`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left Side: Product Image (Sticky on Desktop) */}
        <div className="relative border-r border-border bg-muted">
          <div className="md:sticky md:top-[80px] h-[50vh] md:h-[calc(100vh-80px)] p-8 sm:p-16 flex items-center justify-center">
            <img
              src={currentVariant.image || product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain drop-shadow-sm"
            />
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div className="p-8 sm:p-16 lg:p-24 flex flex-col justify-center bg-background">
          <Link to="/shop" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-medium text-muted-foreground hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-3 h-3" /> Back to Collection
          </Link>

          <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/50 mb-4 block">
            {product.category}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
            {product.name}
          </h1>

          <p className="text-lg text-foreground/80 mb-12">
            ${currentVariant.price.toFixed(2)}
          </p>

          <div className="prose prose-sm text-muted-foreground mb-12">
            <p className="leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold mb-4">Volume / Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.variants?.map((v) => (
                  <button
                    key={v.volume}
                    onClick={() => setSelectedVolume(v.volume)}
                    className={`px-6 py-3 text-xs font-medium border transition-colors ${
                      selectedVolume === v.volume
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {v.volume}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full sm:w-auto border border-foreground bg-foreground text-background hover:bg-background hover:text-foreground py-4 px-8 text-[11px] uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-3"
          >
            <ShoppingCart className="w-4 h-4" /> Add to Cart
          </button>
          
          <div className="mt-12 pt-8 border-t border-border">
             <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                <div>
                  <span className="block font-medium text-foreground mb-1">Shipping</span>
                  Complimentary worldwide shipping.
                </div>
                <div>
                  <span className="block font-medium text-foreground mb-1">Returns</span>
                  30-day extended returns.
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
