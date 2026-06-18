import { Cpu, Radio, CircuitBoard, Brain, BatteryCharging, ShieldCheck, Cog, Workflow, Bug, ArrowRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const services = [
  { icon: Cpu, title: "Firmware Development", desc: "RTOS, bare-metal, and modern C/C++ firmware engineered for reliability and speed. We work with Zephyr, FreeRTOS, NuttX and ThreadX." },
  { icon: Radio, title: "Wireless IoT", desc: "BLE, LoRa, Zigbee, Thread, Matter and Wi-Fi 6 stacks tuned for range, throughput and battery life — from chipset bring-up to certification." },
  { icon: CircuitBoard, title: "PCB Design & Prototyping", desc: "From schematic capture to assembled boards in your hands. 2-to-12 layer designs, impedance control, DFM and DFT ready from day one." },
  { icon: Brain, title: "Edge AI on MCU", desc: "TinyML, TensorFlow Lite Micro and CMSIS-NN models running on Cortex-M and ESP32 — vision, audio and predictive maintenance." },
  { icon: BatteryCharging, title: "Low-Power System Design", desc: "Coin-cell, LiPo and energy-harvesting designs validated to nanoamp budgets. We deliver multi-year deployments in the field." },
  { icon: ShieldCheck, title: "Certification & Compliance", desc: "CE, FCC, RED, RoHS, UKCA and ETSI — we run pre-scan, book the lab, manage the submission and ship you the cert." },
  { icon: Cog, title: "Production & DFM", desc: "Panelization, test jigs, ICT fixtures and JLC/PCBA partner management. We hand off a turnkey BOM your factory can build." },
  { icon: Workflow, title: "Device Cloud & OTA", desc: "Secure MQTT pipelines, signed firmware OTA, fleet dashboards and telemetry on AWS IoT, Azure IoT Hub or self-hosted." },
  { icon: Bug, title: "Firmware Audit & Rescue", desc: "Inherited a half-baked project? We diagnose memory leaks, race conditions and protocol bugs — and ship a stable build." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader eyebrow="Services" title="Built end-to-end, in-house." subtitle="A single team for firmware, hardware, wireless, AI and certification — no handoffs, no excuses, no scope drift." />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <a href="#cta" className="group block h-full rounded-xl bg-surface-1 border border-border p-6 card-hover border-l-2 hover:border-l-primary">
                <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary inline-flex items-center justify-center mb-5">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
