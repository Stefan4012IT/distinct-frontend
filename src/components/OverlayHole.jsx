import { useEffect, useRef, useState } from 'react';

const OverlayHole = ({ targetRef }) => {
  const overlayRef = useRef(null);
  const [clipPath, setClipPath] = useState('');

  useEffect(() => {
    const updateClipPath = () => {
      const frame = targetRef.current;
      const overlay = overlayRef.current;

      if (!frame || !overlay) return;

      const rect = frame.getBoundingClientRect();
      const { top, left, width, height } = rect;

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const x1 = (left / vw) * 100;
      const y1 = (top / vh) * 100;
      const x2 = ((left + width) / vw) * 100;
      const y2 = ((top + height) / vh) * 100;

      const clip = `
        polygon(
          0% 0%, 100% 0%, 100% 100%, 0% 100%,
          0% ${y1}%, ${x1}% ${y1}%, ${x1}% ${y2}%,
          ${x2}% ${y2}%, ${x2}% ${y1}%, 0% ${y1}%,
          0% 0%
        )
      `;

      setClipPath(clip);
    };

    updateClipPath();
    window.addEventListener('resize', updateClipPath);
    return () => window.removeEventListener('resize', updateClipPath);
  }, [targetRef]);

  return (
    <div
      className="overlay-border"
      ref={overlayRef}
      style={{ clipPath }}
    />
  );
};

export default OverlayHole;
