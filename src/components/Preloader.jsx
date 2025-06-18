"use client"
import React, { useEffect, useState } from "react";
import "../styles/Preloader.css"; // gleich erstellen
import StarWarp from "./StarWarp";

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500); // Dauer in ms
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader">
         <StarWarp />
      <div className="loader-content">
        <span className="moon-wrapper">
      <span className="moon1">🌕</span>
    </span>
        <p className="load">brainbloom lädt …</p>
      </div>
    </div>
  );
};

export default Preloader;
