import { Download } from 'lucide-react';
import PageNavLink from '../components/PageNavLink';

export default function Resume() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Resume</h1>
          <p className="text-slate-600 dark:text-slate-400">A quick summary of my professional background.</p>
        </div>
        <a
          href="/my-cv.pdf"
          download
          className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-500 text-white dark:text-slate-950 font-semibold hover:bg-teal-400 transition-colors w-fit"
        >
          <Download className="w-4 h-4" /> Download Full CV (.docx)
        </a>
      </div>

      <div className="bg-white dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-lg dark:shadow-2xl overflow-hidden">
        <div className="relative group rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 flex justify-center items-center min-h-[400px]">
          <img
            src="/resume.png"
            alt="Christopher Muiruri Short Summary Resume"
            className="w-full max-w-3xl object-cover rounded-lg border border-slate-200 dark:border-slate-700/50 shadow-md"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden text-center p-12 text-slate-500">
            <p className="text-lg mb-2">Resume preview</p>
            <p className="text-sm">
              Add your resume image to{' '}
              <code className="text-teal-600 dark:text-teal-400">public/resume.png</code>
            </p>
          </div>
        </div>
      </div>

      <PageNavLink to="/contact">Are you convinced to contact me now ?</PageNavLink>
    </div>
  );
}
