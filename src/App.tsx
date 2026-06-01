import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import ChiSiamo from "@/pages/ChiSiamo";
import Collezioni from "@/pages/Collezioni";
import Collane from "@/pages/Collane";
import Anelli from "@/pages/Anelli";
import Bracciali from "@/pages/Bracciali";
import Orecchini from "@/pages/Orecchini";
import Artigianato from "@/pages/Artigianato";
import Testimonianze from "@/pages/Testimonianze";
import Contatti from "@/pages/Contatti";
import Privacy from "@/pages/Privacy";
import Termini from "@/pages/Termini";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    const [path, hash = ""] = location.split("#");

    const scrollToTarget = () => {
      if (hash) {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: "auto" });
    };

    if (path) {
      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToTarget);
      });
    }
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/chi-siamo" component={ChiSiamo} />
        <Route path="/collezioni" component={Collezioni} />
        <Route path="/collane" component={Collane} />
        <Route path="/anelli" component={Anelli} />
        <Route path="/bracciali" component={Bracciali} />
        <Route path="/orecchini" component={Orecchini} />
        <Route path="/artigianato" component={Artigianato} />
        <Route path="/testimonianze" component={Testimonianze} />
        <Route path="/contatti" component={Contatti} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/termini" component={Termini} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
