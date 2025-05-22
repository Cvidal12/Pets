import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { puppies } from '../data/puppies';
import { Puppy } from '../types';
import PuppyFilters, { FilterOptions } from '../components/puppies/PuppyFilters';
import PuppyCard from '../components/puppies/PuppyCard';

const PuppiesPage = () => {
  const [filteredPuppies, setFilteredPuppies] = useState<Puppy[]>(puppies);
  
  const handleFilterChange = (filters: FilterOptions) => {
    let results = [...puppies];
    
    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      results = results.filter(
        puppy => 
          puppy.name.toLowerCase().includes(searchTerm) ||
          puppy.breed.toLowerCase().includes(searchTerm)
      );
    }
    
    // Filter by breed
    if (filters.breed) {
      results = results.filter(puppy => puppy.breed === filters.breed);
    }
    
    // Filter by gender
    if (filters.gender) {
      results = results.filter(puppy => puppy.gender === filters.gender.toLowerCase());
    }
    
    // Filter by size
    if (filters.size) {
      results = results.filter(puppy => puppy.size === filters.size.toLowerCase());
    }
    
    // Filter by age
    if (filters.age) {
      if (filters.age === '0-3 months') {
        results = results.filter(puppy => {
          const age = parseInt(puppy.age.split(' ')[0]);
          return age <= 3;
        });
      } else if (filters.age === '3-6 months') {
        results = results.filter(puppy => {
          const age = parseInt(puppy.age.split(' ')[0]);
          return age > 3 && age <= 6;
        });
      } else if (filters.age === '6-12 months') {
        results = results.filter(puppy => {
          const age = parseInt(puppy.age.split(' ')[0]);
          return age > 6 && age <= 12;
        });
      }
    }
    
    setFilteredPuppies(results);
  };
  
  return (
    <>
      <Helmet>
        <title>Available Puppies | PuppyMatch</title>
        <meta name="description" content="Browse our available puppies looking for their forever homes. Filter by breed, age, and more to find your perfect match." />
      </Helmet>
      
      <main className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Available <span className="text-blue-600">Puppies</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Find your perfect puppy companion from our available adoptees.
              Each puppy has been vet-checked and is ready for their forever home.
            </p>
          </div>
          
          <PuppyFilters onFilterChange={handleFilterChange} />
          
          {filteredPuppies.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No puppies found</h3>
              <p className="text-gray-500">Try adjusting your filters to find more puppies.</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPuppies.map(puppy => (
                <PuppyCard key={puppy.id} puppy={puppy} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default PuppiesPage;