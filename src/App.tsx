import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { TechStack } from './components/TechStack';
import { Journal } from './components/Journal';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ArticleModal } from './components/ArticleModal';
import { useScrollReveal } from './hooks/useScrollReveal';

import type { Project, Article } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>('Starter Package (5 Pages)');

  // Activate Chamath Dilshan scroll-reveal & section tracking
  const { scrollProgress, activeSection } = useScrollReveal();

  const scrollToContact = (planOrServiceTitle?: string) => {
    if (planOrServiceTitle) {
      setSelectedPlan(planOrServiceTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#000000] text-[#ededed] min-h-screen relative selection:bg-white selection:text-black">
      {/* Background Ambient Grids */}
      <div 
        className="bg-grid" 
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.65,
        }} 
      />

      {/* Main Content Layer */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar 
          onOpenContact={() => scrollToContact()} 
          scrollProgress={scrollProgress}
          activeSection={activeSection}
        />
        
        <main id="main-content">
          <Hero onOpenContact={() => scrollToContact()} />
          <About onOpenContact={() => scrollToContact()} />
          <Services onOpenContact={() => scrollToContact()} />
          <Projects onSelectProject={(project) => setSelectedProject(project)} />
          <Testimonials />
          <TechStack />
          <Journal onSelectArticle={(article) => setSelectedArticle(article)} />
          <FAQ />
          <Contact initialPlan={selectedPlan} />
        </main>

        <Footer />
      </div>

      {/* Modals */}
      <CaseStudyModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onInquire={(title) => scrollToContact(`Case Study Ref: ${title}`)}
      />

      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
    </div>
  );
}

export default App;
