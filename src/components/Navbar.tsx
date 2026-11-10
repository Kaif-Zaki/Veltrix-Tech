import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: (planId?: string) => void;
  scrollProgress: number;
  activeSection: string;
}

export const Navbar = ({ onOpenContact, scrollProgress, activeSection }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about', index: '01' },
    { name: 'Services', href: '#services', id: 'services', index: '02' },
    { name: 'Work', href: '#work', id: 'work', index: '03' },
    { name: 'Stack', href: '#stack', id: 'stack', index: '04' },
    { name: 'Journal', href: '#journal', id: 'journal', index: '05' },
    { name: 'FAQ', href: '#faq', id: 'faq', index: '06' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Real-time Scroll Progress Line */}
      <div 
        className="scroll-progress-line"
        style={{ width: `${scrollProgress}%` }}
      />

      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? '10px 16px' : '16px 16px',
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          transition: 'padding 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div 
          className={`nav-dock ${scrolled ? 'scrolled' : ''}`}
          style={{
            width: '100%',
            maxWidth: '1120px',
            borderRadius: '9999px',
            padding: '7px 10px 7px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pointerEvents: 'auto',
          }}
        >
          {/* Brand Logo */}
          <a 
            href="#" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none', 
            }}
            aria-label="Veltrix Tech Home"
          >
            <img 
              src="/logo.png" 
              alt="Veltrix Tech" 
              style={{
                height: '30px',
                width: 'auto',
                maxWidth: '140px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </a>

          {/* Desktop Navigation Links with Active Scroll Indicator */}
          <nav 
            style={{ 
              display: 'none', 
              alignItems: 'center', 
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '4px 6px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: isActive ? '#ffffff' : 'var(--text-muted)',
                    background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    fontSize: '12px',
                    fontWeight: isActive ? 600 : 500,
                    textDecoration: 'none',
                    padding: '5px 12px',
                    borderRadius: '9999px',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Status Pill + Contact Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div 
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 12px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                fontSize: '11px',
                color: 'var(--text-muted)',
              }}
              className="status-pill"
            >
              <span className="pulse-dot"></span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>Available 2026</span>
            </div>

            <button 
              type="button"
              onClick={() => onOpenContact()}
              className="btn-primary"
              style={{ padding: '7px 16px', fontSize: '13px' }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                cursor: 'pointer',
              }}
              className="mobile-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {mobileMenuOpen && (
          <div 
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              zIndex: 55,
              pointerEvents: 'auto',
            }}
          />
        )}

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div 
            style={{
              position: 'fixed',
              top: '68px',
              left: '16px',
              right: '16px',
              background: 'rgba(6, 6, 8, 0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              zIndex: 60,
              pointerEvents: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.95)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.07)' }}>
              <span className="pulse-dot"></span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>{COMPANY_INFO.availability}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  style={{
                    color: activeSection === link.id ? '#ffffff' : 'var(--text-muted)',
                    fontSize: '15px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    padding: '8px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{link.name}</span>
                  <span style={{ fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-dim)' }}>{link.index}/</span>
                </a>
              ))}
            </div>

            <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.07)' }}>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Start a Project</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        )}

        <style>{`
          @media (min-width: 860px) {
            .desktop-nav { display: flex !important; }
            .mobile-toggle { display: none !important; }
            .status-pill { display: inline-flex !important; }
          }
          @media (max-width: 480px) {
            .nav-dock {
              padding: 6px 8px 6px 12px !important;
            }
            .nav-dock .btn-primary {
              padding: 6px 11px !important;
              font-size: 12px !important;
            }
          }
        `}</style>
      </header>
    </>
  );
};
