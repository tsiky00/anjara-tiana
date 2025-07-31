import React from 'react';
import { 
  ExternalLink, 
  Users, 
  TrendingUp, 
  Award, 
  Briefcase,
  GraduationCap,
  Target,
  BarChart3
} from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Projet de Fin d\'Études - Stratégie RSE',
      description: 'Élaboration d\'une stratégie de Responsabilité Sociétale d\'Entreprise pour une PME locale. Analyse des enjeux, recommandations stratégiques et plan d\'implémentation sur 3 ans.',
      type: 'Académique',
      icon: Target,
      technologies: ['Analyse SWOT', 'Benchmarking', 'Stakeholder Mapping'],
      achievements: [
        'Note finale: 18/20',
        'Présentation devant un jury d\'experts',
        'Recommandations adoptées par l\'entreprise'
      ],
      category: 'Strategy',
      year: '2024'
    },
    {
      title: 'Étude de Marché - Application Mobile',
      description: 'Conduite d\'une étude de marché complète pour le lancement d\'une application mobile de covoiturage étudiante. Analyse concurrentielle, sondages et recommandations marketing.',
      type: 'Projet Groupe',
      icon: BarChart3,
      technologies: ['Études Quantitatives', 'Google Forms', 'SPSS', 'PowerPoint'],
      achievements: [
        '500+ répondants au sondage',
        'Analyse de 15 concurrents',
        'Business plan détaillé'
      ],
      category: 'Market Research',
      year: '2023'
    },
    {
      title: 'Organisation d\'Événement Caritatif',
      description: 'Coordination complète d\'un gala de charité pour l\'association étudiante. Gestion d\'équipe, partenariats, logistique et communication.',
      type: 'Associatif',
      icon: Users,
      technologies: ['Gestion de Projet', 'Communication', 'Partenariats'],
      achievements: [
        '€5,000 collectés',
        '200 participants',
        'Équipe de 15 bénévoles'
      ],
      category: 'Event Management',
      year: '2023'
    },
    {
      title: 'Stage - Assistant Chef de Projet',
      description: 'Stage de 3 mois dans une startup en croissance. Assistance au chef de projet sur le lancement d\'un nouveau produit, gestion du planning et suivi des KPIs.',
      type: 'Professionnel',
      icon: Briefcase,
      technologies: ['Trello', 'Slack', 'Google Analytics', 'Excel'],
      achievements: [
        'Lancement réussi du produit',
        'Réduction de 15% des délais',
        'Proposition de CDI'
      ],
      category: 'Internship',
      year: '2023'
    },
    {
      title: 'Challenge Innovation Étudiante',
      description: 'Participation au concours d\'innovation de l\'école avec un projet de solution digitale pour optimiser la gestion des déchets en entreprise.',
      type: 'Compétition',
      icon: Award,
      technologies: ['Design Thinking', 'Pitch', 'Business Model Canvas'],
      achievements: [
        '3ème place sur 50 équipes',
        'Prix du public',
        'Mentorat avec des entrepreneurs'
      ],
      category: 'Innovation',
      year: '2022'
    },
    {
      title: 'Mémoire de Recherche - Leadership Générationnel',
      description: 'Recherche académique sur l\'évolution des styles de leadership selon les générations. Enquête qualitative et quantitative auprès de managers.',
      type: 'Recherche',
      icon: GraduationCap,
      technologies: ['Recherche Qualitative', 'Interviews', 'Analyse Statistique'],
      achievements: [
        'Publication dans la revue étudiante',
        '30 interviews de managers',
        'Modèle théorique innovant'
      ],
      category: 'Research',
      year: '2024'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Strategy': 'badge-primary',
      'Market Research': 'badge-secondary',
      'Event Management': 'badge-accent',
      'Internship': 'badge-info',
      'Innovation': 'badge-success',
      'Research': 'badge-warning'
    };
    return colors[category as keyof typeof colors] || 'badge-neutral';
  };

  return (
    <section id="projects" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-4">
            Mes Projets & Réalisations
          </h2>
          <p className="text-xl text-neutral/70 max-w-3xl mx-auto">
            Une sélection de projets académiques, professionnels et associatifs qui illustrent 
            mes compétences en management et ma capacité à mener des initiatives à bien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up border-t-4 border-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-body p-6">
                <div className="flex items-start justify-between mb-4">
                  <project.icon size={32} className="text-primary flex-shrink-0" />
                  <div className="flex flex-col gap-2 items-end">
                    <span className={`badge ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                    <span className="text-sm text-neutral/60">{project.year}</span>
                  </div>
                </div>

                <h3 className="card-title text-lg mb-3 text-neutral leading-tight">
                  {project.title}
                </h3>
                
                <div className="mb-4">
                  <span className="badge badge-outline badge-sm">{project.type}</span>
                </div>

                <p className="text-neutral/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-neutral mb-2 text-sm">Technologies utilisées:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="badge badge-ghost badge-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-neutral mb-2 text-sm">Résultats clés:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-xs text-neutral/70 flex items-start gap-2">
                        <TrendingUp size={12} className="text-accent mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm">
                    <ExternalLink size={16} />
                    Détails
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="stats shadow bg-base-100 max-w-4xl mx-auto">
            <div className="stat">
              <div className="stat-figure text-primary">
                <Target size={32} />
              </div>
              <div className="stat-title">Projets Complétés</div>
              <div className="stat-value text-primary">6</div>
              <div className="stat-desc">Académiques & Professionnels</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-secondary">
                <Users size={32} />
              </div>
              <div className="stat-title">Personnes Impliquées</div>
              <div className="stat-value text-secondary">200+</div>
              <div className="stat-desc">Équipes et participants</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-accent">
                <Award size={32} />
              </div>
              <div className="stat-title">Récompenses</div>
              <div className="stat-value text-accent">3</div>
              <div className="stat-desc">Prix et distinctions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;