"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, ExternalLink } from "lucide-react";
import { salonInfo } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="py-12">
      <section className="container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-text mb-6">
            Kontakt
          </h1>
          <p className="text-lg text-brand-text-light">
            Rádi vás přivítáme v našem salonu. Najdete nás v srdci Bohunic, 
            s výbornou dostupností MHD i možností parkování.
          </p>
        </motion.div>
      </section>

      <section className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-semibold text-brand-text mb-6">
                  Kontaktní informace
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-brand-brown mt-0.5" />
                    <div>
                      <p className="font-medium text-brand-text">Adresa</p>
                      <p className="text-brand-text-light">{salonInfo.address}</p>
                      <a
                        href={salonInfo.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-brand-brown hover:underline inline-flex items-center gap-1 mt-1"
                      >
                        Zobrazit na mapě <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand-brown mt-0.5" />
                    <div>
                      <p className="font-medium text-brand-text">Telefon</p>
                      <a
                        href={`tel:${salonInfo.phone}`}
                        className="text-brand-text-light hover:text-brand-brown transition-colors"
                      >
                        {salonInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-brand-brown mt-0.5" />
                    <div>
                      <p className="font-medium text-brand-text">Email</p>
                      <a
                        href={`mailto:${salonInfo.email}`}
                        className="text-brand-text-light hover:text-brand-brown transition-colors"
                      >
                        {salonInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-medium text-brand-text mb-4">Sociální sítě</h3>
                  <div className="flex gap-4">
                    <a
                      href={salonInfo.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-brand-bg-soft rounded-lg hover:bg-brand-beige-light transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-brand-brown" />
                      <span className="text-sm text-brand-text">Facebook</span>
                    </a>
                    <a
                      href={salonInfo.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-brand-bg-soft rounded-lg hover:bg-brand-beige-light transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-brand-brown" />
                      <span className="text-sm text-brand-text">Instagram</span>
                    </a>
                  </div>
                </div>

              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-semibold text-brand-text mb-6 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-brand-brown" />
                  Objednávky
                </h2>

                <div className="text-center py-8">
                  <p className="text-lg text-brand-text mb-4">
                    Služby jsou poskytovány pouze na objednávku
                  </p>
                  <p className="text-brand-text-light">
                    Kontaktujte mě telefonicky nebo e-mailem a domluvíme si termín, který vám bude vyhovovat.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="container mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video relative rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.5439765351597!2d16.577843!3d49.1747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzI5LjAiTiAxNsKwMzQnNDAuMiJF!5e0!3m2!1scs!2scz!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section className="mt-16 py-16 bg-brand-bg-soft">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-display font-bold text-brand-text mb-4">
              Doprava a parkování
            </h2>
            <div className="space-y-4 text-brand-text-light">
              <p>
                <strong className="text-brand-text">MHD:</strong> Zastávka Lány 
                (tramvaj č. 1, 6) - 2 minuty chůze od salonu
              </p>
              <p>
                <strong className="text-brand-text">Parkování:</strong> Možnost 
                parkování přímo před salonem nebo v okolních ulicích (modrá zóna)
              </p>
              <p>
                <strong className="text-brand-text">Bezbariérový přístup:</strong> 
                Salon je plně bezbariérový
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}