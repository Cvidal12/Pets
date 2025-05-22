import { Helmet } from 'react-helmet-async';
import { successStories } from '../data/puppies';

const SuccessStoriesPage = () => {
  return (
    <>
      <Helmet>
        <title>Success Stories | PuppyMatch</title>
        <meta name="description" content="Read heartwarming stories of puppies who found their forever homes through PuppyMatch. See the impact of our adoption program." />
      </Helmet>
      
      <div className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Success <span className="text-orange-500">Stories</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Read heartwarming stories from families who have adopted our puppies.
            These success stories represent our mission in action.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {successStories.map((story, index) => (
            <div 
              key={story.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12`}
            >
              <div className="md:w-1/2">
                <img 
                  src={story.imageUrl}
                  alt={`${story.puppyName} with ${story.familyName}`}
                  className="w-full h-96 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="text-sm font-medium text-orange-500 mb-2">
                  {story.date}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {story.puppyName} & {story.familyName}
                </h2>
                <div className="prose prose-blue max-w-none text-gray-600">
                  <p>{story.story}</p>
                  <p className="mt-4 italic">
                    "Adopting {story.puppyName} was the best decision we ever made. Our family feels complete now."
                    <br />— {story.familyName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Share Your Story
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Have you adopted a puppy from us? We'd love to hear your story and share it with our community!
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-all duration-200">
            Submit Your Story
          </button>
        </div>
      </div>
    </>
  );
};

export default SuccessStoriesPage;