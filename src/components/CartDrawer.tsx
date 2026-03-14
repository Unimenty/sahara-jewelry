import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type CheckoutStep = 'cart' | 'details' | 'success';

const CartDrawer: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, totalItems, isDrawerOpen, setDrawerOpen, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>('cart');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    notes: ''
  });

  const WHATSAPP_NUMBER = "233261233032";

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    const message = `Hi Axels! 🛍️\n\nI'd like to place an order for the following items:\n\n${cartItems
      .map(
        (item) =>
          `• *${item.name}*\n  ${item.variant.volume}${
            item.variant.packSize > 1 ? ` (Pack of ${item.variant.packSize})` : " (Single)"
          }\n  Qty: ${item.quantity} | Total: GHC ${(item.price * item.quantity).toFixed(2)}`
      )
      .join("\n\n")}\n\n*Order Total: GHC ${totalPrice.toFixed(2)}*\n\n*Customer Details:*\n• Name: ${customerInfo.name || 'Not provided'}\n• Phone: ${customerInfo.phone || 'Not provided'}\n• Address: ${customerInfo.address || 'Not provided'}\n\nPlease let me know the next steps for delivery and payment. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const handleSilentCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) return;

    setIsSubmitting(true);
    
    // Formatting the order details for the email
    const orderItems = cartItems
      .map(item => `${item.name} (${item.variant.volume}, ${item.variant.packSize > 1 ? `Pack of ${item.variant.packSize}` : 'Single'}) x${item.quantity}: GHC ${(item.price * item.quantity).toFixed(2)}`)
      .join('\n');

    const templateParams = {
      customer_name: customerInfo.name,
      customer_phone: customerInfo.phone,
      customer_address: customerInfo.address,
      order_details: orderItems,
      total_price: `GHC ${totalPrice.toFixed(2)}`,
      to_email: 'hello@axels.com', // Default from contact page
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStep('success');
      clearCart();
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('There was an issue sending your order. Please try again or use the WhatsApp option.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setStep('cart');
    setDrawerOpen(false);
  };

  return (
    <Sheet open={isDrawerOpen} onOpenChange={(open) => {
      setDrawerOpen(open);
      if (!open && step === 'success') {
        setTimeout(() => setStep('cart'), 300);
      }
    }}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l-0 sm:border-l bg-background">
        
        {/* Header - Dynamic Title */}
        <SheetHeader className="p-6 border-b flex-row items-center justify-between space-y-0">
          <SheetTitle className="text-2xl font-black tracking-tight flex items-center gap-2">
            {step === 'cart' && (
              <>
                <ShoppingCart className="w-6 h-6 text-primary" />
                Your Cart
              </>
            )}
            {step === 'details' && (
              <>
                <button onClick={() => setStep('cart')} className="group p-1 mr-1">
                  <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
                Checkout Details
              </>
            )}
            {step === 'success' && (
              <>
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                Order Received!
              </>
            )}
          </SheetTitle>
          {step === 'cart' && totalItems > 0 && <span className="text-sm font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">{totalItems} items</span>}
        </SheetHeader>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-hidden">
          {step === 'cart' && (
            <>
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <div className="bg-muted rounded-full p-6">
                    <ShoppingCart className="h-12 w-12 text-muted-foreground opacity-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Your cart is empty</h3>
                    <p className="text-muted-foreground text-sm">Looks like you haven't added any goodness yet.</p>
                  </div>
                  <Button variant="outline" className="mt-4 rounded-xl" onClick={() => setDrawerOpen(false)}>
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <ScrollArea className="h-full p-6">
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={`${item.id}-${item.variant.volume}-${item.variant.packSize}`} className="flex gap-4">
                        <div className="h-20 w-20 rounded-2xl overflow-hidden flex-shrink-0 bg-muted">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-1">
                          <div>
                            <div className="flex justify-between gap-2">
                              <h4 className="font-bold text-sm line-clamp-1">{item.name}</h4>
                              <button 
                                onClick={() => removeFromCart(item.id, item.variant)}
                                className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {item.variant.volume} · {item.variant.packSize === 1 ? 'Single' : `Pack of ${item.variant.packSize}`}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center bg-muted/50 rounded-lg p-0.5 border border-border/50">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 rounded-md hover:bg-background"
                                onClick={() => updateQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center text-xs font-black">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 rounded-md hover:bg-background"
                                onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <p className="font-black text-sm text-foreground">GHC {(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </>
          )}

          {step === 'details' && (
            <ScrollArea className="h-full p-6">
              <form id="checkout-form" onSubmit={handleSilentCheckout} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkout-name" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</Label>
                    <Input 
                      id="checkout-name" 
                      placeholder="Your first and last name" 
                      className="rounded-xl h-12"
                      required
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkout-phone" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Phone Number</Label>
                    <Input 
                      id="checkout-phone" 
                      placeholder="e.g., 026 123 4567" 
                      className="rounded-xl h-12"
                      required
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkout-address" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Delivery Address</Label>
                    <Textarea 
                      id="checkout-address" 
                      placeholder="Please provide your full delivery address or landmark" 
                      className="rounded-xl min-h-[100px] resize-none p-4"
                      required
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                    />
                  </div>
                </div>
              </form>
            </ScrollArea>
          )}

          {step === 'success' && (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 scale-110">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-2 px-4">
                <h3 className="text-2xl font-black">Thank You!</h3>
                <p className="text-muted-foreground text-sm">Your order has been sent to our team. We'll contact you shortly for delivery arrangements.</p>
              </div>
              <Button className="w-full rounded-xl h-12 font-bold shadow-lg" onClick={handleReset}>
                Return to Shop
              </Button>
            </div>
          )}
        </div>

        {/* Footer - Dynamic Summary and Actions */}
        {cartItems.length > 0 && step !== 'success' && (
          <SheetFooter className="p-6 border-t flex-col gap-4 sm:flex-col bg-muted/5">
            <div className="w-full space-y-3">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-muted-foreground">Subtotal</span>
                <span>GHC {totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-muted-foreground">Delivery</span>
                <span className="text-xs text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded-full uppercase tracking-tighter">Contact for rates</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-black uppercase tracking-tighter">Total</span>
                <span className="text-2xl font-black text-primary">GHC {totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3 pt-2">
              {step === 'cart' ? (
                <Button 
                  className="w-full h-14 text-base font-black uppercase tracking-widest shadow-xl shadow-primary/20 gradient-warm border-none"
                  onClick={() => setStep('details')}
                >
                  Proceed to Checkout
                </Button>
              ) : (
                <>
                  <Button 
                    type="submit"
                    form="checkout-form"
                    disabled={isSubmitting}
                    className="w-full h-14 text-base font-black uppercase tracking-widest shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 border-none"
                  >
                    {isSubmitting ? 'Sending Order...' : 'Confirm Order'}
                  </Button>
                  <Button 
                    type="button"
                    variant="ghost"
                    className="w-full h-10 text-xs font-bold text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"
                    onClick={handleWhatsAppCheckout}
                  >
                    <Send className="w-3.5 h-3.5" />
                    Or Place via WhatsApp
                  </Button>
                </>
              )}
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
