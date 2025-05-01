import React from 'react';

const DefaultHero: React.FC = () => {
  return (
    <div className="hero-container relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-white/10"></div>
        <div className="grid grid-cols-6 h-full">
          {Array.from({length: 24}).map((_, i) => (
            <div key={i} className="border-r border-t border-white/5"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              #1 Healthcare Platform
            </div>
            <h1 className="hero-title text-4xl md:text-6xl !leading-tight">
              Healthcare Made <span className="text-accent font-extrabold">Simple</span>
            </h1>
            <p className="hero-subtitle max-w-lg">
              Connecting patients with the best healthcare providers and resources for better outcomes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="hero-cta flex items-center justify-center">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-md hover:bg-white/30 transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {Array.from({length: 4}).map((_, i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i+10}`} 
                    alt="User" 
                    className="w-8 h-8 rounded-full border-2 border-primary"
                  />
                ))}
              </div>
              <div className="ml-4 text-white">
                <div className="font-semibold">5,000+ users</div>
                <div className="text-sm opacity-80">Joined this month</div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-xl"></div>
              <img 
                src="https://img.freepik.com/free-vector/doctor-examining-patient-clinic-illustrated_23-2148856559.jpg?w=740&t=st=1693732338~exp=1693732938~hmac=ade1fbb25291e8a1c6b3baddcea825124ac011181d5cf27a6bec2830e1cd5f0e" 
                alt="Healthcare professionals" 
                className="relative z-10 rounded-2xl shadow-2xl max-w-md"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl z-20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-800 font-semibold">24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultHero; 