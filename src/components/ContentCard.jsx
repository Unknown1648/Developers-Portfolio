import { ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ContentCard({ title, subtitle, href, linkLabel, description, badge }) {
  return (
    <TiltCard>
      <div className="bg-white dark:bg-slate-900/60 p-6 rounded-xl border border-slate-200 dark:border-slate-700/60 hover:border-teal-500/40 transition-colors shadow-sm dark:shadow-none">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            {badge && (
              <span className="text-xs font-mono bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 px-2.5 py-1 rounded mb-3 inline-block">
                {badge}
              </span>
            )}
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>
            {subtitle && <p className="text-sm text-teal-600 dark:text-teal-400 mt-1">{subtitle}</p>}
            {description && (
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">{description}</p>
            )}
          </div>
          {href && linkLabel && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 whitespace-nowrap shrink-0"
            >
              {linkLabel}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </TiltCard>
  );
}
