import React from 'react';
import { useThemeStore } from '../../../store/themeStore';
import Hero from './Hero';
import GetInTouch from './GetInTouch';
import TestimonialSection from '../../../components/shared/TestimonialSection';
import TranslationTest from '../../../components/shared/TranslationTest';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { specialty } = useThemeStore();
  const { t: tHome } = useTranslation('home');
  const { t: tCommon } = useTranslation('common');
  
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      {/* Translation Test Component */}
      
      {/* Features section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{tHome('services.title')}</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">{tHome('services.description')}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-white/80 backdrop-blur-sm flex flex-col items-center text-center p-8 rounded-xl">
            <div className="w-16 h-16 rounded-full bg-primary-mild flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-deep" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">{tHome('services.telemedicine.title')}</h3>
            <p className="text-text-secondary mb-6">{tHome('services.telemedicine.description')}</p>
            <a href="#" className="text-primary font-medium flex items-center mt-auto">
              {tCommon('buttons.learn_more')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="card bg-white/80 backdrop-blur-sm flex flex-col items-center text-center p-8 rounded-xl">
            <div className="w-16 h-16 rounded-full bg-primary-mild flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-deep" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">{tHome('services.patient_portal.title')}</h3>
            <p className="text-text-secondary mb-6">{tHome('services.patient_portal.description')}</p>
            <a href="#" className="text-primary font-medium flex items-center mt-auto">
              {tCommon('buttons.learn_more')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="card bg-white/80 backdrop-blur-sm flex flex-col items-center text-center p-8 rounded-xl">
            <div className="w-16 h-16 rounded-full bg-primary-mild flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-deep" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">{tHome('services.health_monitoring.title')}</h3>
            <p className="text-text-secondary mb-6">{tHome('services.health_monitoring.description')}</p>
            <a href="#" className="text-primary font-medium flex items-center mt-auto">
              {tCommon('buttons.learn_more')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Testimonials section */}
      <TestimonialSection />
      
      {/* Why Choose Us section */}
      <div className="bg-gradient-to-r from-primary-deep to-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{tHome('why_choose_us.title')}</h2>
            <p className="max-w-2xl mx-auto opacity-90">{tHome('why_choose_us.description')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{tHome('why_choose_us.expertise.title')}</h3>
              <p className="opacity-90">{tHome('why_choose_us.expertise.description')}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{tHome('why_choose_us.technology.title')}</h3>
              <p className="opacity-90">{tHome('why_choose_us.technology.description')}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{tHome('why_choose_us.convenience.title')}</h3>
              <p className="opacity-90">{tHome('why_choose_us.convenience.description')}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{tHome('why_choose_us.personalized_care.title')}</h3>
              <p className="opacity-90">{tHome('why_choose_us.personalized_care.description')}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <GetInTouch />
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold">G</span>
                </span>
                GoGetWell.ai
              </div>
              <p className="text-gray-400 mb-4">Innovative healthcare solutions for a better tomorrow.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{tCommon('footer.company')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">{tCommon('footer.about')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{tCommon('footer.careers')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{tCommon('footer.press')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{tCommon('footer.blog')}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{tCommon('footer.services')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">{tCommon('footer.telemedicine')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{tCommon('footer.patient_portal')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{tCommon('footer.health_monitoring')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{tCommon('footer.medical_records')}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{tCommon('footer.legal')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">{tCommon('footer.privacy_policy')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{tCommon('footer.terms')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{tCommon('footer.cookie_policy')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">{tCommon('footer.hipaa')}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>{tCommon('footer.copyright', { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 