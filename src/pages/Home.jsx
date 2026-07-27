import PageNavLink from '../components/PageNavLink';
import ParallaxSection from '../components/ParallaxSection';

export default function Home() {
  return (
    <ParallaxSection
      strength={10}
      className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col items-start justify-center min-h-[70vh]"
    >
      <span className="text-teal-600 dark:text-teal-400 font-mono text-sm mb-4 tracking-wider uppercase">
        Welcome to my little corner of the internet
      </span>

      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
        Hi, I'm Christopher. <br />
        <span className="text-slate-600 dark:text-slate-400">
          I build websites and Android applications people enjoy using.
        </span>
      </h1>

      <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
        I'm a software developer who enjoys turning ideas into simple, reliable, and
        beautiful digital experiences. Whether it's a website, a web app, or a mobile
        solution, I love building products that solve real problems and make everyday
        life a little easier.
      </p>

      <p className="text-slate-500 text-base max-w-2xl mb-10 leading-relaxed">
        Based in Nairobi, Kenya. I'm always learning, exploring new technologies, and
        creating projects that challenge me to grow.
      </p>

      <PageNavLink to="/about">Learn more about me</PageNavLink>
    </ParallaxSection>
  );
}
