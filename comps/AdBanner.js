'use client'; // ضروري لأن المكون يعتمد على المتصفح

import { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    // إنشاء سكريبت الإعلان برمجياً
    const script = document.createElement('script');
    script.src = 'https://pl30178671.effectivecpmnetwork.com/b4827f224d08a07b93dc25b2a58a8ff5/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    
    // إضافة السكريبت إلى المكون
    const container = document.getElementById('container-b4827f224d08a07b93dc25b2a58a8ff5');
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div id="container-b4827f224d08a07b93dc25b2a58a8ff5"></div>
  );
}
