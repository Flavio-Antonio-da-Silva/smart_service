// src/pages/ParaSeuNegocio.tsx
import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Building2, Car, Briefcase, Users, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom"; // <- Import necessário do React Router


// --- Interfaces TypeScript ---
interface Nicho {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Metrics {
  value: string;
  label: string;
}

// --- Dados ---
const nichos: Nicho[] = [
  {
    icon: <Stethoscope className="w-10 h-10 text-purple-600" />,
    title: "Consultórios & Clínicas",
    description:
      "Agendamento inteligente via WhatsApp integrado à sua agenda Google. Pacientes nunca mais ficarão sem resposta.",
  },
  {
    icon: <Car className="w-10 h-10 text-purple-600" />,
    title: "Oficinas & Serviços",
    description:
      "Agilidade no primeiro contato com clientes, geração automática de orçamentos e acompanhamento de serviços.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-purple-600" />,
    title: "Escritórios",
    description:
      "Atendimento humanizado para novos clientes, respostas a dúvidas frequentes e coleta de documentos automatizada.",
  },
  {
    icon: <Building2 className="w-10 h-10 text-purple-600" />,
    title: "Agências",
    description:
      "Automação do funil de vendas com IA para captação de leads, nutrição de contatos e marcação de reuniões.",
  },
  {
    icon: <Users className="w-10 h-10 text-purple-600" />,
    title: "Corretoras",
    description:
      "Agentes de IA lembram clientes de renovações, oferecem novos produtos e mantêm histórico de conversas para personalização.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-purple-600" />,
    title: "Outros Negócios",
    description:
      "Cada automação é feita sob medida para o seu segmento, aumentando produtividade e reduzindo custos operacionais.",
  },
];

const metrics: Metrics[] = [
  { value: "-35%", label: "Redução de custos operacionais" },
  { value: "+60%", label: "Aumento na conversão de leads" },
  { value: "24/7", label: "Atendimento contínuo, sem perda de clientes" },
];

// --- Componentes ---
const CardNicho: React.FC<Nicho> = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg p-8 transition-all"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const MetricCard: React.FC<Metrics> = ({ value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h3 className="text-4xl font-extrabold mb-2">{value}</h3>
    <p className="text-gray-300">{label}</p>
  </motion.div>
);

// --- Página ---
const ParaSeuNegocio: React.FC = () => {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Para o Seu Negócio
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Soluções de automação inteligentes, feitas para conectar pessoas a
          pessoas de forma rápida, clara e humanizada.
        </p>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-gray-50 text-center px-6">
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700">
          Seu negócio é feito por pessoas para pessoas. Uma comunicação rápida,
          clara e humanizada é fundamental para captar novos clientes e
          fidelizar antigos.
        </p>
      </section>

      {/* Grid de Nichos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3">
          {nichos.map((nicho, idx) => (
            <CardNicho key={idx} {...nicho} />
          ))}
        </div>
      </section>

      {/* Sessão de métricas */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {metrics.map((metric, idx) => (
            <MetricCard key={idx} {...metric} />
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Descubra como a automação pode transformar o seu negócio
          </h2>
          <p className="mb-8 text-lg md:text-xl">
            Aumente sua eficiência, fidelize clientes e esteja disponível 24h
            por dia.
          </p>
          <a
            href="/planos"
            className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Veja os planos
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default ParaSeuNegocio;
