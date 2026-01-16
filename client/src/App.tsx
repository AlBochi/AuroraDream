import React from "react";
import PopupAd from './components/PopupAd';
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Products from "@/pages/products";
// FIXED: Direct import instead of React.lazy
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
      <Route path="/kanata-mattress-delivery-locations" component={KanataMattressPage} />
      <Route path="/barrhaven-mattress-delivery" component={BarrhavenMattressPage} />
      <Route path="/gatineau-matelas-livraison" component={GatineauMatelasPage} />
      <Route path="/stittsville-mattress-delivery" component={StittsvilleMattressPage} />
      <Route path="/orleans-mattress-delivery" component={OrleansMattressPage} />
      <Route path="/westboro-mattress-store" component={WestboroMattressPage} />
      <Route path="/hull-matelas-livraison" component={HullMatelasPage} />
      <Route path="/ottawa-mattress-disposal" component={MattressDisposalPage} />
      <Route path="/centretown-mattress-delivery" component={CentretownPage} />
      <Route><NotFound /></Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        {/* POPUP AD ADDED HERE - Will appear on all pages */}
        <PopupAd />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
