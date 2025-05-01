import React from 'react';

const CosmeticSurgeryHero: React.FC = () => {
  return (
    <div className="hero-container bg-gradient-to-r from-primary-mild to-secondary-mild">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block bg-background bg-opacity-90 px-4 py-1 rounded-full text-primary-deep text-sm font-medium mb-4">
              Transform with Confidence
            </div>
            <h1 className="hero-title text-4xl md:text-5xl font-light">
              <span className="font-bold">Enhance</span> Your Natural Beauty
            </h1>
            <p className="hero-subtitle italic">
              Discover personalized cosmetic procedures tailored to your aesthetic goals, performed by board-certified surgeons.
            </p>
            <div className="flex space-x-4 mt-8">
              <button className="hero-cta bg-primary hover:bg-primary-deep">
                Free Consultation
              </button>
              <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors px-6 py-3 rounded-full">
                View Gallery
              </button>
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex -space-x-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="Patient" />
                <img src="https://randomuser.me/api/portraits/women/45.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="Patient" />
                <img src="https://randomuser.me/api/portraits/women/46.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="Patient" />
              </div>
              <p className="text-sm">
                <span className="font-bold">500+</span> satisfied patients this year
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-bright-make-up_186202-4907.jpg" 
              alt="Cosmetic Surgery Result" 
              className="rounded-tl-[100px] rounded-br-[100px] shadow-xl mx-auto"
            />
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-primary font-bold">✓ Board-Certified Surgeons</div>
              <div className="text-primary font-bold">✓ State-of-the-art Facilities</div>
              <div className="text-primary font-bold">✓ Personalized Care</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticSurgeryHero; 