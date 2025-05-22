import { Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Puppy } from '../../types';
import { useState } from 'react';

interface PuppyCardProps {
  puppy: Puppy;
}

const PuppyCard = ({ puppy }: PuppyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={puppy.imageUrl}
          alt={puppy.name}
          className={`w-full h-60 object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        <div className="absolute top-0 right-0 p-2">
          {puppy.status === 'pending' ? (
            <div className="flex items-center px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
              <Clock className="w-4 h-4 mr-1" />
              Pending
            </div>
          ) : (
            <div className="flex items-center px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
              <Heart className="w-4 h-4 mr-1" />
              Available
            </div>
          )}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{puppy.name}</h3>
          <div className="text-sm font-medium text-gray-500">{puppy.age}</div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <span className="text-sm">{puppy.breed}</span>
          <span className="mx-2">•</span>
          <span className="text-sm capitalize">{puppy.gender}</span>
          <span className="mx-2">•</span>
          <span className="text-sm capitalize">{puppy.size} size</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {puppy.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {puppy.characteristics.slice(0, 3).map((trait, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
            >
              {trait}
            </span>
          ))}
          {puppy.characteristics.length > 3 && (
            <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
              +{puppy.characteristics.length - 3} more
            </span>
          )}
        </div>
        
        <Link
          to={`/puppies/${puppy.id}`}
          className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
        >
          Meet {puppy.name}
        </Link>
      </div>
    </div>
  );
};

export default PuppyCard;