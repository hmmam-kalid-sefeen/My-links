'use client'; 

import { useEffect, useRef } from 'react';

export default function AdBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    // التأكد من إضافة السكربت مرة واحدة فقط
    if (adRef.current && !adRef.current.firstChild) {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      // تأكد أن هذا الرابط هو نفس الرابط الذي أعطتك إياه Adsterra
      script.src = "https://pl30178671.effectivecpmnetwork.com/b4827f224d08a07b93dc25b2a58a8ff5/invoke.js";
      adRef.current.appendChild(script);
    }
  }, []);

  return (
    <div ref={adRef}>
      {/* تأكد أن هذا الـ id يطابق تماماً ما أعطتك إياه Adsterra */}
      <div id="container-b4827f224d08a07b93dc25b2a58a8ff5"></div>
    </div>
  );
}
