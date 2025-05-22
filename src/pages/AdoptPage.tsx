import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AdoptionForm from '../components/forms/AdoptionForm';

const AdoptPage = () => {
  const [searchParams] = useSearchParams();
  const puppyId = searchParams.get('puppy');
  
  return (
    <>
      <Helmet>
        <title>Adopt a Puppy | PuppyMatch</title>
        <meta name="description" content="Start your puppy adoption journey. Our simple application process is the first step to welcoming a new furry family member into your home." />
      </Helmet>
      
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Adopt a <span className="text-blue-600">Puppy</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Complete the adoption application below to start your journey toward
            bringing home a new furry family member.
          </p>
        </div>
      </div>
      
      <div className="bg-white py-8">
        <AdoptionForm puppyId={puppyId || undefined} />
      </div>
    </>
  );
};

export default AdoptPage;