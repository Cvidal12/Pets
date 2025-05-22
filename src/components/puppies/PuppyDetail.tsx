import { useState } from 'react';
import { Heart, ArrowLeft, PawPrint as Paw, Info, Calendar, Ruler, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Puppy } from '../../types';

interface PuppyDetailProps {
  puppy: Puppy;
}

const PuppyDetail = ({ puppy }: PuppyDetailProps) => {
  const [activeTab, setActiveTab] = useState<'about' | 'adoption'>('about');
  const navigate = useNavigate();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-1" />
        Back to All Puppies
      </button>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="relative h-96 md:h-full">
              <img
                src={puppy.imageUrl}
                alt={puppy.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                {puppy.status === 'pending' ? (
                  <div className="px-4 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
                    Pending Adoption
                  </div>
                ) : (
                  <div className="px-4 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                    Available
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-6 md:p-8">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold text-gray-900">{puppy.name}</h1>
              <div className="text-lg font-medium text-gray-500">{puppy.age}</div>
            </div>
            
            <div className="flex items-center mt-2 text-gray-600">
              <span>{puppy.breed}</span>
              <span className="mx-2">•</span>
              <span className="capitalize">{puppy.gender}</span>
              <span className="mx-2">•</span>
              <span className="capitalize">{puppy.size} size</span>
            </div>
            
            <div className="mt-6">
              <div className="flex space-x-2 mb-6">
                <button
                  className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                    activeTab === 'about'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab('about')}
                >
                  About {puppy.name}
                </button>
                <button
                  className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                    activeTab === 'adoption'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab('adoption')}
                >
                  Adoption Info
                </button>
              </div>
              
              {activeTab === 'about' ? (
                <div className="space-y-6">
                  <div>
                    <h2 className="flex items-center text-xl font-semibold text-gray-900 mb-2">
                      <Info className="w-5 h-5 mr-2 text-blue-500" />
                      About
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{puppy.description}</p>
                  </div>
                  
                  <div>
                    <h2 className="flex items-center text-xl font-semibold text-gray-900 mb-2">
                      <Star className="w-5 h-5 mr-2 text-blue-500" />
                      Characteristics
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {puppy.characteristics.map((trait, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center p-3 bg-gray-50 rounded-md">
                      <Paw className="w-5 h-5 mr-3 text-blue-500" />
                      <div>
                        <div className="text-sm text-gray-500">Breed</div>
                        <div className="font-medium">{puppy.breed}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-md">
                      <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                      <div>
                        <div className="text-sm text-gray-500">Age</div>
                        <div className="font-medium">{puppy.age}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-md">
                      <Heart className="w-5 h-5 mr-3 text-blue-500" />
                      <div>
                        <div className="text-sm text-gray-500">Gender</div>
                        <div className="font-medium capitalize">{puppy.gender}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-md">
                      <Ruler className="w-5 h-5 mr-3 text-blue-500" />
                      <div>
                        <div className="text-sm text-gray-500">Size</div>
                        <div className="font-medium capitalize">{puppy.size}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Adoption Fee
                    </h2>
                    <p className="text-gray-600">
                      The adoption fee for {puppy.name} is $250, which includes:
                    </p>
                    <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                      <li>Spay/neuter procedure</li>
                      <li>All age-appropriate vaccinations</li>
                      <li>Microchip and registration</li>
                      <li>Initial vet examination</li>
                      <li>Starter kit of food and supplies</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Requirements
                    </h2>
                    <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                      <li>Complete adoption application</li>
                      <li>Home visit or virtual home check</li>
                      <li>Reference checks</li>
                      <li>Agreement to post-adoption follow-ups</li>
                    </ul>
                  </div>
                </div>
              )}
              
              <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
                <Link
                  to={`/adopt?puppy=${puppy.id}`}
                  className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                    puppy.status === 'available'
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  } mb-3 sm:mb-0 transition-all duration-200`}
                  aria-disabled={puppy.status !== 'available'}
                >
                  {puppy.status === 'available' ? 'Start Adoption Process' : 'Currently Pending'}
                </Link>
                <button
                  className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
                >
                  Ask About {puppy.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyDetail;