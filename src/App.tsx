import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "@/components/Layout";
import { CartProvider } from "@/context/CartContext";
import { HelmetProvider } from "react-helmet-async";
import PageLoader from "@/components/PageLoader";

// Route-level code splitting — each page is its own JS chunk
const Index   = lazy(() => import("./pages/Index"));
const Shop    = lazy(() => import("./pages/Shop"));
const Product = lazy(() => import("./pages/Product"));
const About   = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ThemeProvider defaultTheme="light" storageKey="axels-ui-theme">
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Layout>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/"        element={<Index />} />
                    <Route path="/shop"    element={<Shop />} />
                    <Route path="/shop/:id" element={<Product />} />
                    <Route path="/about"   element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*"        element={<NotFound />} />
                  </Routes>
                </Suspense>
              </Layout>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </CartProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
