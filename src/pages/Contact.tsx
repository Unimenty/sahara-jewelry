import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'hello@axels.com',
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will respond shortly.",
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an issue sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact"
        description="Get in touch with the Axels jewelry concierge. We are here to assist with bespoke commissions, styling advice, and support."
        keywords="contact Axels, bespoke jewelry, fine jewelry concierge, support"
        canonical="/contact"
      />

      {/* Hero Section */}
      <section className="bg-background pt-24 pb-16 sm:border-b border-border text-center">
        <div className="container mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.2em] mb-4 text-muted-foreground">Concierge Services</p>
          <h1 className="text-4xl sm:text-6xl font-serif text-foreground mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-muted-foreground font-light max-w-lg mx-auto">
            Whether inquiring about a bespoke commission or a piece from our collection, our dedicated concierge team is at your standard.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Form Side */}
            <div className="border border-border p-8 sm:p-12">
              <h2 className="text-2xl font-serif text-foreground mb-8">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[10px] uppercase tracking-widest text-muted-foreground">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="rounded-none border-border bg-transparent focus-visible:ring-0 focus-visible:border-foreground h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] uppercase tracking-widest text-muted-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="rounded-none border-border bg-transparent focus-visible:ring-0 focus-visible:border-foreground h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[10px] uppercase tracking-widest text-muted-foreground">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={6}
                    className="rounded-none border-border bg-transparent focus-visible:ring-0 focus-visible:border-foreground p-4 resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-foreground text-background font-medium rounded-none uppercase tracking-widest text-xs h-12 hover:bg-foreground/90 transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </Button>
              </form>
            </div>

            {/* Details Side */}
            <div className="flex flex-col justify-center space-y-12">
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Direct Communication</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-foreground stroke-[1.5]" />
                    <a href="mailto:hello@axels.com" className="text-foreground font-light hover:opacity-80 transition-opacity">hello@axels.com</a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-foreground stroke-[1.5]" />
                    <a href="tel:+18005550199" className="text-foreground font-light hover:opacity-80 transition-opacity">+1 (800) 555-0199</a>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Our Boutiques</h3>
                <div className="space-y-6 text-foreground font-light">
                  <div>
                    <p className="font-medium mb-1">New York</p>
                    <p className="text-muted-foreground">123 Fifth Avenue, Suite 400<br/>New York, NY 10003</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">London</p>
                    <p className="text-muted-foreground">45 Bond Street<br/>London, W1S 4AR</p>
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

export default Contact;
