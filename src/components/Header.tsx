import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  darkMode, 
  toggleDarkMode, 
  mobileMenuOpen, 
  setMobileMenuOpen 
}) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 shadow-sm">
      <div className="navbar-start">
        <button
          className="btn btn-ghost lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <a 
          href="#hero" 
          className="btn btn-ghost text-xl font-bold text-primary"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          Marie Dubois
        </a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <a 
              href="#hero"
              className="btn btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              Accueil
            </a>
          </li>
          <li>
            <a 
              href="#skills"
              className="btn btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}
            >
              Compétences
            </a>
          </li>
          <li>
            <a 
              href="#projects"
              className="btn btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              Projets
            </a>
          </li>
          <li>
            <a 
              href="#contact"
              className="btn btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <button
          className="btn btn-circle btn-ghost"
          onClick={toggleDarkMode}
          aria-label={darkMode ? 'Mode clair' : 'Mode sombre'}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-lg lg:hidden">
          <ul className="menu menu-vertical px-4 py-2">
            <li>
              <a 
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('hero');
                }}
              >
                Accueil
              </a>
            </li>
            <li>
              <a 
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('skills');
                }}
              >
                Compétences
              </a>
            </li>
            <li>
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                Projets
              </a>
            </li>
            <li>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;