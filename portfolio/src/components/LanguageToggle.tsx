import type { Lang } from "../lib/i18n";

export function LanguageToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const base =
    "glass rounded-xl px-3 py-2 text-sm font-semibold transition hover:ring-1 hover:ring-violet-400/40";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => setLang("pt")}
        className={`${base} ${lang === "pt" ? "ring-1 ring-cyan-400/50" : ""}`}
        aria-pressed={lang === "pt"}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`${base} ${lang === "en" ? "ring-1 ring-cyan-400/50" : ""}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
