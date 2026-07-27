import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const inputClassName =
  'w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 transition-colors';

export default function Contact() {
  const [result, setResult] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    setResult('Please wait...');

    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const data = await response.json();

      if (response.status === 200) {
        setResult(data.message);
        event.target.reset();
      } else {
        setResult(data.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error(error);
      setResult('Something went wrong!');
    }

    setTimeout(() => {
      setResult('');
    }, 3000);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Contact</h1>

      <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl">
        Have a project, idea, or opportunity? I'd love to hear from you.
        You can also reach me directly at{' '}
        <a
          href="mailto:chrismuiruri668@gmail.com"
          className="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-medium"
        >
          chrismuiruri668@gmail.com
        </a>
        {' '}or call{' '}
        <a
          href="tel:+254792819977"
          className="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-medium"
        >
          +254 792 819 977
        </a>
      </p>

      <div className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
        Message me
      </div>

      <form
        id="form"
        onSubmit={handleSubmit}
        className="max-w-xl bg-white dark:bg-slate-800/40 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/80 space-y-6 shadow-sm dark:shadow-none"
      >
        <input
          type="hidden"
          name="access_key"
          value="4b36889e-f93b-4c00-9f3a-e5a84ffb8b62"
        />

        <input
          type="hidden"
          name="from_name"
          value="Response to Personal Portfolio"
        />

        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: 'none' }}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="First Name"
              placeholder="Name"
              required
              className={inputClassName}
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={inputClassName}
            />
          </div>
        </div>

        <div>
          <input
            type="tel"
            name="Phone Number"
            placeholder="Phone number"
            required
            className={inputClassName}
          />
        </div>

        <div>
          <textarea
            name="message"
            rows={6}
            placeholder="Message..."
            required
            className={`${inputClassName} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-teal-500 hover:bg-teal-400 text-white dark:text-slate-950 font-bold rounded-lg transition-colors"
        >
          SEND
        </button>

        {result && (
          <p className="text-sm text-teal-600 dark:text-teal-400" role="status">
            {result}
          </p>
        )}
      </form>

      <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 flex justify-center">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-teal-400 text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 font-medium transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
