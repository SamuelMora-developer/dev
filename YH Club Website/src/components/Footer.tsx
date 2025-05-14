
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hustler-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-hustler-gold mb-4">Young Hustlers Club</h3>
            <p className="text-hustler-gray">Empowering the next generation of entrepreneurs with actionable skills and knowledge.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-hustler-gray hover:text-hustler-gold">Home</Link></li>
              <li><Link to="/courses" className="text-hustler-gray hover:text-hustler-gold">Courses</Link></li>
              <li><Link to="/affiliate" className="text-hustler-gray hover:text-hustler-gold">Affiliate Program</Link></li>
              <li><Link to="/about" className="text-hustler-gray hover:text-hustler-gold">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-hustler-gray hover:text-hustler-gold">Blog</Link></li>
              <li><Link to="/faq" className="text-hustler-gray hover:text-hustler-gold">FAQ</Link></li>
              <li><Link to="/support" className="text-hustler-gray hover:text-hustler-gold">Support</Link></li>
              <li><Link to="/upload" className="text-hustler-gray hover:text-hustler-gold">Instructor Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-hustler-gray">Email: info@younghustlersclub.com</li>
              <li className="text-hustler-gray">Phone: (555) 123-4567</li>
              <li className="flex space-x-4 mt-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-hustler-gray hover:text-hustler-gold">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-hustler-gray hover:text-hustler-gold">Instagram</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-hustler-gray hover:text-hustler-gold">YouTube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-hustler-gray">&copy; {currentYear} Young Hustlers Club. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-hustler-gray hover:text-hustler-gold">Terms</Link>
            <Link to="/privacy" className="text-hustler-gray hover:text-hustler-gold">Privacy</Link>
            <Link to="/cookies" className="text-hustler-gray hover:text-hustler-gold">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
