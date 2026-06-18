import { useEffect, useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const links = [
  { label: "Services", href: "#services" },
  { label: "Store", href: "#store" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, open: openCart } = useCart();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
            <a href="#cta">Start a Project</a>
          </Button>
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative h-10 w-10 inline-flex items-center justify-center rounded-md border border-border hover:border-primary transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-mono font-bold inline-flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <button
            className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-md border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-black/95 border-t border-border">
          <nav className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-foreground/90 hover:text-primary">
                {l.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="text-sm text-primary font-medium">Start a Project</a>
          </nav>
        </div>
      )}
    </header>
  );
}
