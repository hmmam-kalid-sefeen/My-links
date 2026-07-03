'use client';

import { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    // التأكد من أن السكربت يتم تحميله مرة واحدة
    const scriptId = 'adsterra-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = "https://pl30178671.effectivecpmnetwork.com/b4827f224d08a07b93dc25b2a58a8ff5/invoke.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ minHeight: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div id="container-b4827f224d08a07b93dc25b2a58a8ff5"></div>
    </div>
  );
}
