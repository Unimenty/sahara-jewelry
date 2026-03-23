import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { ShoppingBag, Plus, Minus, Trash2, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

type CheckoutStep = 'cart' | 'details' | 'success';

const CartDrawer: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, totalItems, isDrawerOpen, setDrawerOpen, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>('cart');
  
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
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l border-border/10 bg-background text-foreground">
        
        {/* Header */}
        <SheetHeader className="p-8 border-b border-border/10 flex-row items-center justify-between space-y-0 bg-background/50 backdrop-blur-md sticky top-0 z-10">
          <SheetTitle className="text-xl font-serif tracking-tight flex items-center gap-4 italic uppercase">
            {step === 'cart' && "Your Bag"}
            {step === 'details' && (
              <>
                <button onClick={() => setStep('cart')} className="group p-1 mr-1">
                  <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
                Checkout
              </>
            )}
            {step === 'success' && "Order Placed"}
          </SheetTitle>
          {step === 'cart' && totalItems > 0 && (
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              {totalItems} items
            </span>
          )}
        </SheetHeader>

        {/* Body */}
        <div className="flex-1 overflow-hidden relative">
          {step === 'cart' && (
            <>
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center p-12 text-center space-y-8">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center opacity-40 blur-[1px]">
                    <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif italic">Your bag is empty</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px] mx-auto">
                      Discover our celestial collections and find your next treasure.
                    </p>
                  </div>
                  <button 
                    className="button-sahara mt-4 !px-8" 
                    onClick={() => setDrawerOpen(false)}
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <ScrollArea className="h-full p-8">
                  <div className="space-y-10">
                    {cartItems.map((item) => (
                      <div key={`${item.id}-${item.variant.volume}-${item.variant.packSize}`} className="flex gap-6 items-start group">
                        <div className="h-24 w-24 overflow-hidden flex-shrink-0 bg-secondary/10 p-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-1 space-y-4">
                          <div className="space-y-1">
                            <div className="flex justify-between gap-2">
                              <h4 className="font-serif uppercase tracking-widest text-xs font-bold leading-relaxed">{item.name}</h4>
                              <button 
                                onClick={() => removeFromCart(item.id, item.variant)}
                                className="text-muted-foreground/40 hover:text-primary transition-colors shrink-0"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">
                              {item.variant.volume}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border border-border/20 p-1">
                              <button
                                className="h-6 w-6 flex items-center justify-center hover:text-primary transition-colors"
                                onClick={() => updateQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))}
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-8 text-center text-[10px] font-bold">{item.quantity}</span>
                              <button
                                className="h-6 w-6 flex items-center justify-center hover:text-primary transition-colors"
                                onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <p className="font-serif text-sm">GH₵{(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </>
          )}

          {step === 'success' && (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center space-y-10 animate-in fade-in zoom-in duration-700">
              <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center text-primary border border-primary/20">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-serif italic">Thank You</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  Your celestial order has been received. We will contact you shortly to finalize your journey.
                </p>
              </div>
              <button className="button-sahara w-full" onClick={handleReset}>
                Return to Shop
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && step !== 'success' && (
          <SheetFooter className="p-8 border-t border-border/10 flex-col gap-6 sm:flex-col bg-background/50 backdrop-blur-md">
            <div className="w-full space-y-4">
              <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                <span>Subtotal</span>
                <span>GH₵{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                <span>Shipping</span>
                <span className="text-primary italic">Complimentary</span>
              </div>
              <Separator className="bg-border/10" />
              <div className="flex justify-between items-end pt-2">
                <span className="text-sm font-serif uppercase tracking-[0.2em] italic">Total</span>
                <span className="text-3xl font-serif font-light text-foreground">GH₵{totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="w-full pt-4">
               <button 
                  className="button-sahara w-full py-6"
                  onClick={() => setStep('success')}
                >
                  Confirm Order
                </button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
