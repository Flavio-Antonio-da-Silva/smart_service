// src/components/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, url, image }) => {
  // 🔹 Imagem padrão para os cards sociais
  const defaultImage = image || "https://smart-service-gamma.vercel.app/fundo-pj-3.png";
  const siteName = "Smart Service - Automação Inteligente";

  return (
    <Helmet>
      {/* Meta padrão */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />

      {/* Fallback SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Smart Service" />
    </Helmet>
  );
};

export default SEO;
