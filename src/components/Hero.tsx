import type { CSSProperties } from 'react';
import { ArrowUpRight, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, METRICS } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero = ({ onOpenContact }: HeroProps) => {
  const tickerItems = [
    'Custom Website Development',
    'Meta Ads (Facebook & Instagram)',
    'Google Ads & Search Campaigns',
    'High-Converting Landing Pages',
    'SEO & Organic Ranking',
    'WhatsApp Lead Funnels',
    'React 19 & TypeScript',
    'Next.js 15 & Vite',
    'Custom Admin Panels',
    'Payment Gateway Integration',
    'Google Analytics 4 & Pixel',
    'Audience Targeting & Retargeting',
    'Sub-50ms Performance Tuning',
    'Monthly Growth Optimization',
  ];

  return (
    <section 
      id="home"
      style={{
        position: 'relative',
        paddingTop: '135px',
        paddingBottom: '60px',
        overflow: 'hidden',
      }}
    >
      <div className="ambient-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Meta Line: Chamath Dilshan aesthetic */}
        <div 
          className="reveal-on-scroll"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '28px',
          }}
        >
          <div className="section-tag">
            <span className="pulse-dot"></span>
            <span>Studio // Web Development & Digital Growth</span>
          </div>

          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: 'var(--text-dim)',
            }}
          >
            <span>[EST. {COMPANY_INFO.established}]</span>
            <span>•</span>
            <span style={{ color: 'var(--accent-emerald)' }}>● PRODUCTION READY</span>
          </div>
        </div>

        {/* Giant Fluid Kinetic Wordmark: V E L T R I X (Rising Letter Animation) */}
        <div style={{ marginBottom: '32px', overflow: 'hidden' }}>
          <div 
            className="hero-wordmark"
            aria-label="VELTRIX"
          >
            {COMPANY_INFO.wordmark.split('').map((char, index) => (
              <span 
                key={index} 
                className="wordmark-letter"
                style={{
                  '--i': index,
                  textShadow: '0 0 45px rgba(255, 255, 255, 0.1)',
                } as CSSProperties}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Main Headline & Narrative */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
            marginBottom: '48px',
          }}
          className="hero-grid"
        >
          <div className="reveal-on-scroll reveal-delay-1">
            <h1 className="title-hero" style={{ maxWidth: '920px' }}>
              Software made for tomorrow,{' '}
              <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>
                engineered for unstoppable business growth.
              </span>
            </h1>
          </div>

          <div 
            className="reveal-on-scroll reveal-delay-2"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
              maxWidth: '680px',
            }}
          >
            <p className="text-lead">
              Share your vision, set the target, and watch your business scale. 
              We engineer high-converting, mobile-responsive websites and execute ROI-driven 
              digital advertising campaigns that flood your pipeline with qualified customers.
            </p>

            <div className="hero-cta-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <button 
                type="button"
                onClick={onOpenContact} 
                className="btn-primary"
                style={{ padding: '12px 28px', fontSize: '15px' }}
              >
                <span>Work With Us</span>
                <ArrowUpRight size={16} />
              </button>

              <a 
                href="#services" 
                className="btn-secondary"
                style={{ padding: '12px 24px', fontSize: '15px' }}
              >
                <span>View Web & Marketing Packages</span>
                <ChevronDown size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Chamath Dilshan Signature 3-Formula Bar with Interactive Spotlight */}
        <div className="reveal-on-scroll reveal-delay-3" style={{ marginBottom: '48px' }}>
          <SpotlightCard
            className="hero-formula-card"
            style={{
              padding: '20px 24px',
              background: 'rgba(8, 8, 10, 0.9)',
            }}
          >
            <div 
              style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={16} color="var(--accent-emerald)" />
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>Growth & Engineering Formula:</span>
              </div>

              <div 
                className="hero-formula-items"
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  alignItems: 'center', 
                  gap: '10px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                }}
              >
                <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-white)' }}>
                  (High-Converting Website)
                </span>
                <span style={{ color: 'var(--text-dim)' }}>+</span>
                <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-white)' }}>
                  (Targeted Meta & Google Ads)
                </span>
                <span style={{ color: 'var(--accent-emerald)' }}>=</span>
                <span style={{ padding: '4px 12px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                  (=Predictable Customer Growth)
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-dim)', fontSize: '12px' }}>
                <ShieldCheck size={14} color="var(--accent-emerald)" />
                <span>Zero Agency Overhead</span>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Quick Highlights / Stats Grid with Staggered Spotlight */}
        <div 
          className="hero-stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          {METRICS.map((metric, i) => (
            <div key={i} className={`reveal-on-scroll reveal-delay-${(i % 4) + 1}`}>
              <SpotlightCard style={{ padding: '20px 22px', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span 
                    style={{ 
                      fontFamily: "'JetBrains Mono', monospace", 
                      fontSize: '30px', 
                      fontWeight: 800, 
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {metric.value}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {metric.label}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '2px', lineHeight: '1.4' }}>
                    {metric.description}
                  </span>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

        {/* Infinite Tech Stack Marquee Ticker */}
        <div 
          className="reveal-on-scroll"
          style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
              Production Tech Ecosystem
            </span>
          </div>

          <div className="marquee-container">
            <div className="marquee-track">
              {[...tickerItems, ...tickerItems].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-emerald)' }}></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
        @media (max-width: 560px) {
          .hero-cta-group {
            width: 100% !important;
          }
          .hero-cta-group button,
          .hero-cta-group a {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-formula-card {
            padding: 16px 14px !important;
          }
          .hero-formula-items {
            font-size: 11px !important;
            gap: 6px !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
        }
        @media (max-width: 360px) {
          .hero-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
