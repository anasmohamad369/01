import type { Metadata } from "next";
import { Outfit, Bebas_Neue } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "BDKARATE | Karate & Martial Arts School & Fitness Center",
  description: "Experience the power, discipline, and spirit of authentic Karate. Classes for Kids, Youth, Adults, and Families.",
  keywords: ["Karate", "Martial Arts", "Fitness Center", "Self Defense", "Dojo", "BDKARATE"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${bebasNeue.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FBF9F5] text-[#1E1E1E] selection:bg-[#C8232C] selection:text-white">
        {children}
      </body>
    </html>
  );
}

