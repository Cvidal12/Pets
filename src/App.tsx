import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import PuppiesPage from './pages/PuppiesPage';
import PuppyDetailPage from './pages/PuppyDetailPage';
import AdoptionProcessPage from './pages/AdoptionProcessPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import AdoptPage from './pages/AdoptPage';
import ContactPage from './pages/ContactPage';
import AdoptionConfirmationPage from './pages/AdoptionConfirmationPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/puppies" element={<PuppiesPage />} />
              <Route path="/puppies/:id" element={<PuppyDetailPage />} />
              <Route path="/adoption-process" element={<AdoptionProcessPage />} />
              <Route path="/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/adopt" element={<AdoptPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/adoption-confirmation" element={<AdoptionConfirmationPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;