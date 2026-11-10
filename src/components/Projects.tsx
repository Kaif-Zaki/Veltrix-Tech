import { useState, type CSSProperties } from 'react';
import { CornerCross } from './CornerCross';
import { SpotlightCard } from './SpotlightCard';
import { PROJECTS } from '../data/portfolioData';
import { useCardStackScroll } from '../hooks/useCardStackScroll';
import { 
  ArrowUpRight, Smartphone, UtensilsCrossed, Hotel, Compass, 
  ShoppingBag, Laptop
} from 'lucide-react';
import type { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects = ({ onSelectProject }: ProjectsProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'E-Commerce', 'Hospitality & Travel', 'Portfolio & UI'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const { containerRef, transforms } = useCardStackScroll(filteredProjects.length);

  // Project artwork themes matching Chamath Dilshan dark minimalist aesthetic
  const projectThemes: Record<string, { bg: string; accent: string; icon: typeof Smartphone }> = {
    'italk-mobile': { bg: 'radial-gradient(ellipse at 70% 30%, rgba(59, 130, 246, 0.14), transparent 70%), #07070a', accent: '#3b82f6', icon: Smartphone },
    'oncode-restaurant': { bg: 'radial-gradient(ellipse at 70% 30%, rgba(249, 115, 22, 0.14), transparent 70%), #07070a', accent: '#f97316', icon: UtensilsCrossed },
    'husash-resort': { bg: 'radial-gradient(ellipse at 70% 30%, rgba(234, 179, 8, 0.14), transparent 70%), #07070a', accent: '#eab308', icon: Hotel },
    'oncode-tours': { bg: 'radial-gradient(ellipse at 70% 30%, rgba(16, 185, 129, 0.14), transparent 70%), #07070a', accent: '#10b981', icon: Compass },
    'wp-shopefy': { bg: 'radial-gradient(ellipse at 70% 30%, rgba(168, 85, 247, 0.14), transparent 70%), #07070a', accent: '#a855f7', icon: ShoppingBag },
    'zaki-portfolio': { bg: 'radial-gradient(ellipse at 70% 30%, rgba(56, 189, 248, 0.14), transparent 70%), #07070a', accent: '#38bdf8', icon: Laptop },
  };

  return (
    <section 
      id="work"
      style={{
        paddingTop: '100px',
        paddingBottom: '120px',
        position: 'relative',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Top Section Tag */}
        <div className="reveal-on-scroll" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
          <div className="section-tag">
            <span>03 // Selected Work</span>
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--text-dim)' }}>
            LIVE PRODUCTION PORTFOLIO
          </span>
        </div>

        {/* Chamath Dilshan 2-Column Layout: Sticky Sidebar on Left, Stacking Cards on Right */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            alignItems: 'start',
          }}
          className="projects-layout-grid"
        >
          {/* Left Column: Sticky Sidebar on Desktop */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
            className="projects-sticky-sidebar"
          >
            <div>
              <h2 className="title-section" style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '14px' }}>
                Selected Work
              </h2>
              <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)', marginBottom: '16px' }} />
              <p className="text-body" style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
                High-converting websites, digital retail storefronts, and luxury hospitality booking portals shipped with sub-second performance.
              </p>
            </div>

            {/* Filter Tabs */}
            <div>
              <span style={{ display: 'block', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-dim)', marginBottom: '10px', textTransform: 'uppercase' }}>
                Filter By Domain
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '7px 14px',
                      borderRadius: '9999px',
                      border: '1px solid',
                      borderColor: activeCategory === cat ? '#ffffff' : 'var(--border-subtle)',
                      background: activeCategory === cat ? '#ffffff' : 'rgba(255, 255, 255, 0.03)',
                      color: activeCategory === cat ? '#000000' : 'var(--text-muted)',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Chamath-style Work With Us Link */}
            <div style={{ marginTop: '12px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
              <a
                href="#contact"
                className="group"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  transition: 'color 0.2s ease',
                }}
              >
                <span>Work With Us on Your Next Build</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Chamath Dilshan STICKY STACKING CARDS */}
          <div 
            ref={containerRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              position: 'relative',
            }}
            className="stacking-cards-container"
          >
            {filteredProjects.map((project, index) => {
              const theme = projectThemes[project.id] || { bg: '#08080a', accent: '#ffffff', icon: Laptop };
              const IconComp = theme.icon;
              const t = transforms[index] || { scale: 1, opacity: 1, brightness: 1 };
              
              // Progressive sticky top offset
              const stickyTop = 85 + index * 20;
              const stickyTopM = 70 + index * 12;

              return (
                <div
                  key={project.id}
                  className="stack-card-wrapper stack-rise"
                  style={{
                    position: 'sticky',
                    top: `${stickyTop}px`,
                    zIndex: index + 1,
                    transform: `scale(${t.scale})`,
                    transformOrigin: '50% 0',
                    filter: `brightness(${t.brightness})`,
                    opacity: t.opacity,
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease, opacity 0.4s ease',
                    '--sticky-mobile-top': `${stickyTopM}px`,
                  } as CSSProperties}
                >
                  <SpotlightCard
                    onClick={() => onSelectProject(project)}
                    className="project-spotlight-card"
                    style={{
                      padding: '36px 32px',
                      background: theme.bg,
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 20px -5px rgba(0, 0, 0, 0.7)',
                      cursor: 'pointer',
                    }}
                  >
                    <CornerCross positions={['tl', 'tr', 'bl', 'br']} />

                    {/* Top Meta Bar */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span 
                          style={{
                            padding: '4px 10px',
                            borderRadius: '6px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: `1px solid ${theme.accent}40`,
                            fontSize: '11px',
                            fontFamily: "'JetBrains Mono', monospace",
                            color: theme.accent,
                            fontWeight: 600,
                          }}
                        >
                          {project.badge}
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
                          {project.year}
                        </span>
                      </div>

                      <span style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
                        {project.client}
                      </span>
                    </div>

                    {/* Project Title & Tagline */}
                    <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '8px', letterSpacing: '-0.03em' }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '24px' }}>
                      {project.tagline}
                    </p>

                    {/* Architectural Canvas Preview Box with Real Screenshot */}
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '240px',
                        borderRadius: '12px',
                        background: '#040406',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        marginBottom: '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      className="project-canvas-preview"
                    >
                      {project.image ? (
                        <>
                          <img 
                            src={project.image} 
                            alt={`${project.title} Screenshot Preview`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'top center',
                              display: 'block',
                              transition: 'transform 0.4s ease',
                            }}
                            className="project-preview-img"
                          />
                          <div 
                            style={{
                              position: 'absolute',
                              inset: 0,
                              background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.7) 100%)',
                              pointerEvents: 'none',
                            }}
                          />
                        </>
                      ) : (
                        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                          <IconComp size={24} color={theme.accent} />
                          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>
                            {project.title} Architecture
                          </span>
                        </div>
                      )}

                      {/* Live Demo Quick Badge */}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            position: 'absolute',
                            bottom: '12px',
                            right: '12px',
                            zIndex: 4,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '6px 14px',
                            borderRadius: '9999px',
                            background: 'rgba(0, 0, 0, 0.85)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                            color: '#ffffff',
                            fontSize: '11px',
                            fontWeight: 600,
                            fontFamily: "'JetBrains Mono', monospace",
                            textDecoration: 'none',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#ffffff';
                            e.currentTarget.style.color = '#000000';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.85)';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                        >
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)' }}></span>
                          <span>VISIT LIVE SITE</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}

                      {/* Corner marks inside the canvas */}
                      <span className="cross-mark cross-tl" style={{ top: '8px', left: '8px' }}>+</span>
                      <span className="cross-mark cross-tr" style={{ top: '8px', right: '8px' }}>+</span>
                      <span className="cross-mark cross-bl" style={{ bottom: '8px', left: '8px' }}>+</span>
                      <span className="cross-mark cross-br" style={{ bottom: '8px', right: '8px' }}>+</span>
                    </div>

                    {/* Key Metrics Strip */}
                    <div 
                      className="project-metrics-strip"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '12px',
                        padding: '14px 18px',
                        borderRadius: '10px',
                        background: 'rgba(0, 0, 0, 0.4)',
                        border: '1px solid rgba(255, 255, 255, 0.07)',
                        marginBottom: '20px',
                      }}
                    >
                      {project.metrics.map((m, idx) => (
                        <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', fontFamily: "'JetBrains Mono', monospace" }}>
                            {m.value}
                          </span>
                          <span style={{ fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase', marginTop: '2px' }}>
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Tech Pills & Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {project.techStack.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            style={{
                              padding: '3px 8px',
                              borderRadius: '4px',
                              background: 'rgba(255, 255, 255, 0.04)',
                              fontSize: '11px',
                              fontFamily: "'JetBrains Mono', monospace",
                              color: 'var(--text-muted)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="btn-primary"
                            style={{
                              padding: '6px 14px',
                              fontSize: '12px',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                            }}
                          >
                            <span>Live Site</span>
                            <ArrowUpRight size={13} />
                          </a>
                        )}

                        <div 
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: 'var(--text-secondary)',
                            fontSize: '13px',
                            fontWeight: 600,
                          }}
                        >
                          <span>Case Study</span>
                          <ArrowUpRight size={15} />
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .projects-layout-grid {
            grid-template-columns: 320px 1fr !important;
          }
          .projects-sticky-sidebar {
            position: sticky !important;
            top: 110px !important;
          }
        }
        @media (max-width: 860px) {
          .stack-card-wrapper {
            top: var(--sticky-mobile-top, 70px) !important;
          }
        }
        @media (max-width: 640px) {
          .project-spotlight-card {
            padding: 24px 18px !important;
          }
          .project-metrics-strip {
            padding: 10px 12px !important;
            gap: 8px !important;
          }
        }
        @media (max-width: 420px) {
          .project-metrics-strip {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
        .project-preview-img:hover {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};
