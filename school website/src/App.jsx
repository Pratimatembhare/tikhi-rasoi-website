import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PrincipalWelcome from './components/PrincipalWelcome';
import Academics from './components/Academics';
import Highlights from './components/Highlights';
import AdmissionModal from './components/AdmissionModal';
import ExploreModal from './components/ExploreModal';

import Contact from './components/Contact';
import AdmissionInfo from './components/AdmissionInfo';

function App() {
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  return (
    <div className="app">
      <Navbar onOpenAdmission={() => setIsAdmissionOpen(true)} />
      <main>
        <Hero 
          onOpenAdmission={() => setIsAdmissionOpen(true)}
          onOpenExplore={() => setIsExploreOpen(true)}
        />
        <PrincipalWelcome />
        <Academics />
        <Highlights />
        <AdmissionInfo onOpenAdmission={() => setIsAdmissionOpen(true)} />
        <Contact />
      </main>
      
      {/* Footer can go here later */}
      <footer style={{ backgroundColor: 'var(--primary-blue)', color: 'white', padding: '2rem 0', textAlign: 'center' }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Apollo Convent Higher Secondary School. All Rights Reserved.</p>
        </div>
      </footer>

      <AdmissionModal 
        isOpen={isAdmissionOpen} 
        onClose={() => setIsAdmissionOpen(false)} 
      />
      
      <ExploreModal 
        isOpen={isExploreOpen} 
        onClose={() => setIsExploreOpen(false)} 
      />
    </div>
  );
}

export default App;
