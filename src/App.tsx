import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Philosophy } from './components/Philosophy';
import { Events } from './components/events';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Philosophy />
        <Events />
        <Articles/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;