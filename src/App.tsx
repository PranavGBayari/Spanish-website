
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
import IGCSE from "./pages/IGCSE";
import IB from "./pages/IB";

/* tenses */
import PreteritoPerfecto from "./pages/tenses/PreteritoPerfecto";
import Pluscuamperfecto from "./pages/tenses/Pluscuamperfecto";
import PresentSubjunctive from "./pages/tenses/PresentSubjunctive";
import ImperfectSubjunctive from "./pages/tenses/ImperfectSubjunctive";
import Imperative from "./pages/tenses/Imperative";
import Present from "./pages/tenses/Present";
import PresentContinuous from "./pages/tenses/PresentContinuous";
import Indefenido from "./pages/tenses/Indefenido";
import ImperfectPreterito from "./pages/tenses/ImperfectPreterito";
import Perfecto from "./pages/tenses/Perfecto";
import Future from "./pages/tenses/Future";
import Conditional from "./pages/tenses/Conditional";

/* grammar */
import DaysOfTheWeek from "./pages/grammar/DaysOfTheWeek";
import NumbersSpanish from "./pages/grammar/NumbersSpanish";
import ArticlesSpanish from "./pages/grammar/ArticlesSpanish";
import BasicPronouns from "./pages/grammar/BasicPronouns";
import PossessiveAdjectives from "./pages/grammar/PossessiveAdjectives";
import SerEstar from "./pages/grammar/SerEstar";

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
            <Route path="/grammar/days-of-week" element={<DaysOfTheWeek />} />
            <Route path="/grammar/numbers-spanish" element={<NumbersSpanish />} />
            <Route path="/grammar/articles-spanish" element={<ArticlesSpanish />} />
            <Route path="/grammar/basic-pronouns" element={<BasicPronouns />} />
            <Route path="/grammar/possessive-adjectives" element={<PossessiveAdjectives />} />
            <Route path="/grammar/ser-estar" element={<SerEstar />} />
            <Route path="/practice" element={<FillInTheBlanks />} />

            <Route path="/tenses" element={<Tenses />} />
            <Route path="/tense/:tenseSlug" element={<TenseDetail />} />
            <Route path="/tense/preterito-perfecto" element={<PreteritoPerfecto />} />
            <Route path="/tense/pluscuamperfecto" element={<Pluscuamperfecto />} />
            <Route path="/tense/present-subjunctive" element={<PresentSubjunctive />} />
            <Route path="/tense/imperfect-subjunctive" element={<ImperfectSubjunctive />} />
            <Route path="/tense/present-continuous" element={<PresentContinuous />} />
            <Route path="/tense/imperative" element={<Imperative />} />
            <Route path="/tense/indefenido" element={<Indefenido />} />
            <Route path="/tense/imperfect-preterito" element={<ImperfectPreterito />} />
            <Route path="/tense/present" element={<Present />} />
            <Route path="/tense/perfecto" element={<Perfecto />} />
            <Route path="/tense/future" element={<Future />} />
            <Route path="/tense/conditional" element={<Conditional />} />

            <Route path="/word-of-the-day" element={<WordOfTheDay />} />
            <Route path="/about" element={<About />} />
            <Route path="/igcse" element={<IGCSE />} />
            <Route path="/ib" element={<IB />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
