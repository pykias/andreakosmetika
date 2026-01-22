"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Info } from "lucide-react";
import BookingCTA from "@/components/BookingCTA";

export default function PriceListPage() {
  const categories = [...new Set(services.map(s => s.category))];

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
            Ceník služeb
          </h1>
          <p className="text-lg text-brand-text-light mb-8">
            Transparentní ceny bez skrytých poplatků. Konečná cena může být upřesněna 
            při konzultaci podle náročnosti a délky vlasů.
          </p>
        </motion.div>
      </section>

      <section className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 flex items-start gap-3"
          >
            <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-800">
              Ceny jsou orientační a mohou se lišit podle délky a hustoty vlasů. 
              Přesnou cenu vám sdělíme při konzultaci před začátkem služby.
            </p>
          </motion.div>

          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl font-display font-semibold text-brand-text mb-6 pb-2 border-b-2 border-brand-beige">
                {category}
              </h2>
              
              <div className="space-y-4">
                {services
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-4 bg-white rounded-xl hover:bg-brand-bg-soft transition-colors duration-200"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-brand-text mb-1">
                          {service.name}
                        </h3>
                        <p className="text-sm text-brand-text-muted">
                          {service.duration}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-brand-brown">
                          {service.price}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gradient-to-r from-brand-beige-light to-brand-bg-soft rounded-2xl text-center"
          >
            <h3 className="text-2xl font-display font-semibold text-brand-text mb-4">
              Věrnostní program
            </h3>
            <p className="text-brand-text-light mb-6">
              Pro naše stálé klienty nabízíme speciální slevy a výhody. 
              Zeptejte se na detaily při vaší návštěvě.
            </p>
            <BookingCTA className="btn-primary" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}