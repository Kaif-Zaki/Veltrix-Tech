import { useState } from 'react';
import { CornerCross } from './CornerCross';
import { SpotlightCard } from './SpotlightCard';
import { TECH_STACK } from '../data/portfolioData';
import { 
  Code2, FileCode, Layers, Palette, Cpu, Server, Zap, Network, 
  Database, HardDrive, Box, Container, Cloud, Brain, Bot, Activity,
  Share2, Search, Target, TrendingUp 
} from 'lucide-react';

export const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Growth & Ads', 'Backend & Cloud', 'Databases & DevOps'];

  const iconMap: Record<string, React.FC<{ size?: number; color?: string }>> = {
    Code2, FileCode, Layers, Palette, Cpu, Server, Zap, Network,
    Database, HardDrive, Box, Container, Cloud, Brain, Bot, Activity,
    Share2, Search, Target, TrendingUp
  };

  const filteredItems = activeCategory === 'All'
    ? TECH_STACK
    : TECH_STACK.filter(item => item.category === activeCategory);

  return (
    <section 
      id="stack"
      style={{
        paddingTop: '90px',
        paddingBottom: '90px',
        position: 'relative',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="reveal-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
          <div className="section-tag">
            <span>06 // Tech Stack & Architecture</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <h2 className="title-section">
              Battle-tested tools,{' '}
              <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>chosen for speed, safety, and scale.</span>
            </h2>

            {/* Filter Tabs */}
            <div 
              className="tech-filter-tabs"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '4px',
                borderRadius: '9999px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    border: 'none',
                    background: activeCategory === cat ? '#ffffff' : 'transparent',
                    color: activeCategory === cat ? '#000000' : 'var(--text-muted)',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Grid with Spotlight */}
        <div 
          className="tech-items-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
          }}
        >
          {filteredItems.map((tech, idx) => {
            const IconComponent = iconMap[tech.iconName] || Code2;
            return (
              <div 
                key={idx}
                className={`reveal-on-scroll reveal-delay-${(idx % 4) + 1}`}
              >
                <SpotlightCard
                  style={{
                    padding: '20px 18px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    height: '100%',
                  }}
                >
                  <CornerCross positions={['tl', 'tr', 'bl', 'br']} />

                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent size={18} color="var(--accent-emerald)" />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>
                        {tech.name}
                      </span>
                      <span style={{ fontSize: '10px', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
                        {tech.category}
                      </span>
                    </div>
                    <p style={{ fontSize: '12px', lineHeight: '1.5', color: 'var(--text-muted)', marginTop: '4px' }}>
                      {tech.role}
                    </p>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .tech-filter-tabs {
            border-radius: 14px !important;
            width: 100% !important;
          }
          .tech-items-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
