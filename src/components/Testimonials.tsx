import { Quote } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const items = [
  { quote: "They turned our napkin sketch into a certified LoRa device in 10 weeks. The hardware, firmware and FCC paperwork all landed on schedule.", name: "Karim B.", role: "CTO at AgriSense", initials: "KB" },
  { quote: "Best embedded team we've worked with. Firmware was clean, fully documented, covered by unit tests and shipped on time.", name: "Leila M.", role: "Hardware Lead at MedTrack", initials: "LM" },
  { quote: "NLE saved us 4 months by handling FCC certification end-to-end — pre-scan, lab booking, submission and the final cert.", name: "James O.", role: "Founder at VoltEdge", initials: "JO" },
  { quote: "Their TinyML model runs on a 256 KB Cortex-M4 and beats the cloud version we shipped before. Genuinely impressive engineering.", name: "Sofia R.", role: "VP Engineering at AuraHealth", initials: "SR" },
  { quote: "We came in with a broken PCB and 6 weeks to ship. They re-spun the board, rewrote the BLE stack and made the deadline.", name: "Ahmed T.", role: "Founder at Mobicare", initials: "AT" },
  { quote: "Communication was the differentiator — weekly demos, clear scope changes, no surprises in the invoice. We'll be back for v2.", name: "Émilie D.", role: "Product Director at LumenIQ", initials: "ED" },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader eyebrow="Testimonials" title="Trusted by hardware teams worldwide." subtitle="From healthcare startups to industrial OEMs, teams ship faster when we sit on their side of the table." />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="h-full bg-surface-1 border border-border rounded-xl p-6 card-hover">
                <Quote className="h-7 w-7 text-primary/60 mb-4" />
                <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center font-mono font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
