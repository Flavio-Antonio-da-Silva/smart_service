// src/components/home/Hero.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // <- Import necessário do React Router

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white min-h-screen flex items-center justify-center">
      <div className="text-center px-6 md:px-12 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          Sua Presença Digital ao Próximo Nível
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Descubra como a automação inteligente pode transformar a captação de
          leads, o atendimento ao cliente e o crescimento do seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            to="/planos"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Conheça nossos planos
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
