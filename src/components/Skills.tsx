import React from 'react';
import { 
  Users, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Lightbulb, 
  MessageSquare,
  Computer,
  Globe,
  PieChart,
  Calendar,
  BookOpen,
  Award
} from 'lucide-react';

const Skills: React.FC = () => {
  const managementSkills = [
    { icon: Users, name: 'Gestion d\'équipe', level: 85 },
    { icon: Target, name: 'Gestion de projet', level: 90 },
    { icon: TrendingUp, name: 'Analyse stratégique', level: 80 },
    { icon: MessageSquare, name: 'Communication', level: 95 },
    { icon: Lightbulb, name: 'Innovation', level: 85 },
    { icon: BarChart3, name: 'Analyse de données', level: 75 },
  ];

  const technicalSkills = [
    { icon: Computer, name: 'Microsoft Office Suite', level: 95 },
    { icon: PieChart, name: 'Power BI', level: 70 },
    { icon: Globe, name: 'CRM/ERP', level: 65 },
    { icon: Calendar, name: 'Gestion de projet (Trello, Asana)', level: 80 },
    { icon: BarChart3, name: 'Google Analytics', level: 60 },
  ];

  const languages = [
    { name: 'Français', level: 100, flag: '🇫🇷' },
    { name: 'Anglais', level: 85, flag: '🇬🇧' },
    { name: 'Espagnol', level: 60, flag: '🇪🇸' },
  ];

  const certifications = [
    { icon: Award, name: 'Certification Google Analytics', year: '2024' },
    { icon: BookOpen, name: 'Formation Agile/Scrum', year: '2023' },
    { icon: Target, name: 'Certification PMP (en cours)', year: '2024' },
  ];

  return (
    <section id="skills" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-4">
            Mes Compétences
          </h2>
          <p className="text-xl text-neutral/70 max-w-2xl mx-auto">
            Une combinaison de compétences managériales, techniques et linguistiques 
            acquises lors de ma formation et de mes expériences pratiques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Management Skills */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <Target size={28} />
              Compétences Managériales
            </h3>
            <div className="space-y-6">
              {managementSkills.map((skill, index) => (
                <div key={index} className="bg-base-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <skill.icon size={24} className="text-primary" />
                    <span className="font-semibold text-neutral">{skill.name}</span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-neutral/60 mt-1 block">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-3">
              <Computer size={28} />
              Compétences Techniques
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-base-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <skill.icon size={24} className="text-secondary" />
                    <span className="font-semibold text-neutral">{skill.name}</span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-neutral/60 mt-1 block">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Languages */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-accent mb-8 flex items-center gap-3">
              <Globe size={28} />
              Langues
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="card-body p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="font-semibold text-neutral">{lang.name}</span>
                      </div>
                      <span className="badge badge-accent">{lang.level}%</span>
                    </div>
                    <progress 
                      className="progress progress-accent w-full" 
                      value={lang.level} 
                      max="100"
                    ></progress>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <Award size={28} />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="card-body p-6">
                    <div className="flex items-center gap-4">
                      <cert.icon size={24} className="text-primary" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-neutral">{cert.name}</h4>
                        <p className="text-sm text-neutral/60">{cert.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;