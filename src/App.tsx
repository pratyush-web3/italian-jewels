import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import ChiSiamo from "@/pages/ChiSiamo";
import Collezioni from "@/pages/Collezioni";
import Artigianato from "@/pages/Artigianato";
import Testimonianze from "@/pages/Testimonianze";
import Contatti from "@/pages/Contatti";
import Privacy from "@/pages/Privacy";
import Termini from "@/pages/Termini";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/chi-siamo" component={ChiSiamo} />
        <Route path="/collezioni" component={Collezioni} />
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
