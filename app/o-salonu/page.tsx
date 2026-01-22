"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Users, Sparkles, Award } from "lucide-react";
import BookingCTA from "@/components/BookingCTA";

export default function AboutPage() {
  return (
    <div className="py-12">
      <section className="container mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-text mb-6">
            O našem salonu
          </h1>
          <p className="text-lg text-brand-text-light">
            Více než 15 let vytváříme účesy, které dodávají sebevědomí 
            a podtrhují jedinečnost každého klienta.
          </p>
        </motion.div>
      </section>

      <section className="container mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-semibold text-brand-text mb-6">
              Náš příběh
            </h2>
            <div className="space-y-4 text-brand-text-light">
              <p>
                Salon Andrea Bohunice vznikl v roce 2009 s vizí vytvořit místo, 
                kde se každý klient bude cítit výjimečně. Od prvního dne klademe 
                důraz na individuální přístup a nejvyšší kvalitu služeb.
              </p>
              <p>
                Za dobu naší existence jsme se stali nedílnou součástí komunity 
                v Bohunicích. Tisíce spokojených klientů jsou důkazem, že naše 
                filozofie funguje - kombinace profesionality, kreativity a 
                lidského přístupu vytváří jedinečnou atmosféru.
              </p>
              <p>
                Neustále se vzděláváme a sledujeme nejnovější trendy v kadeřnictví, 
                abychom vám mohli nabídnout to nejlepší. Používáme pouze kvalitní 
                produkty šetrné k vlasům i životnímu prostředí.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
              alt="Interiér salonu"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-brand-bg-soft">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-semibold text-brand-text text-center mb-12"
          >
            Naše hodnoty
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Láska k řemeslu",
                description: "Kadeřnictví není jen naše práce, je to naše vášeň."
              },
              {
                icon: Users,
                title: "Individuální přístup",
                description: "Každý klient je jedinečný a zaslouží si osobní péči."
              },
              {
                icon: Sparkles,
                title: "Kvalita",
                description: "Používáme pouze prověřené a kvalitní produkty."
              },
              {
                icon: Award,
                title: "Profesionalita",
                description: "Neustále se vzděláváme a zdokonalujeme."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-brand-brown" />
                </div>
                <h3 className="font-semibold text-brand-text mb-2">{value.title}</h3>
                <p className="text-sm text-brand-text-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-beige via-brand-beige-light to-brand-bg-soft rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-display font-semibold text-brand-text mb-4">
            Andrea Nováková
          </h2>
          <p className="text-brand-brown font-medium mb-6">
            Majitelka salonu a hlavní kadeřnice
          </p>
          <div className="max-w-2xl mx-auto text-brand-text-light space-y-4">
            <p>
              S více než 20 lety zkušeností v oboru je Andrea srdcem našeho salonu. 
              Její vášeň pro kadeřnictví a neustálá touha po zdokonalování se 
              přenáší na celý tým.
            </p>
            <p>
              Specializuje se na složité barvicí techniky, svatební účesy a 
              poradenství v péči o problematické vlasy. Je držitelkou mnoha 
              certifikátů od předních světových značek.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-16 bg-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-brand-text mb-4">
              Staňte se součástí naší rodiny
            </h2>
            <p className="text-brand-text-light max-w-2xl mx-auto mb-8">
              Přijďte k nám a zažijte rozdíl. Těšíme se, až vám budeme moci 
              ukázat, co pro vás můžeme udělat.
            </p>
            <BookingCTA size="lg" className="btn-primary" text="Rezervovat první návštěvu" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}