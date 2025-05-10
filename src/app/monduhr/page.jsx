"use client";


import React, { useState, useEffect } from "react";
import moment from "moment";
import '../../styles/App.css';
const NASA_API_KEY = "YNLRvwxBvXNhxr89m4gs2DXeJp82xQIcHn9KrwqH";

const MoonClock = () => {
  const [selectedDate, setSelectedDate] = useState(moment().format("YYYY-MM-DD"));
  const [moonPhase, setMoonPhase] = useState("🌑");
  const [specialEvent, setSpecialEvent] = useState("");

  useEffect(() => {
    calculateMoonPhase(selectedDate);
  }, [selectedDate]);

  // Funktion zur Berechnung der Mondphase
  const calculateMoonPhase = (date) => {
    const newMoon = moment("2024-03-10"); // Letzter Neumond als Referenzdatum
    const daysSinceNewMoon = moment(date).diff(newMoon, "days") % 29.53;
    
    let phase = "";
    if (daysSinceNewMoon < 1.845) phase = "🌑";
    else if (daysSinceNewMoon < 5.536) phase = "🌒";
    else if (daysSinceNewMoon < 9.228) phase = "🌓";
    else if (daysSinceNewMoon < 12.92) phase = "🌔";
    else if (daysSinceNewMoon < 16.61) phase = "🌕";
    else if (daysSinceNewMoon < 20.3) phase = "🌖";
    else if (daysSinceNewMoon < 24.0) phase = "🌗";
    else if (daysSinceNewMoon < 27.68) phase = "🌘";
    else phase = "🌑"; // Zyklus wiederholt sich

    setMoonPhase(phase);
    setSpecialEvent(checkSpecialEvents(date));
  };

  // Besondere Mondereignisse
  const checkSpecialEvents = (date) => {
    const specialDates = {
      "2024-08-19": "🔵 Blue Moon",
      "2026-08-12": "☀️🌑 Sonnenfinsternis",
      "2029-06-24": "🍓 Erdbeermond",
      "2025-03-14": "🔴 Blutmond",
      "2025-10-17": "🐺 Wolfsmond",
      "2025-09-07": "🔴 Blutmond",
      "2027-02-06": "🌑 Totale Mondfinsternis",
      "2027-08-02": "🌕 Totale Sonnenfinsternis",
      "2028-07-22": "🌑 Totale Mondfinsternis",
      "2029-01-14": "🔴 Blutmond",
      "2030-06-01": "🌔 Partielle Sonnenfinsternis",
      "2031-12-21": "☀️ Totale Sonnenfinsternis",
      "2033-10-17": "🌕 Ringförmige Sonnenfinsternis",
      "2034-03-20": "🔴 Totale Mondfinsternis",
      "2035-09-02": "🌑 Totale Mondfinsternis",
      "2040-08-06": "🌕 Blaue Mondnacht",
      "2045-08-12": "🌞☀️ Längste totale Sonnenfinsternis des Jahrhunderts",
      "2050-05-10": "🔴 Blutmond",
      "2055-11-15": "🌑 Totale Mondfinsternis",
      "2061-07-28": "☄️ Rückkehr des Halleyschen Kometen",
      "2063-04-30": "🌑 Totale Mondfinsternis",
      "2079-09-03": "🌕 Blaue Mondnacht",
      "2084-05-22": "🔴 Totale Mondfinsternis",
      "2090-06-30": "☀️🌑 Totale Sonnenfinsternis",
      "2100-10-20": "🌑 Totale Mondfinsternis",
      "2101-11-17": "🌕 Erdbeermond",
      "2117-12-11": "🔭 Venustransit",
      "2123-09-14": "🔭 Venusbedeckung des Jupiters",
      "2125-12-08": "🔭 Venustransit",
      "2134-06-15": "☄️ Rückkehr des Halleyschen Kometen",
      "2135-10-07": "☀️ Totale Sonnenfinsternis über Deutschland",
      "2142-05-25": "🌑 Totale Sonnenfinsternis (Ruhrgebiet)",
      "2150-06-25": "🌞☀️ 7-minütige totale Sonnenfinsternis",
      "2168-07-05": "🌑 Totale Sonnenfinsternis",
      "2186-07-16": "🌞☀️ Längste totale Sonnenfinsternis aller Zeiten",
      "2200-04-14": "🌑 Totale Sonnenfinsternis über Berlin",
    };
  
    // Wolfsmond: Erster Vollmond im Januar für die nächsten 100 Jahre
    for (let year = 2024; year <= 2124; year++) {
      specialDates[`${year}-01-10`] = "🐺 Wolfsmond"; // Genaue Daten können variieren
    }
  
    // Erdbeermond: Erster Vollmond im Juni für die nächsten 100 Jahre
    for (let year = 2024; year <= 2124; year++) {
      specialDates[`${year}-06-14`] = "🍓 Erdbeermond"; // Genaue Daten können variieren
    }
  
    return specialDates[date] || "";
  };
  
  return (
    <div>
      <h1>Moon Clock</h1>
      <label>
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      </label>
      <div className={specialEvent ? "special-event" : "moon-phase"}>
  {specialEvent || moonPhase}
</div>

    </div>
  );
};

export default MoonClock;
