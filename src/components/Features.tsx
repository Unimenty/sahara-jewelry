import { Gem, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

const Features = () => {
  const items = [
    {
      icon: Gem,
      title: 'Certified',
      description: 'Available certificates of authenticity',
    },
    {
      icon: ShieldCheck,
      title: 'Secure',
      description: 'Certified marketplace since 2017',
    },
    {
      icon: Truck,
      title: 'Shipping',
      description: 'Free, fast, and reliable worldwide',
    },
    {
      icon: RotateCcw,
      title: 'Transparent',
      description: 'Hassle-free return policy',
    },
  ];

  return (
    <section className="bg-background border-b border-border transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-6 group">
              <div className="shrink-0">
                <item.icon className="w-10 h-10 text-[#C5A572] stroke-[1] group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[14px] font-bold text-foreground uppercase tracking-widest mb-2 font-sans">
                  {item.title}
                </h3>
                <p className="text-[12px] text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
