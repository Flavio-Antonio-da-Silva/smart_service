// src/pages/Sobre.tsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Import amigável ao Vite/TS — não usa caminho absoluto
const historiaImg = new URL("../assets/images/sobre/historia.jpg", import.meta.url).href;

const Sobre: React.FC = () => {
  return (
    <main className="pt-16">
      {/* SEO Avançado */}
      <Helmet>
        <title>Sobre Nós | Smart Service</title>
        <meta
          name="description"
          content="Conheça a Smart Service: missão, visão e valores que guiam nosso trabalho em automação inteligente e IA aplicada a negócios."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Sobre Nós | Smart Service" />
        <meta
          property="og:description"
          content="Nossa missão é transformar a forma como empresas se comunicam através de automações inteligentes e soluções de IA."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartservice.com/sobre" />
        <meta property="og:image" content="https://smartservice.com/og-image-sobre.png" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre Nós | Smart Service" />
        <meta
          name="twitter:description"
          content="Saiba mais sobre a história da Smart Service e como ajudamos empresas a escalarem com automação e inteligência artificial."
        />
        <meta name="twitter:image" content="https://smartservice.com/og-image-sobre.png" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Sobre Nós
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl"
          >
            Nossa jornada, valores e propósito em cada automação entregue.
          </motion.p>
        </div>
      </section>

      {/* História */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={historiaImg}
              alt="Nossa equipe trabalhando em soluções de automação"
              className="rounded-2xl shadow-md"
              loading="lazy"
            />
          </motion.div>

          <motion.article
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
            <p className="text-gray-700 leading-relaxed">
              A <strong>Smart Service</strong> nasceu com a missão de simplificar processos e
              acelerar resultados por meio da tecnologia. Ao longo dos anos, ajudamos pequenas,
              médias e grandes empresas a transformar sua comunicação com clientes através de
              automações inteligentes e soluções sob medida.
            </p>
          </motion.article>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Missão, Visão e Valores</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Missão",
                text: "Oferecer soluções de automação que aumentem a eficiência e a competitividade das empresas.",
              },
              {
                title: "Visão",
                text: "Ser referência em automação inteligente e IA aplicada a negócios no Brasil e no mundo.",
              },
              {
                title: "Valores",
                text: "Ética, inovação contínua, foco no cliente e compromisso com resultados de impacto.",
              },
            ].map((item, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos construir o futuro juntos?</h2>
            <p className="mb-6 text-lg">
              Entre em contato e descubra como podemos potencializar seu negócio com automação e IA.
            </p>
            <a
              href="/contato"
              className="inline-block px-8 py-3 rounded-full bg-white text-purple-600 font-semibold shadow hover:brightness-95 transition"
            >
              Fale Conosco
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
