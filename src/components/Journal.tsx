import { CornerCross } from './CornerCross';
import { SpotlightCard } from './SpotlightCard';
import { ARTICLES } from '../data/portfolioData';
import { ArrowUpRight, Clock } from 'lucide-react';
import type { Article } from '../types';

interface JournalProps {
  onSelectArticle: (article: Article) => void;
}

export const Journal = ({ onSelectArticle }: JournalProps) => {
  return (
    <section 
      id="journal"
      style={{
        paddingTop: '90px',
        paddingBottom: '90px',
        position: 'relative',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="reveal-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          <div className="section-tag">
            <span>07 // Technical Journal</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
            <h2 className="title-section">
              Engineering essays,{' '}
              <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>notes from the production trenches.</span>
            </h2>
            <p className="text-body" style={{ maxWidth: '640px' }}>
              Deep-dives into distributed system resilience, latency shaving, deterministic AI agents, and PostgreSQL query execution plans.
            </p>
          </div>
        </div>

        {/* Articles Grid with Spotlight */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          {ARTICLES.map((article, index) => (
            <div
              key={article.id}
              className={`reveal-on-scroll reveal-delay-${(index % 2) + 1}`}
            >
              <SpotlightCard
                onClick={() => onSelectArticle(article)}
                className="journal-article-card"
                style={{
                  padding: '28px 24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
              >
                <CornerCross positions={['tl', 'tr', 'bl', 'br']} />

                <div>
                  {/* Meta */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span 
                      style={{
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        fontSize: '11px',
                        fontFamily: "'JetBrains Mono', monospace",
                        color: 'var(--accent-emerald)',
                      }}
                    >
                      {article.category}
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '10px', lineHeight: '1.4' }}>
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '20px' }}>
                    {article.excerpt}
                  </p>
                </div>

                {/* Bottom: Date & Read CTA */}
                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
                    {article.date}
                  </span>

                  <span 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '4px', 
                      fontSize: '12px', 
                      fontWeight: 600, 
                      color: '#ffffff',
                    }}
                  >
                    <span>Read Article</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .journal-article-card {
            padding: 22px 18px !important;
          }
        }
      `}</style>
    </section>
  );
};
