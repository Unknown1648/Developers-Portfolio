import { ArrowRight, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContentCard from '../components/ContentCard';
import PageNavLink from '../components/PageNavLink';

const reads = [
  {
    title: 'The Clean Coder — Robert C. Martin',
    href: 'https://www.informit.com/store/clean-coder-a-code-of-conduct-for-professional-9780137081073',
    badge: 'Professionalism',
    description:
      'A practical guide to becoming a professional software developer. It explores responsibility, communication, teamwork, time management, estimation, and the mindset needed to build software with confidence and integrity.',
  },
  {
    title: 'Clean Code — Robert C. Martin',
    href: 'https://www.informit.com/store/clean-code-a-handbook-of-agile-software-craftsmanship-9780132350884',
    badge: 'Software Craftsmanship',
    description:
      'A timeless book on writing clean, readable, and maintainable code. It teaches naming conventions, small functions, SOLID principles, refactoring, testing, and best practices that make software easier to understand and evolve.',
  },
  {
    title: 'Android Apprentice — Kodeco',
    href: 'https://www.kodeco.com/books/android-apprentice',
    badge: 'Android Development',
    description:
      'A hands-on, project-based guide to Android development with Kotlin. Learn by building real applications while exploring Jetpack Compose, navigation, architecture, networking, persistence, testing, and modern Android development practices.',
  },
  // {
  //   title: 'Learning Something Great 😉',
  //   href: 'https://portfolio-latest-omega.vercel.app/articles',
  //   badge: 'Currently',
  //   description: 'We continue learning everyday.',
  // },
];

const playlists = [
  {
    title: 'Chill Noah Kahan Mix, Youtube',
    href: 'https://www.youtube.com/watch?v=8RI4cMlr2PY&list=RD8RI4cMlr2PY&start_radio=1',
    linkLabel: 'View Playlist',
    description: 'The perfect study beats, twenty four seven. with over 15 SONGS',
  },
  // {
  //   title: 'Mellow Drive Spotify',
  //   href: 'https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6',
  //   linkLabel: 'View Playlist',
  //   description: 'Easy listening for pleasant drive',
  // },
  {
    title: 'RNB POP CHRONICLES Youtube',
    href: 'https://www.youtube.com/watch?v=Q9QAiHxCGZA&list=RDQ9QAiHxCGZA&start_radio=1&t=3068s',
    linkLabel: 'View Playlist',
    description: 'One of the best pop mixes in 2024. DJ Tophaz',
  },
  {
    title: 'Mood Booster Youtube',
    href: 'https://www.youtube.com/watch?v=JRFuI4obvfw&list=RDJRFuI4obvfw&start_radio=1',
    linkLabel: 'View Playlist',
    description: 'Feel-good tracks to lift your spirits.',
  },
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-10">About Me</h1>

      <section className="mb-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            Engineering
          </h2>
          <a
            href="https://github.com/Unknown1648"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 text-sm font-medium"
          >
            View Github
          </a>
        </div>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
          Great software isn't just about writing code—it's about creating experiences people enjoy using. I love taking ideas, no matter how simple or ambitious, 
          and turning them into fast, reliable, and intuitive digital products that feel effortless.
          My approach combines thoughtful design with solid engineering. I pay attention to the details that matter—performance, accessibility, clean architecture, and usability—so every project looks great, works smoothly, and is built to last.
          Whether I'm building a website, a web application, or exploring new technologies, my goal is always the same: create solutions that solve real problems, leave a lasting impression, and make people's lives a little easier.

        </p>
      </section>

      <section className="mb-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">My Certifications</h2>
          <Link
            to="/certifications"
            className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 text-sm font-medium"
          >
            Visit Page
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
          Certifications from Power Learn Project, Cisco Networking Academy, SoloLearn, and Alison
          covering software development, networking, programming, and professional skills.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">My Reads.</h2>
        <div className="grid grid-cols-1 gap-6">
          {reads.map((item) => (
            <ContentCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">My Playlist.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {playlists.map((item) => (
            <ContentCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <PageNavLink to="/projects">Lets Continue To Projects</PageNavLink>
    </div>
  );
}
