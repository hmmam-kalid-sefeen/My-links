'use client';

import { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    // إنشاء عنصر السكربت الجديد
    const script = document.createElement('script');
    script.src = "https://pl30178732.effectivecpmnetwork.com/2d/3d/9f/2d3d9f0b7f719096190c7aa0db3a588d.js";
    script.async = true;

    // إضافة السكربت إلى جسم الصفحة ليتم تنفيذه
    document.body.appendChild(script);

    // تنظيف السكربت عند إزالة المكون (اختياري)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // بما أن هذا النوع من الإعلانات لا يحتاج لـ div معين، نرجع null أو حاوية فارغة
  return null;
}
