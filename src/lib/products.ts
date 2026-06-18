export type Product = {
  id: string;
  name: string;
  spec: string;
  price: number;
  stock: "In Stock" | "Low Stock";
  category: string;
};

export const PRODUCTS: Product[] = [
  { id: "esp32-s3", name: "ESP32-S3 Dev Board", spec: "Dual-core 240MHz, Wi-Fi+BLE", price: 38.9, stock: "In Stock", category: "Microcontrollers" },
  { id: "stm32f4", name: "STM32F4 Nucleo Board", spec: "ARM Cortex-M4 168MHz", price: 74.9, stock: "In Stock", category: "Microcontrollers" },
  { id: "rp2040", name: "Raspberry Pi RP2040", spec: "Dual Cortex-M0+, 264KB RAM", price: 17.9, stock: "Low Stock", category: "Microcontrollers" },
  { id: "esp32-c6", name: "ESP32-C6 RISC-V Board", spec: "Wi-Fi 6 + BLE 5 + Thread", price: 45.0, stock: "In Stock", category: "Microcontrollers" },
  { id: "stm32h7", name: "STM32H7 Discovery", spec: "Cortex-M7 480MHz, 1MB SRAM", price: 189.0, stock: "Low Stock", category: "Microcontrollers" },
  { id: "sx1276", name: "LoRa SX1276 Module", spec: "868/915MHz, -148dBm sensitivity", price: 28.5, stock: "In Stock", category: "Wireless Modules" },
  { id: "sara-r410m", name: "u-blox SARA-R410M", spec: "LTE-M/NB-IoT global", price: 104.9, stock: "In Stock", category: "Wireless Modules" },
  { id: "nrf52840", name: "nRF52840 BLE Module", spec: "Bluetooth 5.0 + USB", price: 44.9, stock: "Low Stock", category: "Wireless Modules" },
  { id: "sim7600", name: "SIM7600 4G LTE Module", spec: "Cat-4 worldwide, GNSS", price: 145.0, stock: "In Stock", category: "Wireless Modules" },
  { id: "bmi270", name: "BMI270 IMU Sensor", spec: "6-axis, ultra-low power", price: 23.9, stock: "In Stock", category: "Sensors" },
  { id: "scd41", name: "SCD41 CO2 Sensor", spec: "Photoacoustic NDIR", price: 134.9, stock: "In Stock", category: "Sensors" },
  { id: "max30102", name: "MAX30102 Pulse Oximeter", spec: "Heart rate + SpO2", price: 19.5, stock: "In Stock", category: "Sensors" },
  { id: "bme688", name: "BME688 Gas Sensor", spec: "Temp + RH + pressure + VOC", price: 62.0, stock: "In Stock", category: "Sensors" },
  { id: "vl53l5cx", name: "VL53L5CX ToF Sensor", spec: "8x8 multi-zone ranging, 4m", price: 79.0, stock: "Low Stock", category: "Sensors" },
  { id: "tps63020", name: "TPS63020 Buck-Boost IC", spec: "1.8–5.5V, 2A", price: 11.9, stock: "In Stock", category: "Power Management" },
  { id: "bq25895", name: "BQ25895 Battery Charger", spec: "USB-C PD, 5A fast charge", price: 26.9, stock: "Low Stock", category: "Power Management" },
  { id: "ltc3105", name: "LTC3105 Energy Harvester", spec: "Solar / TEG step-up, MPPT", price: 38.5, stock: "In Stock", category: "Power Management" },
  { id: "proto-shield", name: "Arduino Shield Proto Board", spec: "Universal expansion board", price: 13.5, stock: "In Stock", category: "Dev Boards & Shields" },
  { id: "jlink-edu", name: "J-Link EDU Mini Debugger", spec: "ARM SWD/JTAG, 3MB/s", price: 89.0, stock: "In Stock", category: "Dev Boards & Shields" },
  { id: "logic-analyzer", name: "8-Ch Logic Analyzer 24MHz", spec: "Saleae-compatible, USB", price: 54.0, stock: "In Stock", category: "Dev Boards & Shields" },
];

export const CATEGORIES = ["All", "Microcontrollers", "Wireless Modules", "Sensors", "Power Management", "Dev Boards & Shields"];
