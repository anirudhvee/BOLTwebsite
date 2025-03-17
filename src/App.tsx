import React, { useEffect, useRef } from 'react';
import { 
  Shield, 
  MapPin, 
  Bell, 
  Lock, 
  Cpu, 
  Users, 
  Play,
  ChevronDown,
  Bike
} from 'lucide-react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Components from './components/Components';
import Team from './components/Team';
import Demo from './components/Demo';
import Footer from './components/Footer';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      if (heroRef.current) {
        heroRef.current.style.setProperty('--mouse-x', `${x}`);
        heroRef.current.style.setProperty('--mouse-y', `${y}`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <NavBar />
      <main>
        <Hero ref={heroRef} />
        <Overview />
        <Features />
        <Architecture />
        <Components />
        <Team />
        <Demo />
      </main>
      <Footer />
    </div>
  );
}

export default App;