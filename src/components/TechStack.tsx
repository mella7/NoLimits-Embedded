import { Reveal, SectionHeader } from "./Section";

const stack = ["STM32", "ESP-IDF", "FreeRTOS", "Zephyr OS", "KiCad", "TensorFlow Lite", "Altium Designer", "ARM Cortex", "MQTT", "AWS IoT Core", "PlatformIO", "Segger J-Link"];

export function TechStack() {
  const doubled = [...stack, ...stack];
  return (
    <section className="py-24 bg-surface-1/30 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader eyebrow="Stack" title="Tools & Technologies We Master" />
        </Reveal>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 animate-marquee w-max">
          {doubled.map((t, i) => (
            <div key={i} className="px-5 py-3 rounded-full bg-surface-1 border border-border font-mono text-sm whitespace-nowrap">
              <span className="text-primary mr-2">●</span>{t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
