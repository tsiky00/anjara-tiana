import React from 'react';
import { Download, Linkedin, Mail, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const handleCVDownload = () => {
    // In a real implementation, this would link to an actual PDF file
    alert('Fonctionnalité de téléchargement du CV à implémenter');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 to-base-100 pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="badge badge-primary badge-lg mb-4">Diplômée 2024</span>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-neutral">
                Marie Dubois
              </h1>
              <h2 className="text-2xl lg:text-3xl text-secondary mb-6 font-medium">
                Étudiante diplômée en Management
              </h2>
              <p className="text-lg text-neutral/80 max-w-2xl leading-relaxed">
                Passionnée par la gestion de projet et l'innovation, je recherche une opportunité 
                pour débuter ma carrière dans le management. Diplômée avec mention d'un Bachelor 
                en Management, je suis prête à apporter ma créativité et ma rigueur à votre équipe.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                className="btn btn-primary btn-lg"
                onClick={handleCVDownload}
              >
                <Download size={20} />
                Télécharger CV
              </button>
              <a 
                href="#contact" 
                className="btn btn-outline btn-secondary btn-lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail size={20} />
                Me contacter
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle btn-ghost btn-lg hover:btn-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:marie.dubois@example.com"
                className="btn btn-circle btn-ghost btn-lg hover:btn-secondary transition-all"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle btn-ghost btn-lg hover:btn-accent transition-all"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end animate-slide-up">
            <div className="avatar">
              <div className="w-80 lg:w-96 rounded-full shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-primary/30 flex items-center justify-center">
                  <div className="text-8xl text-primary">👩‍💼</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;