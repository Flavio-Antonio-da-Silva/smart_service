// src/pages/CasosDeSucesso.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface Case {
  id: number;
  empresa: string;
  setor: string;
  resultado: string;
  descricao: string;
}

const cases: Case[] = [
  { id: 1, empresa: "Clínica Vida", setor: "Saúde 🏥", resultado: "+55% de pacientes atendidos", descricao: "Integração inteligente entre WhatsApp e Google Agenda, garantindo agendamentos corretos e satisfação máxima dos pacientes." },
  { id: 2, empresa: "Oficina Rápida", setor: "Serviços automotivos 🔧", resultado: "-30% no tempo de orçamentos", descricao: "IA automatiza orçamentos e libera a equipe para casos complexos, aumentando eficiência e produtividade." },
  { id: 3, empresa: "Agência Criativa", setor: "Marketing & Vendas 📈", resultado: "+65% de leads convertidos", descricao: "Funil de vendas automatizado com IA, nutrindo leads e agilizando reuniões comerciais." },
  { id: 4, empresa: "Consultório Bem-Estar", setor: "Saúde 🧘‍♂️", resultado: "+40% de retenção de clientes", descricao: "Mensagens automáticas lembram consultas e acompanham evolução, fidelizando pacientes." },
  { id: 5, empresa: "Loja Online XPTO", setor: "E-commerce 🛒", resultado: "+25% de conversão em vendas", descricao: "Automação de carrinho abandonado e follow-ups personalizados via WhatsApp aumentam vendas recorrentes." },
  { id: 6, empresa: "Escritório Jurídico Alfa", setor: "Serviços Jurídicos ⚖️", resultado: "-50% no tempo de resposta", descricao: "IA organiza documentos e respostas padronizadas, acelerando o atendimento a clientes." },
  { id: 7, empresa: "Academia FitLife", setor: "Fitness 🏋️‍♂️", resultado: "+30% de engajamento", descricao: "Notificações automáticas e agendamento de treinos otimizados aumentam frequência de alunos." },
  { id: 8, empresa: "Corretora Prime", setor: "Financeiro 💰", resultado: "+15% de retenção de clientes", descricao: "Lembretes de renovação e sugestões personalizadas com IA mantêm clientes fidelizados." },
  { id: 9, empresa: "Café & Cia", setor: "Alimentação ☕", resultado: "+20% de pedidos recorrentes", descricao: "Pedidos via WhatsApp com confirmação automática, melhorando experiência do cliente." },
  { id: 10, empresa: "Startup TechX", setor: "Tecnologia 💻", resultado: "+50% de eficiência interna", descricao: "IA organiza fluxos internos e automatiza respostas, liberando equipe para tarefas estratégicas." },
];

const CaseCard: React.FC<{ data: Case }> = React.memo(({ data }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-white via-purple-50 to-white shadow-lg rounded-3xl p-6 w-[280px] md:w-[340px] flex-shrink-0 overflow-hidden"
  >
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 break-words">
      {data.empresa}
    </h3>
    <p className="text-sm text-purple-600 mt-1">{data.setor}</p>
    <p className="text-gray-700 mt-3 text-sm md:text-base break-words">
      {data.descricao}
    </p>
    <p className="font-extrabold text-green-600 mt-4 break-words">
      {data.resultado}
    </p>
  </motion.div>
));

const CasosDeSucesso: React.FC = () => {
  return (
    <main className="pt-16">
      {/* SEO Avançado */}
      <Helmet>
        <title>Para você  | Smart Service</title>
        <meta
          name="description"
          content="Veja como empresas de diversos setores aumentaram seus resultados com automações inteligentes e agentes de IA. Casos reais de sucesso!"
        />
        <link rel="canonical" href="https://www.smartservice.com/casos-de-sucesso" />

        {/* Open Graph */}
        <meta property="og:title" content="Casos de Sucesso | Smart Service" />
        <meta
          property="og:description"
          content="Transformação digital com IA: descubra os resultados impressionantes de empresas que aplicaram automações inteligentes."
        />
        <meta property="og:url" content="https://www.smartservice.com/casos-de-sucesso" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.smartservice.com/images/og-casos-de-sucesso.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Casos de Sucesso | Smart Service" />
        <meta
          name="twitter:description"
          content="Empresas que aumentaram eficiência, reduziram custos e cresceram com automações inteligentes. Confira!"
        />
        <meta name="twitter:image" content="https://www.smartservice.com/images/og-casos-de-sucesso.jpg" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Seus clientes assistidos 24h!</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Descubra como empresas transformam seus resultados com automações inteligentes e agentes de IA.
        </p>
      </section>

      {/* Slider Responsivo */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="max-w-[95vw] mx-auto">
          {/* Desktop: auto scroll infinito */}
          <motion.div
            className="hidden md:flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          >
            {[...cases, ...cases].map((c, i) => (
              <CaseCard key={`${c.id}-${i}`} data={c} />
            ))}
          </motion.div>

          {/* Mobile: scroll nativo com snap */}
          <div className="flex md:hidden gap-6 overflow-x-auto snap-x  px-4 scrollbar-hide">
            {cases.map((c) => (
              <div key={c.id} className="snap-start shrink-0 w-[80%] sm:w-[70%]">
                <CaseCard data={c} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sua empresa pode ser o próximo caso de sucesso
          </h2>
          <p className="mb-8 text-lg md:text-xl">
            Aplicando automações sob medida, sua empresa também pode alcançar resultados expressivos e transformar sua operação.
          </p>
          <Link
            to="/planos"
            className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Conheça nossos planos
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CasosDeSucesso;
