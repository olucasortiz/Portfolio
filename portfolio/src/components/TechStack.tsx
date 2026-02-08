import { GlassCard } from "./GlassCard";
import { cn } from "../lib/utils";

type Tech = {
  name: string;
  subtitle: string;
  iconPath: string;
  accent: "cyan" | "violet";
};

const techs: Tech[] = [
  { name: "Node.js", subtitle: "APIs e serviços", iconPath: "/tech/node.svg", accent: "cyan" },
  { name: "TypeScript", subtitle: "Tipagem e DX", iconPath: "/tech/typescript.svg", accent: "violet" },
  { name: "Prisma ORM", subtitle: "Migrations + TX", iconPath: "/tech/prisma.svg", accent: "cyan" },
  { name: "PostgreSQL", subtitle: "Relacional", iconPath: "/tech/postgresql.svg", accent: "violet" },
  { name: "Oracle DB", subtitle: "Enterprise", iconPath: "/tech/oracle.svg", accent: "cyan" },
  { name: "Mensageria", subtitle: "RabbitMQ, Kafka", iconPath: "/tech/messaging.svg", accent: "violet" },
  { name: "Cloud (AWS / Oracle)", subtitle: "Deploy e infraestrutura", iconPath: "/tech/cloud.svg", accent: "cyan" },
];

function accentClasses(accent: Tech["accent"]) {
  return accent === "cyan"
    ? "hover:ring-1 hover:ring-cyan-400/40 hover:shadow-[0_18px_60px_-30px_rgba(34,211,238,0.45)]"
    : "hover:ring-1 hover:ring-violet-400/40 hover:shadow-[0_18px_60px_-30px_rgba(139,92,246,0.45)]";
}

export function TechStack({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techs.map((t) => (
          <GlassCard
            key={t.name}
            className={cn(
              "group flex items-center gap-4 transition duration-300 hover:-translate-y-0.5",
              accentClasses(t.accent)
            )}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/70 dark:border-white/10 dark:bg-white/5 backdrop-blur-xl">
              <img
                src={t.iconPath}
                alt={t.name}
                className="h-7 w-7 opacity-95"
                loading="lazy"
              />
            </div>

            <div className="min-w-0">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">{t.subtitle}</div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
