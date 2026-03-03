import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Leaf, Shield, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Quality with Love',
      description: 'Each product is made with care and quality ingredients.'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Fine Ingredients',
      description: 'We use only the finest carefully selected and organic ingredients, sourced responsibly from trusted suppliers.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safe & Gentle',
      description: 'All our products are formulated to be gentle on your skin and safe for your family and pets.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Guaranteed',
      description: 'We stand behind our products with a satisfaction guarantee and commitment to excellence.'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '50+', label: 'Unique Products' },
    { number: '5', label: 'Years of Experience' },
    { number: '100%', label: 'Fine Ingredients' }
  ];

  const team = [
    {
      name: 'Catherine Komey',
      role: 'Founder & Chief Artisan',
      bio: 'With over 10 years of experience in fine product formulation, Catherine started Fairine Enterprise to share her passion for quality, dependable home products.'
    },
    {
      name: 'Edwin Komey',
      role: 'Quality & Sustainability Manager',
      bio: 'Edwin ensures all our products meet the highest standards while maintaining our commitment to environmental responsibility.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-background py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 gradient-sunset opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center border-b border-border/50 pb-8 sm:pb-12">
          <h1 className="text-2xl sm:text-4xl font-black text-foreground mb-4 leading-tight tracking-tight">
            Our <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Story</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Born from a passion for quality living and fine product formulation, Fairine Enterprise has grown into a trusted provider of care and cleaning products.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We believe that the products you use in your home should be as pure and dependable as possible.
                Our mission is to create quality products that bring comfort and reliability to your daily life.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border border-border/40 bg-card rounded-2xl shadow-lg">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                      {React.cloneElement(value.icon as React.ReactElement, { className: 'w-5 h-5' })}
                    </div>
                    <h3 className="font-bold text-foreground mb-2 text-sm">{value.title}</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card rounded-3xl p-6 sm:p-10 border border-border/40 shadow-xl">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-6">
                  How It All Started
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    It all began with a simple curiosity — a desire to learn the art of chocolate making. After mastering delicious custom chocolates, our founder expanded her creativity into home care.
                  </p>
                  <p>
                    Perfecting her own formulas for soaps, detergents, and shower gels, she focused on effectiveness, fragrance, and affordability — always thinking about the needs of everyday families.
                  </p>
                  <p>
                    Today, Fairine is on a mission to supply homes and businesses with trusted, quality products made with genuine care.
                  </p>
                </div>
              </div>
              <div className="gradient-sunset rounded-2xl p-6 h-64 sm:h-72 flex items-center justify-center shadow-inner relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-white/90 rounded-2xl shadow-lg flex items-center justify-center mb-4 mx-auto rotate-3 group-hover:rotate-0 transition-transform">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-foreground font-black text-sm uppercase tracking-widest">Since 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-3">
              Meet Our Team
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind every quality product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-6 sm:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-500 border border-border/40 bg-card rounded-2xl shadow-lg group">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 bg-muted rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Users className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1 text-lg">{member.name}</h3>
                  <Badge variant="outline" className="mb-4 border-primary text-primary font-bold text-[10px]">{member.role}</Badge>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-12 bg-muted/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-6">
              Responsible Practices
            </h2>
            <p className="text-base text-muted-foreground mb-10 leading-relaxed">
              We focus on safe, effective, and small-batch production to maintain consistency and quality in every bottle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Leaf className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 text-sm">Packaging Choices</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Recyclable and functional packaging choices for everyday use.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-orange-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400 transition-colors">
                    <Shield className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 text-sm">No Harsh Additives</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Safe, effective blends designed for family and home use.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-rose-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-400 transition-colors">
                    <Heart className="w-5 h-5 text-rose-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 text-sm">Quality Selection</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Materials selected for reliability and performance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-400 transition-colors">
                    <Clock className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 text-sm">Controlled Production</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Made in batches to ensure every product meets our standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
