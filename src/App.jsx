import React, { useState, useEffect } from 'react';
import CareerDoors from './components/CareerDoors';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const getInitialTheme = () => {
    try {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    } catch (e) {
      // fallback
    }
    return 'dark';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch (e) {
      // storage unavailable
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const normalizeRole = (role) => (role === 'fullstack' ? 'sde' : role);

  const getInitialView = () => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('devops')) return 'devops';
    if (hash.includes('fullstack') || hash.includes('sde')) return 'sde';
    return 'doors';
  };

  const [currentView, setCurrentView] = useState(getInitialView);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('devops')) {
        setCurrentView('devops');
      } else if (hash.includes('fullstack') || hash.includes('sde')) {
        setCurrentView('sde');
      } else if (hash.includes('doors') || hash === '' || hash === '#') {
        setCurrentView('doors');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleSelectRole = (role) => {
    const normalizedRole = normalizeRole(role);
    setCurrentView(normalizedRole);
    window.location.hash = `#${normalizedRole}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSwitchRole = (newRole) => {
    const normalizedRole = normalizeRole(newRole);
    setCurrentView(normalizedRole);
    window.location.hash = `#${normalizedRole}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDoors = () => {
    setCurrentView('doors');
    window.location.hash = '#doors';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'doors') {
    return (
      <CareerDoors
        onSelectRole={handleSelectRole}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    );
  }

  return (
    <div className="portfolio-page-background min-h-screen overflow-x-hidden text-slate-800 dark:text-slate-200">
      <Navbar
        currentRole={currentView}
        onSwitchRole={handleSwitchRole}
        onBackToDoors={handleBackToDoors}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero currentRole={currentView} />
        <About currentRole={currentView} />
        <Education currentRole={currentView} />
        <Projects currentRole={currentView} />
        <Skills currentRole={currentView} />
        <Experience currentRole={currentView} />
        <Certifications currentRole={currentView} />
        <Resume currentRole={currentView} />
        <Contact currentRole={currentView} />
      </main>
      <Footer currentRole={currentView} />
    </div>
  );
}
