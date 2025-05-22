import { Link } from 'react-router-dom';
import { Heart, Home, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Change a Life?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
            Whether you're looking to adopt, volunteer, or donate, there are many ways to help our puppies find loving homes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="p-6">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Adopt a Puppy</h3>
              <p className="text-gray-600 mb-4">
                Browse our available puppies and start your adoption journey today.
              </p>
              <Link
                to="/puppies"
                className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
              >
                Find Your Match
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="p-6">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mb-4">
                <Home className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Become a Foster</h3>
              <p className="text-gray-600 mb-4">
                Help prepare puppies for their forever homes by becoming a temporary foster parent.
              </p>
              <Link
                to="/volunteer"
                className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-all duration-200"
              >
                Learn About Fostering
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="p-6">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-gray-600 mb-4">
                Sign up for our newsletter to get updates on new puppies and adoption events.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-all duration-200"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;