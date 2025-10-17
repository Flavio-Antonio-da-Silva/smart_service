// src/pages/Planos.tsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"; // <- Import necessário do React Router

// -------------------------------
// Tipagens (TypeScript)
// -------------------------------
interface Plan {
  id: number;
  nome: string;
  preco: string;
  desc: string;
  features?: string[];
  destaque?: boolean;
}

// -------------------------------
// Dados (faixas e descrições fornecidas)
// -------------------------------
const planos: Plan[] = [
  {
    id: 1,
    nome: "Simples",
    preco: "R$400 - R$1.200",
    desc: "Integração básica WhatsApp → Sheets. Reduz tempo em 20%.",
    features: ["Conexão WhatsApp", "Exportação automática para Sheets", "Setup rápido"],
  },
  {
    id: 2,
    nome: "Básica",
    preco: "R$1.201 - R$2.200",
    desc: "Lógica simples + Agenda Google. +40% conversão.",
    features: ["Agendamento com Google Calendar", "Respostas automatizadas", "Regras por fluxo"],
  },
  {
    id: 3,
    nome: "Intermediária",
    preco: "R$2.201 - R$4.200",
    desc: "Memória de conversas + IA básica. Fidelização +50%.",
    destaque: true,
    features: ["Memória de contexto", "IA para respostas", "Fallback humano"],
  },
  {
    id: 4,
    nome: "Avançada",
    preco: "Custom (a partir R$5.000)",
    desc: "Sob medida com IA full. ROI mensurável.",
    features: ["Desenvolvimento sob medida", "Otimizações de ROI", "SLA e monitoramento"],
  },
];

// -------------------------------
// Componentes menores (reutilizáveis)
// -------------------------------
const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  return (
    <motion.article
      data-testid={`plan-card-${plan.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative flex flex-col items-center text-center gap-6 p-6 md:p-8 rounded-2xl shadow-md transition-transform border-2 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500
        ${plan.destaque ? "bg-white border-purple-600 scale-100 md:scale-105" : "bg-white border-transparent"}`}
    >
      <header className="w-full">
        <h3 className="text-2xl font-bold text-gray-900">{plan.nome}</h3>
        <p className="mt-2 text-lg font-semibold text-purple-600">{plan.preco}</p>
      </header>

      <p className="text-gray-600">{plan.desc}</p>

      {plan.features && (
        <ul className="w-full text-left mt-2 space-y-1">
          {plan.features.map((f, i) => (
            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
              <span className="inline-block w-5 h-5 rounded-full bg-purple-100 text-purple-600 text-xs font-semibold flex items-center justify-center">
                ✓
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="w-full mt-4">
        <Link
          to="/contato" // <- Alterado para Link do React Router
          role="button"
          aria-label={`Quero o plano ${plan.nome}`}
          data-plan-id={plan.id}
          className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-full font-semibold shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 transition-transform
            ${plan.destaque ? "bg-purple-600 text-white hover:scale-105" : "bg-gray-200 text-gray-900 hover:scale-102"}`}
        >
          {plan.destaque ? "Assinar plano" : "Quero este plano"}
        </Link>
      </div>

      {plan.destaque && (
        <span className="absolute left-4 top-4 inline-block rounded-full bg-purple-600 text-white text-xs px-2 py-1">
          Mais Popular
        </span>
      )}
    </motion.article>
  );
};

// -------------------------------
// Página Planos
// -------------------------------
const Planos: React.FC = () => {
  return (
    <main className="pt-16">
      {/* SEO Avançado */}
      <Helmet>
        <title>Planos | Smart Service</title>
        <meta
          name="description"
          content="Conheça nossos planos de automação de WhatsApp com IA e integração. Do Simples ao Avançado, escolha o melhor para o seu negócio."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Planos | Smart Service" />
        <meta
          property="og:description"
          content="Planos de automação WhatsApp: Simples, Básico, Intermediário e Avançado. Flexibilidade e escalabilidade para sua empresa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartservice.com/planos" />
        <meta property="og:image" content="https://smartservice.com/og-image-planos.png" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Planos | Smart Service" />
        <meta
          name="twitter:description"
          content="Escolha o plano ideal de automação com WhatsApp e IA. Ganhe eficiência e ROI garantido."
        />
        <meta name="twitter:image" content="https://smartservice.com/og-image-planos.png" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Planos</h1>
          <p className="text-lg md:text-xl">
            Escolha o plano que melhor se adapta ao seu negócio. Hierarquizamos valor, custos e velocidade de implementação.
          </p>
        </div>
      </section>

      {/* Informações e Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Planos e faixas de preço</h2>
              <p className="text-gray-600 mt-2">
                Valores indicativos. Planos podem ser customizados conforme necessidade.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-700">
                Precisa de algo custom?{" "}
                <Link className="text-purple-600 font-semibold" to="/contato">
                  Solicite um orçamento
                </Link>
              </p>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {planos.map((plano) => (
              <PlanCard key={plano.id} plan={plano} />
            ))}
          </div>
        </div>
      </section>

      {/* Bloco explicativo / comparativo */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-4">Como escolher o plano certo</h3>
          <p className="text-gray-700 mb-6">
            Indicamos o plano Simples para quem precisa de automações rápidas e baratas. O Intermediário costuma ser o melhor custo-benefício quando há necessidade de memória de conversas e IA básica.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="p-6 rounded-lg bg-gray-50">
              <h4 className="font-semibold">Prazo de implementação</h4>
              <p className="text-sm text-gray-700 mt-2">
                Simples: 1-3 dias | Básica: 3-7 dias | Intermediária: 2-4 semanas | Avançada: sob medida
              </p>
            </article>
            <article className="p-6 rounded-lg bg-gray-50">
              <h4 className="font-semibold">Suporte e SLA</h4>
              <p className="text-sm text-gray-700 mt-2">
                Planos podem incluir suporte com SLA definido conforme contrato.
              </p>
            </article>
            <article className="p-6 rounded-lg bg-gray-50">
              <h4 className="font-semibold">Escalabilidade</h4>
              <p className="text-sm text-gray-700 mt-2">
                Arquiteturas pensadas para crescer com seu negócio e suportar picos de uso.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Precisa de algo custom?</h2>
            <p className="mb-6 text-lg">
              Solicite um orçamento e teremos prazer em desenhar uma solução sob medida com garantias e acompanhamento.
            </p>
            <Link
              to="/contato" // <- Alterado para Link do React Router
              className="inline-block px-8 py-3 rounded-full bg-white text-purple-600 font-semibold shadow hover:brightness-95 transition"
            >
              Solicitar orçamento
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Planos;
