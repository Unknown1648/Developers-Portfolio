import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PageNavLink({ to, children }) {
  return (
    <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 flex justify-center">
      <Link
        to={to}
        className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-teal-400 text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 font-medium transition-all duration-200"
      >
        {children}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
