import { useEffect, useState } from 'react';

export function useScrollReveal() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // 1. Intersection Observer for reveal-on-scroll
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, we can keep it revealed for smooth reading
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    });

    const revealElements = document.querySelectorAll('.reveal-on-scroll, [data-reveal]');
    revealElements.forEach((el) => observer.observe(el));

    // Observe dynamic DOM changes (e.g. tabs or filter changes)
    const mutationObserver = new MutationObserver(() => {
      const unrevealed = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed), [data-reveal]:not(.is-revealed)');
      unrevealed.forEach((el) => observer.observe(el));
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // 2. Active Section & Scroll Progress Tracker
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);

      const sections = ['home', 'about', 'services', 'work', 'testimonials', 'stack', 'journal', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollProgress, activeSection };
}

