import { useState } from 'react';
import { CornerCross } from './CornerCross';
import { SpotlightCard } from './SpotlightCard';
import { COMPANY_INFO } from '../data/portfolioData';
import { Copy, Check, Calendar, ArrowUpRight, MessageSquare, Clock, MapPin, Sparkles } from 'lucide-react';

const WhatsAppIcon = ({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

interface ContactProps {
  initialPlan?: string;
}

export const Contact = ({ initialPlan }: ContactProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappMessage = initialPlan
    ? `Hello Veltrix Tech! I would like to inquire about the ${initialPlan}.`
    : 'Hello Veltrix Tech! I would like to inquire about your website development and digital marketing services.';

  return (
    <section 
      id="contact"
      style={{
        paddingTop: '90px',
        paddingBottom: '90px',
        position: 'relative',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="reveal-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '44px' }}>
          <div className="section-tag">
            <span className="pulse-dot"></span>
            <span>09 // Direct Contact & Consultation</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
            <h2 className="title-section" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
              Let's engineer something{' '}
              <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>exceptional together.</span>
            </h2>
            <p className="text-lead" style={{ maxWidth: '720px' }}>
              Have an ambitious product to launch, a business to grow, or need an elite development and marketing squad? 
              Connect directly with our team on WhatsApp or send us an email.
            </p>
          </div>
        </div>

        {/* 2x2 Grid Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
          }}
          className="contact-grid-2x2"
        >
          {/* Card 1: Direct WhatsApp Hotline (Highlighted) */}
          <div className="reveal-on-scroll reveal-delay-1">
            <SpotlightCard
              spotlightColor="rgba(37, 211, 102, 0.18)"
              className="contact-spotlight-card"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px',
                background: 'linear-gradient(180deg, #0b150f 0%, #050806 100%)',
                borderColor: 'rgba(37, 211, 102, 0.35)',
                height: '100%',
              }}
            >
              <CornerCross positions={['tl', 'tr', 'bl', 'br']} />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#25D366' }}></span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#25D366', textTransform: 'uppercase', fontWeight: 600 }}>
                      Primary Direct Channel
                    </span>
                  </div>
                  <span style={{ fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-dim)' }}>
                    ACTIVE NOW
                  </span>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  WhatsApp Direct Hotline
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Direct one-click connection to our core engineering and strategy leads for instant package orders, project quotes, and consultations.
                </p>

                <div style={{ marginTop: '20px' }}>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)',
                      fontWeight: 800,
                      color: '#ffffff',
                      textDecoration: 'none',
                      letterSpacing: '-0.02em',
                      display: 'inline-block',
                    }}
                  >
                    {COMPANY_INFO.whatsapp}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(37, 211, 102, 0.15)' }}>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    padding: '10px 22px',
                    fontSize: '13px',
                    background: '#25D366',
                    borderColor: '#25D366',
                    color: '#000000',
                    fontWeight: 700,
                    gap: '8px',
                  }}
                >
                  <WhatsAppIcon size={16} color="#000000" />
                  <span>Start WhatsApp Chat</span>
                  <ArrowUpRight size={14} />
                </a>

                <span style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
                  Instant Response
                </span>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 2: Direct Electronic Mail */}
          <div className="reveal-on-scroll reveal-delay-2">
            <SpotlightCard
              className="contact-spotlight-card"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px',
                height: '100%',
              }}
            >
              <CornerCross positions={['tl', 'tr', 'bl', 'br']} />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MessageSquare size={14} color="var(--accent-emerald)" />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                      Official Electronic Mail
                    </span>
                  </div>
                  <span style={{ fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-dim)' }}>
                    SLA &lt; 4H
                  </span>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  Written Project Briefs
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Send detailed project requirements, RFPs, design links, or architectural specifications directly to our engineering inbox.
                </p>

                <div style={{ marginTop: '20px' }}>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`}
                    style={{
                      fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      textDecoration: 'none',
                      letterSpacing: '-0.02em',
                      display: 'inline-block',
                      wordBreak: 'break-all',
                    }}
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-secondary"
                  style={{ padding: '9px 18px', fontSize: '12px' }}
                >
                  {copied ? (
                    <>
                      <Check size={14} color="var(--accent-emerald)" />
                      <span style={{ color: 'var(--accent-emerald)' }}>Email Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  style={{ fontSize: '12px', color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>Open Mail App</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 3: Consultation & Architecture Sync */}
          <div className="reveal-on-scroll reveal-delay-3">
            <SpotlightCard
              className="contact-spotlight-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '20px',
                height: '100%',
                background: 'linear-gradient(180deg, #0e0e13 0%, #060608 100%)',
              }}
            >
              <CornerCross positions={['tl', 'tr', 'bl', 'br']} />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <Calendar size={18} color="var(--accent-emerald)" />
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>
                    Live Architecture Review
                  </span>
                </div>

                <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                  Schedule a 20-minute video session with our principal solutions architect to evaluate tech stack viability, page scopes, and production timelines.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=Architecture%20Consultation%20Request`}
                  className="btn-primary"
                  style={{ padding: '9px 18px', fontSize: '12px' }}
                >
                  <span>Book Architecture Review</span>
                  <ArrowUpRight size={13} />
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
                  <Clock size={12} />
                  <span>20 MIN SYNC</span>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 4: Studio Status & Global Guarantee */}
          <div className="reveal-on-scroll reveal-delay-4">
            <SpotlightCard
              className="contact-spotlight-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '20px',
                height: '100%',
              }}
            >
              <CornerCross positions={['tl', 'tr', 'bl', 'br']} />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <Sparkles size={18} color="var(--accent-emerald)" />
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>
                    Production Guarantee & Availability
                  </span>
                </div>

                <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                  Every client engagement comes with clean code ownership, transparent milestone tracking, mobile-first responsiveness, and free maintenance periods.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', fontSize: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="pulse-dot"></span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>{COMPANY_INFO.availability}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
                  <MapPin size={12} />
                  <span>{COMPANY_INFO.location}</span>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .contact-grid-2x2 {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .contact-spotlight-card {
            padding: 24px 18px !important;
          }
        }
      `}</style>
    </section>
  );
};
