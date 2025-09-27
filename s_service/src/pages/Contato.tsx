// src/pages/Contato.tsx
import React from "react";

const Contato: React.FC = () => {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contato</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Fale com nossa equipe e descubra como podemos ajudar sua empresa com automações inteligentes.
        </p>
      </section>

      {/* Formulário simples */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-xl mx-auto px-6">
          <form className="space-y-6 bg-white shadow-lg rounded-2xl p-8">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              placeholder="Sua mensagem"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-transform"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contato;
