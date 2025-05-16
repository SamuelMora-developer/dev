
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-hustler-black pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 py-8 sm:py-16 md:py-20 lg:py-28 lg:max-w-2xl lg:w-full">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Learn to <span className="text-hustler-gold">Earn</span> and <span className="text-hustler-gold">Grow</span> Your Empire
            </h1>
            <p className="mt-6 text-xl text-hustler-gray max-w-md">
              Join the Young Hustlers Club and learn the skills you need to succeed in today's digital economy. Start your entrepreneurial journey now.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button className="bg-hustler-gold hover:bg-yellow-500 text-hustler-black text-lg py-6 px-8">
                <Link to="/signup">Start Your Journey</Link>
              </Button>
              <Button variant="outline" className="border-hustler-gold text-hustler-gold hover:bg-hustler-gold/10 text-lg py-6 px-8">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-r from-black to-gray-900 lg:from-transparent p-6 flex items-center justify-center">
          <div className="bg-hustler-black/50 backdrop-blur-sm p-8 rounded-xl border border-hustler-gold/30 shadow-2xl shadow-hustler-gold/10">
            <h3 className="text-2xl font-bold text-hustler-gold mb-2">Exclusive Access</h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-center">
                <span className="mr-2 text-hustler-gold">✓</span>
                <span>Premium Business Courses</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-hustler-gold">✓</span>
                <span>Mentorship from Top Entrepreneurs</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-hustler-gold">✓</span>
                <span>Private Community Access</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-hustler-gold">✓</span>
                <span>Exclusive Resources & Tools</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
