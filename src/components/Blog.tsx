import { ArrowRight, Clock } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const posts = [
  { tag: "RTOS", title: "Choosing Between FreeRTOS and Zephyr in 2026", excerpt: "Two giants, two philosophies — scheduler internals, driver model and tooling compared on a real product.", read: "6 min read" },
  { tag: "Edge AI", title: "TinyML on ESP32: A Practical Guide", excerpt: "From dataset capture to a flashed binary running under 200 KB — a workflow that actually ships.", read: "8 min read" },
  { tag: "Compliance", title: "Designing for FCC Certification from Day One", excerpt: "Layout, antenna placement and shielding decisions that save you three months and two re-spins.", read: "5 min read" },
  { tag: "Low Power", title: "Hitting Sub-µA Sleep on nRF52", excerpt: "GPIO leak hunting, regulator selection and the trace that cost us 4 µA on a real design.", read: "7 min read" },
  { tag: "PCB", title: "4-Layer Stackups That Actually Pass EMC", excerpt: "Why the textbook stackup fails in production — and the three we reach for every time.", read: "9 min read" },
  { tag: "LoRa", title: "Building a LoRaWAN Sensor That Lasts 10 Years", excerpt: "Duty-cycle math, ADR strategy and the firmware pattern behind decade-long deployments.", read: "10 min read" },
];

export function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader eyebrow="Blog" title="From the workbench." subtitle="Field notes, post-mortems and deep dives from our firmware and hardware engineers." />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <a href="#" className="group block h-full bg-surface-1 border border-border rounded-xl p-6 card-hover">
                <span className="inline-block font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">{p.tag}</span>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-1 text-muted-foreground font-mono text-xs"><Clock className="h-3 w-3" /> {p.read}</span>
                  <span className="inline-flex items-center gap-1 text-primary font-medium">
                    Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
