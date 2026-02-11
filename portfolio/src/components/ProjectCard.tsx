import { GlassCard } from "./GlassCard";

type Action = {
  label: string;
  href: string;
  variant?: "primary" | "glass";
  icon?: "github";
};

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  actions: Action[];
};

function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.75 5.6.75 12.1c0 5.2 3.44 9.6 8.2 11.16.6.12.82-.27.82-.58v-2.08c-3.34.74-4.04-1.46-4.04-1.46-.55-1.45-1.34-1.83-1.34-1.83-1.1-.78.08-.77.08-.77 1.21.09 1.85 1.28 1.85 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.81.42-1.35.77-1.66-2.66-.31-5.46-1.37-5.46-6.1 0-1.35.46-2.45 1.23-3.31-.12-.31-.53-1.57.12-3.27 0 0 1.01-.33 3.3 1.26.96-.27 1.99-.4 3.01-.41 1.02.01 2.05.14 3.01.41 2.29-1.59 3.3-1.26 3.3-1.26.65 1.7.24 2.96.12 3.27.76.86 1.23 1.96 1.23 3.31 0 4.74-2.8 5.79-5.47 6.1.43.38.82 1.12.82 2.27v3.37c0 .32.22.71.82.58 4.76-1.56 8.2-5.96 8.2-11.16C23.25 5.6 18.27.5 12 .5z"
      />
    </svg>
  );
}

export function ProjectCard({ title, description, tags, actions }: ProjectCardProps) {
  return (
    <GlassCard className="group relative overflow-hidden">
      {/* overlay de brilho no hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />
      </div>

      <div className="relative">
        <div className="text-lg font-semibold">{title}</div>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/50 px-2.5 py-1 text-xs text-slate-700 dark:bg-white/5 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ações -estao abaixo para nao sobrepor) */}
        <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
          {actions.map((a) => {
            const isPrimary = a.variant === "primary";

            return (
              <a
                key={a.label}
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className={
                  isPrimary
                    ? "rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-3 py-2 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_-18px_rgba(99,102,241,0.7)] hover:opacity-95"
                    : "glass rounded-xl px-3 py-2 text-sm font-semibold hover:ring-1 hover:ring-cyan-400/40 transition"
                }
              >
                <span className="inline-flex items-center gap-2">
                  {a.icon === "github" && <GithubIcon className="h-4 w-4" />}
                  {a.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </GlassCard>
  );
}
