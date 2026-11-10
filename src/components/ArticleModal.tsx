import React from 'react';
import { CornerCross } from './CornerCross';
import { X, Clock, Calendar, Bookmark } from 'lucide-react';
import type { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

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
          aria-label="Close article"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
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
              {article.category}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
              <Clock size={12} />
              <span>{article.readTime}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
              <Calendar size={12} />
              <span>{article.date}</span>
            </div>
          </div>

          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px', lineHeight: '1.25' }}>
            {article.title}
          </h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {article.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  fontSize: '11px',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: 'var(--text-dim)',
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Paragraphs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
          {article.content.map((paragraph, idx) => (
            <p key={idx} style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Takeaway Box */}
        <div 
          style={{
            padding: '20px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
          }}
        >
          <Bookmark size={20} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
              Architectural Takeaway
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px', lineHeight: '1.6' }}>
              All architectural decisions at Veltrix Tech are benchmarked against high-concurrency production workloads before deployment.
            </div>
          </div>
        </div>

        {/* Close Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
          <button
            type="button"
            onClick={onClose}
            className="btn-primary article-close-btn"
            style={{ padding: '8px 20px', fontSize: '13px' }}
          >
            <span>Close Article</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .article-close-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  );
};

