import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import SEO from '@/components/SEO';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Shield, Leaf, Recycle, Award } from 'lucide-react';
import Testimonials from '@/components/Testimonials';
import StoreLocator from '@/components/StoreLocator';

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <SEO
        title="Buy Quality Soap & Cleaning Detergents in Ghana | Fairine Enterprise"
        description="Shop effective liquid soaps, powerful floor cleaners, and premium detergents. Fairine Enterprise is your trusted manufacturer and supplier of cleaning products in Accra and across Ghana. Bulk orders available."
        canonical="/"
        keywords="buy soap Ghana, cleaning detergents Accra, liquid soap manufacturer Ghana, floor cleaner price Accra, best dishwasher soap Ghana, bulk cleaning supplies, laundry detergent suppliers"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Fairine Enterprise",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Accra",
            "addressCountry": "GH"
          },
          "telephone": "+233 26 123 3032",
          "email": "fairineenterprise@gmail.com",
          "image": "https://fairine.com/assets/logo-clean.png",
          "description": "Manufacturer and supplier of high-quality liquid soaps, detergents, and floor cleaners in Ghana. We provide effective cleaning solutions for homes and businesses.",
          "priceRange": "GH₵"
        }}
      />
      <Header />
      <Hero />
      <FeaturedProducts />

      {/* Why Choose Us - Bento Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10 translate-y-[-50%]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 px-4">
            <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5 backdrop-blur-sm px-4 py-1 rounded-full font-bold uppercase tracking-widest text-[10px]">
              Why Buy From Fairine?
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-black text-foreground mb-6 leading-tight tracking-tight">
              Effective Cleaning Solutions for Your Home
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              We manufacture the most effective liquid soaps and cleaning detergents in Ghana. Designed for power and efficiency, our products ensure your home stays spotless and fresh. Quality you can trust, prices you'll love.
              <Link to="/shop" className="text-primary hover:underline"> Explore our full catalog.</Link>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 max-w-6xl mx-auto">
            {/* QA - Large Horizontal */}
            <Card className="md:col-span-2 group relative overflow-hidden border-border/40 bg-card hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-0"></div>
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-3">Powerful Liquid Soaps & Detergents</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Our formulas are engineered for maximum cleaning power, ensuring every drop of our detergent removes tough grease and stains effortlessly.
                </p>
                <div className="absolute bottom-4 right-8 text-[4rem] font-black text-foreground/5 pointer-events-none select-none italic group-hover:text-primary/10 transition-colors">01</div>
              </CardContent>
            </Card>

            {/* Family Safe - Tall Vertical */}
            <Card className="md:row-span-2 group relative overflow-hidden border-border/40 bg-slate-900 dark:bg-card hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] shadow-xl">
              <div className="absolute top-0 left-0 w-full h-full gradient-sunset opacity-5 -z-10"></div>
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-white/10 dark:bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-white dark:text-primary group-hover:scale-110 transition-transform duration-500">
                    <Shield className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-white dark:text-foreground mb-4">Family & Pet Safe Cleaning Products</h3>
                  <p className="text-slate-300 dark:text-muted-foreground font-medium leading-relaxed">
                    We exclusively use skin-friendly ingredients that are tough on dirt but safe for your entire household, including your pets.
                  </p>
                </div>
                <div className="mt-8 text-[4rem] font-black text-white/5 dark:text-foreground/5 pointer-events-none select-none italic text-right">02</div>
              </CardContent>
            </Card>

            {/* Delivery - Small Square */}
            <Card className="group relative overflow-hidden border-border/40 bg-card hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] shadow-xl">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-foreground mb-1">Affordable Delivery in Accra</h3>
                <p className="text-xs text-muted-foreground font-medium">Reliable logistics across Accra & beyond.</p>
              </CardContent>
            </Card>

            {/* Sustainable - Small Square */}
            <Card className="group relative overflow-hidden border-border/40 bg-card hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] shadow-xl">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                  <Recycle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-foreground mb-1">Sustainable & Eco-Friendly</h3>
                <p className="text-xs text-muted-foreground font-medium">Recyclable packaging & eco-friendly focus.</p>
              </CardContent>
            </Card>

            {/* Quality - Modern Wide */}
            <Card className="md:col-span-2 group relative overflow-hidden border-border/40 bg-card hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] shadow-xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 group-hover:scale-125 transition-transform duration-1000"></div>
              <CardContent className="p-8 h-full flex items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Leaf className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Earth Friendly</span>
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-2 leading-tight">Ghanaian Heritage, <br />Global Standards</h3>
                  <p className="text-sm text-muted-foreground font-medium">We take pride in formulating world-class home care products right here in Accra.</p>
                </div>
                <div className="text-[4rem] font-black text-foreground/5 pointer-events-none select-none italic">03</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Store Locator Section */}
      <StoreLocator />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Index;
