import { useEffect, useRef, useState } from 'react';

const DEFAULT = { x: 0, y: 0 };

export function useSmoothMouse({ fast = 0.12, slow = 0.05 } = {}) {
  const [position, setPosition] = useState({
    smooth: DEFAULT,
    lagged: DEFAULT,
    normalized: { x: 0, y: 0 },
    active: false,
  });

  const target = useRef(DEFAULT);
  const smooth = useRef(DEFAULT);
  const lagged = useRef(DEFAULT);
  const frame = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;

    if (reducedMotion || coarsePointer) {
      return undefined;
    }

    function handleMove(event) {
      target.current = { x: event.clientX, y: event.clientY };
    }

    function handleLeave() {
      target.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
    }

    function animate() {
      smooth.current = {
        x: smooth.current.x + (target.current.x - smooth.current.x) * fast,
        y: smooth.current.y + (target.current.y - smooth.current.y) * fast,
      };

      lagged.current = {
        x: lagged.current.x + (target.current.x - lagged.current.x) * slow,
        y: lagged.current.y + (target.current.y - lagged.current.y) * slow,
      };

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      setPosition({
        smooth: { ...smooth.current },
        lagged: { ...lagged.current },
        normalized: {
          x: (smooth.current.x - centerX) / centerX,
          y: (smooth.current.y - centerY) / centerY,
        },
        active: true,
      });

      frame.current = requestAnimationFrame(animate);
    }

    target.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    smooth.current = { ...target.current };
    lagged.current = { ...target.current };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [fast, slow]);

  return position;
}
