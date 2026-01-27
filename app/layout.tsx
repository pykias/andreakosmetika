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
  title: "Kosmetický salon Andrea Bohunice - Profesionální kosmetické služby",
  description: "Profesionální kosmetické služby v Brně-Bohunicích. Ošetření pleti, masáže, líčení a wellness procedury.",
  keywords: "kosmetika, kosmetický salon, Bohunice, Brno, ošetření pleti, masáže, líčení",
  openGraph: {
    title: "Kosmetický salon Andrea Bohunice",
    description: "Profesionální kosmetické služby v Brně-Bohunicích",
    url: "https://salonandrea.cz",
    siteName: "Kosmetický salon Andrea Bohunice",
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