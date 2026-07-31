export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Christopher Muiruri. All rights reserved.</p>
        <div className="flex space-x-6 text-sm text-slate-500 dark:text-slate-400">
          <a
            href="https://github.com/Unknown1648"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 dark:hover:text-teal-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muiruri-christopher-524953425"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 dark:hover:text-teal-400"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/254792819977"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 dark:hover:text-teal-400"
          >
            Whatsapp
          </a>
        </div>
      </div>
    </footer>
  );
}
