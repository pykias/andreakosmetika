"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FlowerLotus, HandHeart, SealCheck, Star } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";
import { services, reviews } from "@/lib/data";

export default function HomePage() {
  const featuredServices = services.slice(0, 3);
  const featuredReviews = reviews.slice(0, 3);

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-brand-bg via-white to-brand-bg-soft">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920')] bg-cover bg-center opacity-10" />
        
        <div className="container relative z-10 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-display font-bold text-brand-text mb-6"
          >
            Kosmetický salon Andrea
            <span className="block text-2xl md:text-3xl font-normal text-brand-brown mt-2">
              Bohunice
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-text-light max-w-2xl mx-auto mb-8"
          >
            Profesionální kosmetické služby s individuálním přístupem. 
            Pečujeme o vaši pleť, aby zářila zdravím a krásou.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/sluzby">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium h-12 px-8 bg-brand-brown text-white hover:bg-brand-brown-dark transition-all duration-300">
                Naše služby
              </button>
            </Link>
            <Link href="/kontakt">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium h-12 px-8 bg-white border-2 border-brand-brown text-brand-brown hover:bg-brand-beige-light transition-all duration-300">
                Kontakt
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: FlowerLotus, title: "21 let zkušeností", desc: "Profesionální péče" },
              { icon: HandHeart, title: "Individuální přístup", desc: "Každý klient je jedinečný" },
              { icon: SealCheck, title: "Ověřená kvalita", desc: "Spokojení zákazníci" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mb-4">
                  <item.icon size={32} weight="duotone" className="text-brand-brown" />
                </div>
                <h3 className="font-semibold text-brand-text mb-2">{item.title}</h3>
                <p className="text-sm text-brand-text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-bg-soft">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-text mb-4">
              Naše nejoblíbenější služby
            </h2>
            <p className="text-brand-text-light max-w-2xl mx-auto">
              Nabízíme širokou škálu profesionálních kosmetických služeb
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-brand-text mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-brand-text-muted mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center">
                      <span className="text-sm text-brand-text-muted">
                        {service.duration}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/sluzby">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium h-10 px-4 py-2 bg-white border border-brand-brown text-brand-brown hover:bg-brand-beige-light transition-all duration-300">
                Zobrazit všechny služby
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-text mb-4">
              Co říkají naši klienti
            </h2>
            <p className="text-brand-text-light max-w-2xl mx-auto">
              Vaše spokojenost je naší prioritou
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          weight="fill"
                          className="text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-brand-text-light mb-4 italic">
                      "{review.text}"
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-brand-text">
                        {review.name}
                      </span>
                      <span className="text-sm text-brand-text-muted">
                        {new Date(review.date).toLocaleDateString("cs-CZ")}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-brand-beige via-brand-beige-light to-brand-bg-soft">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-text mb-6">
              Připraveni na změnu?
            </h2>
            <p className="text-lg text-brand-text-light max-w-2xl mx-auto mb-8">
              Kontaktujte mě a dopřejte své pleti péči, kterou si zaslouží
            </p>
            <Link href="/kontakt">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium h-12 px-8 bg-brand-brown text-white hover:bg-brand-brown-dark transition-all duration-300">
                Kontaktovat
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}