'use client';
import React, { useEffect, useRef } from 'react';
import '../styles/ParallaxSection.css';

const ParallaxSection = ({ background, speed = 0.3, height = '130vh', children }) => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = bgRef.current?.parentElement?.offsetTop || 0;
      const scrollTop = window.scrollY;
      const offset = (scrollTop - sectionTop) * speed;

      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div className="parallax-section" style={{ height }}>
      <div
        className="parallax-background"
        ref={bgRef}
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="parallax-content">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
