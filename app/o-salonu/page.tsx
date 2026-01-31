"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Users, Sparkles, Award } from "lucide-react";
import Link from "next/link";

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
            O mně
          </h1>
          <p className="text-lg text-brand-text-light">
            Více než 21 let se věnuji kosmetice a péči o pleť s vášní a profesionalitou.
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
              Můj příběh
            </h2>
            <div className="space-y-4 text-brand-text-light">
              <p>
                Kosmetice se věnuji více než 21 let a za tu dobu jsem měla možnost
                pomoci stovkám klientů na cestě k jejich lepšímu pocitu z vlastní pleti.
              </p>
              <p>
                Každá tvář je jedinečná, a proto ke každé přistupuji individuálně –
                s respektem k jejím potřebám i přáním. Průběžně se vzdělávám
                v nejnovějších metodách a technologiích, abych vám mohla nabídnout
                péči, která skutečně funguje.
              </p>
              <p>
                V mém salonu najdete klidné prostředí, kde se můžete uvolnit
                a svěřit do rukou někoho, komu na výsledku záleží stejně jako vám.
                Těším se na naše setkání.
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
              src="/salon_brno.jpg"
              alt="Kosmetický salon Andrea Bohunice"
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
            Moje hodnoty
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Láska k řemeslu",
                description: "Kosmetika není jen má práce, je to má vášeň."
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
            Andrea Breznai
          </h2>
          <p className="text-brand-brown font-medium mb-6">
            Kosmetička s více než 21 lety zkušeností
          </p>
          <div className="max-w-2xl mx-auto text-brand-text-light space-y-4">
            <p>
              Specializuji se na komplexní péči o pleť, permanentní make-up,
              speciální ošetření i řešení problematické pleti. Každý klient
              si zaslouží individuální přístup a péči šitou na míru jejím potřebám.
            </p>
            <p>
              Pravidelně se vzdělávám v nejnovějších metodách a technologiích,
              abych vám mohla nabídnout ošetření na nejvyšší úrovni. Vaše
              spokojenost a viditelné výsledky jsou pro mě tou nejlepší odměnou.
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
              Těším se na vás
            </h2>
            <p className="text-brand-text-light max-w-2xl mx-auto mb-8">
              Přijďte ke mně a zažijte rozdíl. Těším se, až vám budu moci
              ukázat, co pro vás mohu udělat.
            </p>
            <Link href="/kontakt">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium h-12 px-8 bg-brand-brown text-white hover:bg-brand-brown-dark transition-all duration-300">
                Kontaktovat mě
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}