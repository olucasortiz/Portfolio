import { useMemo, useState } from "react";
import { Header } from "./components/Header";
import { GlassCard } from "./components/GlassCard";
import { TechStack } from "./components/TechStack";
import type { Lang } from "./lib/i18n";
import { copy } from "./lib/i18n";
import { ProjectCard } from "./components/ProjectCard";

export default function App() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = useMemo(() => copy[lang], [lang]);

  return (
    <main id="top" className="min-h-screen bg-tech text-slate-900 dark:text-slate-100">
      <Header lang={lang} setLang={setLang} />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8 md:pt-14">
        <div className="grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/50 px-3 py-1 text-xs text-slate-700 dark:bg-white/5 dark:text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              {lang === "pt"
                ? "Pronto para vagas nacionais e internacionais"
                : "Ready for local & international roles"}
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {t.hero.title}
            </h1>

            <p className="mt-4 text-slate-600 dark:text-slate-300 md:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_-18px_rgba(99,102,241,0.7)] transition hover:opacity-95"
              >
                {t.hero.ctaPrimary}
              </a>

              <a
                href="https://github.com/olucasortiz"
                target="_blank"
                rel="noreferrer"
                className="glass rounded-xl px-4 py-2 text-sm font-semibold hover:ring-1 hover:ring-cyan-400/40 transition"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* FEATURED */}
          <div className="md:col-span-5">
            <GlassCard className="relative overflow-hidden">
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/15 blur-2xl" />
              <div className="absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-violet-500/15 blur-2xl" />

              <div className="relative">
                <div className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  {lang === "pt" ? "Projeto em destaque" : "Featured project"}
                </div>

                <div className="mt-1 text-lg font-semibold">GeoDoc</div>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {lang === "pt"
                    ? "Plataforma para gestão de ativos geolocalizados com processamento automático de documentos e arquitetura em microserviços."
                    : "Platform for managing geolocated assets with automated document processing and microservices architecture."}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Node.js", "TypeScript", "Fastify", "PostgreSQL", "Prisma", "Zod", "Docker"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/50 px-2.5 py-1 text-xs text-slate-700 dark:bg-white/5 dark:text-slate-200"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <TechStack title={t.stack.title} subtitle={t.stack.subtitle} />


      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {lang === "pt" ? "Projetos" : "Projects"}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ProjectCard
            title="GeoDoc"
            description={
              lang === "pt"
                ? "Plataforma full-stack para gestão de ativos geolocalizados e documentos inteligentes, com arquitetura em microserviços e processamento automático de texto."
                : "Full-stack platform for managing geolocated assets and intelligent documents, using microservices architecture and automated text processing."
            }
            tags={[
              "React",
              "TypeScript",
              "Fastify",
              "FastAPI",
              "PostgreSQL",
              "Supabase",
              "Docker",
              "Leaflet",
            ]}
            actions={[
              {
                label: "Visualizar",
                href: "https://geodoc-frontend.onrender.com",
                variant: "primary",
              },
              {
                label: "Backend",
                href: "https://github.com/olucasortiz/geodoc-backend",
                variant: "glass",
                icon: "github",
              },
              {
                label: "Frontend",
                href: "https://github.com/olucasortiz/geodoc-frontend",
                variant: "glass",
                icon: "github",
              },
            ]}
          />
          <ProjectCard
            title="Resource Booking API"
            description={
              lang === "pt"
                ? "API de agendamento de recursos com validação de conflitos e consistência sob concorrência (transações). Frontend é apenas uma UI simples para consumir a API."
                : "Resource booking API with conflict validation and strong data consistency under concurrency (transactions). Frontend is a simple UI to consume the API."
            }
            tags={["Node.js", "TypeScript", "Fastify", "PostgreSQL", "Prisma", "Zod", "Docker", "SQL"]}
            actions={[
              { label: "Visualizar", href: "https://resource-booking-web.vercel.app/", variant: "primary" },
              { label: "Backend (principal)", href: "https://github.com/olucasortiz/resource-booking-api", variant: "glass", icon: "github" },
              { label: "Frontend (demo)", href: "https://github.com/olucasortiz/resource-booking-web", variant: "glass", icon: "github" },
            ]}
          />

          
        </div>



      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 pb-10">
        <GlassCard>
          <h2 className="text-xl font-semibold">
            {lang === "pt" ? "Sobre" : "About"}
          </h2>

          {lang === "pt" ? (
            <div className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p>
                Sou desenvolvedor com foco principal em backend, atuando na construção de APIs e serviços com regras de negócio bem definidas, validação consistente e forte preocupação com integridade de dados e organização da aplicação.
              </p>

              <p>
                Minha stack principal é Node.js e TypeScript, utilizando PostgreSQL como banco relacional. Tenho experiência prática com modelagem de dados, construção de APIs REST, controle de concorrência e organização em camadas, sempre voltado a cenários reais de produção.
              </p>

              <p>
                Também possuo experiência com integração entre serviços, incluindo comunicação entre aplicações e processamento assíncrono, aplicando conceitos de desacoplamento e arquitetura baseada em serviços.
              </p>
              
              
              <p>No frontend, utilizo React para construção de interfaces que consomem APIs, incluindo aplicações com visualização de dados e integração com mapas interativos, permitindo uma visão completa do fluxo da aplicação.</p>

              <p>Busco sempre desenvolver soluções escaláveis, bem estruturadas e de fácil manutenção, com código limpo, boas práticas e alinhamento com necessidades de produto e evolução contínua do sistema.</p>
            </div>


          ) : (
            <div className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p>
                I am a backend developer, primarily focused on building APIs and services with well-defined business rules, consistent validation, and a strong emphasis on data integrity and application organization.
              </p>

              <p>
                My main stack is Node.js and TypeScript, using PostgreSQL as a relational database. I have practical experience with data modeling, building REST APIs, concurrency control, and layered organization, always geared towards real-world production scenarios.
              </p>

              <p>
                I also have experience with service integration, including application communication and asynchronous processing, applying concepts of decoupling and service-based architecture.

              </p>

              <p>On the frontend, I use React to build interfaces that consume APIs, including applications with data visualization and integration with interactive maps, allowing a complete view of the application flow.</p>

              <p>I always strive to develop scalable, well-structured, and easily maintainable solutions, with clean code, best practices, and alignment with product needs and continuous system evolution.</p>
            </div>
          )}
        </GlassCard>
      </section>

        {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-16">
        <GlassCard className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-semibold">{lang === "pt" ? "Contato" : "Contact"}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">
              {lang === "pt" ? "Email • LinkedIn • CV" : "Email • LinkedIn • Resume"}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              className="glass rounded-xl px-4 py-2 text-sm font-semibold hover:ring-1 hover:ring-cyan-400/40 transition"
              href="mailto:lucassas@outlook.com"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/lucas-sas-ortiz-campos-44778324a/"
              target="_blank"
              rel="noreferrer"
              className="glass flex h-11 w-11 items-center justify-center rounded-xl hover:ring-1 hover:ring-violet-400/40 transition"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="#0A66C2"
                  d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.003V9h3.112v1.561h.045c.434-.82 1.494-1.685 3.073-1.685 3.287 0 3.893 2.164 3.893 4.977v6.599zM5.337 7.433a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zM6.91 20.452H3.764V9H6.91v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.225 0z"
                />
              </svg>
            </a>

           <a
            className="glass rounded-xl px-4 py-2 text-sm font-semibold hover:ring-1 hover:ring-cyan-400/40 transition"
            href="/cv-lucas-ortiz.pdf"
            target="_blank"
            rel="noreferrer"
          >
            CV
          </a>
          </div>
        </GlassCard>
      </section>

      <footer className="pb-10 text-center text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Lucas Ortiz
      </footer>
    </main>
  );
}
