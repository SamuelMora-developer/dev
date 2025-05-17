
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-hustler-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-hustler-gold text-2xl font-extrabold">Young Hustlers Club</h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-white hover:text-hustler-gold px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/courses" className="text-white hover:text-hustler-gold px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
              <Link to="/affiliate" className="text-white hover:text-hustler-gold px-3 py-2 rounded-md text-sm font-medium">Affiliate Program</Link>
              <Link to="/about" className="text-white hover:text-hustler-gold px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
              <Link to="/upload" className="text-white hover:text-hustler-gold px-3 py-2 rounded-md text-sm font-medium">Instructor Portal</Link>
              <Button className="bg-hustler-gold hover:bg-yellow-500 text-hustler-black ml-4">
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-hustler-gold focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-hustler-black">
            <Link to="/" className="text-white hover:text-hustler-gold block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/courses" className="text-white hover:text-hustler-gold block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Courses</Link>
            <Link to="/affiliate" className="text-white hover:text-hustler-gold block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Affiliate Program</Link>
            <Link to="/about" className="text-white hover:text-hustler-gold block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/upload" className="text-white hover:text-hustler-gold block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Instructor Portal</Link>
            <Button className="bg-hustler-gold hover:bg-yellow-500 text-hustler-black mt-2 w-full" onClick={() => setIsMenuOpen(false)}>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
