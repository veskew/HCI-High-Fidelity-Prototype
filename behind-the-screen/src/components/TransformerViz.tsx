import React, { useState, useEffect, useRef } from 'react';
import './TransformerViz.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface TransformerVizProps {
  words: string[];
}

const TransformerViz: React.FC<TransformerVizProps> = ({ words }) => {
  const [visibleWords, setVisibleWords] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(containerRef, { threshold: 0.1 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isIntersecting && !hasAnimated.current) {
      hasAnimated.current = true;
      const interval = setInterval(() => {
        setVisibleWords((prev) => {
          if (prev < words.length) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 800);

      return () => clearInterval(interval);
    }
  }, [isIntersecting, words]);

  return (
    <div className="transformer-viz-container" ref={containerRef}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`transformer-word ${index < visibleWords ? 'visible' : ''}`}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default TransformerViz;
