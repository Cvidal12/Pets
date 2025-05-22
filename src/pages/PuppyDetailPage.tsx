import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { puppies } from '../data/puppies';
import { Puppy } from '../types';
import PuppyDetail from '../components/puppies/PuppyDetail';

const PuppyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [puppy, setPuppy] = useState<Puppy | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    
    setTimeout(() => {
      const foundPuppy = puppies.find(p => p.id === id);
      
      if (foundPuppy) {
        setPuppy(foundPuppy);
      }
      
      setLoading(false);
    }, 500);
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-lg bg-gray-200 h-16 w-48 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    );
  }
  
  if (!puppy) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Puppy Not Found</h2>
        <p className="text-gray-600 mb-6">We couldn't find the puppy you're looking for.</p>
        <button
          onClick={() => navigate('/puppies')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          View All Puppies
        </button>
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{`${puppy.name} | PuppyMatch`}</title>
        <meta name="description" content={`Meet ${puppy.name}, a ${puppy.age} ${puppy.breed} puppy available for adoption. ${puppy.description.substring(0, 100)}...`} />
      </Helmet>
      
      <main className="bg-gray-50 py-6">
        <PuppyDetail puppy={puppy} />
      </main>
    </>
  );
};

export default PuppyDetailPage;