"use client";

import { useState, useCallback } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { BepCalculator } from "@/components/bep-calculator";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";
import { UpgradeModal } from "@/components/upgrade-modal";
import { Footer } from "@/components/footer";

export default function Page() {
  const [usageLimit, setUsageLimit] = useState(3);
  const [showUpgrade, setShowUpgrade] = useState(false);

  const handleCalculate = useCallback(() => {
    setUsageLimit((prev) => Math.max(0, prev - 1));
  }, []);

  const handleShowUpgrade = useCallback(() => {
    setShowUpgrade(true);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar usageLimit={usageLimit} />
      <HeroSection />
      <BepCalculator
        usageLimit={usageLimit}
        onCalculate={handleCalculate}
        onShowUpgrade={handleShowUpgrade}
      />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
      <UpgradeModal
        open={showUpgrade}
        onClose={() => setShowUpgrade(false)}
      />
    </main>
  );
}
