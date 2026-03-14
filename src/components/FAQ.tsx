import { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Are your products certified of high quality?", a: "Yes, every piece comes with a certificate of authenticity and is thoroughly inspected for quality before shipment." },
    { q: "Are your materials ethically sourced?", a: "We only work with suppliers who adhere to strict ethical guidelines and provide conflict-free gemstones and recycled metals." },
    { q: "How do I determine the right size for my diamond?", a: "Consult our comprehensive sizing guide for measurements, or book a virtual consultation with one of our experts." },
    { q: "Can I choose my preferred metal or gemstone?", a: "We offer customization on most our signature collections. Choose from 14k/18k Yellow, White, or Rose Gold." },
    { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for secure transactions worldwide." },
    { q: "Do you offer custom creation services for jewelry?", a: "Yes, our master craftsmen can bring your unique vision to life through our bespoke design process." },
    { q: "Do you offer personalized messages for special gifts?", a: "We offer complimentary engraving and premium gift packaging with personalized messages for all orders." },
    { q: "Do you offer fast and secure shipping?", a: "All orders are shipped via insured, express courier services with real-time tracking from our atelier to your door." },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-0">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-border py-6 first:border-t-0"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left group"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-[#C5A572] font-serif transition-transform duration-300">
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                  <p className="text-[13px] font-bold uppercase tracking-widest text-foreground group-hover:text-[#C5A572] transition-colors leading-tight">
                    {faq.q}
                  </p>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[13px] text-muted-foreground leading-relaxed pl-8 pr-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
