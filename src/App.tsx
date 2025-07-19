
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import Grammar from "./pages/Grammar";
import GrammarTopic from "./pages/GrammarTopic";
import Tenses from "./pages/Tenses";
import TenseDetail from "./pages/TenseDetail";
import FillInTheBlanks from "./pages/FillInTheBlanks";
import WordOfTheDay from "./pages/WordOfTheDay";
import About from "./pages/About";

import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/grammar/:topicId" element={<GrammarTopic />} />
            <Route path="/tenses" element={<Tenses />} />
            <Route path="/tense/:tenseSlug" element={<TenseDetail />} />
            <Route path="/practice" element={<FillInTheBlanks />} />
            <Route path="/word-of-the-day" element={<WordOfTheDay />} />
            <Route path="/about" element={<About />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
