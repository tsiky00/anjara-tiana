import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      // Note: Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral mb-4">
            Contactez-moi
          </h2>
          <p className="text-xl text-neutral/70 max-w-2xl mx-auto">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter 
            d'opportunités professionnelles ou pour en savoir plus sur mes projets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-primary mb-8">
              Mes Coordonnées
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-base-200 rounded-xl hover:shadow-md transition-shadow">
                <Mail size={24} className="text-primary" />
                <div>
                  <h4 className="font-semibold text-neutral">Email</h4>
                  <a 
                    href="mailto:marie.dubois@example.com"
                    className="text-neutral/70 hover:text-primary transition-colors"
                  >
                    marie.dubois@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-base-200 rounded-xl hover:shadow-md transition-shadow">
                <Phone size={24} className="text-secondary" />
                <div>
                  <h4 className="font-semibold text-neutral">Téléphone</h4>
                  <a 
                    href="tel:+33123456789"
                    className="text-neutral/70 hover:text-secondary transition-colors"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-base-200 rounded-xl hover:shadow-md transition-shadow">
                <MapPin size={24} className="text-accent" />
                <div>
                  <h4 className="font-semibold text-neutral">Localisation</h4>
                  <span className="text-neutral/70">Paris, France</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
              <h4 className="font-semibold text-neutral mb-3">Disponibilité</h4>
              <p className="text-neutral/70 mb-3">
                Actuellement en recherche active d'emploi. Disponible pour des entretiens 
                et peut commencer immédiatement.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span className="font-medium">Disponible immédiatement</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-secondary mb-8">
              Envoyez-moi un Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Nom complet</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full focus:input-primary"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full focus:input-primary"
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Sujet</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="select select-bordered w-full focus:select-primary"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="Opportunité d'emploi">Opportunité d'emploi</option>
                  <option value="Stage">Proposition de stage</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Information">Demande d'information</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered h-32 w-full focus:textarea-primary resize-none"
                  placeholder="Décrivez votre demande ou opportunité..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary btn-lg w-full"
              >
                {isLoading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="alert alert-success">
                  <CheckCircle size={20} />
                  <span>Message envoyé avec succès ! Je vous répondrai rapidement.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="alert alert-error">
                  <AlertCircle size={20} />
                  <span>
                    Erreur lors de l'envoi. Veuillez réessayer ou m'envoyer un email directement.
                  </span>
                </div>
              )}
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-neutral/60">
                Vous pouvez également me joindre directement par email ou téléphone. 
                Je m'efforce de répondre à tous les messages dans les 24 heures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;