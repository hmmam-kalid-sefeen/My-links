'use client'; // ضروري لأن الإعلان يتفاعل مع المتصفح

import { useEffect, useRef } from 'react';

export default function AdsterraAd() {
  const adRef = useRef(null);

  useEffect(() => {
    // التأكد من عدم تكرار إضافة السكربت إذا تم تحميل المكون أكثر من مرة
    if (adRef.current && !adRef.current.firstChild) {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = "https://pl30178671.effectivecpmnetwork.com/b4827f224d08a07b93dc25b2a58a8ff5/invoke.js";
      adRef.current.appendChild(script);
    }
  }, []);

  return (
    <div ref={adRef}>
      <div id="container-b4827f224d08a07b93dc25b2a58a8ff5"></div>
    </div>
  );
}
