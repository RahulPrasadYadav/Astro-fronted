import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Pages
import Index from "./pages/Index";
import Kundali from "./pages/Kundali";
import Matchmaking from "./pages/Matchmaking";
import Horoscope from "./pages/Horoscope";
import Panchang from "./pages/Panchang";
import PalmReading from "./pages/PalmReading";
import FaceReading from "./pages/FaceReading";
import TarotReading from "./pages/TarotReading";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/kundali" element={<Kundali />} />
              <Route path="/matchmaking" element={<Matchmaking />} />
              <Route path="/horoscope" element={<Horoscope />} />
              <Route path="/panchang" element={<Panchang />} />
              <Route path="/palm-reading" element={<PalmReading />} />
              <Route path="/face-reading" element={<FaceReading />} />
              <Route path="/tarot-reading" element={<TarotReading />} />
              <Route path="/blog" element={<Blog />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
