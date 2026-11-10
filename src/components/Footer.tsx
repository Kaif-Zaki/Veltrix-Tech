import { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/portfolioData';
import { ArrowUp, Globe } from 'lucide-react';

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TiktokIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const MailIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        paddingTop: '60px',
        paddingBottom: '50px',
        borderTop: '1px solid var(--border-subtle)',
        background: '#040405',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Top Footer Banner */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            paddingBottom: '40px',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '40px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <img 
              src="/logo.png" 
              alt="Veltrix Tech" 
              style={{
                height: '34px',
                width: 'auto',
                maxWidth: '160px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
            <div style={{ height: '22px', width: '1px', background: 'var(--border-subtle)' }} />
            <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
              {COMPANY_INFO.tagline}
            </div>
          </div>

          {/* Live Global Clock */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 16px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              color: 'var(--text-muted)',
            }}
          >
            <Globe size={14} color="var(--accent-emerald)" />
            <span>GLOBAL SYNC //</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>{currentTime || '00:00:00'} UTC</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn-secondary"
            style={{ padding: '8px 16px', fontSize: '12px' }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Links Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '32px',
            marginBottom: '48px',
          }}
        >
          {/* Navigation */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', fontFamily: "'JetBrains Mono', monospace" }}>
              Explore
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About Veltrix</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Web & Marketing Packages</a></li>
              <li><a href="#work" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Selected Case Studies</a></li>
              <li><a href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-emerald)', textDecoration: 'none' }}>WhatsApp Consultation</a></li>
            </ul>
          </div>

          {/* Architecture */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', fontFamily: "'JetBrains Mono', monospace" }}>
              Engineering
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><a href="#stack" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Tech Stack Matrix</a></li>
              <li><a href="#journal" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Technical Journal</a></li>
              <li><a href="#faq" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Frequently Asked Questions</a></li>
              <li><a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Architecture Consultation</a></li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', fontFamily: "'JetBrains Mono', monospace" }}>
              Network
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li>
                <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <InstagramIcon size={14} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href={COMPANY_INFO.tiktok} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <TiktokIcon size={14} />
                  <span>TikTok</span>
                </a>
              </li>
              <li>
                <a href={COMPANY_INFO.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MailIcon size={14} />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Status */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', fontFamily: "'JetBrains Mono', monospace" }}>
              Studio Status
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              <div>{COMPANY_INFO.location}</div>
              <div style={{ marginTop: '6px', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="pulse-dot"></span>
                <span>{COMPANY_INFO.availability}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Vercel Pill */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '12px',
            color: 'var(--text-dim)',
            paddingTop: '24px',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div>
            © 2026 {COMPANY_INFO.name}. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff' }}></span>
            <span>Static React Architecture • Zero Backend • Optimized for Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
