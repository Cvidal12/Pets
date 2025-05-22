import { PawPrint, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <PawPrint className="h-8 w-8 text-blue-300" />
              <span className="ml-2 text-xl font-semibold text-white">PuppyMatch</span>
            </div>
            <p className="text-blue-200 mb-4">
              Finding loving forever homes for puppies in need since 2020.
            </p>
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-blue-300 mr-2" />
              <p className="text-blue-200">Over 500 puppies rehomed</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-blue-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/puppies" className="text-blue-200 hover:text-white transition duration-150">
                  Available Puppies
                </Link>
              </li>
              <li>
                <Link to="/adoption-process" className="text-blue-200 hover:text-white transition duration-150">
                  Adoption Process
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-blue-200 hover:text-white transition duration-150">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/adopt" className="text-blue-200 hover:text-white transition duration-150">
                  Adopt Now
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-blue-100">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/new-puppy-guide" className="text-blue-200 hover:text-white transition duration-150">
                  New Puppy Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-blue-200 hover:text-white transition duration-150">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-blue-200 hover:text-white transition duration-150">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-blue-200 hover:text-white transition duration-150">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-blue-200 hover:text-white transition duration-150">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-blue-100">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-300 mr-2" />
                <span className="text-blue-200">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-300 mr-2" />
                <a href="mailto:info@puppymatch.com" className="text-blue-200 hover:text-white transition duration-150">
                  info@puppymatch.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-300 mr-2 mt-1" />
                <span className="text-blue-200">
                  123 Puppy Lane<br />
                  Dogtown, CA 90210
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} PuppyMatch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;