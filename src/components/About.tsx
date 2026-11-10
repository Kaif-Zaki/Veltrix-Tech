import { CornerCross } from './CornerCross';
import { SpotlightCard } from './SpotlightCard';
import { Cpu, Zap, TrendingUp, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

interface AboutProps {
  onOpenContact: () => void;
}

export const About = ({ onOpenContact }: AboutProps) => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Direct Senior Engineering',
      description: 'Zero account managers or junior subcontractors. You work directly with developers and performance strategists who build and ship your digital presence.',
    },
    {
      icon: Zap,
      title: 'Mobile-First & Speed Obsessed',
      description: 'Every website is crafted with sub-second load times, smooth modern UI/UX, and 100% responsive styling to guarantee peak mobile conversions.',
    },
    {
      icon: TrendingUp,
      title: 'Targeted Digital Advertising',
      description: 'High-ROI Meta (Facebook & Instagram) and Google Ads campaigns engineered with custom ad creatives, smart audience targeting, and sales funnels.',
    },
    {
      icon: Layers,
      title: 'Conversion Funnels & Analytics',
      description: 'Direct WhatsApp integration, custom contact forms, Google Analytics 4, and conversion pixel tracking for transparent monthly ROI reporting.',
    },
  ];

  return (
    <section 
      id="about"
      style={{
        paddingTop: '90px',
        paddingBottom: '90px',
        position: 'relative',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Header with Scroll Reveal */}
        <div className="reveal-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          <div className="section-tag">
            <span>01 // About Veltrix Tech</span>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '24px',
            }}
            className="about-header-grid"
          >
            <h2 className="title-section">
              We build high-converting websites and execute data-driven digital marketing for ambitious brands.
            </h2>
            <p className="text-body" style={{ fontSize: '16px' }}>
              Founded as an antidote to slow, bloated agencies, Veltrix Tech delivers end-to-end digital solutions. 
              We build custom responsive websites with modern admin panels, and launch hyper-targeted Facebook, Instagram, 
              and Google Ad campaigns that convert traffic into loyal paying customers.
            </p>
          </div>
        </div>

        {/* 4 Pillars Matrix with Spotlight & Corner Crosses */}
        <div 
          className="about-pillars-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className={`reveal-on-scroll reveal-delay-${index + 1}`}
              >
                <SpotlightCard style={{ padding: '28px 24px', height: '100%' }}>
                  <CornerCross positions={['tl', 'tr', 'bl', 'br']} />
                  
                  <div 
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon size={20} color="var(--accent-emerald)" />
                  </div>

                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                    {item.description}
                  </p>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

        {/* How We Compare Box: Traditional Agency vs Veltrix Tech */}
        <div className="reveal-on-scroll reveal-delay-2">
          <SpotlightCard
            className="about-spotlight-box"
            style={{
              padding: '36px 30px',
              background: 'linear-gradient(180deg, #09090c 0%, #040406 100%)',
            }}
          >
            <CornerCross positions={['tl', 'tr', 'bl', 'br']} />

            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                The Veltrix Difference
              </span>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginTop: '6px' }}>
                How our web & growth model contrasts with legacy agencies
              </h3>
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '20px',
              }}
              className="compare-grid"
            >
              {/* Legacy Agency */}
              <div 
                style={{
                  padding: '22px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.015)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.6)' }}>Traditional Dev Agency</span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-dim)' }}>
                  <li>✕ Non-technical account managers and slow communication</li>
                  <li>✕ Outdated templates that perform poorly on mobile devices</li>
                  <li>✕ Zero marketing strategy or untracked ad spending</li>
                  <li>✕ Hidden monthly fees and vague deliverables</li>
                </ul>
              </div>

              {/* Veltrix Tech */}
              <div 
                style={{
                  padding: '22px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.04)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)' }}></span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff' }}>Veltrix Tech Studio</span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="var(--accent-emerald)" />
                    <span>Direct WhatsApp hotline for instant answers and project status</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="var(--accent-emerald)" />
                    <span>100% custom mobile-responsive designs with SEO optimization</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="var(--accent-emerald)" />
                    <span>Full-funnel Meta & Google Ads with weekly performance reviews</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="var(--accent-emerald)" />
                    <span>Fixed, transparent pricing with zero surprise charges</span>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={onOpenContact}
                className="btn-secondary"
                style={{ fontSize: '13px', padding: '9px 20px' }}
              >
                <span>Inquire About Our Packages</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </SpotlightCard>
        </div>
      </div>

      <style>{`
        @media (min-width: 800px) {
          .about-header-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
          .compare-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .about-spotlight-box {
            padding: 24px 18px !important;
          }
        }
      `}</style>
    </section>
  );
};
