import { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';

interface FiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export interface FilterOptions {
  search: string;
  breed: string;
  gender: string;
  size: string;
  age: string;
}

const PuppyFilters = ({ onFilterChange }: FiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    breed: '',
    gender: '',
    size: '',
    age: ''
  });
  
  const breeds = ['All', 'Golden Retriever', 'Labrador', 'Beagle', 'Border Collie', 'Poodle Mix', 'German Shepherd'];
  const genders = ['All', 'Male', 'Female'];
  const sizes = ['All', 'Small', 'Medium', 'Large'];
  const ages = ['All', '0-3 months', '3-6 months', '6-12 months'];
  
  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };
  
  const clearFilters = () => {
    setFilters({
      search: '',
      breed: '',
      gender: '',
      size: '',
      age: ''
    });
  };
  
  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value === 'All' ? '' : value
    }));
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      search: e.target.value
    }));
  };
  
  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);
  
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1 mb-4 lg:mb-0 lg:mr-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Search puppies by name or breed..."
            className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex items-center">
          <button
            onClick={toggleFilters}
            className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200"
          >
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
          
          {(filters.breed || filters.gender || filters.size || filters.age) && (
            <button
              onClick={clearFilters}
              className="ml-2 flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors duration-200"
            >
              <X className="h-5 w-5 mr-2" />
              Clear
            </button>
          )}
        </div>
      </div>
      
      {isOpen && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Breed</label>
            <select
              value={filters.breed || 'All'}
              onChange={(e) => handleFilterChange('breed', e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              value={filters.gender || 'All'}
              onChange={(e) => handleFilterChange('gender', e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              {genders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
            <select
              value={filters.size || 'All'}
              onChange={(e) => handleFilterChange('size', e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <select
              value={filters.age || 'All'}
              onChange={(e) => handleFilterChange('age', e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              {ages.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default PuppyFilters;