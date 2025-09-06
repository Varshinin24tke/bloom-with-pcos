import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import background enhancements
import BackgroundShapes from "./components/ui/BackgroundShapes"; 
import WaveDivider from "./components/ui/WaveDivider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* 🔹 Add background & global decorations */}
        <div className="relative min-h-screen bg-gradient-to-b from-pink-100 to-pink-50">
          <BackgroundShapes />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Index />
                  {/* Example usage of wave dividers */}
                  <WaveDivider color="#fde2e4" />
                </>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
