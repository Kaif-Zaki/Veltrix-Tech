import React from 'react';

interface CornerCrossProps {
  positions?: ('tl' | 'tr' | 'bl' | 'br')[];
}

export const CornerCross: React.FC<CornerCrossProps> = ({ 
  positions = ['tl', 'tr', 'bl', 'br'] 
}) => {
  return (
    <>
      {positions.includes('tl') && <span className="cross-mark cross-tl" aria-hidden="true">+</span>}
      {positions.includes('tr') && <span className="cross-mark cross-tr" aria-hidden="true">+</span>}
      {positions.includes('bl') && <span className="cross-mark cross-bl" aria-hidden="true">+</span>}
      {positions.includes('br') && <span className="cross-mark cross-br" aria-hidden="true">+</span>}
    </>
  );
};

