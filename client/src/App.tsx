import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Partners from "@/pages/Partners";
import PartnerDetail from "@/pages/PartnerDetail";
import ProjectTeam from "@/pages/ProjectTeam";
import ProjectTeamDetail from "@/pages/ProjectTeamDetail";
import Results from "@/pages/Results";
import News from "@/pages/News";
import NewsItem from "@/pages/NewsItem";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/partners" component={Partners} />
      <Route path="/partners/team" component={ProjectTeam} />
      <Route path="/partners/team/:slug" component={ProjectTeamDetail} />
      <Route path="/partners/:id" component={PartnerDetail} />
      <Route path="/results" component={Results} />
      <Route path="/news" component={News} />
      <Route path="/news/:id" component={NewsItem} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
