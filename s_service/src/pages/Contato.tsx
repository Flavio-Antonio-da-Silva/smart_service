// src/pages/Contato.tsx
import React, { useState } from "react";

const Contato: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mkgqjdkn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contato</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Fale com nossa equipe e descubra como podemos ajudar sua empresa com automações inteligentes.
        </p>
      </section>

      {/* Formulário moderno */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-xl mx-auto px-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white shadow-lg rounded-2xl p-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-transform ${
                status === "loading" ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {status === "loading" ? "Enviando..." : "Enviar mensagem"}
            </button>

            {status === "success" && (
              <p className="text-green-600 mt-2 font-medium">
                Mensagem enviada com sucesso!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-2 font-medium">
                Ocorreu um erro. Tente novamente.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contato;
