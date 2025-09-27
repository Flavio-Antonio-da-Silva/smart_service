// src/components/home/CTA.tsx
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para transformar sua presença digital?
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          Vamos juntos levar seu negócio ao próximo nível com tecnologia e
          inovação.
        </p>
        <a
          href="/contato"
          className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Fale com a gente
        </a>
      </motion.div>
    </section>
  );
};

export default CTA;
