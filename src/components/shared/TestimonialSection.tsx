import React from 'react';
import { useTranslation } from 'react-i18next';
import { useApi } from '../../context/ApiContext';
import useApiData from '../../hooks/useApiData';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
    catchPhrase: string;
  };
}

// Fallback mock data when API fails
const MOCK_USERS: User[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    company: {
      name: "Health Partners",
      catchPhrase: "Your health is our priority"
    }
  },
  {
    id: 2,
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    company: {
      name: "MediCare Solutions",
      catchPhrase: "Innovative healthcare for everyone"
    }
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    email: "ahmed.hassan@example.com",
    company: {
      name: "Global Health Clinic",
      catchPhrase: "World-class care at your doorstep"
    }
  }
];

const TestimonialSection: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const { api } = useApi();
  const [useMockData, setUseMockData] = React.useState(false);
  
  const fetcher = async () => {
    try {
      if (useMockData) {
        return MOCK_USERS;
      }
      
      const response = await api.getUsers();
      // Pick 3 random users for testimonials
      return response.data
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
    } catch (error) {
      console.error("Failed to fetch real data, using mock data", error);
      setUseMockData(true);
      return MOCK_USERS;
    }
  };
  
  const { data: testimonials, loading, error, fetch: refetchTestimonials } = 
    useApiData<User[]>({ fetcher, autoFetch: true });

  const generateTestimonial = (user: User) => {
    const { name: companyName, catchPhrase } = user.company;
    const currentLang = i18n.language;
    
    if (currentLang === 'ar') {
      return `لقد كانت تجربتي مع ${companyName} رائعة. ${catchPhrase} كان الفريق متعاونًا ومهنيًا طوال الوقت.`;
    } else if (currentLang === 'es') {
      return `Mi experiencia con ${companyName} ha sido excepcional. ${catchPhrase} El equipo fue colaborativo y profesional en todo momento.`;
    } else {
      return `My experience with ${companyName} has been exceptional. ${catchPhrase} The team was collaborative and professional throughout.`;
    }
  };

  const generateRating = () => {
    // Random rating between 4 and 5 stars
    return Math.floor(Math.random() * 2) + 4;
  };

  const handleRetry = () => {
    setUseMockData(false);
    refetchTestimonials();
  };

  if (loading) {
    return <LoadingSpinner size="md" fullScreen={false} />;
  }

  if (error && !testimonials) {
    return <ErrorMessage type="network" retry={handleRetry} />;
  }

  // Using either real data or mock data at this point
  const displayData = testimonials || MOCK_USERS;

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 rtl:text-right">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          {t('testimonials.title')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {displayData.map((user) => {
            const rating = generateRating();
            return (
              <div 
                key={user.id} 
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={`https://i.pravatar.cc/150?u=${user.email}`} 
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover me-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">{user.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{user.company.name}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {generateTestimonial(user)}
                </p>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 text-right">
                  {new Date().toLocaleDateString(i18n.language, { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 