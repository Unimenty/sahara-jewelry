import React from 'react';
import SEO from '@/components/SEO';
import FAQ from '@/components/FAQ';
import { Badge } from '@/components/ui/badge';
import { Gem, Sparkles, Diamond, ShieldCheck } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Gem className="w-6 h-6" />,
      title: 'Fine Materials',
      description: 'We exclusively use solid 14k and 18k gold, alongside ethically sourced lab-grown diamonds to ensure timeless quality.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Minimalist Design',
      description: 'Our designs are stripped back to their bare essentials, allowing the natural beauty of the materials to take center stage.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Lifetime Quality',
      description: 'Every piece is crafted to withstand the test of time, designed to be worn daily and passed down through generations.'
    },
    {
      icon: <Diamond className="w-6 h-6" />,
      title: 'Ethical Sourcing',
      description: 'We believe in full transparency, sourcing our metals and stones only from certified, conflict-free suppliers.'
    }
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-500 selection:bg-primary/20">
      <SEO
        title="Our Story"
        description="Learn about the ethos behind Axels. Discover how we craft fine, minimalist jewelry designed for everyday elegance."
        keywords="about Axels, minimalist jewelry, fine jewelry brand, ethical diamonds, solid gold rings"
        canonical="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What materials do you use in your jewelry?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use exclusively solid 14k and 18k recycled gold, ethically sourced platinum, and lab-grown diamonds of the highest clarity."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer international shipping?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer complimentary express shipping worldwide on all orders over $500."
              }
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 sm:pt-32 sm:pb-24 overflow-hidden border-b border-border/10">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/5 backdrop-blur-sm px-4 py-1 rounded-none font-bold uppercase tracking-[0.2em] text-[10px]">
              The Axels Story
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-serif text-foreground mb-8 leading-[1.1] tracking-tight">
              Elegance in <br /><span className="text-primary italic">Simplicity</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">
              We believe that true luxury lies in restraint. Our pieces are designed to be an extension of yourself—unobtrusive, yet unmistakably refined.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 sm:py-32 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative border border-border bg-muted aspect-[4/5] overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1599643478514-4fb651010362?q=80&w=1000&auto=format&fit=crop" 
                 alt="Jewelry Craftsmanship"
                 className="w-full h-full object-cover"
               />
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-muted px-3 py-1 rounded-none border border-border">
                <span className="text-[10px] font-bold text-foreground uppercase tracking-widest">Our Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-foreground leading-tight">Stripping Away <br /><span className="text-muted-foreground italic">the Excess</span></h2>

              <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed font-light">
                <p>
                  Axels was born out of a desire to create jewelry that speaks softly. We realized that the most impactful pieces are often those that require the least explanation.
                </p>
                <p>
                  By focusing on the purity of the materials and the precision of the lines, we craft objects that transcend seasonal trends. A simple gold band or a solitary diamond on a delicate chain holds a quiet power that bold statement pieces rarely achieve.
                </p>
                <p>
                  Every piece in our collection is meticulously crafted by master artisans using ethically sourced materials, ensuring that the legacy of your jewelry is as impeccable as its design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Uncompromising quality in every detail</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="group p-8 border border-border bg-card hover:bg-muted/50 transition-all duration-500">
                <div className="mb-6 text-foreground">
                  {value.icon}
                </div>
                <h3 className="font-serif text-foreground mb-3 text-xl">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA/Vision */}
      <section className="py-24 bg-foreground text-background text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-serif mb-8 leading-tight">Discover the Collection</h2>
          <div className="flex justify-center gap-4">
            <a href="/shop" className="border border-background text-background font-medium px-10 py-4 uppercase tracking-widest text-xs hover:bg-background hover:text-foreground transition-colors duration-300">Explore Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
