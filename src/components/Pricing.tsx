import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeader } from "./Section";

const tiers = [
  { name: "Starter Prototype", price: "From 7,500 TND", cta: "Get Started", features: ["Feasibility study & BOM costing", "Schematic + 2-layer PCB design", "1 assembled prototype unit", "Bring-up firmware skeleton", "2 weeks of design iterations"] },
  { name: "Growth Build", price: "From 24,000 TND", cta: "Let's Build", popular: true, features: ["Full firmware (RTOS or bare-metal)", "4-layer PCB + 10 prototype units", "Wireless stack integration (BLE/LoRa/Wi-Fi)", "Pre-compliance EMC scan", "Functional & HALT testing", "8 weeks of engineering support"] },
  { name: "Enterprise Scale", price: "Custom pricing", cta: "Contact Us", features: ["NRE + full production files", "CE / FCC / RED certification", "Volume manufacturing partners", "Dedicated firmware OTA pipeline", "12-month maintenance SLA", "On-site factory line bring-up"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-surface-1/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader eyebrow="Pricing" title="Engagement models for every stage." />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className={`relative h-full bg-surface-1 rounded-2xl p-7 flex flex-col card-hover border ${t.popular ? "border-primary glow-primary" : "border-border"}`}>
                {t.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest uppercase bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <div className="mt-3 font-mono text-2xl font-bold text-primary">{t.price}</div>
                <ul className="mt-6 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-foreground/90">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className={`mt-7 w-full ${t.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-surface-2 hover:bg-surface-2/70 text-foreground border border-border"}`}>
                  <a href="#cta">{t.cta}</a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
