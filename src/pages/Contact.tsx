import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

const SaharaContact = () => {
  const showrooms = [
    {
      name: "The Accra Atelier",
      location: "391 Cantonments Rd, Accra, Ghana",
      image: "/images/622947345_18093480613993200_3568158684909229554.jpg",
      mapUrl: "https://goo.gl/maps/accra",
      tag: "FLAGSHIP"
    },
    {
      name: "The Kumasi Vault",
      location: "12 Adum St, Kumasi, Ghana",
      image: "/images/630138431_18095391541993200_672511194907843518.jpg",
      mapUrl: "https://goo.gl/maps/kumasi",
      tag: "THE VAULT"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-32 pb-48 px-6 md:px-12">
      <SEO 
        title="Contact | Sahara Jewellery"
        description="Direct concierge access to Sahara Jewellery. Connect with us via WhatsApp or visit our Ghana showrooms."
        canonical="/contact"
      />

      {/* Centered Header Section */}
      <div className="max-w-[1440px] mx-auto mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-serif font-black text-white leading-none mb-8 uppercase tracking-[-0.04em]">
            GET IN TOUCH
          </h1>
          
          <div className="flex items-center gap-5 mb-20 opacity-40">
            <div className="h-[1px] w-16 bg-primary" />
            <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-white font-sans">
              MON — SAT: 10:00 — 20:00 GMT
            </p>
            <div className="h-[1px] w-16 bg-primary" />
          </div>

          {/* Contact Cards Grid (Side-by-side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {/* WhatsApp Card */}
            <motion.a 
              href="https://wa.me/233546865035" 
              whileHover={{ y: -5 }}
              className="group relative flex flex-col items-center justify-center p-14 md:p-20 rounded-[3rem] bg-[#25D366]/[0.02] border border-[#25D366]/10 hover:border-[#25D366]/40 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5">
                 <MessageCircle size={140} />
              </div>
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-10 group-hover:bg-[#25D366] transition-colors duration-700">
                <MessageCircle size={28} className="text-[#25D366] group-hover:text-white" />
              </div>
              <h3 className="text-[11px] tracking-[0.5em] font-bold text-[#25D366] uppercase mb-3 font-sans">WHATSAPP CONCIERGE</h3>
              <p className="text-2xl font-serif text-white mb-8 uppercase tracking-tighter">THE SAHARA EDIT</p>
              <span className="text-sm font-sans font-light tracking-[0.3em] text-white/30 group-hover:text-white transition-colors">
                +233 54 686 5035
              </span>
            </motion.a>

            {/* Email Card */}
            <motion.a 
              href="mailto:concierge@saharajewellery.com" 
              whileHover={{ y: -5 }}
              className="group relative flex flex-col items-center justify-center p-14 md:p-20 rounded-[3rem] bg-white/[0.01] border border-white/5 hover:border-primary/40 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5">
                 <Mail size={140} />
              </div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-10 group-hover:bg-primary transition-colors duration-700">
                <Mail size={28} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="text-[11px] tracking-[0.5em] font-bold text-primary uppercase mb-3 font-sans">DIGITAL ATELIER</h3>
              <p className="text-2xl font-serif text-white mb-8 uppercase tracking-tighter">GENERAL INQUIRIES</p>
              <span className="text-sm font-sans font-light tracking-[0.3em] text-white/30 group-hover:text-white transition-colors">
                CONCIERGE@SAHARAJEWELLERY.COM
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Outlets Transition Heading */}
      <div className="max-w-[1440px] mx-auto mb-20 text-center">
          <h3 className="text-primary text-[11px] tracking-[0.7em] font-bold uppercase mb-6 font-sans">GLOBAL LOCATIONS</h3>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-serif font-black text-white uppercase tracking-tighter">
            STEP INTO THE <span className="italic font-light lowercase">atelier</span>
          </h2>
      </div>

      {/* Showroom Stack (Landscape Cards) */}
      <div className="max-w-[1440px] mx-auto space-y-12 md:space-y-20">
        {showrooms.map((showroom, idx) => (
          <motion.a
            key={showroom.name}
            href={showroom.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="group relative block w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden rounded-[3rem] md:rounded-[4rem] border border-white/5 bg-[#0a0a0a]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
               <img 
                 src={showroom.image} 
                 alt={showroom.name}
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[2500ms] ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 p-12 md:p-20 flex flex-col justify-end items-start">
               <span className="text-primary text-[11px] tracking-[0.7em] font-bold uppercase mb-6 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700 font-sans">
                  {showroom.tag}
               </span>
               <h2 className="text-4xl md:text-6xl font-serif text-white mb-3 uppercase tracking-tighter leading-none font-black">
                  {showroom.name}
               </h2>
               <div className="flex items-center gap-3 text-white/40 text-[11px] md:text-xs font-sans font-bold tracking-[0.4em] uppercase mb-10">
                  <MapPin size={14} className="text-primary" />
                  {showroom.location}
               </div>

               <button className="button-sahara group">
                  <span>VISIT SHOWROOM</span>
                  <ArrowRight className="w-4 h-4 translate-y-[1px] group-hover:translate-x-3 transition-transform duration-500" />
               </button>

               <div className="absolute top-12 right-12 md:top-20 md:right-20 glass p-5 md:p-8 rounded-full opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-700">
                  <ArrowRight className="text-primary group-hover:-rotate-45 transition-transform duration-500" />
               </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SaharaContact;
