import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
        <Link to="/" className="text-xl font-bold text-teal-500 dark:text-teal-400 tracking-wider shrink-0">
          CHRISTOPHER MUIRURI
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`transition-colors ${
                  pathname === to
                    ? 'text-teal-500 dark:text-teal-400'
                    : 'hover:text-teal-500 dark:hover:text-teal-400'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
