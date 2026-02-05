import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Entrepreneurship from './articles/entrepreneurship';
import Development from './articles/development';
import Insights from './articles/insights';
import Tech from './articles/tech';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
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
              <Articles />
              <Contact />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/articles/entrepreneurship" element={<Entrepreneurship />} />
        <Route path="/articles/development" element={<Development />} />
        <Route path="/articles/insights" element={<Insights />} />
        <Route path="/articles/tech" element={<Tech />} />
      </Routes>
    </Router>
  );
}

export default App;

