import React from 'react';

const OrganTransplantHero: React.FC = () => {
  return (
    <div className="hero-container bg-primary-deep text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="hero-title text-5xl md:text-6xl mb-6">
            Expert Organ Transplant Care
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl max-w-3xl mx-auto">
            World-class organ transplant services with specialized teams dedicated to giving patients a new lease on life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-primary-mild bg-opacity-30 backdrop-blur-sm p-6 rounded-lg">
            <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Heart Transplants</h3>
            <p className="opacity-90">Innovative procedures and comprehensive pre/post-transplant care.</p>
          </div>
          <div className="bg-primary-mild bg-opacity-30 backdrop-blur-sm p-6 rounded-lg">
            <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17A3 3 0 015 5zm4.37 5a2.12 2.12 0 01-3.72 0h3.72zm5.26 0a2.12 2.12 0 01-3.72 0h3.72z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Lung Transplants</h3>
            <p className="opacity-90">Advanced therapies and personalized treatment plans for lung recipients.</p>
          </div>
          <div className="bg-primary-mild bg-opacity-30 backdrop-blur-sm p-6 rounded-lg">
            <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 011-1h.01a1 1 0 010 2H9a1 1 0 01-1-1zm3-1a1 1 0 100 2h.01a1 1 0 100-2H11zm-1 4a1 1 0 011-1h.01a1 1 0 110 2H11a1 1 0 01-1-1zm-1-3a1 1 0 100 2h.01a1 1 0 100-2H9zM3 9a1 1 0 011-1h.01a1 1 0 010 2H4a1 1 0 01-1-1zm13-1a1 1 0 100 2h.01a1 1 0 100-2H16zm-1-6a1 1 0 011-1h.01a1 1 0 010 2H16a1 1 0 01-1-1zM9 15a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3-1a1 1 0 100 2h.01a1 1 0 100-2H12zm-1 3a1 1 0 011-1h.01a1 1 0 110 2H11a1 1 0 01-1-1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Kidney Transplants</h3>
            <p className="opacity-90">Leading-edge techniques with outstanding long-term transplant outcomes.</p>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="hero-cta bg-accent hover:bg-accent/90 group">
            Schedule a Consultation
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="mt-16 text-center">
          <p className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            <span className="font-semibold">1,000+</span> successful transplant procedures performed by our expert team
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganTransplantHero; 