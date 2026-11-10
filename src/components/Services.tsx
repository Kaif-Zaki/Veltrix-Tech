import { useState, type CSSProperties } from 'react';
import { CornerCross } from './CornerCross';
import { SpotlightCard } from './SpotlightCard';
import { WEB_PACKAGES, MARKETING_PACKAGES, COMPANY_INFO } from '../data/portfolioData';
import { useCardStackScroll } from '../hooks/useCardStackScroll';
import { Check, ArrowUpRight, Zap, ShieldCheck, Globe, TrendingUp, AlertCircle } from 'lucide-react';
import type { ServicePackage } from '../types';

const WhatsAppIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

interface ServicesProps {
  onOpenContact?: () => void;
}

export const Services = ({ onOpenContact }: ServicesProps) => {
  const [activeTab, setActiveTab] = useState<'web' | 'marketing'>('web');

  const getWhatsAppLink = (pkg: ServicePackage) => {
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(pkg.whatsappMessage)}`;
  };

  const activePackages = activeTab === 'web' ? WEB_PACKAGES : MARKETING_PACKAGES;
  const { containerRef, transforms } = useCardStackScroll(activePackages.length);

  return (
    <section 
      id="services"
      style={{
        paddingTop: '100px',
        paddingBottom: '120px',
        position: 'relative',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="reveal-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
            <div className="section-tag">
              <span>02 // Our Core Services & Packages</span>
            </div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--text-dim)' }}>
              DIRECT WHATSAPP BOOKING • {COMPANY_INFO.whatsapp}
            </span>
          </div>

          {/* Chamath Dilshan Large Typographic Manifesto */}
          <div style={{ maxWidth: '1020px', marginTop: '10px' }}>
            <h2 
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3.4rem)',
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: '-0.035em',
                color: '#ffffff',
              }}
            >
              Tailored Website Development & High-Impact Digital Marketing engineered to accelerate your revenue.
            </h2>
          </div>

          {/* Interactive Service Switcher Tabs */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexWrap: 'wrap', 
              gap: '12px', 
              marginTop: '18px',
            }}
          >
            <div
              className="services-tab-wrapper"
              style={{
                display: 'inline-flex',
                background: 'rgba(255, 255, 255, 0.04)',
                padding: '4px',
                borderRadius: '9999px',
                border: '1px solid var(--border-subtle)',
                gap: '4px',
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab('web')}
                className="service-switcher-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 20px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: activeTab === 'web' ? '#ffffff' : 'transparent',
                  color: activeTab === 'web' ? '#000000' : 'var(--text-muted)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <Globe size={15} />
                <span>Website Development (3 Packages)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('marketing')}
                className="service-switcher-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 20px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: activeTab === 'marketing' ? '#25D366' : 'transparent',
                  color: activeTab === 'marketing' ? '#000000' : 'var(--text-muted)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <TrendingUp size={15} />
                <span>Digital Marketing (3 Packages)</span>
              </button>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Veltrix Tech! I would like to consult about your services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary service-extra-btn"
              style={{ fontSize: '13px', padding: '9px 18px', gap: '8px' }}
            >
              <WhatsAppIcon size={15} color="var(--accent-emerald)" />
              <span>Chat Hotline ({COMPANY_INFO.whatsapp})</span>
            </a>

            {onOpenContact && (
              <button
                type="button"
                onClick={onOpenContact}
                className="btn-secondary service-extra-btn"
                style={{ fontSize: '13px', padding: '9px 18px', gap: '6px' }}
              >
                <span>Custom Proposal</span>
                <ArrowUpRight size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Chamath-style STICKY STACKING CARDS */}
        <div 
          key={activeTab}
          ref={containerRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            position: 'relative',
            marginTop: '44px',
          }}
          className="services-stack-container"
        >
          {activePackages.map((pkg, index) => {
            const stickyOffset = 90 + index * 22;
            const stickyOffsetM = 72 + index * 14;
            const isHighlight = pkg.highlighted;
            const t = transforms[index] || { scale: 1, opacity: 1, brightness: 1 };

            return (
              <div
                key={pkg.id}
                className="service-stack-card stack-rise"
                style={{
                  position: 'sticky',
                  top: `${stickyOffset}px`,
                  zIndex: index + 1,
                  transform: `scale(${t.scale})`,
                  transformOrigin: '50% 0',
                  filter: `brightness(${t.brightness})`,
                  opacity: t.opacity,
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease, opacity 0.4s ease',
                  '--sticky-mobile-top': `${stickyOffsetM}px`,
                } as CSSProperties}
              >
                <SpotlightCard
                  spotlightColor={isHighlight ? 'rgba(37, 211, 102, 0.12)' : 'rgba(255, 255, 255, 0.08)'}
                  className="service-spotlight-card"
                  style={{
                    padding: '40px 36px',
                    background: isHighlight 
                      ? 'linear-gradient(180deg, #0e120f 0%, #060807 100%)' 
                      : 'linear-gradient(180deg, #0a0a0d 0%, #050507 100%)',
                    borderRadius: '16px',
                    border: '1px solid',
                    borderColor: isHighlight ? 'rgba(37, 211, 102, 0.35)' : 'rgba(255, 255, 255, 0.12)',
                    boxShadow: isHighlight 
                      ? '0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 35px -10px rgba(37, 211, 102, 0.15)' 
                      : '0 25px 60px -15px rgba(0, 0, 0, 0.95)',
                  }}
                >
                  <CornerCross positions={['tl', 'tr', 'bl', 'br']} />

                  <div 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: '32px',
                    }}
                    className="service-card-grid"
                  >
                    {/* Left Column: Number, Title, Price / Pages, Tagline & Direct CTA */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        {/* Badges Bar */}
                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                          <span 
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '12px',
                              color: isHighlight ? '#25D366' : 'var(--accent-emerald)',
                              fontWeight: 600,
                            }}
                          >
                            PACKAGE {pkg.number}/
                          </span>

                          {pkg.pages && (
                            <span 
                              style={{
                                padding: '3px 10px',
                                borderRadius: '9999px',
                                background: 'rgba(255, 255, 255, 0.06)',
                                border: '1px solid var(--border-subtle)',
                                fontSize: '11px',
                                fontFamily: "'JetBrains Mono', monospace",
                                color: '#ffffff',
                                fontWeight: 600,
                              }}
                            >
                              {pkg.pages}
                            </span>
                          )}

                          {pkg.badge && (
                            <span 
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                padding: '3px 10px',
                                borderRadius: '9999px',
                                background: isHighlight ? 'rgba(37, 211, 102, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                                border: isHighlight ? '1px solid rgba(37, 211, 102, 0.4)' : '1px solid rgba(255, 255, 255, 0.15)',
                                fontSize: '11px',
                                fontWeight: 700,
                                color: isHighlight ? '#25D366' : '#ffffff',
                                letterSpacing: '0.04em',
                              }}
                            >
                              <Zap size={11} color={isHighlight ? '#25D366' : '#ffffff'} />
                              <span>{pkg.badge}</span>
                            </span>
                          )}
                        </div>

                        {/* Package Title */}
                        <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: '8px', letterSpacing: '-0.03em' }}>
                          {pkg.name}
                        </h3>

                        {/* Price if Digital Marketing */}
                        {pkg.price && (
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '12px' }}>
                            <span 
                              style={{ 
                                fontFamily: "'JetBrains Mono', monospace", 
                                fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', 
                                fontWeight: 800, 
                                color: isHighlight ? '#25D366' : '#ffffff',
                                letterSpacing: '-0.02em',
                              }}
                            >
                              {pkg.price}
                            </span>
                          </div>
                        )}

                        {/* Description / Tagline */}
                        <p style={{ fontSize: '15px', lineHeight: '1.65', color: 'var(--text-secondary)', maxWidth: '520px', marginBottom: '28px' }}>
                          {pkg.tagline}
                        </p>

                        {/* Direct WhatsApp Action Button */}
                        <div style={{ marginBottom: '24px' }}>
                          <a
                            href={getWhatsAppLink(pkg)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary service-cta-btn"
                            style={{
                              padding: '12px 26px',
                              fontSize: '14px',
                              background: isHighlight ? '#25D366' : '#ffffff',
                              borderColor: isHighlight ? '#25D366' : '#ffffff',
                              color: '#000000',
                              fontWeight: 700,
                              gap: '10px',
                            }}
                          >
                            <WhatsAppIcon size={18} color="#000000" />
                            <span>Get {pkg.name} on WhatsApp</span>
                            <ArrowUpRight size={16} />
                          </a>
                          <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace", marginTop: '8px' }}>
                            ⚡ Direct connection to +94 77 446 3753 with pre-filled package specs
                          </span>
                        </div>
                      </div>

                      {/* Giant Number on bottom */}
                      <span 
                        style={{
                          fontFamily: "'Geist', -apple-system, sans-serif",
                          fontSize: 'clamp(3.8rem, 8vw, 6.5rem)',
                          fontWeight: 900,
                          lineHeight: 0.8,
                          letterSpacing: '-0.05em',
                          color: isHighlight ? 'rgba(37, 211, 102, 0.12)' : 'rgba(255, 255, 255, 0.08)',
                          userSelect: 'none',
                          marginTop: '16px',
                        }}
                      >
                        {pkg.number}
                      </span>
                    </div>

                    {/* Right Column: Complete Features Checklist & Specs */}
                    <div 
                      className="service-features-box"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '20px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        padding: '28px',
                        borderRadius: '14px',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                          <ShieldCheck size={18} color={isHighlight ? '#25D366' : 'var(--accent-emerald)'} />
                          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase' }}>
                            Included Deliverables & Scope
                          </span>
                        </div>

                        {/* Features Checklist */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '20px' }}>
                          {pkg.features.map((feat: string, i: number) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                              <Check size={16} color={isHighlight ? '#25D366' : 'var(--accent-emerald)'} style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span style={{ fontWeight: 500 }}>{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Additional Note if applicable */}
                        {pkg.note && (
                          <div 
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '8px',
                              padding: '10px 12px',
                              borderRadius: '8px',
                              background: 'rgba(255, 255, 255, 0.02)',
                              border: '1px solid rgba(255, 255, 255, 0.05)',
                              fontSize: '12px',
                              color: 'var(--text-dim)',
                              lineHeight: '1.5',
                              marginTop: '8px',
                            }}
                          >
                            <AlertCircle size={14} color="var(--text-dim)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{pkg.note}</span>
                          </div>
                        )}
                      </div>

                      {/* Bottom Buy / Order Button on the features card */}
                      <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                        <a
                          href={getWhatsAppLink(pkg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                          style={{
                            width: '100%',
                            justifyContent: 'center',
                            padding: '11px 18px',
                            fontSize: '13px',
                            gap: '8px',
                          }}
                        >
                          <WhatsAppIcon size={15} color="var(--accent-emerald)" />
                          <span>Buy Package • Redirect to WhatsApp</span>
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .service-card-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
        @media (max-width: 859px) {
          .service-stack-card {
            top: var(--sticky-mobile-top, 72px) !important;
          }
          .service-spotlight-card {
            padding: 24px 18px !important;
          }
          .service-features-box {
            padding: 20px 16px !important;
          }
        }
        @media (max-width: 600px) {
          .services-tab-wrapper {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            border-radius: 14px !important;
          }
          .service-switcher-btn {
            width: 100% !important;
            justify-content: center !important;
          }
          .service-extra-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 560px) {
          .service-cta-btn {
            width: 100% !important;
            justify-content: center !important;
            white-space: normal !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};
