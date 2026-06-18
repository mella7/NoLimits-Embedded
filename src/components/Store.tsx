import { useMemo, useState } from "react";
import { Search, Cpu, Radio, Activity, Zap, Layers, Package } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Reveal, SectionHeader } from "./Section";

const categoryIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  Microcontrollers: Cpu,
  "Wireless Modules": Radio,
  Sensors: Activity,
  "Power Management": Zap,
  "Dev Boards & Shields": Layers,
};

export function Store() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("popularity");
  const { add } = useCart();

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) =>
      (cat === "All" || p.category === cat) && (p.name + p.spec).toLowerCase().includes(q.toLowerCase())
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [cat, q, sort]);

  return (
    <section id="store" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader eyebrow="Store" title="The NLE Store — Parts for Builders" subtitle="Hand-picked components from the parts we trust in our own builds." />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-3 mb-8 p-3 bg-surface-1 border border-border rounded-xl">
            <Select value={cat} onValueChange={setCat}>
              <SelectTrigger className="bg-background border-border"><SelectValue /></SelectTrigger>
              <SelectContent>{CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
            </Select>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search parts…" value={q} onChange={(e) => setQ(e.target.value)} className="pl-9 bg-background border-border" />
            </div>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="bg-background border-border"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Sort: Popularity</SelectItem>
                <SelectItem value="price-asc">Price: Low → High</SelectItem>
                <SelectItem value="price-desc">Price: High → Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((p, i) => {
            const Icon = categoryIcon[p.category] ?? Package;
            return (
              <Reveal key={p.id} delay={(i % 4) * 0.05}>
                <div className="bg-surface-1 border border-border rounded-xl overflow-hidden card-hover flex flex-col h-full">
                  <div className="aspect-[4/3] bg-gradient-to-br from-surface-2 to-surface-1 flex items-center justify-center border-b border-border relative">
                    <Icon className="h-12 w-12 text-primary/60" />
                    <span className={`absolute top-3 right-3 font-mono text-[10px] px-2 py-1 rounded-full border ${
                      p.stock === "In Stock" ? "bg-primary/10 text-primary border-primary/30" : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                    }`}>{p.stock}</span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{p.category}</div>
                    <h3 className="mt-1 font-semibold text-foreground">{p.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{p.spec}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-mono text-lg font-bold text-primary">{p.price.toFixed(2)} TND</span>
                    </div>
                    <Button onClick={() => add(p)} className="mt-3 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
