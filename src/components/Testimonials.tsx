import { useState, useEffect } from 'react';
import { CornerCross } from './CornerCross';
import { SpotlightCard } from './SpotlightCard';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = TESTIMONIALS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Optional subtle auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="testimonials"
      style={{
        paddingTop: '100px',
        paddingBottom: '110px',
        position: 'relative',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="reveal-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="section-tag">
              <span>05 // Endorsements</span>
            </div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--text-dim)' }}>
              FROM RECENT PARTNERS
            </span>
          </div>

          <h2 className="title-section">
            Trusted by CTOs, founders,{' '}
            <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>and technical product leaders.</span>
          </h2>
        </div>

        {/* Chamath-Style Interactive Testimonial Card Changer */}
        <div className="reveal-on-scroll">
          <SpotlightCard
            className="testimonial-spotlight-card"
            style={{
              padding: '44px 36px',
              background: 'linear-gradient(180deg, #09090c 0%, #040406 100%)',
              borderRadius: '18px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.95)',
            }}
          >
            <CornerCross positions={['tl', 'tr', 'bl', 'br']} />

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '40px',
                alignItems: 'center',
              }}
              className="testimonial-grid"
            >
              {/* Left Column: Project Badge / Artwork Canvas */}
              <div 
                className="testimonial-badge-box"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  padding: '28px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--accent-emerald)', textTransform: 'uppercase' }}>
                    Verified Production Partner
                  </span>
                </div>

                <div style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                  {current.project}
                </div>

                <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  Production engagement completed with zero-downtime deployment and SLA guarantees.
                </div>

                <div style={{ display: 'flex', gap: '3px', marginTop: '10px' }}>
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--accent-emerald)" color="var(--accent-emerald)" />
                  ))}
                </div>
              </div>

              {/* Right Column: Quote, Author, and Navigation Controls */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '32px' }}>
                <div>
                  <Quote size={28} color="rgba(255, 255, 255, 0.18)" style={{ marginBottom: '16px' }} />

                  <p 
                    style={{
                      fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                      lineHeight: '1.6',
                      color: '#ffffff',
                      fontWeight: 500,
                      marginBottom: '28px',
                      fontStyle: 'italic',
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    "{current.quote}"
                  </p>

                  <div>
                    <div style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff' }}>
                      {current.author}
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {current.role} • <span style={{ color: '#ffffff' }}>{current.company}</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows & Pagination Dots */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
                  {/* Indicator Pills */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {TESTIMONIALS.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        style={{
                          width: activeIndex === idx ? '28px' : '8px',
                          height: '8px',
                          borderRadius: '9999px',
                          background: activeIndex === idx ? '#ffffff' : 'rgba(255, 255, 255, 0.2)',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Prev / Next Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      type="button"
                      onClick={handlePrev}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)')}
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)')}
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .testimonial-grid {
            grid-template-columns: 320px 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .testimonial-spotlight-card {
            padding: 24px 18px !important;
          }
          .testimonial-badge-box {
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
