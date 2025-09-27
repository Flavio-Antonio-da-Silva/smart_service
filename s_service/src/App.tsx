// src/App.tsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy loading das páginas
const Home = lazy(() => import("./pages/Home"));
const ParaSeuNegocio = lazy(() => import("./pages/ParaSeuNegocio"));
const CasosDeSucesso = lazy(() => import("./pages/CasosDeSucesso"));
const Planos = lazy(() => import("./pages/Planos"));
const Contato = lazy(() => import("./pages/Contato"));
const Sobre = lazy(() => import("./pages/Sobre")); // NOVO

// Loader de fallback enquanto a page carrega
const PageLoader = () => (
  <div className="flex h-screen items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-16">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/para-seu-negocio" element={<ParaSeuNegocio />} />
              <Route path="/casos-de-sucesso" element={<CasosDeSucesso />} />
              <Route path="/planos" element={<Planos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/sobre" element={<Sobre />} /> {/* NOVA ROTA */}
              {/* rota fallback (404) */}
              <Route
                path="*"
                element={
                  <div className="flex flex-col items-center justify-center h-[70vh] text-center px-6">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                      404
                    </h1>
                    <p className="text-gray-600 mb-6">
                      A página que você procura não foi encontrada.
                    </p>
                    <a
                      href="/"
                      className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:scale-105 transition-transform"
                    >
                      Voltar para Home
                    </a>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
