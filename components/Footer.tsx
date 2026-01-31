import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Clock, Mail } from "lucide-react";
import { salonInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-bg-soft border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-lg font-semibold text-brand-text mb-4">
              Kosmetický salon Andrea Bohunice
            </h3>
            <p className="text-sm text-brand-text-light mb-4">
              Profesionální kosmetické služby v srdci Bohunic. Vaše krása je naší prioritou.
            </p>
            <div className="flex gap-4">
              <a
                href={salonInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-light hover:text-brand-brown transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={salonInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-light hover:text-brand-brown transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-brand-text mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sluzby"
                  className="text-sm text-brand-text-light hover:text-brand-brown transition-colors"
                >
                  Naše služby
                </Link>
              </li>
              <li>
                <Link
                  href="/cenik"
                  className="text-sm text-brand-text-light hover:text-brand-brown transition-colors"
                >
                  Ceník
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className="text-sm text-brand-text-light hover:text-brand-brown transition-colors"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <a
                  href={salonInfo.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-text-light hover:text-brand-brown transition-colors"
                >
                  Google recenze
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-text mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-brown mt-0.5" />
                <span className="text-sm text-brand-text-light">
                  {salonInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-brown" />
                <a
                  href={`tel:${salonInfo.phone}`}
                  className="text-sm text-brand-text-light hover:text-brand-brown transition-colors"
                >
                  {salonInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-brown" />
                <a
                  href={`mailto:${salonInfo.email}`}
                  className="text-sm text-brand-text-light hover:text-brand-brown transition-colors"
                >
                  {salonInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-text mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Objednávky
            </h4>
            <p className="text-sm text-brand-text-light">
              Služby jsou poskytovány pouze na objednávku.
            </p>
            <p className="text-sm text-brand-text-light mt-2">
              Kontaktujte mě a domluvíme si termín.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-brand-text-muted">
              © {new Date().getFullYear()} Kosmetický salon Andrea Bohunice. Všechna práva vyhrazena.
            </p>
            <p className="text-xs text-brand-text-muted">
              IČO: {salonInfo.ico}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}