import SEO from '@/components/SEO';
import Hero from '@/components/Hero';
import SaharaAbout from '@/components/SaharaAbout';
import SaharaCategories from '@/components/SaharaCategories';
import NewArrivalSection from '@/components/NewArrivalSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Lookbook from '@/components/Lookbook';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="bg-background">
      <SEO
        title="Sahara Jewellery | The Golden Desert Aesthetic"
        description="Discover our luxurious collection of desert-inspired jewelry, handcrafted for timeless elegance."
        canonical="/"
      />

      <main className="relative bg-background">
        <Hero />
        <SaharaAbout />
        <SaharaCategories />
        <NewArrivalSection />
        <FeaturedProducts />
        <Lookbook />

        {/* Visit Our Atelier Section */}
        <section className="py-32 border-t border-white/5 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <MapPin className="w-10 h-10 text-primary mx-auto opacity-50" />
              <div className="space-y-4">
                <h3 className="text-primary text-[10px] tracking-[0.5em] font-bold uppercase">Experience The Craft</h3>
                <h2 className="text-4xl md:text-6xl font-serif text-white italic">Visit Our Atelier</h2>
                <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed italic">
                  Explore our physical showrooms in Ghana and experience the tactile luxury of our collections in person.
                </p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 px-12 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-primary hover:text-black transition-all duration-500 rounded-full"
              >
                <span>Find Our Locations</span>
                <ArrowRight className="w-4 h-4 translate-y-[1px] group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
