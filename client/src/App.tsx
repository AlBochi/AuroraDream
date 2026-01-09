import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Products from "@/pages/products";
import ProductDetails from "@/pages/product-details";
import DeliveryZone from "@/pages/DeliveryZone";
import FAQ from "@/pages/faq";
import NotFound from "@/pages/not-found";
import KanataPage from "@/pages/neighborhoods/kanata";
import BarrhavenPage from "@/pages/neighborhoods/barrhaven";
import NepeanPage from "@/pages/neighborhoods/nepean";
import OrleansPage from "@/pages/neighborhoods/orleans";
import KanataMattressPage from '@/pages/neighborhoods/kanata-mattress';
import BarrhavenMattressPage from '@/pages/neighborhoods/barrhaven-mattress';
import GatineauMatelasPage from '@/pages/neighborhoods/gatineau-matelas';
import StittsvilleMattressPage from '@/pages/neighborhoods/stittsville-mattress';
import OrleansMattressPage from '@/pages/neighborhoods/orleans-mattress';
import WestboroMattressPage from '@/pages/neighborhoods/westboro-mattress';
import HullMatelasPage from '@/pages/neighborhoods/hull-matelas';
import MattressDisposalPage from '@/pages/services/mattress-disposal-ottawa';
import CentretownPage from "@/pages/neighborhoods/centretown";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/delivery-zone" component={DeliveryZone} />
      <Route path="/product-details/:id" component={ProductDetails} />
      <Route path="/faq" component={FAQ} />
      <Route path="/kanata-mattress-delivery" component={KanataPage} />
      <Route path="/barrhaven-sleep-solutions" component={BarrhavenPage} />
      <Route path="/nepean-mattress-store" component={NepeanPage} />
      <Route path="/orleans-bed-shop" component={OrleansPage} />
      <Route path="/centretown-mattress-showroom" component={CentretownPage} />
      <Route path="/services/mattress-disposal-ottawa" component={MattressDisposalPage} />
      <Route path="/neighborhoods/hull-matelas" component={HullMatelasPage} />
      <Route path="/neighborhoods/westboro-mattress" component={WestboroMattressPage} />
      <Route path="/neighborhoods/orleans-mattress" component={OrleansMattressPage} />
      <Route path="/neighborhoods/stittsville-mattress" component={StittsvilleMattressPage} />
      <Route path="/neighborhoods/gatineau-matelas" component={GatineauMatelasPage} />
      <Route path="/neighborhoods/barrhaven-mattress" component={BarrhavenMattressPage} />
      <Route path="/neighborhoods/kanata-mattress" component={KanataMattressPage} />
      <Route component={NotFound} />
    </Switch>
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
