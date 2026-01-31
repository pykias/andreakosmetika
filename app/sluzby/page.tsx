"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";

export default function ServicesPage() {
  const categories = Array.from(new Set(services.map(s => s.category)));

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
            Naše služby
          </h1>
          <p className="text-lg text-brand-text-light mb-4">
            Nabízíme kompletní škálu profesionálních kosmetických služeb.
            Každý klient je pro mě jedinečný a zaslouží si individuální přístup.
          </p>
          <p className="text-sm text-brand-text-muted">
            Délka ošetření je cca 75 minut. Čas je orientační a závisí na typu pleti a náročnosti procedury.
          </p>
        </motion.div>
      </section>

      <section className="container">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-semibold text-brand-text mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-brand-brown" />
              {category}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter(service => service.category === category)
                .map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300 flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-xl text-brand-text">
                          {service.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-grow">
                        <p className="text-brand-text-light flex-grow">
                          {service.description}
                        </p>
                        <div className="flex items-center pt-4 mt-4 border-t border-border">
                          <span className="text-sm text-brand-text-muted flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {service.duration}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </section>

      <section className="py-16 bg-brand-bg-soft mt-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-brand-text mb-4">
              Nejste si jisti výběrem?
            </h2>
            <p className="text-brand-text-light max-w-2xl mx-auto mb-8">
              Ráda vám poradím s výběrem nejvhodnější služby při osobní konzultaci.
              Kontaktujte mě a společně najdeme řešení přesně pro vás.
            </p>
            <Link href="/kontakt">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium h-12 px-8 bg-brand-brown text-white hover:bg-brand-brown-dark transition-all duration-300">
                Kontaktovat
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}