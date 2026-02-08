import { useMemo, useState } from "react";

type Theme = "dark" | "light";

function resolveInitialTheme(): Theme {
  const saved = localStorage.getItem("theme") as Theme | null;
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  // useMemo garante que só calcula 1x (e não precisa useEffect)
  const initial = useMemo(() => resolveInitialTheme(), []);
  const [theme, setTheme] = useState<Theme>(initial);

  // aplica imediatamente na primeira render (sem effect)
  // (isso roda no browser normalmente; se der erro em SSR, aqui é Vite então ok)
  useMemo(() => {
    applyTheme(theme);
    return undefined;
  }, [theme]);

  function toggle() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <button
      onClick={toggle}
      className="glass inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium
                 hover:ring-1 hover:ring-cyan-400/40 transition"
      aria-label="Alternar tema"
      type="button"
    >
      <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.7)]" />
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
