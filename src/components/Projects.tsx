import { ArrowRight, Cpu, HeartPulse, Satellite, Droplets, Bike, Factory } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const projects = [
  {
    icon: Cpu,
    tags: ["LoRa", "STM32", "Low Power"],
    title: "Smart Industrial Sensor Node",
    desc: "LoRa + STM32L4 platform with 5-year coin-cell battery life. Deployed across 3 factories monitoring vibration, temperature and humidity in real time.",
    metric: "5 yr battery",
  },
  {
    icon: HeartPulse,
    tags: ["TinyML", "BLE", "Wearable"],
    title: "AI Wearable ECG Monitor",
    desc: "TinyML + BLE 5.2 with real-time arrhythmia detection running entirely on a Cortex-M4 — no cloud round-trip, fully HIPAA-friendly.",
    metric: "98.2% accuracy",
  },
  {
    icon: Satellite,
    tags: ["LTE-M", "GNSS", "FreeRTOS"],
    title: "Fleet Tracking Gateway",
    desc: "LTE-M + GNSS + FreeRTOS gateway with over-the-air firmware updates. 800 units in active production across North Africa logistics fleets.",
    metric: "800 units shipped",
  },
  {
    icon: Droplets,
    tags: ["NB-IoT", "ESP32", "Solar"],
    title: "Solar Irrigation Controller",
    desc: "Off-grid NB-IoT valve controller powered by a 2W solar panel. Schedules irrigation from a mobile app and survives Saharan summer cycles.",
    metric: "0 maintenance / yr",
  },
  {
    icon: Bike,
    tags: ["BLE", "Anti-theft", "Nordic"],
    title: "Connected E-Bike Lock",
    desc: "nRF52840 smart lock with motion fingerprinting and BLE secure pairing. Ships with a Flutter companion app and an OTA pipeline.",
    metric: "<1 µA standby",
  },
  {
    icon: Factory,
    tags: ["Modbus", "Edge AI", "Gateway"],
    title: "Predictive Maintenance Gateway",
    desc: "Industrial gateway that bridges Modbus RTU to MQTT and runs a TFLite anomaly model on-device — flags failing motors hours before downtime.",
    metric: "32 hr early warning",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader eyebrow="Featured Projects" title="Products we helped ship." subtitle="A snapshot of the embedded products our team has taken from whiteboard to factory floor." />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <a href="#" className="group block h-full bg-surface-1 border border-border border-t-2 border-t-primary rounded-xl overflow-hidden card-hover">
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-surface-2 to-surface-1 flex items-center justify-center border-b border-border relative">
                  <p.icon className="h-14 w-14 text-primary/70" />
                  <span className="absolute bottom-3 right-3 font-mono text-[10px] px-2 py-1 rounded-full bg-background/80 border border-primary/30 text-primary">{p.metric}</span>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-full bg-background border border-border text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm text-primary font-medium">
                    View Case Study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
