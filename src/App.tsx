import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Submit from "./pages/Submit";
import Track from "./pages/Track";
import Crypto from "./pages/Crypto";
import Fiat from "./pages/Fiat";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import WhatsAppChat from "./components/WhatsAppChat";
import ScrollToTop from "./components/ScrollToTop";
import LanguageToggle from "./components/LanguageToggle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/track" element={<Track />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/fiat" element={<Fiat />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <LanguageToggle />
          <WhatsAppChat />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
