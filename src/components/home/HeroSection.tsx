import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-blue-800">
              <span className="block">Find your</span>
              <span className="block text-orange-500">perfect puppy</span>
              <span className="block">companion</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl">
              We connect loving families with puppies in need of forever homes. 
              Our mission is to ensure every puppy finds the perfect match for a 
              lifetime of happiness and health.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <Link
                  to="/puppies"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Meet Our Puppies
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/adoption-process"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  How It Works <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden bg-gray-200">
                      <img 
                        src={`https://images.pexels.com/photos/4${i}587965/pexels-photo-4${i}587965.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2`} 
                        alt={`Adopter ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-3 text-sm font-medium text-gray-500">
                  <span className="text-blue-600 font-semibold">500+</span> happy families
                </div>
              </div>
              <div className="h-6 border-l border-gray-300"></div>
              <div className="flex items-center text-sm font-medium text-gray-500">
                <span className="text-blue-600 font-semibold">100%</span> satisfaction guarantee
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden group transform transition-all duration-500 hover:scale-105">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                  alt="Puppy being held by owner"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-medium">Cooper with his new family</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;