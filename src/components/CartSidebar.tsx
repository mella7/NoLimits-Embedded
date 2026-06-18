import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export function CartSidebar() {
  const { isOpen, close, items, setQty, remove, subtotal } = useCart();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm" onClick={close}
          />
          <motion.aside
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[420px] z-[70] bg-surface-1 border-l border-border flex flex-col"
          >
            <div className="p-5 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Your Cart</h3>
              </div>
              <button onClick={close} aria-label="Close" className="h-8 w-8 rounded-md hover:bg-surface-2 inline-flex items-center justify-center">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 && (
                <div className="text-center text-muted-foreground py-12">
                  <ShoppingCart className="h-10 w-10 mx-auto mb-3 opacity-40" />
                  <p className="text-sm">Your cart is empty.</p>
                </div>
              )}
              {items.map((i) => (
                <div key={i.id} className="flex gap-3 p-3 bg-background rounded-lg border border-border">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{i.name}</div>
                    <div className="font-mono text-xs text-primary mt-1">{i.price.toFixed(2)} TND</div>
                    <div className="mt-2 flex items-center gap-2">
                      <button onClick={() => setQty(i.id, i.quantity - 1)} className="h-7 w-7 rounded border border-border inline-flex items-center justify-center hover:border-primary">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="font-mono text-sm w-6 text-center">{i.quantity}</span>
                      <button onClick={() => setQty(i.id, i.quantity + 1)} className="h-7 w-7 rounded border border-border inline-flex items-center justify-center hover:border-primary">
                        <Plus className="h-3 w-3" />
                      </button>
                      <button onClick={() => remove(i.id)} className="ml-auto h-7 w-7 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive inline-flex items-center justify-center">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-border space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-mono text-lg font-bold text-primary">{subtotal.toFixed(2)} TND</span>
              </div>
              <Button disabled={items.length === 0} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Checkout
              </Button>
              <p className="text-[10px] text-center text-muted-foreground font-mono">DEMO · No payment processed</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
