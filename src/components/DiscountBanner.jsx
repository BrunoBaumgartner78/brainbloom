'use client';
import React, { useEffect, useState } from 'react';
import '../styles/DiscountBanner.css';

const moonEmojis = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];

const getNextFullMoonDate = () => {
  const fullMoonDates2025 = [
    '2025-06-14', '2025-07-12', '2025-08-10',
    '2025-09-09', '2025-10-08', '2025-11-07', '2025-12-06',
  ];
  const today = new Date();
  return fullMoonDates2025.map((date) => new Date(date)).find((d) => d > today);
};

const DiscountBanner = () => {
  const [visible, setVisible] = useState(true);
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [comets, setComets] = useState([]);
  const [stars, setStars] = useState([]);
  const [daysLeft, setDaysLeft] = useState(null);

  const nextFullMoon = getNextFullMoonDate();

  useEffect(() => {
    const now = new Date();
    if (nextFullMoon) {
      const diffTime = nextFullMoon - now;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays);
      if (now > nextFullMoon) setVisible(false);
    }
  }, [nextFullMoon]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiIndex((prev) => (prev + 1) % moonEmojis.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cometCount = 15;
    const generated = Array.from({ length: cometCount }, (_, i) => ({
      id: i,
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      delay: Math.random() * 10,
    }));
    setComets(generated);
  }, []);

  useEffect(() => {
    const starCount = 80;
    const generatedStars = Array.from({ length: starCount }, (_, i) => {
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 300 + 100;
      const dx = Math.cos(angle) * distance + 'px';
      const dy = Math.sin(angle) * distance + 'px';
      return {
        id: i,
        dx,
        dy,
        delay: Math.random() * 2,
      };
    });
    setStars(generatedStars);
  }, []);

  if (!visible) return null;

  return (
    <div className="discount-banner-wrapper">
      {/* Warp-Stars */}
      <div className="starfield">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              '--dx': star.dx,
              '--dy': star.dy,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Inhalt */}
      <div className="discount-banner">
        <p className="discount-title">
          <span className="moon-wrapper">
            <span className="moon">{moonEmojis[emojiIndex]}</span>
          </span>
          20% Rabatt bis zum nächsten Vollmond!
        </p>
        {daysLeft !== null && (
          <p className="discount-subtext">
            Nur noch {daysLeft} Tag{daysLeft !== 1 ? 'e' : ''} – gültig bis{' '}
            {nextFullMoon.toLocaleDateString('de-CH')}
          </p>
        )}
      </div>

      {/* Kometenschauer */}
      <div className="comet-rain">
        {comets.map((comet) => (
          <div
            key={comet.id}
            className="comet"
            style={{
              top: comet.top,
              left: comet.left,
              animationDelay: `${comet.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscountBanner;

