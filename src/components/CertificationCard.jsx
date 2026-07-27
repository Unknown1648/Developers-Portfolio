import { ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

export default function CertificationCard({ name, image, href, level, certifications }) {
  return (
    <TiltCard>
      <article className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/60 hover:border-teal-500/40 transition-colors shadow-sm dark:shadow-none">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent group-hover:from-slate-900/90 group-hover:via-slate-900/60 transition-colors duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
            {level && (
              <p className="text-sm text-teal-300 font-mono mb-3">{level}</p>
            )}
            <ul className="space-y-1.5">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-slate-200 leading-snug">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-900/90 text-teal-600 dark:text-teal-400 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-teal-500 hover:text-white transition-all duration-300 z-10"
            aria-label={`Visit ${name}`}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </article>
    </TiltCard>
  );
}
