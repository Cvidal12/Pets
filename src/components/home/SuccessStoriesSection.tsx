import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { successStories } from '../../data/puppies';

const SuccessStoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Success <span className="text-orange-500">Stories</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Read about the happy endings our adopted puppies and their families have found together.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {successStories.map((story) => (
            <div 
              key={story.id} 
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <img 
                src={story.imageUrl}
                alt={`${story.puppyName} with ${story.familyName}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm font-medium text-orange-500 mb-1">
                  {story.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {story.puppyName} & {story.familyName}
                </h3>
                <p className="text-gray-600">
                  {story.story.length > 150 ? `${story.story.substring(0, 150)}...` : story.story}
                </p>
                <Link 
                  to={`/success-stories/${story.id}`}
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read full story <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/success-stories"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            View All Success Stories <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;