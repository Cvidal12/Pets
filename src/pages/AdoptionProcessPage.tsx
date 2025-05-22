import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ClipboardList, Home, Heart, CreditCard, PartyPopper, Check, X } from 'lucide-react';
import { adoptionSteps } from '../data/puppies';

const AdoptionProcessPage = () => {
  const icons = {
    'clipboard-list': ClipboardList,
    'home': Home,
    'heart-handshake': Heart,
    'credit-card': CreditCard,
    'party-popper': PartyPopper
  };
  
  const eligibilityRequirements = [
    { requirement: 'Must be at least 21 years of age', met: true },
    { requirement: 'Stable living situation', met: true },
    { requirement: 'Permission from landlord if renting', met: true },
    { requirement: 'Ability to provide proper care, training, and medical attention', met: true },
    { requirement: 'Secure, safe environment for a puppy', met: true },
    { requirement: 'No history of animal abuse or neglect', met: true },
    { requirement: 'All household members must agree to adoption', met: true },
    { requirement: 'Existing pets must be up-to-date on vaccinations', met: true }
  ];
  
  const faqItems = [
    {
      question: 'How long does the adoption process take?',
      answer: 'The adoption process typically takes 1-2 weeks from application submission to bringing your puppy home. This includes application review, home check, and meet & greet.'
    },
    {
      question: 'What is included in the adoption fee?',
      answer: 'The adoption fee covers spay/neuter surgery, age-appropriate vaccinations, microchipping, deworming, flea/tick treatment, and a basic health check.'
    },
    {
      question: 'Can I adopt if I live in an apartment?',
      answer: 'Yes! We consider apartment dwellers as potential adopters. We\'ll match you with a puppy that suits apartment living and ensure you have plans for adequate exercise.'
    },
    {
      question: 'Do you adopt to families outside your area?',
      answer: 'We primarily adopt to families within a 100-mile radius to ensure we can conduct home visits and provide support. Special exceptions may be made on a case-by-case basis.'
    },
    {
      question: 'What if the adoption doesn\'t work out?',
      answer: 'We have a 30-day trial period. If the adoption isn\'t working for any reason, you can return the puppy to us. We always want what\'s best for both the puppy and the family.'
    },
    {
      question: 'Do you provide post-adoption support?',
      answer: 'Absolutely! We offer ongoing support, training resources, and advice. We\'re committed to ensuring a successful transition and lifelong relationship.'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Adoption Process | PuppyMatch</title>
        <meta name="description" content="Learn about our puppy adoption process, from application to bringing your new family member home. We've designed a simple, thorough process to ensure successful matches." />
      </Helmet>
      
      <div className="bg-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Our Adoption Process
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            We've created a simple and thorough process to make sure our puppies
            find the perfect forever homes.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Five Simple Steps
          </h2>
          
          <div className="relative mt-12 pt-4">
            {/* Line connecting steps */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-blue-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {adoptionSteps.map((step) => {
                const IconComponent = icons[step.icon as keyof typeof icons] || Heart;
                
                return (
                  <div key={step.id} className="relative flex flex-col items-center text-center">
                    <div className="z-10 flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-4 transform transition-transform duration-300 hover:scale-110">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white mb-3">
                        {step.id}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Adoption Requirements
            </h2>
            
            <p className="text-gray-600 mb-8">
              To ensure our puppies go to loving, responsible homes, we have certain requirements
              that potential adopters must meet. These help us make sure each puppy is matched
              with a family that can provide proper care for their entire life.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {eligibilityRequirements.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="ml-3 text-gray-700">{item.requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Find Your New Family Member?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start your journey to finding the perfect puppy companion today.
            Browse our available puppies or begin your adoption application.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/puppies"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
            >
              Browse Available Puppies
            </Link>
            <Link
              to="/adopt"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-blue-100 hover:bg-blue-200 transition-all duration-200"
            >
              Start Adoption Application
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdoptionProcessPage;