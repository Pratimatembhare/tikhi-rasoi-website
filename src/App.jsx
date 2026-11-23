import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Placeholder components for other pages
const About = () => <div className="pt-32 min-h-screen text-center"><h1 className="text-4xl text-[#D4AF37]">About Us</h1></div>;
const Menu = () => <div className="pt-32 min-h-screen text-center"><h1 className="text-4xl text-[#D4AF37]">Our Menu</h1></div>;
const Gallery = () => <div className="pt-32 min-h-screen text-center"><h1 className="text-4xl text-[#D4AF37]">Gallery</h1></div>;
const Reservation = () => <div className="pt-32 min-h-screen text-center"><h1 className="text-4xl text-[#D4AF37]">Reservation</h1></div>;
const Contact = () => <div className="pt-32 min-h-screen text-center"><h1 className="text-4xl text-[#D4AF37]">Contact Us</h1></div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0B0B0B]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
