import { Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

const columns = [
  { title: "Company", links: ["About", "Careers", "Blog"] },
  { title: "Services", links: ["Firmware", "PCB Design", "IoT", "Edge AI"] },
  { title: "Store", links: ["Browse", "Cart", "Orders"] },
];

export function Footer() {
  return (
    <footer className="bg-surface-1/40 border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">Engineering without limits.</p>
            <div className="mt-5 flex gap-3">
              {[Linkedin, Github, Twitter].map((Ico, i) => (
                <a key={i} href="#" aria-label="social" className="h-9 w-9 rounded-md border border-border hover:border-primary hover:text-primary inline-flex items-center justify-center transition-colors">
                  <Ico className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <div className="font-mono text-xs tracking-widest uppercase text-primary mb-4">{c.title}</div>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-primary mb-4">Contact</div>
            <a href="mailto:hello@nolimitsembedded.com" className="text-sm text-muted-foreground hover:text-primary break-all">hello@nolimitsembedded.com</a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
          <span>© {new Date().getFullYear()} NoLimits Embedded. All rights reserved.</span>
          <span>Made with precision in Tunisia.</span>
        </div>
      </div>
    </footer>
  );
}
