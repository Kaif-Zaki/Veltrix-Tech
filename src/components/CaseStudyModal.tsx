import React from 'react';
import { CornerCross } from './CornerCross';
import { X, ArrowUpRight, CheckCircle2, Cpu, Shield, Activity } from 'lucide-react';
import type { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '36px 32px' }}
      >
        <CornerCross positions={['tl', 'tr', 'bl', 'br']} />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span 
                style={{
                  padding: '3px 8px',
                  borderRadius: '4px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  fontSize: '11px',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: 'var(--accent-emerald)',
                  fontWeight: 600,
                }}
              >
                {project.badge}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
                {project.category} • {project.year}
              </span>
            </div>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  fontSize: '11px',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)' }}></span>
                <span>OPEN LIVE SITE</span>
                <ArrowUpRight size={12} />
              </a>
            )}
          </div>

          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
            {project.title}
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
            {project.tagline}
          </p>
        </div>

        {/* Project Screenshot Frame */}
        {project.image && (
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxHeight: '320px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              overflow: 'hidden',
              marginBottom: '24px',
              background: '#040406',
            }}
          >
            <img 
              src={project.image} 
              alt={`${project.title} High-Resolution Preview`}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '320px',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,0.7) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        )}

        {/* Metrics Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '12px',
            padding: '16px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '28px',
          }}
        >
          {project.metrics.map((m, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '22px', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: "'JetBrains Mono', monospace" }}>
                {m.value}
              </span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '2px' }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Content Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
          {/* Challenge */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <Shield size={16} color="var(--accent-emerald)" />
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>The Engineering Challenge</h3>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <Cpu size={16} color="var(--accent-emerald)" />
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>Architectural Solution</h3>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              {project.solution}
            </p>
          </div>

          {/* Measurable Impact */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <Activity size={16} color="var(--accent-emerald)" />
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>Key Production Outcomes</h3>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.impact.map((bullet, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <span style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-dim)', marginBottom: '8px', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase' }}>
              Production Stack Deployed
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '12px',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: '#ffffff',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div 
          className="modal-action-bar"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '9px 18px', fontSize: '13px' }}
            >
              <span>Close</span>
            </button>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '9px 18px', fontSize: '13px', textDecoration: 'none' }}
              >
                <span>Visit Live Website</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onInquire(project.title);
            }}
            className="btn-primary"
            style={{ 
              padding: '9px 20px', 
              fontSize: '13px', 
              background: 'var(--accent-emerald)', 
              borderColor: 'var(--accent-emerald)', 
              color: '#000000', 
              fontWeight: 700 
            }}
          >
            <span>Inquire About Similar Build</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .modal-action-bar {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .modal-action-bar > div {
            width: 100% !important;
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .modal-action-bar button,
          .modal-action-bar a {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  );
};

