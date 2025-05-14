
import { Book, Users, DollarSign } from 'lucide-react';

const Features = () => {
  const features = [
    {
      name: 'Practical Business Skills',
      description: 'Learn real-world business skills from experts who have built successful companies. No theory, just practical knowledge you can apply immediately.',
      icon: Book,
    },
    {
      name: 'Supportive Community',
      description: 'Join a community of like-minded young entrepreneurs who are on the same journey. Share ideas, get feedback, and build connections.',
      icon: Users,
    },
    {
      name: 'Earn While You Learn',
      description: 'Monetize your knowledge through our affiliate program. Recommend our courses to others and earn a commission on every sale.',
      icon: DollarSign,
    },
  ];

  return (
    <div className="py-16 bg-hustler-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-hustler-black">Why Join Young Hustlers Club?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-hustler-darkgray">
            We're not just another online course platform. We're building the next generation of entrepreneurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-white rounded-lg shadow-lg border border-hustler-gold/20 hover:shadow-xl hover:border-hustler-gold/40 transition-all"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-hustler-gold p-3 rounded-full shadow-lg">
                  <feature.icon className="h-6 w-6 text-hustler-black" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-hustler-black text-center mb-4">{feature.name}</h3>
                <p className="text-hustler-darkgray text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
