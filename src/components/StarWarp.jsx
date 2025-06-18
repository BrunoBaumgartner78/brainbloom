import React, { useEffect, useState } from "react";
import "../styles/StarWarp.css";

const StarWarp = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const count = 120;
    const newStars = Array.from({ length: count }).map((_, i) => {
      const angle = Math.random() * 2 * Math.PI;
      const distance = 300 + Math.random() * 200; // max Radius
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      const duration = 1.5 + Math.random(); // seconds

      return { id: i, x, y, duration };
    });

    setStars(newStars);
  }, []);

  return (
    <div className="star-warp">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            transform: `translate(0, 0)`,
            animation: `warpMove ${star.duration}s linear infinite`,
            "--x": `${star.x}px`,
            "--y": `${star.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default StarWarp;
