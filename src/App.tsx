import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Philosophy } from './components/Philosophy';
import { Events } from './components/events';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';
import { BrandStrip, Footer } from './components/Footer';
import ArticlePage from './articles/ArticlePage';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <div className="o-page">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Philosophy />
        <Education />
        <Events />
        <Articles />
        <BrandStrip />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
