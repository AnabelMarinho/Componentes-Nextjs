import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        preto: "var(--preto)",
        branco: "var(--branco)",
        laranja: "var(--laranja)",
        cinza: "var(--cinza)",
        vermelho: "var(--vermelho)",
        rosa: "var(--rosa)",
        amarelo: "var(--amarelo)",
        verde: "var(--verde)",
        azul: "var(--azul)",
        roxo: "var(--roxo)",
      },
    },
  },
  plugins: [],
} satisfies Config;
