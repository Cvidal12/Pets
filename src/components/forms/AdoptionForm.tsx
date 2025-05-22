import { useState } from 'react';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AdoptionFormProps {
  puppyId?: string;
}

const AdoptionForm = ({ puppyId }: AdoptionFormProps) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Home Environment
    homeType: '',
    ownRent: '',
    hasYard: '',
    fencedYard: '',
    householdMembers: '',
    otherPets: '',
    petsDetails: '',
    
    // Experience & Expectations
    previousDogs: '',
    reasonForAdopting: '',
    exercisePlan: '',
    trainingPlan: '',
    workSchedule: '',
    careArrangements: '',
    
    // Agreement
    termsAgreed: false,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/adoption-confirmation');
    }, 1500);
  };
  
  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-1" />
        Back
      </button>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-xl font-bold text-white">Adoption Application</h1>
          <p className="text-blue-100 mt-1">
            {puppyId ? "You're one step closer to welcoming a new family member!" : "Find your perfect puppy match!"}
          </p>
        </div>
        
        <div className="p-6">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {['Personal Information', 'Home Environment', 'Experience & Expectations', 'Review & Submit'].map((label, index) => (
                <div key={label} className="flex flex-col items-center">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    step > index + 1 ? 'bg-green-500' : step === index + 1 ? 'bg-blue-600' : 'bg-gray-200'
                  } text-white font-medium text-sm`}>
                    {step > index + 1 ? '✓' : index + 1}
                  </div>
                  <span className={`text-xs mt-2 ${step === index + 1 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full rounded"></div>
              <div 
                className="absolute top-0 left-0 h-1 bg-blue-600 rounded transition-all duration-300" 
                style={{ width: `${(step - 1) * 33.33}%` }}
              ></div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 2: Home Environment */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Home Environment</h2>
                
                <div>
                  <label htmlFor="homeType" className="block text-sm font-medium text-gray-700 mb-1">
                    What type of home do you live in? *
                  </label>
                  <select
                    id="homeType"
                    name="homeType"
                    value={formData.homeType}
                    onChange={handleChange}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="mobile">Mobile Home</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="ownRent" className="block text-sm font-medium text-gray-700 mb-1">
                    Do you own or rent your home? *
                  </label>
                  <select
                    id="ownRent"
                    name="ownRent"
                    value={formData.ownRent}
                    onChange={handleChange}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="own">Own</option>
                    <option value="rent">Rent</option>
                    <option value="other">Other arrangement</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="hasYard" className="block text-sm font-medium text-gray-700 mb-1">
                    Do you have a yard? *
                  </label>
                  <select
                    id="hasYard"
                    name="hasYard"
                    value={formData.hasYard}
                    onChange={handleChange}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                
                {formData.hasYard === 'yes' && (
                  <div>
                    <label htmlFor="fencedYard" className="block text-sm font-medium text-gray-700 mb-1">
                      Is your yard fully fenced? *
                    </label>
                    <select
                      id="fencedYard"
                      name="fencedYard"
                      value={formData.fencedYard}
                      onChange={handleChange}
                      required={formData.hasYard === 'yes'}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select an option</option>
                      <option value="yes">Yes, fully fenced</option>
                      <option value="partial">Partially fenced</option>
                      <option value="no">Not fenced</option>
                    </select>
                  </div>
                )}
                
                <div>
                  <label htmlFor="householdMembers" className="block text-sm font-medium text-gray-700 mb-1">
                    How many people live in your household (including yourself)? *
                  </label>
                  <input
                    type="number"
                    id="householdMembers"
                    name="householdMembers"
                    value={formData.householdMembers}
                    onChange={handleChange}
                    min="1"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="otherPets" className="block text-sm font-medium text-gray-700 mb-1">
                    Do you have other pets? *
                  </label>
                  <select
                    id="otherPets"
                    name="otherPets"
                    value={formData.otherPets}
                    onChange={handleChange}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                
                {formData.otherPets === 'yes' && (
                  <div>
                    <label htmlFor="petsDetails" className="block text-sm font-medium text-gray-700 mb-1">
                      Please tell us about your current pets (type, age, temperament) *
                    </label>
                    <textarea
                      id="petsDetails"
                      name="petsDetails"
                      value={formData.petsDetails}
                      onChange={handleChange}
                      required={formData.otherPets === 'yes'}
                      rows={4}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                )}
              </div>
            )}
            
            {/* Step 3: Experience & Expectations */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Experience & Expectations</h2>
                
                <div>
                  <label htmlFor="previousDogs" className="block text-sm font-medium text-gray-700 mb-1">
                    Have you owned dogs before? *
                  </label>
                  <select
                    id="previousDogs"
                    name="previousDogs"
                    value={formData.previousDogs}
                    onChange={handleChange}
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="current">Yes, I currently own dog(s)</option>
                    <option value="past">Yes, in the past</option>
                    <option value="never">No, this will be my first dog</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="reasonForAdopting" className="block text-sm font-medium text-gray-700 mb-1">
                    Why do you want to adopt a puppy? *
                  </label>
                  <textarea
                    id="reasonForAdopting"
                    name="reasonForAdopting"
                    value={formData.reasonForAdopting}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="exercisePlan" className="block text-sm font-medium text-gray-700 mb-1">
                    How do you plan to exercise your puppy? *
                  </label>
                  <textarea
                    id="exercisePlan"
                    name="exercisePlan"
                    value={formData.exercisePlan}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="trainingPlan" className="block text-sm font-medium text-gray-700 mb-1">
                    What are your plans for training your new puppy? *
                  </label>
                  <textarea
                    id="trainingPlan"
                    name="trainingPlan"
                    value={formData.trainingPlan}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="workSchedule" className="block text-sm font-medium text-gray-700 mb-1">
                    Describe your typical work schedule or routine *
                  </label>
                  <textarea
                    id="workSchedule"
                    name="workSchedule"
                    value={formData.workSchedule}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="careArrangements" className="block text-sm font-medium text-gray-700 mb-1">
                    How will you care for the puppy when you're away from home (work, travel, etc.)? *
                  </label>
                  <textarea
                    id="careArrangements"
                    name="careArrangements"
                    value={formData.careArrangements}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
              </div>
            )}
            
            {/* Step 4: Review and Submit */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Review & Submit</h2>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Application Summary</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Contact Information</h4>
                      <p className="text-gray-900">{formData.firstName} {formData.lastName}</p>
                      <p className="text-gray-500">{formData.email}</p>
                      <p className="text-gray-500">{formData.phone}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Address</h4>
                      <p className="text-gray-900">{formData.address}</p>
                      <p className="text-gray-500">
                        {formData.city}, {formData.state} {formData.zipCode}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Home Environment</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <p className="text-gray-900">
                        <span className="text-gray-500">Home type:</span> {formData.homeType}
                      </p>
                      <p className="text-gray-900">
                        <span className="text-gray-500">Own/Rent:</span> {formData.ownRent}
                      </p>
                      <p className="text-gray-900">
                        <span className="text-gray-500">Yard:</span> {formData.hasYard === 'yes' ? `Yes (${formData.fencedYard === 'yes' ? 'Fully fenced' : formData.fencedYard === 'partial' ? 'Partially fenced' : 'Not fenced'})` : 'No'}
                      </p>
                      <p className="text-gray-900">
                        <span className="text-gray-500">Household members:</span> {formData.householdMembers}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Experience & Expectations</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <p className="text-gray-900">
                        <span className="text-gray-500">Previous dog ownership:</span> {formData.previousDogs}
                      </p>
                      <p className="text-gray-900">
                        <span className="text-gray-500">Reason for adopting:</span> {formData.reasonForAdopting}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="termsAgreed"
                      name="termsAgreed"
                      type="checkbox"
                      checked={formData.termsAgreed}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="termsAgreed" className="font-medium text-gray-700">
                      I certify that all information provided is true and accurate *
                    </label>
                    <p className="text-gray-500">
                      I understand that false information may result in the denial of my application.
                      I also understand that submitting an application does not guarantee approval and that
                      additional steps may be required before adoption is finalized.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Previous
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
                >
                  Next
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.termsAgreed}
                  className="ml-auto flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdoptionForm;