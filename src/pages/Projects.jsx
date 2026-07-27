import { ExternalLink } from 'lucide-react';
import PageNavLink from '../components/PageNavLink';
import TiltCard from '../components/TiltCard';

const projects = [
  {
    title: 'Developer Portfolio Website',
    description:
      'A responsive personal portfolio website showcasing software projects, technical skills, and professional experience. Built with a focus on clean architecture, performance, and an intuitive user experience.',
    tags: ['React', 'Node.js', 'Express', 'JavaScript'],
    href: 'https://github.com/Unknown1648',
  },
  {
    title: 'Glencare – Ambulance Dispatch Platform',
    description:
      'A mobile application designed to connect patients with nearby ambulance services through real-time request and dispatch functionality. Includes location-based features and modern Android development practices for scalable emergency response solutions.',
    tags: ['Kotlin', 'Android', 'Location Services', 'Mobile Development'],
    href: 'https://github.com/Unknown1648',
  },
  {
    title: 'MamaFua – Home Services Marketplace',
    description:
      'A mobile marketplace connecting households with verified cleaning and laundry service providers. Features user authentication, service discovery, booking workflows, and provider management with a focus on seamless user experiences.',
    tags: ['Kotlin', 'Android', 'Firebase', 'Mobile Development'],
    href: 'https://github.com/Unknown1648',
  },
  // {
  //   title: 'Data Dashboard',
  //   description:
  //     'Interactive analytics dashboard with real-time data visualization, filtering, and export capabilities for business intelligence reporting.',
  //   tags: ['React', 'D3.js', 'Express'],
  //   href: 'https://github.com/Unknown1648',
  // },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">My Projects</h1>
      <p className="text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed">
        A selection of work that reflects my approach to building clean, functional, and
        user-centered digital products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <TiltCard key={project.title}>
            <article className="bg-white dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-700/60 hover:border-teal-500/40 transition-colors group shadow-sm dark:shadow-none h-full">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                {project.title}
              </h2>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-lg hover:bg-teal-500 hover:text-white dark:hover:text-slate-950 transition-all shrink-0"
                aria-label={`View ${project.title} on GitHub`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-slate-100 dark:bg-slate-900/80 text-teal-700 dark:text-teal-300 px-2.5 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            </article>
          </TiltCard>
        ))}
      </div>

      <PageNavLink to="/resume">Lets Go To My Resume.</PageNavLink>
    </div>
  );
}
