import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const AdoptionConfirmationPage = () => {
  return (
    <>
      <Helmet>
        <title>Application Received | PuppyMatch</title>
        <meta name="description" content="Thank you for submitting your adoption application. We've received your information and will be in touch soon." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-600 px-6 py-12 text-center">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-white">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="mt-4 text-3xl font-extrabold text-white">
                Application Received!
              </h1>
              <p className="mt-2 text-lg text-green-100">
                Thank you for taking the first step toward adopting a puppy.
              </p>
            </div>
            
            <div className="px-6 py-8 sm:p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">What Happens Next?</h2>
                <p className="mt-2 text-gray-600">
                  We've received your application and will begin the review process.
                  Here's what you can expect:
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Application Review</h3>
                    <p className="mt-1 text-gray-600">
                      Our team will review your application within 1-2 business days.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Initial Contact</h3>
                    <p className="mt-1 text-gray-600">
                      We'll reach out to you via email or phone to discuss your application
                      and answer any questions you might have.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Home Check</h3>
                    <p className="mt-1 text-gray-600">
                      We'll schedule a virtual or in-person home check to ensure your
                      living environment is suitable for a puppy.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Meet & Greet</h3>
                    <p className="mt-1 text-gray-600">
                      If your application is approved, we'll arrange for you to meet the puppy
                      you're interested in adopting.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                      5
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Finalize Adoption</h3>
                    <p className="mt-1 text-gray-600">
                      Complete the adoption process, including signing the adoption agreement
                      and paying the adoption fee.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-200 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Have questions while you wait?
                </h3>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    to="/faq"
                    className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-all duration-200"
                  >
                    View FAQ
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-8 sm:px-10 text-center">
              <p className="text-gray-600 mb-4">
                While you wait, why not browse more adorable puppies available for adoption?
              </p>
              <Link
                to="/puppies"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View more puppies <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdoptionConfirmationPage;