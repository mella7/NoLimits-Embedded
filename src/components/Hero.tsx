import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const stats = [
  { v: "150+", l: "Devices Shipped" },
  { v: "40+", l: "Happy Clients" },
  { v: "5ms", l: "Avg Firmware Latency" },
  { v: "12", l: "Countries Served" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Circuit background */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M10 10 H40 V40 H70 M10 50 H30 V70" stroke="#6DBE2E" strokeWidth="0.6" fill="none" />
            <circle cx="40" cy="40" r="2" fill="#6DBE2E" />
            <circle cx="10" cy="50" r="1.5" fill="#6DBE2E" />
            <circle cx="70" cy="40" r="1.5" fill="#6DBE2E" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" className="animate-circuit" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-primary">EMBEDDED · IOT · EDGE AI</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            Engineer the <span className="text-primary text-primary-glow">Impossible.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
            Custom embedded systems, IoT firmware & hardware — built without limits.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
              <a href="#cta">Get a Free Consultation</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <a href="#store">Explore the Store</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border"
        >
          {stats.map((s) => (
            <div key={s.l} className="bg-surface-1 p-6 text-center">
              <div className="font-mono text-2xl md:text-3xl font-bold text-primary">{s.v}</div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
