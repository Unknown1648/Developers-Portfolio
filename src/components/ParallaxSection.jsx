import { useMouse } from '../context/MouseContext';

export default function ParallaxSection({ children, className = '', strength = 12 }) {
  const mouse = useMouse();
  const offsetX = (mouse?.normalized?.x ?? 0) * strength;
  const offsetY = (mouse?.normalized?.y ?? 0) * strength;

  return (
    <section
      className={className}
      style={{
        transform: mouse?.active ? `translate3d(${offsetX}px, ${offsetY}px, 0)` : undefined,
        transition: 'transform 0.2s ease-out',
      }}
    >
      {children}
    </section>
  );
}
