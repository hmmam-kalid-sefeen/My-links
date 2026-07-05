'use client';

import { useEffect } from 'react';

export default function AdContainer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://pl30178671.effectivecpmnetwork.com/b4827f224d08a07b93dc25b2a58a8ff5/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // هنا div الحاوية التي سيظهر فيها الإعلان
  return <div id="container-b4827f224d08a07b93dc25b2a58a8ff5"></div>;
}
