import { useEffect, useState, useRef } from 'react';

export interface CardTransform {
  scale: number;
  opacity: number;
  brightness: number;
}

export function useCardStackScroll(itemCount: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transforms, setTransforms] = useState<CardTransform[]>(() =>
    Array.from({ length: itemCount }, () => ({ scale: 1, opacity: 1, brightness: 1 }))
  );

  useEffect(() => {
    let animationFrameId: number;

    const updateTransforms = () => {
      if (!containerRef.current) return;
      const children = containerRef.current.children;
      if (!children || children.length === 0) return;

      const newTransforms: CardTransform[] = [];

      for (let i = 0; i < children.length; i++) {
        const currentCard = children[i] as HTMLElement;
        const currentRect = currentCard.getBoundingClientRect();

        // Calculate how many subsequent cards have arrived and stacked over this card
        let stackedCount = 0;
        for (let j = i + 1; j < children.length; j++) {
          const nextCard = children[j] as HTMLElement;
          const nextRect = nextCard.getBoundingClientRect();

          // When the next card's top reaches near the current card's top
          if (nextRect.top <= currentRect.top + 80) {
            stackedCount++;
          }
        }

        const scale = Math.max(0.88, 1 - stackedCount * 0.04);
        const brightness = Math.max(0.65, 1 - stackedCount * 0.12);
        const opacity = Math.max(0.70, 1 - stackedCount * 0.10);

        newTransforms.push({ scale, brightness, opacity });
      }

      setTransforms(newTransforms);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateTransforms();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [itemCount]);

  return { containerRef, transforms };
}

