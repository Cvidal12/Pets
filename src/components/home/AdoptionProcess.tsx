import { Link } from 'react-router-dom';
import { ClipboardList, Home, Heart, CreditCard, PartyPopper } from 'lucide-react';
import { adoptionSteps } from '../../data/puppies';

const icons = {
  'clipboard-list': ClipboardList,
  'home': Home,
  'heart-handshake': Heart,
  'credit-card': CreditCard,
  'party-popper': PartyPopper
};

const AdoptionProcess = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our <span className="text-blue-600">Adoption Process</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We've made adopting a puppy simple and straightforward, ensuring both you and your new companion find the perfect match.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Line connecting steps */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {adoptionSteps.map((step) => {
                const IconComponent = icons[step.icon as keyof typeof icons] || Heart;
                
                return (
                  <div key={step.id} className="relative flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4 relative z-10 transform transition-transform duration-300 hover:scale-110">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white mb-2">
                        {step.id}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/adoption-process"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            >
              Learn More About Adoption
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionProcess;