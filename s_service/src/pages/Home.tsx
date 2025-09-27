// src/pages/Home.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";

const Home: React.FC = () => {
  return (
    <main className="pt-16">
      {/* SEO Avançado */}
      <Helmet>
        <title>Smart Service | Automação Inteligente para Empresas</title>
        <meta
          name="description"
          content="Transforme sua empresa com automações inteligentes e agentes de IA. Aumente eficiência, reduza custos e conquiste mais clientes com a Smart Service."
        />
        <link rel="canonical" href="https://www.smartservice.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Smart Service | Automação Inteligente para Empresas" />
        <meta
          property="og:description"
          content="Descubra como a Smart Service ajuda empresas a alcançar mais resultados com automações inteligentes e agentes de IA."
        />
        <meta property="og:url" content="https://www.smartservice.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.smartservice.com/images/og-home.jpg"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smart Service | Automação Inteligente para Empresas" />
        <meta
          name="twitter:description"
          content="Automatize processos, economize tempo e leve sua empresa ao próximo nível com a Smart Service."
        />
        <meta
          name="twitter:image"
          content="https://www.smartservice.com/images/og-home.jpg"
        />
      </Helmet>

      {/* Conteúdo da Home */}
      <Hero />
      <Features />
      <CTA />
    </main>
  );
};

export default Home;
