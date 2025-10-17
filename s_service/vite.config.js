import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/", // garante que os assets sejam buscados na raiz do domínio
  build: {
    outDir: "dist" // garante que o output vá exatamente para dist/
  }
});
