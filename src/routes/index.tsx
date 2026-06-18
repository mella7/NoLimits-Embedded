import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Store } from "@/components/Store";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Blog } from "@/components/Blog";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { CartSidebar } from "@/components/CartSidebar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NoLimits Embedded — Custom Embedded Systems, IoT & Edge AI" },
      { name: "description", content: "From RTOS firmware to PCB design, wireless IoT and edge AI on MCUs — NoLimits Embedded engineers production-ready embedded products." },
      { property: "og:title", content: "NoLimits Embedded — Engineer the Impossible" },
      { property: "og:description", content: "Custom embedded systems, IoT firmware & hardware — built without limits." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <HowItWorks />
          <Store />
          <Projects />
          <TechStack />
          <Testimonials />
          <Pricing />
          <Blog />
          <CtaBanner />
        </main>
        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  );
}
