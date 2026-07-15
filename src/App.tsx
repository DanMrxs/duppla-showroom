import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Showroom from './components/Showroom';
import About from './components/About';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Collection />
      <Showroom />
      <About />
      <InstagramFeed />
      <Footer />
    </div>
  );
}

export default App;
