export type Lang = "pt" | "en";

export const copy = {
  pt: {
    nav: { projects: "Projetos", stack: "Especializações", about: "Sobre", contact: "Contato" },
    hero: {
      title: "Backend-focused, com UI clara e performance.",
      subtitle:
        "Portfólio profissional para apresentar projetos reais: consistência, validação, transações e arquitetura limpa.",
      ctaPrimary: "Ver projetos",
      ctaSecondary: "GitHub",
    },
    stack: { title: "Especializações", subtitle: "Core Stack que eu uso no dia a dia." },
  },
  en: {
    nav: { projects: "Projects", stack: "Specializations", about: "About", contact: "Contact" },
    hero: {
      title: "Backend-focused, with clean UI and performance.",
      subtitle:
        "Professional portfolio to showcase real projects: consistency, validation, transactions, and clean architecture.",
      ctaPrimary: "View projects",
      ctaSecondary: "GitHub",
    },
    stack: { title: "Core Stack", subtitle: "Core technologies I use day-to-day." },
  },
} as const;
