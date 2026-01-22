import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Salon Andrea Bohunice - Profesionální kadeřnické služby",
  description: "Profesionální kadeřnické a beauty služby v Brně-Bohunicích. Střihy, barvení, styling a péče o vlasy.",
  keywords: "kadeřnictví, beauty salon, Bohunice, Brno, střih, barvení, účesy",
  openGraph: {
    title: "Salon Andrea Bohunice",
    description: "Profesionální kadeřnické a beauty služby v Brně-Bohunicích",
    url: "https://salonandrea.cz",
    siteName: "Salon Andrea Bohunice",
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
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}