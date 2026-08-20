import { Lora, Open_Sans } from "next/font/google";

export const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["400", "600", "700"],
  preload: false,
});
