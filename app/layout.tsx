import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kosmetický salon Andrea Starý Lískovec - Profesionální kosmetické služby",
  description: "Profesionální kosmetické služby v Brně-Starém Lískovci. Ošetření pleti, masáže, HIFU, terapie světlem a permanentní make-up.",
  keywords: "kosmetika, kosmetický salon, Starý Lískovec, Brno, ošetření pleti, masáže, HIFU, terapie světlem, liftingová masáž, permanentní make-up",
  openGraph: {
    title: "Kosmetický salon Andrea Starý Lískovec",
    description: "Profesionální kosmetické služby v Brně-Starém Lískovci",
    url: "https://salonandrea.cz",
    siteName: "Kosmetický salon Andrea Starý Lískovec",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={playfair.variable}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}