import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-base-200 text-neutral">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">Marie Dubois</h3>
            <p className="text-neutral/70">
              Diplômée en Management • Passionnée par l'innovation
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={scrollToTop}
              className="btn btn-circle btn-primary"
              aria-label="Retour en haut"
            >
              <ArrowUp size={20} />
            </button>
            <span className="text-sm text-neutral/60">Retour en haut</span>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral/60">
          <div className="flex items-center gap-2">
            <span>© 2024 Marie Dubois. Tous droits réservés.</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Conçu avec</span>
            <Heart size={16} className="text-red-500" />
            <span>et React + TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;