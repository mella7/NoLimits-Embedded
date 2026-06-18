import { Button } from "@/components/ui/button";
import { Reveal } from "./Section";

export function CtaBanner() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="bg-surface-1 border border-border rounded-3xl p-10 sm:p-16 text-center glow-primary">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Have a project in mind? <br /><span className="text-primary text-primary-glow">Let's build it.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">From feasibility study to certified product — we'd love to hear what you're building.</p>
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="mailto:hello@nolimitsembedded.com">Start a Project</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
