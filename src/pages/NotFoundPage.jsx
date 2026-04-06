import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center"
        style={{ boxShadow: 'var(--shadow-recessed)', background: 'var(--color-recessed)' }}
      >
        <AlertCircle size={40} color="var(--color-accent)" />
      </div>
      <div>
        <h1 className="text-6xl font-extrabold" style={{ color: 'var(--color-accent)' }}>404</h1>
        <p className="text-lg font-semibold mt-1" style={{ color: 'var(--color-text-primary)' }}>Page Not Found</p>
        <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
      <Link to="/" className="neu-btn-accent px-6 py-3 flex items-center gap-2 text-sm">
        <Home size={15} /> Back to Home
      </Link>
    </div>
  );
}
