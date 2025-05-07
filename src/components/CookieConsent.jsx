'use client';
import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-white text-black shadow-xl border border-gray-300 rounded-xl p-4 z-50 max-w-2xl mx-auto">
      <p className="text-sm">
      🍪Diese Website verwendet Cookies, um die Nutzerfreundlichkeit zu verbessern. Mit der Nutzung erklärst du dich damit einverstanden.🍪
      </p>
      <div className="mt-3 text-right">
        <button
          onClick={acceptCookies}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 text-sm"
        >
          Einverstanden
        </button>
      </div>
    </div>
  );
}
