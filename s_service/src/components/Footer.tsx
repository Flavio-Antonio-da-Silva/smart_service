// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Para seu negócio", path: "/para-seu-negocio" },
  { label: "Casos de sucesso", path: "/casos-de-sucesso" },
  { label: "Planos", path: "/planos" },
];

const socialLinks = [
  { icon: <Facebook size={20} />, href: "https://facebook.com" },
  { icon: <Instagram size={20} />, href: "https://instagram.com" },
  { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo / Sobre */}
          <div>
            <h2 className="text-2xl font-bold text-white">Smart Service</h2>
            <p className="mt-2 text-sm text-gray-400">
              Automação inteligente para empresas que querem crescer com
              tecnologia de ponta.
            </p>
          </div>

          {/* Links rápidos */}
          <nav aria-label="Links rápidos">
            <h3 className="text-lg font-semibold text-white mb-3">
              Navegação
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes sociais */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Conecte-se
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Smart Service. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
