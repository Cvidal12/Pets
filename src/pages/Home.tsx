import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import FeaturedPuppies from '../components/home/FeaturedPuppies';
import AdoptionProcess from '../components/home/AdoptionProcess';
import SuccessStoriesSection from '../components/home/SuccessStoriesSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PuppyMatch | Find Your Perfect Puppy Companion</title>
        <meta name="description" content="PuppyMatch connects loving families with puppies in need of forever homes. Find your perfect puppy companion today." />
      </Helmet>
      
      <main>
        <HeroSection />
        <FeaturedPuppies />
        <AdoptionProcess />
        <SuccessStoriesSection />
        <CTASection />
      </main>
    </>
  );
};

export default Home;