import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Puppy } from '../../types';
import { puppies } from '../../data/puppies';
import PuppyCard from '../puppies/PuppyCard';

const FeaturedPuppies = () => {
  const [featured, setFeatured] = useState<Puppy[]>([]);
  
  useEffect(() => {
    // Get available puppies and select up to 3 for featuring
    const availablePuppies = puppies.filter(puppy => puppy.status === 'available');
    setFeatured(availablePuppies.slice(0, 3));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our <span className="text-blue-600">Puppies</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            These adorable puppies are waiting for their forever homes. Could you be their perfect match?
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((puppy) => (
            <PuppyCard key={puppy.id} puppy={puppy} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/puppies"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            View All Available Puppies <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPuppies;