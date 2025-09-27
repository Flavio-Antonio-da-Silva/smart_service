// src/components/home/Features.tsx
import { motion } from "framer-motion";
import { Lightbulb, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
    title: "Automação Inteligente",
    description:
      "Simplifique processos e reduza custos com fluxos de trabalho automatizados sob medida.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-600" />,
    title: "Escalabilidade",
    description:
      "Cresça de forma sustentável sem comprometer a qualidade do atendimento ao cliente.",
  },
  {
    icon: <Users className="w-10 h-10 text-pink-600" />,
    title: "Experiência Humana",
    description:
      "Tecnologia que se adapta às pessoas, oferecendo interações mais naturais e eficientes.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Como podemos ajudar seu negócio
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
