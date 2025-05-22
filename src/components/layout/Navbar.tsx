import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PawPrint } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <PawPrint className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-semibold text-blue-800">PuppyMatch</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-500 transition duration-200">
              Home
            </Link>
            <Link to="/puppies" className="text-gray-700 hover:text-blue-500 transition duration-200">
              Available Puppies
            </Link>
            <Link to="/adoption-process" className="text-gray-700 hover:text-blue-500 transition duration-200">
              Adoption Process
            </Link>
            <Link to="/success-stories" className="text-gray-700 hover:text-blue-500 transition duration-200">
              Success Stories
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition duration-200">
              Contact
            </Link>
            <Link 
              to="/adopt" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-200 shadow-sm hover:shadow"
            >
              Adopt Now
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-50"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/puppies" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-50"
              onClick={closeMenu}
            >
              Available Puppies
            </Link>
            <Link 
              to="/adoption-process" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-50"
              onClick={closeMenu}
            >
              Adoption Process
            </Link>
            <Link 
              to="/success-stories" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-50"
              onClick={closeMenu}
            >
              Success Stories
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-50"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link 
              to="/adopt" 
              className="block px-3 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
              onClick={closeMenu}
            >
              Adopt Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;