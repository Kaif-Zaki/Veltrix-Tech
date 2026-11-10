import { useState } from 'react';
import { CornerCross } from './CornerCross';
import { SpotlightCard } from './SpotlightCard';
import { FAQS } from '../data/portfolioData';
import { Plus, Minus } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
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
            <span>08 // FAQ</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
            <h2 className="title-section">
              Clear answers,{' '}
              <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>no corporate deflection.</span>
            </h2>
            <p className="text-body" style={{ maxWidth: '640px' }}>
              Everything you need to know about partnering with Veltrix Tech, our engineering cadence, IP ownership, and technical SLAs.
            </p>
          </div>
        </div>

        {/* Accordion List with Spotlight & Reveal */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            maxWidth: '920px',
            margin: '0 auto',
          }}
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="reveal-on-scroll"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <SpotlightCard
                  className="faq-spotlight-card"
                  style={{
                    padding: '24px 28px',
                    background: isOpen ? '#0c0c10' : 'var(--bg-card)',
                    borderColor: isOpen ? 'rgba(255, 255, 255, 0.22)' : 'var(--border-subtle)',
                  }}
                >
                  <CornerCross positions={['tl', 'tr', 'bl', 'br']} />

                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '17px',
                      fontWeight: 600,
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '16px',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--accent-emerald)', marginTop: '3px' }}>
                        0{index + 1}/
                      </span>
                      <span>{faq.question}</span>
                    </span>

                    <span 
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                      <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                        {faq.answer}
                      </p>
                      <span style={{ display: 'inline-block', marginTop: '10px', fontSize: '11px', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
                        Category: {faq.category}
                      </span>
                    </div>
                  )}
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .faq-spotlight-card {
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
