import { cn } from "../lib/utils";

export function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "glass relative rounded-2xl p-5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
      {children}
    </div>
  );
}
