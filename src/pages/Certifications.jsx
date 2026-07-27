import CertificationCard from '../components/CertificationCard';
import PageNavLink from '../components/PageNavLink';
import { certificationOrganizations } from '../data/certifications';

export default function Certifications() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">My Certifications</h1>
      <p className="text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed">
        Training and certifications from organizations where I built practical skills in software
        development, networking, programming, and professional communication. Hover over each card to
        see the details.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certificationOrganizations.map((org) => (
          <CertificationCard key={org.id} {...org} />
        ))}
      </div>

      <PageNavLink to="/about">Back To About</PageNavLink>
    </div>
  );
}
