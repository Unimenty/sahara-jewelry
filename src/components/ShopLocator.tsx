import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const outlets = [
  {
    name: "The Accra Atelier",
    address: "391 Cantonments Rd, Accra, Ghana",
    phone: "+233 54 686 5035",
    hours: "Mon - Sat: 10am - 8pm",
    coordinates: "5.5600° N, 0.1736° W"
  },
  {
    name: "The Kumasi Vault",
    address: "12 Adum St, Kumasi, Ghana",
    phone: "+233 24 123 4567",
    hours: "Mon - Sat: 10am - 7pm",
    coordinates: "6.6666° N, 1.6163° W"
  }
];

const ShopLocator = () => {
  return (
    <section className="relative py-24 md:py-40 bg-[#0f0f0f] overflow-hidden border-t border-white/5">
      {/* Background Stylized Map Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img 
          src="/images/625897844_18094485454993200_6308832287158866545.jpg" 
          className="w-full h-full object-cover" 
          alt="" 
        />
      </div>

      <div className="max-w-full px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-primary text-[10px] tracking-[0.6em] font-bold uppercase mb-6">VISIT US</h3>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-serif font-light text-white leading-tight uppercase tracking-widest">
              Our <span className="italic">Ghanaian</span> Outlets
            </h2>
          </div>
          <p className="text-white/40 text-sm md:text-base max-w-sm italic font-medium leading-loose">
            Experience the radiance of Sahara in person. Our concierge teams are ready to guide you through our collections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {outlets.map((shop, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="glass p-10 md:p-16 rounded-[2.5rem] flex flex-col gap-10 hover:bg-white/[0.05] transition-all duration-700"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h4 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-tighter">{shop.name}</h4>
                  <span className="text-primary text-[10px] tracking-[0.3em] font-bold uppercase">{shop.coordinates}</span>
                </div>
                <div className="p-4 bg-primary/10 rounded-full">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/60 group cursor-pointer hover:text-white transition-colors">
                  <Phone size={16} className="text-primary/60" />
                  <span className="text-sm font-medium tracking-wide">{shop.phone}</span>
                </div>
                <div className="flex items-start gap-4 text-white/60">
                  <MapPin size={16} className="text-primary/60 shrink-0 mt-1" />
                  <span className="text-sm font-medium tracking-wide leading-relaxed">{shop.address}</span>
                </div>
                <div className="flex items-center gap-4 text-white/60">
                  <Clock size={16} className="text-primary/60" />
                  <span className="text-sm font-medium tracking-wide italic">{shop.hours}</span>
                </div>
              </div>

              <button className="button-sahara w-full mt-4 !after:hidden">
                Get Directions
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopLocator;
