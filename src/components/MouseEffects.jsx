import { useMouse } from '../context/MouseContext';

const orbs = [
  { size: 320, opacity: 'opacity-[0.18] dark:opacity-[0.12]', parallax: 28, color: 'bg-teal-400' },
  { size: 240, opacity: 'opacity-[0.14] dark:opacity-[0.10]', parallax: -22, color: 'bg-cyan-400' },
  { size: 180, opacity: 'opacity-[0.12] dark:opacity-[0.08]', parallax: 16, color: 'bg-emerald-400' },
];

export default function MouseEffects() {
  const mouse = useMouse();

  if (!mouse?.active) return null;

  const { smooth, lagged, normalized } = mouse;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute w-[min(80vw,640px)] h-[min(80vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-25 dark:opacity-20"
        style={{
          left: lagged.x,
          top: lagged.y,
          background:
            'radial-gradient(circle, rgba(45, 212, 191, 0.55) 0%, rgba(45, 212, 191, 0.08) 45%, transparent 70%)',
        }}
      />

      <div
        className="absolute w-[min(50vw,420px)] h-[min(50vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-20 dark:opacity-15"
        style={{
          left: smooth.x,
          top: smooth.y,
          background:
            'radial-gradient(circle, rgba(34, 211, 238, 0.35) 0%, transparent 65%)',
        }}
      />

      {orbs.map((orb, index) => (
        <div
          key={orb.size}
          className={`absolute rounded-full blur-3xl ${orb.color} ${orb.opacity}`}
          style={{
            width: orb.size,
            height: orb.size,
            left: `${15 + index * 28}%`,
            top: `${20 + index * 18}%`,
            transform: `translate(${normalized.x * orb.parallax}px, ${normalized.y * orb.parallax}px)`,
          }}
        />
      ))}

      <div
        className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/70 dark:bg-teal-300/80 shadow-[0_0_20px_rgba(45,212,191,0.8)]"
        style={{ left: smooth.x, top: smooth.y }}
      />

      <div
        className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-400/25 dark:border-teal-300/30"
        style={{ left: lagged.x, top: lagged.y }}
      />
    </div>
  );
}
