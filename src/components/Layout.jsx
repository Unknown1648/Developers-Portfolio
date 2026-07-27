import { Outlet } from 'react-router-dom';
import { MouseProvider } from '../context/MouseContext';
import Nav from './Nav';
import Footer from './Footer';
import MouseEffects from './MouseEffects';

export default function Layout() {
  return (
    <MouseProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors">
        <MouseEffects />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Nav />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </MouseProvider>
  );
}
