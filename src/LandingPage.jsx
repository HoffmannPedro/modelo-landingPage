import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { featuresData } from './data/features';
import { pricingData } from './data/pricing';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-100">
      <Header />

      <main className="flex-1 flex flex-col pt-16">
        <Hero />
        <Features items={featuresData} />
        <Pricing plans={pricingData} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}