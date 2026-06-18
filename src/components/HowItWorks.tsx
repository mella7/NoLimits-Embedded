import { ClipboardList, PenTool, Wrench, Truck } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const steps = [
  { icon: ClipboardList, title: "Brief Us", desc: "Share your concept, constraints, and target market in a 30-minute call." },
  { icon: PenTool, title: "We Design", desc: "Schematics, firmware architecture, and a clear scope with milestones." },
  { icon: Wrench, title: "You Prototype", desc: "Assembled boards in your hands within weeks — iterate fast with our team." },
  { icon: Truck, title: "We Ship", desc: "Production files, certification, and volume manufacturing partners." },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-surface-1/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader eyebrow="Process" title="How It Works" />
        </Reveal>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative bg-surface-1 border border-border rounded-xl p-6 text-center card-hover">
                <div className="font-mono text-xs text-primary mb-3">STEP / 0{i + 1}</div>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center mb-4">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
