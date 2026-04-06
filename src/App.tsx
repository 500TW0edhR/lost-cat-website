import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Strengths from './components/Strengths';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Closing from './components/Closing';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white font-sans text-gray-900 selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Strengths />
        <Process />
        <Pricing />
        <Testimonials />
        <Closing />
      </main>
      <Footer />
      <StickyCTA />
      <ScrollToTop />
    </div>
  );
}
