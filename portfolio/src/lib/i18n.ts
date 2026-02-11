export type Lang = "pt" | "en";

export const copy = {
  pt: {
    nav: { projects: "Projetos", stack: "Especializações", about: "Sobre", contact: "Contato" },
    hero: {
      title: "Construindo soluções com foco em backend, consistência e clareza.",
      subtitle:
        "Projetos reais de backend, com foco em consistência e regras de negócio",
      ctaPrimary: "Ver projetos",
      ctaSecondary: "GitHub",
    },
    stack: { title: "Especializações", subtitle: "Core Stack que eu uso no dia a dia." },
  },
  en: {
    nav: { projects: "Projects", stack: "Specializations", about: "About", contact: "Contact" },
    hero: {
      title: "Backend-driven development with a focus on clarity and consistency",
      subtitle:
        "Real backend projects focused on business rules and data consistency",
      ctaPrimary: "View projects",
      ctaSecondary: "GitHub",
    },
    stack: { title: "Core Stack", subtitle: "Core technologies I use day-to-day." },
  },
} as const;
