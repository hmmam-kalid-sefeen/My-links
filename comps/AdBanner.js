'use client';

import { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    // هذا الكود يضمن تحميل السكربت في كل مرة يتم فيها تحميل المكون
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = "https://pl30178671.effectivecpmnetwork.com/b4827f224d08a07b93dc25b2a58a8ff5/invoke.js";
    
    // إضافة السكربت إلى الجسم ليتم تنفيذه
    document.body.appendChild(script);

    return () => {
      // تنظيف عند إزالة المكون (اختياري)
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="container-b4827f224d08a07b93dc25b2a58a8ff5"></div>
  );
}
