import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Layout/Header";
import OTTFooter from "@/components/Layout/OTTFooter";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Solutions from "@/pages/Solutions";
import Contact from "@/pages/Contact";
import Resources from "@/pages/Resources";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();
  const isHomePage = location === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/solutions/:category" component={Solutions} />
          <Route path="/contact" component={Contact} />
          <Route path="/resources" component={Resources} />
          <Route path="/resources/:category" component={Resources} />
          <Route component={NotFound} />
        </Switch>
      </main>
      {!isHomePage && <OTTFooter />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
