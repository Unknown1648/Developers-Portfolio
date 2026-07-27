import { createContext, useContext } from 'react';
import { useSmoothMouse } from '../hooks/useSmoothMouse';

const MouseContext = createContext(null);

export function MouseProvider({ children }) {
  const mouse = useSmoothMouse();

  return <MouseContext.Provider value={mouse}>{children}</MouseContext.Provider>;
}

export function useMouse() {
  return useContext(MouseContext);
}
