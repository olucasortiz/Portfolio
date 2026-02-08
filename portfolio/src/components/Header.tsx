import type { Lang } from "../lib/i18n";
import { copy } from "../lib/i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export function Header({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const t = copy[lang];

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400/90 to-violet-500/90 shadow-[0_0_20px_rgba(99,102,241,0.35)]" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Lucas Ortiz</div>
              <div className="text-xs text-slate-600 dark:text-slate-300">Backend • Node/TS</div>
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-sm md:flex">
            <a className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href="#projects">
              {t.nav.projects}
            </a>
            <a className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href="#stack">
              {t.nav.stack}
            </a>
            <a className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href="#about">
              {t.nav.about}
            </a>
            <a className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href="#contact">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle lang={lang} setLang={setLang} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
